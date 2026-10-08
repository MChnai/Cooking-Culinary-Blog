namespace CulinaryBlog.Application.Common.Interfaces;

public interface IFileCleanupService
{
    Task DeleteRecipeImagesAsync(List<string> imagePaths, CancellationToken cancellationToken = default);
}