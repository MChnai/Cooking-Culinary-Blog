using CulinaryBlog.API.Endpoints;
using CulinaryBlog.Application;
using CulinaryBlog.Infrastructure;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// 1. Đăng ký các dịch vụ hệ thống & Layer Architecture
builder.Services.AddOpenApi();
builder.Services.AddInfrastructure(builder.Configuration);
builder.Services.AddHttpContextAccessor();
builder.Services.AddApplication();

// 2. Đăng ký Dịch vụ Authentication & Authorization
builder.Services.AddAuthentication();
builder.Services.AddAuthorization();

var app = builder.Build();

// 3. Cấu hình Middleware & OpenAPI / Scalar
if (app.Environment.IsDevelopment())
{
    // Map endpoint OpenAPI JSON (/openapi/v1.json)
    app.MapOpenApi();

    // Tích hợp Scalar UI để test API
    app.MapScalarApiReference(options =>
    {
        options.Title = "Culinary Blog API Documentation";
        options.Theme = ScalarTheme.Purple;
        options.WithDefaultHttpClient(ScalarTarget.CSharp, ScalarClient.HttpClient);
    });
}

// 4. Thứ tự Middleware quan trọng
app.UseAuthentication();
app.UseAuthorization();

// 5. Map Endpoints
app.MapAuthEndpoints();        // Map các API Authentication (/api/auth/...)
app.MapHealthCheckEndpoints(); // Map các API Health Check (/api/health/...)

app.Run();