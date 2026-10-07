using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;

namespace CulinaryBlog.Application.Features.Categories.Commands.DeleteCategory;

public record DeleteCategoryCommand(Guid Id) : IRequest<Result<bool>>;

public class DeleteCategoryCommandHandler : IRequestHandler<DeleteCategoryCommand, Result<bool>>
{
    private readonly IApplicationDbContext _context;
    private readonly IMemoryCache _cache;
    private readonly ILogger<DeleteCategoryCommandHandler> _logger;

    private const string CategoriesCacheKey = "Categories_List_With_RecipeCount";

    public DeleteCategoryCommandHandler(
        IApplicationDbContext context,
        IMemoryCache cache,
        ILogger<DeleteCategoryCommandHandler> logger)
    {
        _context = context;
        _cache = cache;
        _logger = logger;
    }

    public async Task<Result<bool>> Handle(DeleteCategoryCommand request, CancellationToken cancellationToken)
    {
        // 1. Tìm danh mục cần xóa
        var category = await _context.Categories
            .FirstOrDefaultAsync(c => c.Id == request.Id && !c.IsDeleted, cancellationToken);

        if (category is null)
        {
            return Result<bool>.Failure("CATEGORY_NOT_FOUND", $"Category with ID {request.Id} was not found.");
        }

        // 2. Kiểm tra điều kiện: Danh mục không còn chứa công thức nào
        var hasRecipes = await _context.Recipes
            .AnyAsync(r => r.CategoryId == request.Id && !r.IsDeleted, cancellationToken);

        if (hasRecipes)
        {
            return Result<bool>.Failure(
                "CATEGORY_HAS_RECIPES", 
                "Cannot delete category because it still contains recipes. Please reassign or delete the recipes first."
            );
        }

        // 3. Thực hiện Soft Delete (hoặc _context.Categories.Remove(category) nếu dùng Hard Delete)
        category.IsDeleted = true;
        category.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync(cancellationToken);

        // 4. Invalidate Cache
        _cache.Remove(CategoriesCacheKey);
        _logger.LogInformation("Invalidated cache key: {CacheKey} after deleting category ID: {CategoryId}.", CategoriesCacheKey, request.Id);

        return Result<bool>.Success(true);
    }
}