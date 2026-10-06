using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using CulinaryBlog.Domain.Enums;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Queries.GetRecipes;

public record GetRecipesQuery : IRequest<PaginatedList<RecipeDto>>
{
    public string? Search { get; init; }
    public string? CategorySlug { get; init; }
    public RecipeDifficulty? Difficulty { get; init; }
    public int? MaxCookTimeMinutes { get; init; }
    public RecipeStatus? Status { get; init; } = RecipeStatus.Published;
    public string? SortBy { get; init; } = "newest";
    public int PageNumber { get; init; } = 1;
    public int PageSize { get; init; } = 12;
}

public class GetRecipesQueryHandler : IRequestHandler<GetRecipesQuery, PaginatedList<RecipeDto>>
{
    private readonly IApplicationDbContext _context;

    public GetRecipesQueryHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<PaginatedList<RecipeDto>> Handle(GetRecipesQuery request, CancellationToken cancellationToken)
    {
        var query = _context.Recipes
            .AsNoTracking()
            .Where(r => !r.IsDeleted);

        if (request.Status.HasValue)
        {
            query = query.Where(r => r.Status == request.Status.Value);
        }

        if (!string.IsNullOrWhiteSpace(request.CategorySlug))
        {
            query = query.Where(r => r.Category != null && r.Category.Slug == request.CategorySlug);
        }

        if (request.Difficulty.HasValue)
        {
            query = query.Where(r => r.Difficulty == request.Difficulty.Value);
        }

        if (request.MaxCookTimeMinutes.HasValue && request.MaxCookTimeMinutes.Value > 0)
        {
            query = query.Where(r => r.CookTimeMinutes <= request.MaxCookTimeMinutes.Value);
        }

        if (!string.IsNullOrWhiteSpace(request.Search))
        {
            var term = request.Search.Trim().ToLower();
            query = query.Where(r => r.Title.ToLower().Contains(term) || 
                                     (r.Description != null && r.Description.ToLower().Contains(term)));
        }

        query = request.SortBy?.ToLower() switch
        {
            "oldest" => query.OrderBy(r => r.CreatedAt),
            "cook_time_asc" => query.OrderBy(r => r.CookTimeMinutes),
            "cook_time_desc" => query.OrderByDescending(r => r.CookTimeMinutes),
            "title_asc" => query.OrderBy(r => r.Title),
            "title_desc" => query.OrderByDescending(r => r.Title),
            "views" => query.OrderByDescending(r => r.ViewCount),
            _ => query.OrderByDescending(r => r.PublishedAt ?? r.CreatedAt)
        };

        var totalCount = await query.CountAsync(cancellationToken);

        var items = await query
            .Skip((request.PageNumber - 1) * request.PageSize)
            .Take(request.PageSize)
            .Select(r => new RecipeDto
            {
                Id = r.Id,
                Title = r.Title,
                Slug = r.Slug,
                Description = r.Description,
                PrepTimeMinutes = r.PrepTimeMinutes,
                CookTimeMinutes = r.CookTimeMinutes,
                Servings = r.Servings,
                Difficulty = r.Difficulty,
                Status = r.Status,
                PublishedAt = r.PublishedAt,
                ViewCount = r.ViewCount,
                RatingAverage = r.RatingAverage,
                RatingCount = r.RatingCount,
                CategoryId = r.CategoryId,
                CategoryName = r.Category != null ? r.Category.Name : null,
                CategorySlug = r.Category != null ? r.Category.Slug : null,
                AuthorId = r.AuthorId,
                AuthorName = r.Author != null ? r.Author.FullName : null,
                PrimaryImageUrl = r.Images.Where(i => i.IsPrimary).Select(i => i.OriginalUrl).FirstOrDefault() 
                                  ?? r.Images.Select(i => i.OriginalUrl).FirstOrDefault(),
                Nutrition = r.Nutrition
            })
            .ToListAsync(cancellationToken);

        return new PaginatedList<RecipeDto>(items, totalCount, request.PageNumber, request.PageSize);
    }
}
