using CulinaryBlog.API.Endpoints;
using Scalar.AspNetCore;
using CulinaryBlog.Application;
using CulinaryBlog.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

// 1. Đăng ký Dịch vụ OpenApi của ASP.NET Core
builder.Services.AddOpenApi();
builder.Services.AddInfrastructure(builder.Configuration);
builder.Services.AddHttpContextAccessor();
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
var authGroup = app.MapGroup("/api/auth");
authGroup.MapAuthEndpoints();

app.Run();