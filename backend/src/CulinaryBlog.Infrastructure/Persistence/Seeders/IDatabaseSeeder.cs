namespace CulinaryBlog.Infrastructure.Persistence.Seeders;

public interface IDatabaseSeeder
{
    Task SeedAsync(CancellationToken cancellationToken = default);
}
