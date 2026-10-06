using CulinaryBlog.Application.Common.Models;

namespace CulinaryBlog.Application.Features.Categories.DTOs;

public record CategoryDetailDto(
    Guid Id,
    string Name,
    string Slug,
    string? Description,
    PaginatedList<RecipeBriefDto> Recipes
);
