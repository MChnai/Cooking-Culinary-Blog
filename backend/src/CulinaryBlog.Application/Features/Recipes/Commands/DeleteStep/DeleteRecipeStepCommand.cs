using System.Security.Claims;
using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Commands.DeleteStep;

public class DeleteRecipeStepCommand : IRequest<Result<Unit>>
{
    public Guid RecipeId { get; set; }
    public Guid StepId { get; set; }
    public ClaimsPrincipal CurrentUser { get; set; } = null!;
}

public class DeleteRecipeStepCommandHandler : IRequestHandler<DeleteRecipeStepCommand, Result<Unit>>
{
    private readonly IApplicationDbContext _context;

    public DeleteRecipeStepCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result<Unit>> Handle(DeleteRecipeStepCommand request, CancellationToken cancellationToken)
    {
        var stepToDelete = await _context.RecipeSteps
            .FirstOrDefaultAsync(s => s.Id == request.StepId && s.RecipeId == request.RecipeId, cancellationToken);

        if (stepToDelete == null)
            return Result<Unit>.Failure("NOT_FOUND", "Không tìm thấy bước thực hiện.");

        var deletedStepNumber = stepToDelete.StepNumber;

        // 1. Xóa bước được chọn
        _context.RecipeSteps.Remove(stepToDelete);

        // 2. Tự động đánh lại số thứ tự (Re-index) cho các bước phía sau
        var subsequentSteps = await _context.RecipeSteps
            .Where(s => s.RecipeId == request.RecipeId && s.StepNumber > deletedStepNumber)
            .ToListAsync(cancellationToken);

        foreach (var step in subsequentSteps)
        {
            step.StepNumber -= 1;
        }

        await _context.SaveChangesAsync(cancellationToken);
        return Result<Unit>.Success(Unit.Value);
    }
}