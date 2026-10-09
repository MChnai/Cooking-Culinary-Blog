using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using MediatR;

namespace CulinaryBlog.Application.Features.Recipes.Queries.GetRecipes;

public record GetRecipesQuery(
    int PageNumber = 1,
    string? Keyword = null,
    int PageSize = 10,
    Guid? CategoryId = null,
    int? Difficulty = null,
    int? MaxTotalTime = null,
    string? SearchTerm = null,
    string? SortBy = "createdAt",
    string? SortDirection = "desc"
) : IRequest<Result<PaginatedList<RecipeDto>>>;
