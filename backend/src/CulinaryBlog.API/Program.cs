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
using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Infrastructure.Services;
using Hangfire; // <-- 1. Thêm directive Hangfire
using Hangfire.InMemory; // <-- Dùng InMemory Storage nhẹ nhàng cho Dev

var builder = WebApplication.CreateBuilder(args);

// Bật ShowPII trong môi trường Development
if (builder.Environment.IsDevelopment())
{
    IdentityModelEventSource.ShowPII = true;
}

// 1. Caching & OpenAPI
builder.Services.AddMemoryCache();
builder.Services.AddOpenApi();

// 2. Cấu hình Hangfire Service & Server (BẮT BUỘC để Inject được IBackgroundJobClient)
builder.Services.AddHangfire(config =>
{
    config.SetDataCompatibilityLevel(CompatibilityLevel.Version_180)
          .UseSimpleAssemblyNameTypeSerializer()
          .UseRecommendedSerializerSettings()
          .UseInMemoryStorage(); // Lưu trữ Job tạm thời trong bộ nhớ RAM
});
builder.Services.AddHangfireServer(); // Worker Process xử lý Job ngầm

// 3. Application & Infrastructure
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
builder.Services.AddScoped<IBackgroundJobService, HangfireJobService>();

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

    // (Tùy chọn) Bật thêm Dashboard riêng của Hangfire để theo dõi các Job xóa file ngầm
    app.UseHangfireDashboard("/hangfire");
}

app.UseAuthentication();
app.UseAuthorization();

// 7. Map Endpoints
app.MapAuthEndpoints();        
app.MapHealthCheckEndpoints(); 
app.MapCategoryEndpoints();
app.MapRecipeEndpoints();

app.Run();