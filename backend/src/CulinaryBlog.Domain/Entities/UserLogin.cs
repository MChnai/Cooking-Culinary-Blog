namespace CulinaryBlog.Domain.Entities;

public class UserLogin
{
    public string LoginProvider { get; set; } = string.Empty; // Ví dụ: "Google"
    public string ProviderKey { get; set; } = string.Empty;   // Google Sub/Id từ Google Token
    public string? ProviderDisplayName { get; set; }

    public Guid UserId { get; set; }
    public ApplicationUser User { get; set; } = null!;
}