using System.Security.Claims;
using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Commands.DeleteRecipeImage;

public record DeleteRecipeImageCommand(Guid RecipeId, Guid ImageId, ClaimsPrincipal CurrentUser) : IRequest<Result<Unit>>;

public class DeleteRecipeImageCommandHandler : IRequestHandler<DeleteRecipeImageCommand, Result<Unit>>
{
    private readonly IApplicationDbContext _context;
    private readonly IBackgroundJobService _jobService;

    public DeleteRecipeImageCommandHandler(IApplicationDbContext context, IBackgroundJobService jobService)
    {
        _context = context;
        _jobService = jobService;
    }

    public async Task<Result<Unit>> Handle(DeleteRecipeImageCommand request, CancellationToken cancellationToken)
    {
        var recipe = await _context.Recipes
            .Include(r => r.Images)
            .FirstOrDefaultAsync(r => r.Id == request.RecipeId, cancellationToken);

        if (recipe == null)
        {
            return Result<Unit>.Failure("NOT_FOUND", "Không tìm thấy công thức.");
        }

        var userIdClaim = request.CurrentUser.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var isOwner = Guid.TryParse(userIdClaim, out var userId) && recipe.AuthorId == userId;
        var isAdmin = request.CurrentUser.IsInRole("Admin");

        if (!isOwner && !isAdmin)
        {
            return Result<Unit>.Failure("FORBIDDEN", "Bạn không có quyền thực hiện thao tác này.");
        }

        var targetImage = recipe.Images.FirstOrDefault(i => i.Id == request.ImageId);
        if (targetImage == null)
        {
            return Result<Unit>.Failure("NOT_FOUND", "Không tìm thấy ảnh để xóa.");
        }

        var imagePathToDelete = targetImage.OriginalUrl;
        var wasPrimary = targetImage.IsPrimary;

        _context.RecipeImages.Remove(targetImage);

        // Nếu xóa ảnh đại diện, tự động chọn ảnh đầu tiên còn lại làm primary
        if (wasPrimary)
        {
            var nextPrimary = recipe.Images.FirstOrDefault(i => i.Id != request.ImageId);
            if (nextPrimary != null)
            {
                nextPrimary.IsPrimary = true;
            }
        }

        await _context.SaveChangesAsync(cancellationToken);

        // Lên lịch Hangfire xóa file MinIO ngầm
        if (!string.IsNullOrWhiteSpace(imagePathToDelete))
        {
            _jobService.Enqueue<IFileCleanupService>(
                service => service.DeleteRecipeImagesAsync(new List<string> { imagePathToDelete }, CancellationToken.None)
            );
        }

        return Result<Unit>.Success(Unit.Value);
    }
}