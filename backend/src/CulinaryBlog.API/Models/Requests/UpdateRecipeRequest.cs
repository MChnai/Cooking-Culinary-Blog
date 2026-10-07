using CulinaryBlog.Domain.Enums;

namespace CulinaryBlog.API.Models.Requests;

public record UpdateRecipeRequest
{
    public string Title { get; init; } = string.Empty;
    public string Summary { get; init; } = string.Empty;
    public string Description { get; init; } = string.Empty;
    public int PrepTimeMinutes { get; init; }
    public int CookTimeMinutes { get; init; }
    public int Servings { get; init; }
    public RecipeDifficulty Difficulty { get; init; }
    public Guid CategoryId { get; init; }
}