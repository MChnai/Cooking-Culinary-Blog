using CulinaryBlog.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<Recipe> Recipes { get; }
    DbSet<Category> Categories { get; }
    DbSet<RecipeIngredient> RecipeIngredients { get; }
    DbSet<RecipeStep> RecipeSteps { get; }
    DbSet<RecipeImage> RecipeImages { get; }
    DbSet<ApplicationUser> Users { get; }
    DbSet<RefreshToken> RefreshTokens { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
