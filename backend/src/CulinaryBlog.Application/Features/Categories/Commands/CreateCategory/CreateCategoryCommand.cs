using CulinaryBlog.Application.Common.Helpers;
using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;

namespace CulinaryBlog.Application.Features.Categories.Commands.CreateCategory;

public record CreateCategoryCommand(
    string Name,
    string? Description
) : IRequest<Result<Guid>>;

public class CreateCategoryCommandHandler : IRequestHandler<CreateCategoryCommand, Result<Guid>>
{
    private readonly IApplicationDbContext _context;
    private readonly IMemoryCache _cache;
    private readonly ILogger<CreateCategoryCommandHandler> _logger;

    private const string CategoriesCacheKey = "Categories_List_With_RecipeCount";

    public CreateCategoryCommandHandler(
        IApplicationDbContext context,
        IMemoryCache cache,
        ILogger<CreateCategoryCommandHandler> logger)
    {
        _context = context;
        _cache = cache;
        _logger = logger;
    }

    public async Task<Result<Guid>> Handle(CreateCategoryCommand request, CancellationToken cancellationToken)
    {
        if (string.IsNullOrWhiteSpace(request.Name))
        {
            return Result<Guid>.Failure("INVALID_NAME", "Category name is required.");
        }

        // 1. Tạo Slug cơ bản từ Name
        var baseSlug = SlugHelper.GenerateSlug(request.Name);
        var slug = baseSlug;
        var counter = 1;

        // 2. Tự động sinh Unique Slug nếu bị trùng
        while (await _context.Categories.AnyAsync(c => c.Slug == slug && !c.IsDeleted, cancellationToken))
        {
            slug = $"{baseSlug}-{counter}";
            counter++;
        }

        // 3. Tạo Entity mới
        var category = new Category
        {
            Id = Guid.NewGuid(),
            Name = request.Name.Trim(),
            Slug = slug,
            Description = request.Description?.Trim(),
            CreatedAt = DateTime.UtcNow
        };

        _context.Categories.Add(category);
        await _context.SaveChangesAsync(cancellationToken);

        // 4. Invalidate Cache danh sách danh mục (FR-CAT-001)
        _cache.Remove(CategoriesCacheKey);
        _logger.LogInformation("Invalidated cache key: {CacheKey} after creating new category.", CategoriesCacheKey);

        return Result<Guid>.Success(category.Id);
    }
}