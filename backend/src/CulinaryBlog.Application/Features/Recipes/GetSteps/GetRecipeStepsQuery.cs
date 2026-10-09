using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Queries.GetSteps;

public record GetRecipeStepsQuery(Guid RecipeId) : IRequest<Result<List<RecipeStepDto>>>;

public class GetRecipeStepsQueryHandler : IRequestHandler<GetRecipeStepsQuery, Result<List<RecipeStepDto>>>
{
    private readonly IApplicationDbContext _context;

    public GetRecipeStepsQueryHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result<List<RecipeStepDto>>> Handle(GetRecipeStepsQuery request, CancellationToken cancellationToken)
    {
        var recipeExists = await _context.Recipes.AnyAsync(r => r.Id == request.RecipeId, cancellationToken);
        if (!recipeExists)
            return Result<List<RecipeStepDto>>.Failure("NOT_FOUND", $"Không tìm thấy công thức với Id: {request.RecipeId}");

        var steps = await _context.RecipeSteps
            .AsNoTracking()
            .Where(s => s.RecipeId == request.RecipeId)
            .OrderBy(s => s.StepNumber)
            .Select(s => new RecipeStepDto
            {
                Id = s.Id,
                RecipeId = s.RecipeId,
                StepNumber = s.StepNumber,
                Instruction = s.Description, // Map từ Description trong Entity sang Instruction DTO
                ImageUrl = s.ImageUrl
            })
            .ToListAsync(cancellationToken);

        return Result<List<RecipeStepDto>>.Success(steps);
    }
}