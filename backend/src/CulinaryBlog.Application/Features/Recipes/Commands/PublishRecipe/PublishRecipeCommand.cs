using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Commands.PublishRecipe;

public record PublishRecipeCommand(Guid Id) : IRequest<Result<bool>>;

public class PublishRecipeCommandHandler : IRequestHandler<PublishRecipeCommand, Result<bool>>
{
    private readonly IApplicationDbContext _context;

    public PublishRecipeCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result<bool>> Handle(PublishRecipeCommand request, CancellationToken cancellationToken)
    {
        var recipe = await _context.Recipes
            .FirstOrDefaultAsync(r => r.Id == request.Id && !r.IsDeleted, cancellationToken);

        if (recipe == null)
        {
            return Result<bool>.Failure("RECIPE_NOT_FOUND", $"Recipe with ID {request.Id} was not found.");
        }

        recipe.Publish();
        await _context.SaveChangesAsync(cancellationToken);

        return Result<bool>.Success(true);
    }
}
