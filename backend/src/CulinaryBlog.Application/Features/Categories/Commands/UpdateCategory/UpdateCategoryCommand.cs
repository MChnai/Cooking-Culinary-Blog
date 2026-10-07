using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;

namespace CulinaryBlog.Application.Features.Categories.Commands.UpdateCategory;

public record UpdateCategoryCommand(
    Guid Id,
    string Name,
    string? Description
) : IRequest<Result<bool>>;

public class UpdateCategoryCommandHandler : IRequestHandler<UpdateCategoryCommand, Result<bool>>
{
    private readonly IApplicationDbContext _context;
    private readonly IMemoryCache _cache;
    private readonly ILogger<UpdateCategoryCommandHandler> _logger;

    private const string CategoriesCacheKey = "Categories_List_With_RecipeCount";

    public UpdateCategoryCommandHandler(
        IApplicationDbContext context,
        IMemoryCache cache,
        ILogger<UpdateCategoryCommandHandler> logger)
    {
        _context = context;
        _cache = cache;
        _logger = logger;
    }

    public async Task<Result<bool>> Handle(UpdateCategoryCommand request, CancellationToken cancellationToken)
    {
        // 1. Kiểm tra validation tên danh mục
        if (string.IsNullOrWhiteSpace(request.Name))
        {
            return Result<bool>.Failure("INVALID_NAME", "Category name is required.");
        }

        // 2. Tìm danh mục cần cập nhật
        var category = await _context.Categories
            .FirstOrDefaultAsync(c => c.Id == request.Id && !c.IsDeleted, cancellationToken);

        if (category is null)
        {
            return Result<bool>.Failure("CATEGORY_NOT_FOUND", $"Category with ID {request.Id} was not found.");
        }

        // 3. Cập nhật Name và Description (BR-SEO-01: Giữ nguyên Slug)
        category.Name = request.Name.Trim();
        category.Description = request.Description?.Trim();
        category.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync(cancellationToken);

        // 4. Invalidate Cache danh sách danh mục (FR-CAT-001)
        _cache.Remove(CategoriesCacheKey);
        _logger.LogInformation("Invalidated cache key: {CacheKey} after updating category ID: {CategoryId}.", CategoriesCacheKey, request.Id);

        return Result<bool>.Success(true);
    }
}