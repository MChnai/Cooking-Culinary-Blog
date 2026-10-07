using CulinaryBlog.API.Endpoints;
using CulinaryBlog.Application;
using CulinaryBlog.Infrastructure;
using Scalar.AspNetCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using Microsoft.IdentityModel.Logging;
using System.IdentityModel.Tokens.Jwt;

var builder = WebApplication.CreateBuilder(args);

// Bật ShowPII trong môi trường Development
if (builder.Environment.IsDevelopment())
{
    IdentityModelEventSource.ShowPII = true;
}

// 1. Caching & OpenAPI
builder.Services.AddMemoryCache();
builder.Services.AddOpenApi();

// 2. Application & Infrastructure
builder.Services.AddApplication();
builder.Services.AddInfrastructure(builder.Configuration);

// 4. Cấu hình Authentication & Authorization
var jwtSettings = builder.Configuration.GetSection("Jwt");
var keyString = jwtSettings["Key"] ?? jwtSettings["SecretKey"] 
    ?? throw new InvalidOperationException("JWT Key chưa được cấu hình!");

// Gán KeyId cho SecurityKey trùng khớp với "kid" trong JwtService
var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(keyString))
{
    KeyId = "CulinaryBlogSecretKeyId" 
};

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenHandlers.Clear();
    options.TokenHandlers.Add(new JwtSecurityTokenHandler());

    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtSettings["Issuer"],
        ValidAudience = jwtSettings["Audience"],
        IssuerSigningKey = securityKey,
        RoleClaimType = ClaimTypes.Role
    };
});

builder.Services.AddAuthorization();

var app = builder.Build();

// 5. Scalar UI & Middleware
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference(options =>
    {
        options.Title = "Culinary Blog API Documentation";
        options.Theme = ScalarTheme.Purple;
        options.WithDefaultHttpClient(ScalarTarget.CSharp, ScalarClient.HttpClient);
    });
}

app.UseAuthentication();
app.UseAuthorization();

// 7. Map Endpoints
app.MapAuthEndpoints();        
app.MapHealthCheckEndpoints(); 
app.MapCategoryEndpoints();
app.MapRecipeEndpoints();

app.Run();