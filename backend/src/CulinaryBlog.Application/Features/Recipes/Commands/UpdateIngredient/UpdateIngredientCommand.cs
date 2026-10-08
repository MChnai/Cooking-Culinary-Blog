using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using MediatR;
using System.Security.Claims;

namespace CulinaryBlog.Application.Features.Recipes.Commands.UpdateIngredient;

public record UpdateIngredientCommand : IRequest<Result<RecipeIngredientDto>>
{
    public Guid RecipeId { get; init; }
    public Guid IngredientId { get; init; }
    public string Name { get; init; } = string.Empty;
    public decimal Quantity { get; init; }
    public string Unit { get; init; } = string.Empty;
    public string? Notes { get; init; }
    public int SortOrder { get; init; }
    public ClaimsPrincipal CurrentUser { get; init; } = default!;
}