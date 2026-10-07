namespace CulinaryBlog.Application.Common.Interfaces;

public interface IFileStorageService
{
    Task DeleteFileAsync(string filePath, CancellationToken cancellationToken = default);
}