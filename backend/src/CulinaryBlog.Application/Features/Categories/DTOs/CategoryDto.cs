namespace CulinaryBlog.Application.Features.Categories.DTOs;

public record CategoryDto(
    Guid Id,
    string Name,
    string Slug,
    string? Description,
    int RecipeCount
);