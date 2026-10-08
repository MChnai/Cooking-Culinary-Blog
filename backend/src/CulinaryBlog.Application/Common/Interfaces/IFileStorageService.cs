namespace CulinaryBlog.Application.Common.Interfaces;

public interface IFileStorageService
{
    Task DeleteFileAsync(string filePath, CancellationToken cancellationToken = default);
    Task<string> UploadFileAsync( Microsoft.AspNetCore.Http.IFormFile file,  string bucketName, CancellationToken cancellationToken = default);
}