using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using CulinaryBlog.Domain.Enums;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Queries.GetRecipes;

public record GetRecipesQuery(
    int PageNumber = 1,
    int PageSize = 10,
    Guid? CategoryId = null,
    int? Difficulty = null,
    int? MaxTotalTime = null,
    string? SearchTerm = null,
    string? SortBy = "createdAt",
    string? SortDirection = "desc"
) : IRequest<Result<PaginatedList<RecipeDto>>>;

public class GetRecipesQueryHandler : IRequestHandler<GetRecipesQuery, Result<PaginatedList<RecipeDto>>>
{
    private readonly IApplicationDbContext _context;

    public GetRecipesQueryHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result<PaginatedList<RecipeDto>>> Handle(GetRecipesQuery request, CancellationToken cancellationToken)
    {
        // 1. Chỉ lấy các bài viết đã Published và chưa bị xóa (!IsDeleted)
        var query = _context.Recipes
            .AsNoTracking()
            .Where(r => !r.IsDeleted && r.Status == RecipeStatus.Published);

        // 2. Bộ lọc (Filtering)
        if (request.CategoryId.HasValue)
        {
            query = query.Where(r => r.CategoryId == request.CategoryId.Value);
        }

        if (request.Difficulty.HasValue)
        {
            query = query.Where(r => (int)r.Difficulty == request.Difficulty.Value);
        }

        if (request.MaxTotalTime.HasValue)
        {
            query = query.Where(r => (r.PrepTimeMinutes + r.CookTimeMinutes) <= request.MaxTotalTime.Value);
        }

        if (!string.IsNullOrWhiteSpace(request.SearchTerm))
        {
            var term = request.SearchTerm.Trim().ToLower();
            query = query.Where(r => r.Title.ToLower().Contains(term));
        }

        // 3. Sắp xếp (Sorting)
        var isAscending = string.Equals(request.SortDirection, "asc", StringComparison.OrdinalIgnoreCase);

        query = request.SortBy?.ToLower() switch
        {
            "views" => isAscending ? query.OrderBy(r => r.ViewCount) : query.OrderByDescending(r => r.ViewCount),
            "rating" => isAscending ? query.OrderBy(r => r.RatingAverage) : query.OrderByDescending(r => r.RatingAverage),
            "totaltime" => isAscending 
                ? query.OrderBy(r => r.PrepTimeMinutes + r.CookTimeMinutes) 
                : query.OrderByDescending(r => r.PrepTimeMinutes + r.CookTimeMinutes),
            _ => isAscending ? query.OrderBy(r => r.CreatedAt) : query.OrderByDescending(r => r.CreatedAt)
        };

        // 4. Projection sang RecipeDto
        var dtoQuery = query.Select(r => new RecipeDto
        {
            Id = r.Id,
            Title = r.Title,
            Slug = r.Slug,
            Summary = r.Description,
            // Lấy ảnh IsPrimary, nếu không có thì lấy ảnh đầu tiên trong danh sách Images
            CoverImage = r.Images.Where(img => img.IsPrimary)
                            .Select(img => img.OriginalUrl)
                            .FirstOrDefault() 
                         ?? r.Images.Select(img => img.OriginalUrl).FirstOrDefault(),
            PrepTimeMinutes = r.PrepTimeMinutes,
            CookTimeMinutes = r.CookTimeMinutes,
            Difficulty = (int)r.Difficulty,
            ViewCount = r.ViewCount,
            AverageRating = (double)r.RatingAverage,
            CategoryId = r.CategoryId,
            CategoryName = r.Category != null ? r.Category.Name : string.Empty,
            PublishedAt = r.PublishedAt ?? r.CreatedAt
        });

        // 5. Phân trang
        var page = request.PageNumber <= 0 ? 1 : request.PageNumber;
        var size = request.PageSize <= 0 ? 10 : request.PageSize;

        var count = await dtoQuery.CountAsync(cancellationToken);
        var items = await dtoQuery.Skip((page - 1) * size).Take(size).ToListAsync(cancellationToken);

        var paginatedList = new PaginatedList<RecipeDto>(items, count, page, size);

        return Result<PaginatedList<RecipeDto>>.Success(paginatedList);
    }
}