namespace CulinaryBlog.Application.Features.Recipes.DTOs;

public class RecipeListItemDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string? ImageUrl { get; set; }
    public int PrepTimeMinutes { get; set; }
    public int CookTimeMinutes { get; set; }
    public int TotalTimeMinutes => PrepTimeMinutes + CookTimeMinutes;
    public string Difficulty { get; set; } = string.Empty;
    public int ViewCount { get; set; }
    public double RatingAverage { get; set; }
    public int RatingCount { get; set; }
    public Guid CategoryId { get; set; }
    public string CategoryName { get; set; } = string.Empty;
    public Guid AuthorId { get; set; }
    public string AuthorFullName { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}