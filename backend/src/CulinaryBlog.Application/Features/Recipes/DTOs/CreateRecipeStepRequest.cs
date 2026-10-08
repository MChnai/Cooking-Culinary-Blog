namespace CulinaryBlog.Application.Features.Recipes.DTOs;

public class CreateRecipeStepRequest
{
    public string Instruction { get; set; } = string.Empty;
    public string? ImageUrl { get; set; }
}
