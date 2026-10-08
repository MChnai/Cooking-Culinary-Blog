using CulinaryBlog.Application.Common.Interfaces;
using Microsoft.Extensions.Logging;

namespace CulinaryBlog.Infrastructure.Services;

public class FileCleanupService : IFileCleanupService
{
    private readonly IFileStorageService _fileStorageService;
    private readonly ILogger<FileCleanupService> _logger;

    public FileCleanupService(IFileStorageService fileStorageService, ILogger<FileCleanupService> logger)
    {
        _fileStorageService = fileStorageService;
        _logger = logger;
    }

    public async Task DeleteRecipeImagesAsync(List<string> imagePaths, CancellationToken cancellationToken = default)
    {
        foreach (var path in imagePaths)
        {
            if (string.IsNullOrWhiteSpace(path)) continue;

            try
            {
                await _fileStorageService.DeleteFileAsync(path, cancellationToken);
                _logger.LogInformation("Đã xóa file ảnh MinIO thành công: {Path}", path);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Lỗi khi xóa file ảnh MinIO: {Path}", path);
            }
        }
    }
}