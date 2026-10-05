using CulinaryBlog.API.Endpoints;
using Scalar.AspNetCore;
using CulinaryBlog.Application;
using CulinaryBlog.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

// 1. Đăng ký Dịch vụ OpenApi của ASP.NET Core
builder.Services.AddOpenApi();
builder.Services.AddInfrastructure(builder.Configuration);
builder.Services.AddApplication();

// 2. Đăng ký Dịch vụ Authentication & Authorization (Sửa lỗi tại đây)
builder.Services.AddAuthentication();
builder.Services.AddAuthorization();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    // Map endpoint OpenAPI (.json)
    app.MapOpenApi();

    // Tích hợp giao diện Scalar
    app.MapScalarApiReference(options =>
    {
        options.Title = "Culinary Blog API Document";
        options.Theme = ScalarTheme.Purple;
    });
}

// Lưu ý: Thứ tự Middleware rất quan trọng (Authentication trước, Authorization sau)
app.UseAuthentication();
app.UseAuthorization();

// Map Auth Endpoints
app.MapHealthCheckEndpoints();
app.MapAuthEndpoints();

<<<<<<< HEAD
app.Run();
=======
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
>>>>>>> origin/2312805_TranNgocNhuY_FR-AUTH
