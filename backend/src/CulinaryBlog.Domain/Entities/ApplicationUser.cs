using CulinaryBlog.Domain.Common;

namespace CulinaryBlog.Domain.Entities;

public class ApplicationUser : BaseEntity
{
    public string Username { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public string Role { get; set; } = "Author"; // "Admin", "Author", "Reader"
    public string? AvatarUrl { get; set; }
    public string? Bio { get; set; }
    public bool EmailConfirmed { get; set; } = true;

    // Lockout & Security
    public int AccessFailedCount { get; set; } = 0;
    public DateTimeOffset? LockoutEnd { get; set; }
    public bool LockoutEnabled { get; set; } = true;

    // External OAuth Providers
    public string? GoogleProviderKey { get; set; }

    public ICollection<Recipe> Recipes { get; set; } = new List<Recipe>();
    public ICollection<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();

    public static ApplicationUser Create(string fullName, string email, string username, string role = "Author")
    {
        return new ApplicationUser
        {
            FullName = fullName,
            Email = email.Trim().ToLowerInvariant(),
            Username = username.Trim().ToLowerInvariant(),
            Role = role,
            CreatedAt = DateTime.UtcNow
        };
    }
}
