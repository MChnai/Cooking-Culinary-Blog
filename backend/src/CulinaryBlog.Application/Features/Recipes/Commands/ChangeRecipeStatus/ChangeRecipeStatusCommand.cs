using System.Security.Claims;
using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Domain.Enums;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Commands.ChangeRecipeStatus;

public record ChangeRecipeStatusCommand : IRequest<Result<Unit>>
{
    public Guid Id { get; init; }
    public RecipeStatus Status { get; init; }
    public ClaimsPrincipal CurrentUser { get; init; } = default!;
}

public class ChangeRecipeStatusCommandHandler : IRequestHandler<ChangeRecipeStatusCommand, Result<Unit>>
{
    private readonly IApplicationDbContext _context;

    public ChangeRecipeStatusCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result<Unit>> Handle(ChangeRecipeStatusCommand request, CancellationToken cancellationToken)
    {
        var recipe = await _context.Recipes
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
            return Result<Unit>.Failure("FORBIDDEN", "Bạn không có quyền thay đổi trạng thái công thức này.");
        }

        // 2. Business Rule: Không chuyển sang cùng trạng thái hiện tại
        if (recipe.Status == request.Status)
        {
            return Result<Unit>.Failure("NO_CHANGE", $"Công thức đã ở trạng thái {request.Status} rồi.");
        }

        // 3. Business Rule: Chỉ cho phép Publish nếu công thức có ít nhất 1 bước (Step)
        if (request.Status == RecipeStatus.Published)
        {
            if (recipe.Steps == null || !recipe.Steps.Any())
            {
                return Result<Unit>.Failure("INVALID_STATE", "Không thể xuất bản công thức chưa có bước thực hiện (Step) nào.");
            }
            recipe.PublishedAt = DateTime.UtcNow;
        }

        // 4. Cập nhật trạng thái
        recipe.Status = request.Status;
        recipe.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync(cancellationToken);

        return Result<Unit>.Success(Unit.Value);
    }
}