using FluentValidation;

namespace CulinaryBlog.Application.Features.Recipes.Commands.CreateRecipe;

public class CreateRecipeCommandValidator : AbstractValidator<CreateRecipeCommand>
{
    public CreateRecipeCommandValidator()
    {
        RuleFor(x => x.Title)
            .NotEmpty().WithMessage("Recipe title is required.")
            .MaximumLength(200).WithMessage("Title must not exceed 200 characters.");

        RuleFor(x => x.PrepTimeMinutes)
            .GreaterThanOrEqualTo(0).WithMessage("Prep time cannot be negative.");

        RuleFor(x => x.CookTimeMinutes)
            .GreaterThanOrEqualTo(0).WithMessage("Cook time cannot be negative.");

        RuleFor(x => x.Servings)
            .GreaterThan(0).WithMessage("Servings must be at least 1.");

        RuleFor(x => x.CategoryId)
            .NotEmpty().WithMessage("Category ID is required.");

        RuleForEach(x => x.Ingredients).ChildRules(ingredient =>
        {
            ingredient.RuleFor(i => i.Name).NotEmpty().WithMessage("Ingredient name is required.");
            ingredient.RuleFor(i => i.Quantity).GreaterThan(0).WithMessage("Quantity must be greater than 0.");
        });

        RuleForEach(x => x.Steps).ChildRules(step =>
        {
            step.RuleFor(s => s.StepNumber).GreaterThan(0).WithMessage("Step number must be greater than 0.");
            step.RuleFor(s => s.Title).NotEmpty().WithMessage("Step title is required.");
        });
    }
}