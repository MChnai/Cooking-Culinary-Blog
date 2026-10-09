using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using CulinaryBlog.Domain.Enums;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Queries.SearchRecipes;

public class SearchRecipesQueryHandler : IRequestHandler<SearchRecipesQuery, Result<PaginatedList<RecipeDto>>>
{
    private readonly IApplicationDbContext _context;

    public SearchRecipesQueryHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result<PaginatedList<RecipeDto>>> Handle(SearchRecipesQuery request, CancellationToken cancellationToken)
    {
        var page = request.Page <= 0 ? 1 : request.Page;
        var size = request.PageSize <= 0 ? 10 : request.PageSize;

        if (string.IsNullOrWhiteSpace(request.Keyword))
        {
            return Result<PaginatedList<RecipeDto>>.Success(new PaginatedList<RecipeDto>(new List<RecipeDto>(), 0, page, size));
        }

        var keyword = request.Keyword.Trim();

        // 1. [FR-SRCH-001] Chạy PostgreSQL FTS lấy danh sách ID bài viết khớp từ khóa + điểm rank_score
        var ftsResults = await _context.Database
            .SqlQuery<SearchRecipesRawSqlResult>($"""
                SELECT id AS Id, rank_score AS Rank_Score 
                FROM fn_search_recipes({keyword}, 1000, 0)
            """)
            .ToListAsync(cancellationToken);

        if (!ftsResults.Any())
        {
            return Result<PaginatedList<RecipeDto>>.Success(new PaginatedList<RecipeDto>(new List<RecipeDto>(), 0, page, size));
        }

        var recipeIds = ftsResults.Select(f => f.Id).ToList();

        // 2. [FR-SRCH-002] Khởi tạo query LINQ và áp dụng thêm các bộ lọc (Filtering)
        var query = _context.Recipes
            .AsNoTracking()
            .Where(r => recipeIds.Contains(r.Id) && !r.IsDeleted && r.Status == RecipeStatus.Published);

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

        // 3. Mapping DTO đầy đủ thông tin hiển thị cho Front-End
        var dtoQuery = query.Select(r => new RecipeDto
        {
            Id = r.Id,
            Title = r.Title,
            Slug = r.Slug,
            Summary = r.Description,
            CoverImage = r.Images.Where(img => img.IsPrimary).Select(img => img.OriginalUrl).FirstOrDefault() 
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

        // 4. [FR-SRCH-003] Áp dụng Sắp xếp (Sorting)
        var isAscending = string.Equals(request.SortDirection, "asc", StringComparison.OrdinalIgnoreCase);
        var itemsList = await dtoQuery.ToListAsync(cancellationToken);

        if (string.Equals(request.SortBy, "rank", StringComparison.OrdinalIgnoreCase) || string.IsNullOrWhiteSpace(request.SortBy))
        {
            // Sắp xếp ưu tiên theo điểm độ liên quan (ts_rank) của PostgreSQL FTS
            var rankDict = ftsResults.ToDictionary(f => f.Id, f => f.Rank_Score);
            itemsList = isAscending 
                ? itemsList.OrderBy(x => rankDict.GetValueOrDefault(x.Id, 0f)).ToList()
                : itemsList.OrderByDescending(x => rankDict.GetValueOrDefault(x.Id, 0f)).ToList();
        }
        else
        {
            itemsList = request.SortBy.ToLower() switch
            {
                "views" => isAscending ? itemsList.OrderBy(r => r.ViewCount).ToList() : itemsList.OrderByDescending(r => r.ViewCount).ToList(),
                "rating" => isAscending ? itemsList.OrderBy(r => r.AverageRating).ToList() : itemsList.OrderByDescending(r => r.AverageRating).ToList(),
                "totaltime" => isAscending ? itemsList.OrderBy(r => r.PrepTimeMinutes + r.CookTimeMinutes).ToList() : itemsList.OrderByDescending(r => r.PrepTimeMinutes + r.CookTimeMinutes).ToList(),
                _ => isAscending ? itemsList.OrderBy(r => r.PublishedAt).ToList() : itemsList.OrderByDescending(r => r.PublishedAt).ToList()
            };
        }

        // 5. [FR-SRCH-004] Phân trang (Pagination Metadata)
        var totalCount = itemsList.Count;
        var pagedItems = itemsList.Skip((page - 1) * size).Take(size).ToList();

        var paginatedList = new PaginatedList<RecipeDto>(pagedItems, totalCount, page, size);
        return Result<PaginatedList<RecipeDto>>.Success(paginatedList);
    }
}