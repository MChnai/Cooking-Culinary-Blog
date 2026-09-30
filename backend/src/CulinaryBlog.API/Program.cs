using System.Text;
using CulinaryBlog.API.Endpoints;
using CulinaryBlog.API.Middleware;
using CulinaryBlog.Application;
using CulinaryBlog.Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// 1. Clean Architecture Layers Dependency Injection
builder.Services.AddApplication();
builder.Services.AddInfrastructure(builder.Configuration);

// 2. RFC 7807 Problem Details
builder.Services.AddProblemDetails();

// 3. OpenAPI 3.1 & Scalar Integration (.NET 10 Native OpenAPI)
builder.Services.AddOpenApi();

// 4. In-Memory Caching & Output Caching
builder.Services.AddMemoryCache();

// 5. JWT Authentication & Authorization
var jwtKey = builder.Configuration["Jwt:SecretKey"] ?? "super-secret-key-that-is-at-least-32-chars-long-123456";
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"] ?? "CulinaryBlog.API",
            ValidAudience = builder.Configuration["Jwt:Audience"] ?? "CulinaryBlog.Client",
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey))
        };
    });

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("AdminOnly", policy => policy.RequireRole("Admin"));
    options.AddPolicy("AuthorOrAdmin", policy => policy.RequireRole("Admin", "Author"));
});

// 6. CORS for Frontend Client (Next.js / Vite)
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure Middleware Pipeline
app.UseMiddleware<ExceptionHandlingMiddleware>();

if (app.Environment.IsDevelopment())
{
    // Native OpenAPI route: /openapi/v1.json
    app.MapOpenApi();

    // Scalar Interactive API Reference UI: /scalar/v1
    app.MapScalarApiReference(options =>
    {
        options.WithTitle("Culinary Blog .NET 10 Minimal APIs")
               .WithTheme(ScalarTheme.Moon)
               .WithDefaultHttpClient(ScalarTarget.CSharp, ScalarClient.HttpClient);
    });
}

app.UseCors();
app.UseAuthentication();
app.UseAuthorization();

// Map Minimal APIs Route Groups
var apiV1 = app.MapGroup("/api/v1");

apiV1.MapGroup("/recipes")
     .MapRecipeEndpoints()
     .WithTags("Recipes");

apiV1.MapGroup("/categories")
     .MapCategoryEndpoints()
     .WithTags("Categories");

apiV1.MapGroup("/auth")
     .MapAuthEndpoints()
     .WithTags("Authentication");

// System and Seeding Endpoints
apiV1.MapGroup("/system")
     .MapGet("/status", async (CulinaryBlog.Infrastructure.Persistence.ApplicationDbContext db) =>
     {
         bool canConnect = await db.Database.CanConnectAsync();
         int categoriesCount = canConnect ? await Microsoft.EntityFrameworkCore.EntityFrameworkQueryableExtensions.CountAsync(db.Categories) : 0;
         int recipesCount = canConnect ? await Microsoft.EntityFrameworkCore.EntityFrameworkQueryableExtensions.CountAsync(db.Recipes) : 0;

         return TypedResults.Ok(new
         {  
             databaseConnected = canConnect,
             categoriesCount,
             recipesCount,
             targetRequirements = new
             {
                 categoriesMin = 20,
                 recipesMin = 100,
                 ingredientsPerRecipeMin = 10,
                 stepsPerRecipeMin = 5
             }
         });
     })
     .WithTags("System");

apiV1.MapGroup("/system")
     .MapPost("/seed", async (CulinaryBlog.Infrastructure.Persistence.Seeders.IDatabaseSeeder seeder, CulinaryBlog.Infrastructure.Persistence.ApplicationDbContext db) =>
     {
         if (!await db.Database.CanConnectAsync())
         {
             return Results.Problem("PostgreSQL database is not reachable. Please start postgres via docker-compose up -d.", statusCode: 503);
         }

         await db.Database.MigrateAsync();
         await seeder.SeedAsync();
         return Results.Ok(new { message = "Database successfully seeded with >= 20 categories, >= 100 recipes, >= 10 ingredients and >= 5 steps per recipe." });
     })
     .WithTags("System");

// Health check endpoint
app.MapGet("/health", () => TypedResults.Ok(new
{
    status = "Healthy",
    framework = ".NET 10.0 Minimal APIs",
    database = "PostgreSQL 16",
    timestamp = DateTime.UtcNow
})).WithTags("System");

// Automatic Seeding on Startup when Database is Accessible
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var logger = services.GetRequiredService<ILogger<Program>>();
    try
    {
        var db = services.GetRequiredService<CulinaryBlog.Infrastructure.Persistence.ApplicationDbContext>();
        if (await db.Database.CanConnectAsync())
        {
            logger.LogInformation("Database connection established. Applying migrations and checking seed data...");
            await db.Database.MigrateAsync();
            var seeder = services.GetRequiredService<CulinaryBlog.Infrastructure.Persistence.Seeders.IDatabaseSeeder>();
            await seeder.SeedAsync();
        }
        else
        {
            logger.LogInformation("PostgreSQL container is offline or starting up. Database seeding will run once Docker Postgres is running.");
        }
    }
    catch (Exception ex)
    {
        logger.LogWarning(ex, "Note: PostgreSQL database could not be reached on startup. If running locally, start PostgreSQL via: docker compose up -d");
    }
}

app.Run();
