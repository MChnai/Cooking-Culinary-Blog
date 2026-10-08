namespace CulinaryBlog.Application.Features.Recipes.DTOs;

public class RecipeStepDto
{
    public Guid Id { get; set; }
    public Guid RecipeId { get; set; }
    public int StepNumber { get; set; }
    public string Instruction { get; set; } = string.Empty;
    public string? ImageUrl { get; set; }
}
