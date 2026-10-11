using Microsoft.AspNetCore.Http;

namespace CulinaryBlog.Application.Common.Interfaces;

public interface IStorageService
{
    Task<string> UploadFileAsync(IFormFile file, string? bucketName = null, CancellationToken cancellationToken = default);
    Task DeleteFileAsync(string fileName, string? bucketName = null, CancellationToken cancellationToken = default);
}