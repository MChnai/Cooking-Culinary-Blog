using System.Security.Claims;
using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Domain.Enums;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Commands.ArchiveRecipe;

public record ArchiveRecipeCommand : IRequest<Result<Unit>>
{
    public Guid Id { get; init; }
    public bool IsArchived { get; init; }
    public ClaimsPrincipal CurrentUser { get; init; } = default!;
}

public class ArchiveRecipeCommandHandler : IRequestHandler<ArchiveRecipeCommand, Result<Unit>>
{
    private readonly IApplicationDbContext _context;

    public ArchiveRecipeCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result<Unit>> Handle(ArchiveRecipeCommand request, CancellationToken cancellationToken)
    {
        var recipe = await _context.Recipes
            .FirstOrDefaultAsync(r => r.Id == request.Id, cancellationToken);

        if (recipe == null)
        {
            return Result<Unit>.Failure("NOT_FOUND", $"Không tìm thấy công thức với ID: {request.Id}");
        }

        // 1. Resource-Based Authorization (Chỉ Author sở hữu hoặc Admin)
        var userIdClaim = request.CurrentUser.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var isOwner = Guid.TryParse(userIdClaim, out var userId) && recipe.AuthorId == userId;
        var isAdmin = request.CurrentUser.IsInRole("Admin");

        if (!isOwner && !isAdmin)
        {
            return Result<Unit>.Failure("FORBIDDEN", "Bạn không có quyền thay đổi trạng thái lưu trữ của công thức này.");
        }

        // 2. Chuyển đổi trạng thái Archive / Unarchive
        if (request.IsArchived)
        {
            if (recipe.Status == RecipeStatus.Archived)
            {
                return Result<Unit>.Failure("NO_CHANGE", "Công thức đã ở trong danh sách lưu trữ (Archived) rồi.");
            }

            recipe.Status = RecipeStatus.Archived;
        }
        else
        {
            if (recipe.Status != RecipeStatus.Archived)
            {
                return Result<Unit>.Failure("NO_CHANGE", "Công thức hiện không nằm trong danh sách lưu trữ.");
            }

            // Khôi phục về trạng thái Draft khi bỏ Lưu trữ
            recipe.Status = RecipeStatus.Draft;
        }

        recipe.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync(cancellationToken);

        return Result<Unit>.Success(Unit.Value);
    }
}