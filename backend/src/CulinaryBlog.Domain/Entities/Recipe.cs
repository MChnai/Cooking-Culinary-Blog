using CulinaryBlog.Domain.Common;
using CulinaryBlog.Domain.Enums;
using CulinaryBlog.Domain.ValueObjects;

namespace CulinaryBlog.Domain.Entities;

public class Recipe : BaseEntity
{
    public string Title { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? Instructions { get; set; }
    public string? Notes { get; set; }

    public int PrepTimeMinutes { get; set; }
    public int CookTimeMinutes { get; set; }
    public int Servings { get; set; } = 4;
    public RecipeDifficulty Difficulty { get; set; } = RecipeDifficulty.Medium;
    public RecipeStatus Status { get; set; } = RecipeStatus.Draft;

    public DateTime? PublishedAt { get; set; }
    public int ViewCount { get; set; } = 0;
    public decimal RatingAverage { get; set; } = 0;
    public int RatingCount { get; set; } = 0;

    // Foreign Keys
    public Guid CategoryId { get; set; }
    public Category? Category { get; set; }

    public Guid AuthorId { get; set; }
    public ApplicationUser? Author { get; set; }

    // Owned Entity (DDD Value Object)
    public RecipeNutrition? Nutrition { get; set; }

    // Navigation Collections
    public ICollection<RecipeIngredient> Ingredients { get; set; } = new List<RecipeIngredient>();
    public ICollection<RecipeStep> Steps { get; set; } = new List<RecipeStep>();
    public ICollection<RecipeImage> Images { get; set; } = new List<RecipeImage>();

    public void Publish()
    {
        Status = RecipeStatus.Published;
        PublishedAt = DateTime.UtcNow;
        UpdatedAt = DateTime.UtcNow;
    }

    public void Archive()
    {
        Status = RecipeStatus.Archived;
        UpdatedAt = DateTime.UtcNow;
    }
}
