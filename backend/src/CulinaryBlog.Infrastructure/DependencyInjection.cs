using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Infrastructure.Persistence;
using CulinaryBlog.Infrastructure.Persistence.Seeders;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using CulinaryBlog.Infrastructure.Services;
using Minio;
using CulinaryBlog.Infrastructure.Storage;
using CulinaryBlog.Infrastructure.Jobs;
using CulinaryBlog.Infrastructure.HealthChecks;

using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace CulinaryBlog.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("DefaultConnection") 
                               ?? "Host=localhost;Port=5432;Database=culinaryblog;Username=postgres;Password=postgres";

        var minioOptions = configuration.GetSection(MinioOptions.SectionName).Get<MinioOptions>()!;
            services.Configure<MinioOptions>(configuration.GetSection(MinioOptions.SectionName));

        services.AddDbContext<ApplicationDbContext>(options =>
        {
            options.UseNpgsql(connectionString, npgsqlOptions =>
            {
                npgsqlOptions.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName);
                npgsqlOptions.EnableRetryOnFailure(maxRetryCount: 5, maxRetryDelay: TimeSpan.FromSeconds(30), errorCodesToAdd: null);
            });
        });

        services.AddScoped<IFileStorageService, FileStorageService>();
        services.AddScoped<IApplicationDbContext>(provider => provider.GetRequiredService<ApplicationDbContext>());
        services.AddScoped<IDatabaseSeeder, DatabaseSeeder>();

        services.AddSingleton<IJwtService, Services.JwtService>();
        services.AddSingleton<IPasswordHasher, Services.PasswordHasher>();
        services.AddScoped<IEmailService, EmailService>();
        services.AddScoped<IWelcomeEmailJobService, WelcomeEmailJobService>();

        // Register Minio Client SDK
        services.AddMinio(config =>
        {
            config.WithEndpoint(minioOptions.Endpoint)
                  .WithCredentials(minioOptions.AccessKey, minioOptions.SecretKey)
                  .WithSSL(minioOptions.UseSSL)
                  .Build();
        });

        services.AddScoped<IStorageService, MinioStorageService>();
        services.AddScoped<IThumbnailJobService, ThumbnailJobService>();
        services.AddScoped<SitemapJob>();
        services.AddScoped<ISitemapJobService, SitemapJobService>();

        // FR-OBS-001: Đăng ký Health Checks
        services.AddHealthChecks()
            // Liveness check
            .AddCheck("self", () => HealthCheckResult.Healthy(), tags: new[] { "live" })
            // Readiness checks (DB, Redis, MinIO)
            .AddDbContextCheck<ApplicationDbContext>(
                name: "postgresql",
                failureStatus: HealthStatus.Unhealthy,
                tags: new[] { "ready" })
            .AddRedis(
                redisConnectionString: configuration.GetConnectionString("Redis") ?? "localhost:6379",
                name: "redis",
                failureStatus: HealthStatus.Unhealthy,
                tags: new[] { "ready" })
            .AddCheck<MinioHealthCheck>(
                name: "minio",
                failureStatus: HealthStatus.Unhealthy,
                tags: new[] { "ready" });

        return services;
    }
}
