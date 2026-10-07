using CulinaryBlog.Domain.Enums;

namespace CulinaryBlog.API.Models.Requests;

public record ChangeRecipeStatusRequest
{
    public RecipeStatus Status { get; init; }
}