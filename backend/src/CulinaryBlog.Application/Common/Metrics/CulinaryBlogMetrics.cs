using System.Diagnostics.Metrics;

namespace CulinaryBlog.Application.Common.Metrics;

public static class CulinaryBlogMetrics
{
    public const string MeterName = "CulinaryBlog.Metrics";

    private static readonly Meter Meter = new(MeterName, "1.0.0");

    // Custom Counter Metrics
    public static readonly Counter<long> RecipesCreatedCounter = 
        Meter.CreateCounter<long>("culinary_recipes_created_total", "count", "Tổng số bài viết công thức được tạo");

    public static readonly Counter<long> FilesUploadedCounter = 
        Meter.CreateCounter<long>("culinary_files_uploaded_total", "count", "Tổng số tệp được tải lên");

    public static readonly Counter<long> EmailsSentCounter = 
        Meter.CreateCounter<long>("culinary_emails_sent_total", "count", "Tổng số email chào mừng đã gửi");
}