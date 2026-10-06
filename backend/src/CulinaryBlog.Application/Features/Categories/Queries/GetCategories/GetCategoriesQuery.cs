using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Categories.DTOs;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;

namespace CulinaryBlog.Application.Features.Categories.Queries.GetCategories;

public record GetCategoriesQuery : IRequest<Result<List<CategoryDto>>>;

public class GetCategoriesQueryHandler : IRequestHandler<GetCategoriesQuery, Result<List<CategoryDto>>>
{
    private readonly IApplicationDbContext _context;
    private readonly IMemoryCache _cache;
    private readonly ILogger<GetCategoriesQueryHandler> _logger;

    private const string CategoriesCacheKey = "Categories_List_With_RecipeCount";
    private static readonly TimeSpan CacheDuration = TimeSpan.FromMinutes(60);

    public GetCategoriesQueryHandler(
        IApplicationDbContext context,
        IMemoryCache cache,
        ILogger<GetCategoriesQueryHandler> logger)
    {
        _context = context;
        _cache = cache;
        _logger = logger;
    }

    public async Task<Result<List<CategoryDto>>> Handle(GetCategoriesQuery request, CancellationToken cancellationToken)
    {
        // 1. Kiểm tra cache
        if (_cache.TryGetValue(CategoriesCacheKey, out List<CategoryDto>? cachedCategories) && cachedCategories != null)
        {
            _logger.LogInformation("Fetch categories from MemoryCache (Key: {CacheKey}).", CategoriesCacheKey);
            return Result<List<CategoryDto>>.Success(cachedCategories);
        }

        // 2. Query database kèm số lượng bài viết/công thức (RecipeCount)
        var categories = await _context.Categories
            .AsNoTracking()
            .Where(c => !c.IsDeleted) // Đảm bảo lọc các category chưa bị xóa mềm
            .OrderBy(c => c.Name)     // 🟢 Sắp xếp theo thuộc tính Name của Entity trước
            .Select(c => new CategoryDto(
                c.Id,
                c.Name,
                c.Slug,
                c.Description,
                c.Recipes.Count(r => !r.IsDeleted) // Đếm số recipe chưa bị xóa
            ))
            .ToListAsync(cancellationToken);

        // 3. Set dữ liệu vào MemoryCache với TTL 60 phút
        var cacheEntryOptions = new MemoryCacheEntryOptions()
            .SetAbsoluteExpiration(CacheDuration);

        _cache.Set(CategoriesCacheKey, categories, cacheEntryOptions);
        _logger.LogInformation("Saved categories list to MemoryCache for 60 minutes.");

        return Result<List<CategoryDto>>.Success(categories);
    }
}