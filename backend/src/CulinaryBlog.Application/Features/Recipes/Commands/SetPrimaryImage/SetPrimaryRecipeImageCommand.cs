using System.Security.Claims;
using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Commands.SetPrimaryImage;

public record SetPrimaryRecipeImageCommand(Guid RecipeId, Guid ImageId, ClaimsPrincipal CurrentUser) : IRequest<Result<Unit>>;

public class SetPrimaryRecipeImageCommandHandler : IRequestHandler<SetPrimaryRecipeImageCommand, Result<Unit>>
{
    private readonly IApplicationDbContext _context;

    public SetPrimaryRecipeImageCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result<Unit>> Handle(SetPrimaryRecipeImageCommand request, CancellationToken cancellationToken)
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
            return Result<Unit>.Failure("NOT_FOUND", "Không tìm thấy ảnh trong công thức này.");
        }

        foreach (var img in recipe.Images)
        {
            img.IsPrimary = (img.Id == request.ImageId);
        }

        await _context.SaveChangesAsync(cancellationToken);
        return Result<Unit>.Success(Unit.Value);
    }
}