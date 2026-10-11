using Microsoft.Extensions.Diagnostics.HealthChecks;
using Minio;

namespace CulinaryBlog.Infrastructure.HealthChecks;

public class MinioHealthCheck : IHealthCheck
{
    private readonly IMinioClient _minioClient;

    public MinioHealthCheck(IMinioClient minioClient)
    {
        _minioClient = minioClient;
    }

    public async Task<HealthCheckResult> CheckHealthAsync(
        HealthCheckContext context,
        CancellationToken cancellationToken = default)
    {
        try
        {
            await _minioClient.ListBucketsAsync(cancellationToken);
            return HealthCheckResult.Healthy("MinIO S3 connection is healthy.");
        }
        catch (Exception ex)
        {
            return HealthCheckResult.Unhealthy("MinIO S3 is unreachable.", ex);
        }
    }
}