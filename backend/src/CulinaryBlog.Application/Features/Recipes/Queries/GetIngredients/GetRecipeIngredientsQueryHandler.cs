using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using MediatR;
using CulinaryBlog.Application.Common.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Queries.GetIngredients;

public class GetRecipeIngredientsQueryHandler 
    : IRequestHandler<GetRecipeIngredientsQuery, Result<List<RecipeIngredientDto>>>
{
    private readonly IApplicationDbContext _context;

    public GetRecipeIngredientsQueryHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result<List<RecipeIngredientDto>>> Handle(
        GetRecipeIngredientsQuery request, 
        CancellationToken cancellationToken)
    {
        var recipeExists = await _context.Recipes
            .AnyAsync(r => r.Id == request.RecipeId, cancellationToken);

        if (!recipeExists)
        {
            return Result<List<RecipeIngredientDto>>.Failure(
                "NOT_FOUND", 
                $"Không tìm thấy công thức với Id: {request.RecipeId}");
        }

        var ingredients = await _context.RecipeIngredients
            .AsNoTracking()
            .Where(ri => ri.RecipeId == request.RecipeId)
            .Select(ri => new RecipeIngredientDto
            {
                Id = ri.Id,
                RecipeId = ri.RecipeId,
                Name = ri.Name,
                Quantity = ri.Quantity,
                Unit = ri.Unit,
                Notes = ri.Notes,
                SortOrder = 0 
            })
            .ToListAsync(cancellationToken);

        return Result<List<RecipeIngredientDto>>.Success(ingredients);
    }
}