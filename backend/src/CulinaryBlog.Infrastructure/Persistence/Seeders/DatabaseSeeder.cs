using CulinaryBlog.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace CulinaryBlog.Infrastructure.Persistence.Seeders;

public class DatabaseSeeder : IDatabaseSeeder
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<DatabaseSeeder> _logger;

    public DatabaseSeeder(ApplicationDbContext context, ILogger<DatabaseSeeder> logger)
    {
        _context = context;
        _logger = logger;
    }

    public async Task SeedAsync(CancellationToken cancellationToken = default)
    {
        try
        {
            _logger.LogInformation("Checking database state for seeding...");

            bool hasCategories = await _context.Categories.AnyAsync(cancellationToken);
            bool hasRecipes = await _context.Recipes.AnyAsync(cancellationToken);

            if (hasCategories && hasRecipes)
            {
                _logger.LogInformation("Database is already seeded with categories and recipes. Skipping seed.");
                return;
            }

            _logger.LogInformation("Beginning database seeding (Categories >= 20, Recipes >= 100)...");

            // 1. Seed Categories
            var categories = CulinaryDataGenerator.GenerateCategories();
            foreach (var cat in categories)
            {
                var existing = await _context.Categories.FirstOrDefaultAsync(c => c.Slug == cat.Slug, cancellationToken);
                if (existing == null)
                {
                    await _context.Categories.AddAsync(cat, cancellationToken);
                }
            }
            await _context.SaveChangesAsync(cancellationToken);
            _logger.LogInformation("Successfully seeded {Count} categories.", categories.Count);

            // 2. Seed Users
            var users = CulinaryDataGenerator.GenerateUsers();
            foreach (var user in users)
            {
                var existing = await _context.Users.FirstOrDefaultAsync(u => u.Username == user.Username, cancellationToken);
                if (existing == null)
                {
                    await _context.Users.AddAsync(user, cancellationToken);
                }
            }
            await _context.SaveChangesAsync(cancellationToken);
            _logger.LogInformation("Successfully seeded {Count} users.", users.Count);

            // Fetch tracked users and categories
            var trackedCategories = await _context.Categories.ToListAsync(cancellationToken);
            var trackedUsers = await _context.Users.ToListAsync(cancellationToken);

            // 3. Seed Recipes (100 recipes with >= 10 ingredients and >= 5 steps each)
            var currentRecipeCount = await _context.Recipes.CountAsync(cancellationToken);
            if (currentRecipeCount < 100)
            {
                int needed = 100 - currentRecipeCount;
                _logger.LogInformation("Generating {Needed} recipes...", needed);
                var recipes = CulinaryDataGenerator.GenerateRecipes(trackedCategories, trackedUsers, count: needed);

                await _context.Recipes.AddRangeAsync(recipes, cancellationToken);
                await _context.SaveChangesAsync(cancellationToken);

                _logger.LogInformation("Successfully seeded recipes. Total count in database: {Total}", await _context.Recipes.CountAsync(cancellationToken));
            }

            _logger.LogInformation("Database seeding completed successfully!");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An error occurred while seeding the database.");
            throw;
        }
    }
}
