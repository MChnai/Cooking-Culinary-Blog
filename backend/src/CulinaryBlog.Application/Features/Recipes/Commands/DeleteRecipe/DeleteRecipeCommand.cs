using System.Security.Claims;
using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Commands.DeleteRecipe;

public record DeleteRecipeCommand(Guid Id, ClaimsPrincipal CurrentUser) : IRequest<Result<Unit>>;

public class DeleteRecipeCommandHandler : IRequestHandler<DeleteRecipeCommand, Result<Unit>>
{
    private readonly IApplicationDbContext _context;
    private readonly IBackgroundJobService _jobService;

    public DeleteRecipeCommandHandler(
        IApplicationDbContext context,
        IBackgroundJobService jobService)
    {
        _context = context;
        _jobService = jobService;
    }

    public async Task<Result<Unit>> Handle(DeleteRecipeCommand request, CancellationToken cancellationToken)
    {
        // Include cả Images và Steps để lấy đầy đủ đường dẫn ảnh cần dọn dẹp
        var recipe = await _context.Recipes
            .Include(r => r.Images)
            .Include(r => r.Steps)
            .FirstOrDefaultAsync(r => r.Id == request.Id, cancellationToken);

        if (recipe == null)
        {
            return Result<Unit>.Failure("NOT_FOUND", $"Không tìm thấy công thức với ID: {request.Id}");
        }

        // 1. Resource-Based Authorization (Chỉ tác giả sở hữu hoặc Admin)
        var userIdClaim = request.CurrentUser.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var isOwner = Guid.TryParse(userIdClaim, out var userId) && recipe.AuthorId == userId;
        var isAdmin = request.CurrentUser.IsInRole("Admin");

        if (!isOwner && !isAdmin)
        {
            return Result<Unit>.Failure("FORBIDDEN", "Bạn không có quyền xóa công thức này.");
        }

        // 2. Thu thập danh sách đường dẫn ảnh cần xóa trên MinIO
        var imagesToDelete = new List<string>();

        // Lấy danh sách ảnh từ collection RecipeImage (dùng OriginalUrl)
        if (recipe.Images != null && recipe.Images.Any())
        {
            var recipeImages = recipe.Images
                .Where(img => !string.IsNullOrWhiteSpace(img.OriginalUrl))
                .Select(img => img.OriginalUrl)
                .ToList();

            imagesToDelete.AddRange(recipeImages);
        }

        // Lấy danh sách ảnh thuộc các bước thực hiện (Step Images)
        if (recipe.Steps != null && recipe.Steps.Any())
        {
            var stepImages = recipe.Steps
                .Where(s => !string.IsNullOrWhiteSpace(s.ImageUrl))
                .Select(s => s.ImageUrl!)
                .ToList();

            imagesToDelete.AddRange(stepImages);
        }

        // 3. Hard Delete công thức khỏi Database (Cascade delete sẽ xóa RecipeImage & RecipeStep)
        _context.Recipes.Remove(recipe);
        await _context.SaveChangesAsync(cancellationToken);

        // 4. Đẩy Background Job (Hangfire) để xóa file thực tế trên MinIO
        if (imagesToDelete.Any())
        {
            _jobService.Enqueue<IFileCleanupService>(
                service => service.DeleteRecipeImagesAsync(imagesToDelete, CancellationToken.None)
            );
        }

        return Result<Unit>.Success(Unit.Value);
    }
}