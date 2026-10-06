using System.Text.RegularExpressions;
using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Domain.Entities;
using CulinaryBlog.Domain.Enums;
using CulinaryBlog.Domain.ValueObjects;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Commands.CreateRecipe;

public record CreateRecipeIngredientCommand(string Name, decimal? Quantity, string? Unit, string? Notes, int OrderIndex);
public record CreateRecipeStepCommand(int StepNumber, string Title, string Description, int? TimerMinutes, string? ImageUrl);
public record CreateRecipeImageCommand(string OriginalUrl, string? ThumbnailUrl, string? AltText, bool IsPrimary, int DisplayOrder);

public record CreateRecipeCommand : IRequest<Result<Guid>>
{
    public string Title { get; init; } = string.Empty;
    public string? Description { get; init; }
    public string? Instructions { get; init; }
    public string? Notes { get; init; }
    public int PrepTimeMinutes { get; init; }
    public int CookTimeMinutes { get; init; }
    public int Servings { get; init; } = 4;
    public RecipeDifficulty Difficulty { get; init; } = RecipeDifficulty.Medium;
    public RecipeStatus Status { get; init; } = RecipeStatus.Draft;
    public Guid CategoryId { get; init; }
    public Guid AuthorId { get; init; }
    public RecipeNutrition? Nutrition { get; init; }
    public List<CreateRecipeIngredientCommand> Ingredients { get; init; } = new();
    public List<CreateRecipeStepCommand> Steps { get; init; } = new();
    public List<CreateRecipeImageCommand> Images { get; init; } = new();
}

public class CreateRecipeCommandHandler : IRequestHandler<CreateRecipeCommand, Result<Guid>>
{
    private readonly IApplicationDbContext _context;

    public CreateRecipeCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result<Guid>> Handle(CreateRecipeCommand request, CancellationToken cancellationToken)
    {
        var categoryExists = await _context.Categories
            .AnyAsync(c => c.Id == request.CategoryId && !c.IsDeleted, cancellationToken);
        if (!categoryExists)
        {
            return Result<Guid>.Failure("CATEGORY_NOT_FOUND", $"Category with ID {request.CategoryId} was not found.");
        }

        var baseSlug = GenerateSlug(request.Title);
        var slug = baseSlug;
        int counter = 1;
        while (await _context.Recipes.AnyAsync(r => r.Slug == slug, cancellationToken))
        {
            slug = $"{baseSlug}-{counter++}";
        }

        var recipe = new Recipe
        {
            Title = request.Title.Trim(),
            Slug = slug,
            Description = request.Description?.Trim(),
            Instructions = request.Instructions?.Trim(),
            Notes = request.Notes?.Trim(),
            PrepTimeMinutes = request.PrepTimeMinutes,
            CookTimeMinutes = request.CookTimeMinutes,
            Servings = request.Servings,
            Difficulty = request.Difficulty,
            Status = request.Status,
            CategoryId = request.CategoryId,
            AuthorId = request.AuthorId,
            Nutrition = request.Nutrition,
            PublishedAt = request.Status == RecipeStatus.Published ? DateTime.UtcNow : null
        };

        foreach (var ing in request.Ingredients)
        {
            recipe.Ingredients.Add(new RecipeIngredient
            {
                Name = ing.Name.Trim(),
                Quantity = ing.Quantity,
                Unit = ing.Unit?.Trim(),
                Notes = ing.Notes?.Trim(),
                OrderIndex = ing.OrderIndex
            });
        }

        foreach (var step in request.Steps)
        {
            recipe.Steps.Add(new RecipeStep
            {
                StepNumber = step.StepNumber,
                Title = step.Title.Trim(),
                Description = step.Description.Trim(),
                TimerMinutes = step.TimerMinutes,
                ImageUrl = step.ImageUrl?.Trim()
            });
        }

        foreach (var img in request.Images)
        {
            recipe.Images.Add(new RecipeImage
            {
                OriginalUrl = img.OriginalUrl.Trim(),
                ThumbnailUrl = img.ThumbnailUrl?.Trim(),
                AltText = img.AltText?.Trim(),
                IsPrimary = img.IsPrimary,
                DisplayOrder = img.DisplayOrder
            });
        }

        _context.Recipes.Add(recipe);
        await _context.SaveChangesAsync(cancellationToken);

        return Result<Guid>.Success(recipe.Id);
    }

    private static string GenerateSlug(string phrase)
    {
        string str = phrase.ToLowerInvariant();
        str = Regex.Replace(str, @"[^a-z0-9\s-]", "");
        str = Regex.Replace(str, @"\s+", " ").Trim();
        str = Regex.Replace(str, @"\s", "-");
        return str;
    }
}
