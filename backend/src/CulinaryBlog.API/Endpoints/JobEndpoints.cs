using CulinaryBlog.Application.Common.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;

namespace CulinaryBlog.API.Endpoints;

public static class JobEndpoints
{
    public static void MapJobEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/jobs")
                       .WithTags("Background Jobs")
                       .RequireAuthorization(policy => policy.RequireRole("Admin"));

        // Trigger sinh Sitemap ngay lập tức
        group.MapPost("/sitemap/trigger", async (
            ISitemapJobService sitemapJobService, 
            CancellationToken cancellationToken) =>
        {
            await sitemapJobService.ExecuteSitemapJobAsync(cancellationToken);
            return Results.Ok(new { message = "Đã kích hoạt sinh file sitemap.xml thành công!" });
        })
        .WithName("TriggerSitemapJob")
        .WithSummary("Kích hoạt sinh Sitemap.xml thủ công (FR-JOB-003)");
    }
}