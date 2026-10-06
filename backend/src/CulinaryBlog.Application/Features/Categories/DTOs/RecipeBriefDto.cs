using CulinaryBlog.Application.Common.Models;

namespace CulinaryBlog.Application.Features.Categories.DTOs;


public record RecipeBriefDto(
    Guid Id,
    string Title,
    string Slug,
    string? Description,
    string? Images,
    string Status,
    int? CookTimeMinutes,
    DateTime CreatedAt,
    Guid AuthorId,
    string AuthorName
);