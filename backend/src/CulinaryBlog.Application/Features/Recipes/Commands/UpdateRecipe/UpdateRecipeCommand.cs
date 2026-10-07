using System.Security.Claims;
using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Domain.Entities;
using CulinaryBlog.Domain.Enums;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Commands.UpdateRecipe;

public record UpdateRecipeCommand : IRequest<Result<Unit>>
{
    public Guid Id { get; init; }
    public string Title { get; init; } = string.Empty;
    public string Description { get; init; } = string.Empty;
    public int PrepTimeMinutes { get; init; }
    public int CookTimeMinutes { get; init; }
    public int Servings { get; init; }
    public RecipeDifficulty Difficulty { get; init; }
    public Guid CategoryId { get; init; }
    public uint RowVersion { get; init; } // Đổi kiểu dữ liệu từ byte[] sang uint

    public ClaimsPrincipal CurrentUser { get; init; } = default!;
}

public class UpdateRecipeCommandHandler : IRequestHandler<UpdateRecipeCommand, Result<Unit>>
{
    private readonly IApplicationDbContext _context;

    public UpdateRecipeCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result<Unit>> Handle(UpdateRecipeCommand request, CancellationToken cancellationToken)
    {
        var recipe = await _context.Recipes
            .FirstOrDefaultAsync(r => r.Id == request.Id, cancellationToken);

        if (recipe == null)
        {
            return Result<Unit>.Failure("NotFound", $"Không tìm thấy công thức với ID: {request.Id}");
        }

        // 1. Resource-Based Authorization
        var userIdClaim = request.CurrentUser.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var isOwner = Guid.TryParse(userIdClaim, out var userId) && recipe.AuthorId == userId;
        var isAdmin = request.CurrentUser.IsInRole("Admin");

        if (!isOwner && !isAdmin)
        {
            return Result<Unit>.Failure("Forbidden", "Bạn không có quyền cập nhật công thức này.");
        }

        // 2. Concurrency Control (Gán OriginalValue với kiểu uint)
        if (_context is DbContext dbContext)
        {
            dbContext.Entry(recipe).Property(r => r.RowVersion).OriginalValue = request.RowVersion;
        }

        // 3. Cập nhật các trường
        recipe.Title = request.Title;
        recipe.Description = request.Description;
        recipe.PrepTimeMinutes = request.PrepTimeMinutes;
        recipe.CookTimeMinutes = request.CookTimeMinutes;
        recipe.Servings = request.Servings;
        recipe.Difficulty = request.Difficulty;
        recipe.CategoryId = request.CategoryId;

        try
        {
            await _context.SaveChangesAsync(cancellationToken);
            return Result<Unit>.Success(Unit.Value);
        }
        catch (DbUpdateConcurrencyException)
        {
            return Result<Unit>.Failure("ConcurrencyConflict", "Dữ liệu đã bị thay đổi bởi người dùng khác. Vui lòng tải lại trang và thử lại.");
        }
    }
}