using System.Security.Claims;
using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using CulinaryBlog.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Commands.AddStep;

public class AddRecipeStepCommand : IRequest<Result<RecipeStepDto>>
{
    public Guid RecipeId { get; set; }
    public string Instruction { get; set; } = string.Empty;
    public string? ImageUrl { get; set; }
    public ClaimsPrincipal CurrentUser { get; set; } = null!;
}

public class AddRecipeStepCommandHandler : IRequestHandler<AddRecipeStepCommand, Result<RecipeStepDto>>
{
    private readonly IApplicationDbContext _context;

    public AddRecipeStepCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result<RecipeStepDto>> Handle(AddRecipeStepCommand request, CancellationToken cancellationToken)
    {
        var recipe = await _context.Recipes
            .FirstOrDefaultAsync(r => r.Id == request.RecipeId, cancellationToken);

        if (recipe == null)
            return Result<RecipeStepDto>.Failure("NOT_FOUND", "Không tìm thấy công thức.");

        var maxStepNumber = await _context.RecipeSteps
            .Where(s => s.RecipeId == request.RecipeId)
            .Select(s => (int?)s.StepNumber)
            .MaxAsync(cancellationToken) ?? 0;

        var step = new RecipeStep
        {
            Id = Guid.NewGuid(),
            RecipeId = request.RecipeId,
            StepNumber = maxStepNumber + 1,
            Description = request.Instruction, // Gán Instruction từ Request vào Description của Entity
            ImageUrl = request.ImageUrl
        };

        _context.RecipeSteps.Add(step);
        await _context.SaveChangesAsync(cancellationToken);

        return Result<RecipeStepDto>.Success(new RecipeStepDto
        {
            Id = step.Id,
            RecipeId = step.RecipeId,
            StepNumber = step.StepNumber,
            Instruction = step.Description,
            ImageUrl = step.ImageUrl
        });
    }
}