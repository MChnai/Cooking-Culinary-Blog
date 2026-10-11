using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using CulinaryBlog.API.Endpoints;
using CulinaryBlog.API.Middlewares;
using CulinaryBlog.Application;
using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Infrastructure;
using CulinaryBlog.Infrastructure.Services;
using Hangfire;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;
using Scalar.AspNetCore;
using Serilog;

// 0. Khởi tạo Bootstrap Logger cho giai đoạn App Startup (FR-OBS-002)
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateBootstrapLogger();

try
{
    var builder = WebApplication.CreateBuilder(args);

    // Bật Serilog cho ứng dụng
    builder.Host.UseSerilog((context, services, configuration) => configuration
        .ReadFrom.Configuration(context.Configuration)
        .ReadFrom.Services(services)
        .Enrich.FromLogContext());

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

    // 3. Application & Infrastructure Services
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

    // 5. Middlewares Logging & Tracing Context (FR-OBS-002)
    app.UseMiddleware<CorrelationIdMiddleware>();
    app.UseSerilogRequestLogging();

    // 6. Scalar UI, Swagger & Hangfire Dashboard (Dev Mode)
    if (app.Environment.IsDevelopment())
    {
        app.MapOpenApi();
        app.MapScalarApiReference(options =>
        {
            options.Title = "Culinary Blog API Documentation";
            options.Theme = ScalarTheme.Purple;
            options.WithDefaultHttpClient(ScalarTarget.CSharp, ScalarClient.HttpClient);
        });

        // Dashboard riêng của Hangfire để theo dõi các Job xóa file ngầm
        app.UseHangfireDashboard("/hangfire");
    }

    // 7. Khởi tạo Recurring Cron Jobs (FR-JOB-003)
    using (var scope = app.Services.CreateScope())
    {
        var sitemapJobService = scope.ServiceProvider.GetRequiredService<ISitemapJobService>();
        sitemapJobService.ScheduleRecurringSitemapJob();
    }

    // 8. Auth Middlewares
    app.UseAuthentication();
    app.UseAuthorization();

    // 9. Map Endpoints
    app.MapAuthEndpoints();        
    app.MapHealthCheckEndpoints(); 
    app.MapCategoryEndpoints();
    app.MapRecipeEndpoints();
    app.MapFileEndpoints();
    app.MapJobEndpoints();

    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "Ứng dụng bị dừng đột ngột do lỗi khởi động!");
}
finally
{
    Log.CloseAndFlush();
}