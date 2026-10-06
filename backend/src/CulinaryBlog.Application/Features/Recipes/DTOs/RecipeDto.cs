using CulinaryBlog.Domain.Enums;
using CulinaryBlog.Domain.ValueObjects;

namespace CulinaryBlog.Application.Features.Recipes.DTOs;

public record RecipeDto
{
    public Guid Id { get; init; }
    public string Title { get; init; } = string.Empty;
    public string Slug { get; init; } = string.Empty;
    public string? Description { get; init; }
    public string? Instructions { get; init; }
    public int PrepTimeMinutes { get; init; }
    public int CookTimeMinutes { get; init; }
    public int Servings { get; init; }
    public RecipeDifficulty Difficulty { get; init; }
    public RecipeStatus Status { get; init; }
    public DateTime? PublishedAt { get; init; }
    public int ViewCount { get; init; }
    public decimal RatingAverage { get; init; }
    public int RatingCount { get; init; }
    public Guid CategoryId { get; init; }
    public string? CategoryName { get; init; }
    public string? CategorySlug { get; init; }
    public Guid AuthorId { get; init; }
    public string? AuthorName { get; init; }
    public string? PrimaryImageUrl { get; init; }
    public RecipeNutrition? Nutrition { get; init; }
    public List<RecipeIngredientDto> Ingredients { get; init; } = new();
    public List<RecipeStepDto> Steps { get; init; } = new();
    public List<RecipeImageDto> Images { get; init; } = new();
}

public record RecipeIngredientDto(Guid Id, string Name, decimal? Quantity, string? Unit, string? Notes, int OrderIndex);
public record RecipeStepDto(Guid Id, int StepNumber, string Title, string Description, int? TimerMinutes, string? ImageUrl);
public record RecipeImageDto(Guid Id, string OriginalUrl, string? ThumbnailUrl, string? AltText, bool IsPrimary, int DisplayOrder);
