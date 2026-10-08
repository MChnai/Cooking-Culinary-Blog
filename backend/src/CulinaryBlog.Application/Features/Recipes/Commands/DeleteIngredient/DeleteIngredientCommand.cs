using CulinaryBlog.Application.Common.Models;
using MediatR;
using System.Security.Claims;

namespace CulinaryBlog.Application.Features.Recipes.Commands.DeleteIngredient;

public record DeleteIngredientCommand : IRequest<Result<bool>>
{
    public Guid RecipeId { get; init; }
    public Guid IngredientId { get; init; }
    public ClaimsPrincipal CurrentUser { get; init; } = default!;
}