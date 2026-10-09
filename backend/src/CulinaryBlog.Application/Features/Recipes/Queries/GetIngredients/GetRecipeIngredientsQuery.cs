using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using MediatR;

namespace CulinaryBlog.Application.Features.Recipes.Queries.GetIngredients;

public record GetRecipeIngredientsQuery(Guid RecipeId) : IRequest<Result<List<RecipeIngredientDto>>>;