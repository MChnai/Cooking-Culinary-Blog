namespace CulinaryBlog.Infrastructure.Storage;

public class MinioOptions
{
    public const string SectionName = "Minio";

    public string Endpoint { get; set; } = string.Empty;
    public string AccessKey { get; set; } = string.Empty;
    public string SecretKey { get; set; } = string.Empty;
    public string DefaultBucket { get; set; } = "culinary-blog";
    public bool UseSSL { get; set; } = false;
    public string CustomDomain { get; set; } = string.Empty; // Phục vụ CDN/Public URL
}