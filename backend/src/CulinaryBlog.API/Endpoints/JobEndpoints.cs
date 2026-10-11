using CulinaryBlog.Application.Common.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;

namespace CulinaryBlog.API.Endpoints;

public static class JobEndpoints
{
    public static void MapJobEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/jobs")
                       .WithTags("Background Jobs Management")
                       .RequireAuthorization(); // Hoặc .AllowAnonymous() trong quá trình dev test

        // 1. FR-JOB-001 Test: Kích hoạt Fire-and-Forget Welcome Email
        group.MapPost("/welcome-email/trigger", (
            [FromQuery] string email,
            [FromQuery] string username,
            IWelcomeEmailJobService welcomeEmailJobService) =>
        {
            welcomeEmailJobService.EnqueueWelcomeEmail(email, username);
            return Results.Ok(new { message = $"Đã đẩy job gửi email chào mừng tới {email} vào Hangfire queue." });
        })
        .WithName("TriggerWelcomeEmailJob")
        .WithSummary("Test gửi Welcome Email Job (FR-JOB-001)");

        // 2. FR-JOB-002 Test: Kích hoạt Thumbnail Generation Job
        group.MapPost("/thumbnail/trigger", (
            [FromQuery] string fileName,
            [FromQuery] string? bucketName,
            IThumbnailJobService thumbnailJobService) =>
        {
            var targetBucket = bucketName ?? "culinary-blog";
            thumbnailJobService.EnqueueThumbnailJob(fileName, targetBucket);
            return Results.Ok(new { message = $"Đã đẩy job sinh thumbnail cho ảnh '{fileName}' vào Hangfire queue." });
        })
        .WithName("TriggerThumbnailJob")
        .WithSummary("Test sinh Thumbnail Job (FR-JOB-002)");

        // 3. FR-JOB-003 Test: Trigger thủ công Sitemap Generation XML
        group.MapPost("/sitemap/trigger", async (
            ISitemapJobService sitemapJobService,
            CancellationToken cancellationToken) =>
        {
            await sitemapJobService.ExecuteSitemapJobAsync(cancellationToken);
            return Results.Ok(new { message = "Đã thực thi sinh sitemap.xml thành công!" });
        })
        .WithName("TriggerSitemapJob")
        .WithSummary("Test sinh Sitemap XML Job thủ công (FR-JOB-003)");
    }
}