using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using MediatR;

namespace CulinaryBlog.Application.Features.Recipes.Queries.SearchRecipes;

public record SearchRecipesQuery(
    string? Keyword,
    int Page = 1,
    int PageSize = 10
) : IRequest<Result<PagedResult<RecipeSearchResultDto>>>;