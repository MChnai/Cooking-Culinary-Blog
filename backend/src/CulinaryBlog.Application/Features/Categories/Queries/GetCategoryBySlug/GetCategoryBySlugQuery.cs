using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Categories.DTOs;
using CulinaryBlog.Domain.Enums;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Categories.Queries.GetCategoryBySlug;

public record GetCategoryBySlugQuery(
    string Slug,
    int PageNumber = 1,
    int PageSize = 10,
    Guid? CurrentUserId = null
) : IRequest<Result<CategoryDetailDto>>;

public class GetCategoryBySlugQueryHandler : IRequestHandler<GetCategoryBySlugQuery, Result<CategoryDetailDto>>
{
    private readonly IApplicationDbContext _context;

    public GetCategoryBySlugQueryHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result<CategoryDetailDto>> Handle(GetCategoryBySlugQuery request, CancellationToken cancellationToken)
    {
        if (string.IsNullOrWhiteSpace(request.Slug))
        {
            return Result<CategoryDetailDto>.Failure("INVALID_SLUG", "Category slug is required.");
        }

        // 1. Tìm danh mục theo Slug
        var category = await _context.Categories
            .AsNoTracking()
            .FirstOrDefaultAsync(c => c.Slug == request.Slug.Trim() && !c.IsDeleted, cancellationToken);

        if (category == null)
        {
            return Result<CategoryDetailDto>.Failure("CATEGORY_NOT_FOUND", "Category not found.");
        }

        // 2. Query công thức thuộc danh mục
        var recipesQuery = _context.Recipes
            .AsNoTracking()
            .Where(r => r.CategoryId == category.Id && !r.IsDeleted)
            .Where(r => r.Status == RecipeStatus.Published || (request.CurrentUserId.HasValue && r.AuthorId == request.CurrentUserId.Value))
            .OrderByDescending(r => r.CreatedAt);

        // 3. Phân trang
        var totalCount = await recipesQuery.CountAsync(cancellationToken);

        var recipes = await recipesQuery
            .Skip((request.PageNumber - 1) * request.PageSize)
            .Take(request.PageSize)
            .Select(r => new RecipeBriefDto(
                r.Id,
                r.Title,
                r.Slug,
                r.Description,
                r.Images.Select(img => img.OriginalUrl).FirstOrDefault(),
                r.Status.ToString(),
                r.CookTimeMinutes,
                r.CreatedAt,
                r.AuthorId,
                r.Author != null ? r.Author.FullName : "Unknown"
            ))
            .ToListAsync(cancellationToken);

        var paginatedRecipes = new PaginatedList<RecipeBriefDto>(
            recipes,
            totalCount,
            request.PageNumber,
            request.PageSize
        );

        var resultDto = new CategoryDetailDto(
            category.Id,
            category.Name,
            category.Slug,
            category.Description,
            paginatedRecipes
        );

        return Result<CategoryDetailDto>.Success(resultDto);
    }
}