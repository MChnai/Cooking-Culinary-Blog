using CulinaryBlog.Application.Common.Models;
using MediatR;

namespace CulinaryBlog.Application.Features.Recipes.Commands.CreateRecipe;

public record CreateRecipeIngredientDto(
    string Name,
    decimal Quantity,
    string Unit,
    string? Notes,
    int OrderIndex
);

public record CreateRecipeStepDto(
    int StepNumber,
    string Title,
    string Description,
    int? TimerMinutes,
    string? ImageUrl
);

public record CreateRecipeNutritionDto(
    int Calories,
    decimal Fat,
    decimal Carbohydrates,
    decimal Protein,
    decimal Fiber,
    decimal Sugar
);

public record CreateRecipeCommand(
    string Title,
    string? Description,
    string? Instructions,
    string? Notes,
    int PrepTimeMinutes,
    int CookTimeMinutes,
    int Servings,
    int Difficulty,
    Guid CategoryId,
    Guid AuthorId,
    CreateRecipeNutritionDto? Nutrition,
    List<CreateRecipeIngredientDto>? Ingredients,
    List<CreateRecipeStepDto>? Steps
) : IRequest<Result<Guid>>;