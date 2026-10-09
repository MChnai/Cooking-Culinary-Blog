namespace CulinaryBlog.Application.Features.Recipes.DTOs;

public class UpdateRecipeStepRequest
{
    public string Instruction { get; set; } = string.Empty;
    public string? ImageUrl { get; set; }
} 