namespace CulinaryBlog.Application.Features.Recipes.DTOs;

public class RecipeSearchResultDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public float RankScore { get; set; }
}