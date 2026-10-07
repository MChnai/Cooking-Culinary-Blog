namespace CulinaryBlog.Application.Features.Recipes.DTOs;

public class RecipeDetailDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? Instructions { get; set; }
    public string? Notes { get; set; }

    public int PrepTimeMinutes { get; set; }
    public int CookTimeMinutes { get; set; }
    public int TotalTimeMinutes => PrepTimeMinutes + CookTimeMinutes;
    public int Servings { get; set; }
    public int Difficulty { get; set; }
    public int Status { get; set; }

    public DateTime? PublishedAt { get; set; }
    public DateTime CreatedAt { get; set; }
    public int ViewCount { get; set; }
    public double RatingAverage { get; set; }
    public int RatingCount { get; set; }

    // Category Info
    public Guid CategoryId { get; set; }
    public string CategoryName { get; set; } = string.Empty;

    // Author Info
    public Guid AuthorId { get; set; }
    public string AuthorName { get; set; } = string.Empty;

    // Value Object
    public RecipeNutritionDto? Nutrition { get; set; }

    // Collections
    public List<RecipeIngredientDto> Ingredients { get; set; } = new();
    public List<RecipeStepDto> Steps { get; set; } = new();
    public List<RecipeImageDto> Images { get; set; } = new();
}

public record RecipeNutritionDto(
    int? Calories,
    decimal? FatGrams,
    decimal? CarbohydratesGrams,
    decimal? ProteinGrams,
    decimal? FiberGrams,
    decimal? SugarGrams
);