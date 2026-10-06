using FluentValidation;

namespace CulinaryBlog.Application.Features.Recipes.Commands.CreateRecipe;

public class CreateRecipeCommandValidator : AbstractValidator<CreateRecipeCommand>
{
    public CreateRecipeCommandValidator()
    {
        RuleFor(v => v.Title)
            .NotEmpty().WithMessage("Recipe title is required.")
            .MaximumLength(255).WithMessage("Recipe title must not exceed 255 characters.")
            .MinimumLength(3).WithMessage("Recipe title must be at least 3 characters.");

        RuleFor(v => v.CategoryId)
            .NotEmpty().WithMessage("Category ID is required.");

        RuleFor(v => v.PrepTimeMinutes)
            .GreaterThanOrEqualTo(0).WithMessage("Prep time must be 0 or greater.");

        RuleFor(v => v.CookTimeMinutes)
            .GreaterThanOrEqualTo(0).WithMessage("Cook time must be 0 or greater.");

        RuleFor(v => v.Servings)
            .InclusiveBetween(1, 100).WithMessage("Servings must be between 1 and 100.");
    }
}
