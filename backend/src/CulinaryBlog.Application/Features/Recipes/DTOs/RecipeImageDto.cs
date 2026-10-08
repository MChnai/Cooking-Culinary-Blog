namespace CulinaryBlog.Application.Features.Recipes.DTOs;

public record RecipeImageDto
{
    public Guid Id { get; init; }
    public string OriginalUrl { get; init; } = string.Empty;
    public string? ThumbnailUrl { get; init; }
    public string? AltText { get; init; }
    public bool IsPrimary { get; init; }
    public int DisplayOrder { get; init; }
}