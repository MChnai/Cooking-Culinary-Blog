using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Queries.GetRecipeById;

public record GetRecipeByIdQuery(Guid Id) : IRequest<RecipeDto?>;

public class GetRecipeByIdQueryHandler : IRequestHandler<GetRecipeByIdQuery, RecipeDto?>
{
    private readonly IApplicationDbContext _context;

    public GetRecipeByIdQueryHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<RecipeDto?> Handle(GetRecipeByIdQuery request, CancellationToken cancellationToken)
    {
        var recipe = await _context.Recipes
            .AsNoTracking()
            .Include(r => r.Category)
            .Include(r => r.Author)
            .Include(r => r.Ingredients.OrderBy(i => i.OrderIndex))
            .Include(r => r.Steps.OrderBy(s => s.StepNumber))
            .Include(r => r.Images.OrderBy(i => i.DisplayOrder))
            .FirstOrDefaultAsync(r => r.Id == request.Id && !r.IsDeleted, cancellationToken);

        if (recipe == null) return null;

        return new RecipeDto
        {
            Id = recipe.Id,
            Title = recipe.Title,
            Slug = recipe.Slug,
            Description = recipe.Description,
            Instructions = recipe.Instructions,
            PrepTimeMinutes = recipe.PrepTimeMinutes,
            CookTimeMinutes = recipe.CookTimeMinutes,
            Servings = recipe.Servings,
            Difficulty = recipe.Difficulty,
            Status = recipe.Status,
            PublishedAt = recipe.PublishedAt,
            ViewCount = recipe.ViewCount,
            RatingAverage = recipe.RatingAverage,
            RatingCount = recipe.RatingCount,
            CategoryId = recipe.CategoryId,
            CategoryName = recipe.Category?.Name,
            CategorySlug = recipe.Category?.Slug,
            AuthorId = recipe.AuthorId,
            AuthorName = recipe.Author?.FullName,
            PrimaryImageUrl = recipe.Images.FirstOrDefault(i => i.IsPrimary)?.OriginalUrl 
                              ?? recipe.Images.FirstOrDefault()?.OriginalUrl,
            Nutrition = recipe.Nutrition,
            Ingredients = recipe.Ingredients.Select(i => new RecipeIngredientDto(
                i.Id, i.Name, i.Quantity, i.Unit, i.Notes, i.OrderIndex)).ToList(),
            Steps = recipe.Steps.Select(s => new RecipeStepDto(
                s.Id, s.StepNumber, s.Title, s.Description, s.TimerMinutes, s.ImageUrl)).ToList(),
            Images = recipe.Images.Select(img => new RecipeImageDto(
                img.Id, img.OriginalUrl, img.ThumbnailUrl, img.AltText, img.IsPrimary, img.DisplayOrder)).ToList()
        };
    }
}
