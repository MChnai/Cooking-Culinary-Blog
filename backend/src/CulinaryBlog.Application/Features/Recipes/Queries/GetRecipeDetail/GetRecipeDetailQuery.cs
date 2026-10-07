using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using CulinaryBlog.Domain.Enums;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Queries.GetRecipeDetail;

public record GetRecipeDetailQuery(
    string Identifier,
    Guid? CurrentUserId = null,
    bool IsAdmin = false
) : IRequest<Result<RecipeDetailDto>>;

public class GetRecipeDetailQueryHandler : IRequestHandler<GetRecipeDetailQuery, Result<RecipeDetailDto>>
{
    private readonly IApplicationDbContext _context;

    public GetRecipeDetailQueryHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result<RecipeDetailDto>> Handle(GetRecipeDetailQuery request, CancellationToken cancellationToken)
    {
        var isGuid = Guid.TryParse(request.Identifier, out var recipeId);

        // Bước 1: Lấy Recipe cơ bản + Category + Author
        var recipe = await _context.Recipes
            .AsNoTracking()
            .Include(r => r.Category)
            .Include(r => r.Author)
            .FirstOrDefaultAsync(
                r => !r.IsDeleted && (isGuid ? r.Id == recipeId : r.Slug == request.Identifier),
                cancellationToken
            );

        if (recipe is null)
        {
            return Result<RecipeDetailDto>.Failure("RECIPE_NOT_FOUND", "Recipe was not found.");
        }

        // Kiểm tra quyền truy cập bài chưa Publish
        if (recipe.Status != RecipeStatus.Published)
        {
            var isAuthor = request.CurrentUserId.HasValue && request.CurrentUserId.Value == recipe.AuthorId;
            if (!isAuthor && !request.IsAdmin)
            {
                return Result<RecipeDetailDto>.Failure("RECIPE_FORBIDDEN", "You do not have permission to view this unpublished recipe.");
            }
        }

        // Bước 2: Truy vấn độc lập các danh sách con theo RecipeId
        var ingredients = await _context.RecipeIngredients
            .AsNoTracking()
            .Where(i => i.RecipeId == recipe.Id)
            .OrderBy(i => i.OrderIndex)
            .ToListAsync(cancellationToken);

        var steps = await _context.RecipeSteps
            .AsNoTracking()
            .Where(s => s.RecipeId == recipe.Id)
            .OrderBy(s => s.StepNumber)
            .ToListAsync(cancellationToken);

        var images = await _context.RecipeImages
            .AsNoTracking()
            .Where(img => img.RecipeId == recipe.Id)
            .OrderBy(img => img.DisplayOrder)
            .ToListAsync(cancellationToken);

        // Bước 3: Mapping sang DTO bằng danh sách vừa lấy
        var detailDto = new RecipeDetailDto
        {
            Id = recipe.Id,
            Title = recipe.Title,
            Slug = recipe.Slug,
            Description = recipe.Description,
            Instructions = recipe.Instructions,
            Notes = recipe.Notes,
            PrepTimeMinutes = recipe.PrepTimeMinutes,
            CookTimeMinutes = recipe.CookTimeMinutes,
            Servings = recipe.Servings,
            Difficulty = (int)recipe.Difficulty,
            Status = (int)recipe.Status,
            PublishedAt = recipe.PublishedAt,
            CreatedAt = recipe.CreatedAt,
            ViewCount = recipe.ViewCount,
            RatingAverage = (double)recipe.RatingAverage,
            RatingCount = recipe.RatingCount,
            CategoryId = recipe.CategoryId,
            CategoryName = recipe.Category != null ? recipe.Category.Name : string.Empty,
            AuthorId = recipe.AuthorId,
            AuthorName = recipe.Author != null ? (recipe.Author.FullName ?? recipe.Author.Email ?? string.Empty) : string.Empty,

            Nutrition = recipe.Nutrition != null ? new RecipeNutritionDto(
                recipe.Nutrition.Calories,
                recipe.Nutrition.Fat,
                recipe.Nutrition.Carbohydrates,
                recipe.Nutrition.Protein,
                recipe.Nutrition.Fiber,
                recipe.Nutrition.Sugar
            ) : null,

            // Sử dụng danh sách trực tiếp từ các query riêng lẻ
            Ingredients = ingredients.Select(i => new RecipeIngredientDto(
                i.Id, i.Name, i.Quantity, i.Unit, i.Notes, i.OrderIndex
            )).ToList(),

            Steps = steps.Select(s => new RecipeStepDto(
                s.Id, s.StepNumber, s.Title, s.Description, s.TimerMinutes, s.ImageUrl
            )).ToList(),

            Images = images.Select(img => new RecipeImageDto(
                img.Id, img.OriginalUrl, img.ThumbnailUrl, img.AltText, img.IsPrimary, img.DisplayOrder
            )).ToList()
        };

        return Result<RecipeDetailDto>.Success(detailDto);
    }
}