using System.Text;
using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Domain.Enums;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace CulinaryBlog.Infrastructure.Jobs;

public class SitemapJob
{
    private readonly IApplicationDbContext _dbContext;
    private readonly IStorageService _storageService;
    private readonly IConfiguration _configuration;
    private readonly ILogger<SitemapJob> _logger;

    public SitemapJob(
        IApplicationDbContext dbContext,
        IStorageService storageService,
        IConfiguration configuration,
        ILogger<SitemapJob> logger)
    {
        _dbContext = dbContext;
        _storageService = storageService;
        _configuration = configuration;
        _logger = logger;
    }

    public async Task ExecuteAsync(CancellationToken cancellationToken = default)
    {
        _logger.LogInformation("Khởi chạy [FR-JOB-003]: Sinh file sitemap.xml phục vụ SEO...");

        var baseUrl = (_configuration["ClientUrl"] ?? "https://culinaryblog.com").TrimEnd('/');

        // 1. Lấy danh sách danh mục
        var categories = await _dbContext.Categories
            .AsNoTracking()
            .Select(c => new { c.Slug })
            .ToListAsync(cancellationToken);

        // 2. Lấy danh sách công thức đang Published
        var recipes = await _dbContext.Recipes
            .AsNoTracking()
            .Where(r => !r.IsDeleted && r.Status == RecipeStatus.Published)
            .Select(r => new { r.Slug, LastMod = r.UpdatedAt ?? r.CreatedAt })
            .ToListAsync(cancellationToken);

        // 3. Xây dựng nội dung XML
        var sb = new StringBuilder();
        sb.AppendLine("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
        sb.AppendLine("<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">");

        // Các trang cố định (Trang chủ, Trang công thức)
        AddUrlNode(sb, $"{baseUrl}/", DateTime.UtcNow, "daily", "1.0");
        AddUrlNode(sb, $"{baseUrl}/recipes", DateTime.UtcNow, "daily", "0.9");

        // Các trang danh mục
        foreach (var category in categories)
        {
            AddUrlNode(sb, $"{baseUrl}/categories/{category.Slug}", DateTime.UtcNow, "weekly", "0.8");
        }

        // Các trang bài viết công thức
        foreach (var recipe in recipes)
        {
            AddUrlNode(sb, $"{baseUrl}/recipes/{recipe.Slug}", recipe.LastMod, "weekly", "0.7");
        }

        sb.AppendLine("</urlset>");

        // 4. Đóng gói chuỗi XML thành Stream để Upload
        var xmlBytes = Encoding.UTF8.GetBytes(sb.ToString());
        using var stream = new MemoryStream(xmlBytes);

        IFormFile sitemapFile = new FormFile(
            baseStream: stream,
            baseStreamOffset: 0,
            length: xmlBytes.Length,
            name: "file",
            fileName: "sitemap.xml"
        )
        {
            Headers = new HeaderDictionary(),
            ContentType = "application/xml"
        };

        // 5. Lưu tệp sitemap.xml lên Storage (Bucket public)
        var sitemapUrl = await _storageService.UploadFileAsync(sitemapFile, "public", cancellationToken);

        _logger.LogInformation("Sinh sitemap.xml thành công ({Count} URLs). URL: {Url}", 
            2 + categories.Count + recipes.Count, sitemapUrl);
    }

    private static void AddUrlNode(StringBuilder sb, string url, DateTime lastMod, string changeFreq, string priority)
    {
        sb.AppendLine("  <url>");
        sb.AppendLine($"    <loc>{XmlEscape(url)}</loc>");
        sb.AppendLine($"    <lastmod>{lastMod:yyyy-MM-dd}</lastmod>");
        sb.AppendLine($"    <changefreq>{changeFreq}</changefreq>");
        sb.AppendLine($"    <priority>{priority}</priority>");
        sb.AppendLine("  </url>");
    }

    private static string XmlEscape(string text)
    {
        return text
            .Replace("&", "&amp;")
            .Replace("<", "&lt;")
            .Replace(">", "&gt;")
            .Replace("\"", "&quot;")
            .Replace("'", "&apos;");
    }
}