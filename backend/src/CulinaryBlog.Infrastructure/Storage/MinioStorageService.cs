using CulinaryBlog.Application.Common.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Minio;
using Minio.DataModel.Args;

namespace CulinaryBlog.Infrastructure.Storage;

public class MinioStorageService : IStorageService
{
    private readonly IMinioClient _minioClient;
    private readonly MinioOptions _options;

    public MinioStorageService(IMinioClient minioClient, IOptions<MinioOptions> options)
    {
        _minioClient = minioClient;
        _options = options.Value;
    }

    public async Task<string> UploadFileAsync(IFormFile file, string? bucketName = null, CancellationToken cancellationToken = default)
    {
        var targetBucket = string.IsNullOrWhiteSpace(bucketName) ? _options.DefaultBucket : bucketName;

        // 1. Kiểm tra Bucket tồn tại, nếu chưa có thì khởi tạo
        var bucketExistsArgs = new BucketExistsArgs().WithBucket(targetBucket);
        bool found = await _minioClient.BucketExistsAsync(bucketExistsArgs, cancellationToken);
        if (!found)
        {
            var makeBucketArgs = new MakeBucketArgs().WithBucket(targetBucket);
            await _minioClient.MakeBucketAsync(makeBucketArgs, cancellationToken);

            // Thiết lập Policy Read-Only công khai cho Bucket
            string policyJson = $$"""
            {
                "Version": "2012-10-17",
                "Statement": [
                    {
                        "Effect": "Allow",
                        "Principal": "*",
                        "Action": ["s3:GetObject"],
                        "Resource": ["arn:aws:s3:::{{targetBucket}}/*"]
                    }
                ]
            }
            """;

            var setPolicyArgs = new SetPolicyArgs().WithBucket(targetBucket).WithPolicy(policyJson);
            await _minioClient.SetPolicyAsync(setPolicyArgs, cancellationToken);
        }

        // 2. Tạo tên file ngẫu nhiên dạng GUID (Yêu cầu FR-FILE-001)
        var fileExtension = Path.GetExtension(file.FileName).ToLowerInvariant();
        var objectName = $"{Guid.NewGuid()}{fileExtension}";

        // 3. Upload Stream lên MinIO
        using var stream = file.OpenReadStream();
        var putObjectArgs = new PutObjectArgs()
            .WithBucket(targetBucket)
            .WithObject(objectName)
            .WithStreamData(stream)
            .WithObjectSize(stream.Length)
            .WithContentType(file.ContentType);

        await _minioClient.PutObjectAsync(putObjectArgs, cancellationToken);

        // 4. Trả về Public URL truy cập file
        if (!string.IsNullOrWhiteSpace(_options.CustomDomain))
        {
            return $"{_options.CustomDomain.TrimEnd('/')}/{targetBucket}/{objectName}";
        }

        var protocol = _options.UseSSL ? "https" : "http";
        return $"{protocol}://{_options.Endpoint}/{targetBucket}/{objectName}";
    }

    public async Task DeleteFileAsync(string fileName, string? bucketName = null, CancellationToken cancellationToken = default)
    {
        var targetBucket = string.IsNullOrWhiteSpace(bucketName) ? _options.DefaultBucket : bucketName;

        var removeObjectArgs = new RemoveObjectArgs()
            .WithBucket(targetBucket)
            .WithObject(fileName);

        await _minioClient.RemoveObjectAsync(removeObjectArgs, cancellationToken);
    }
}