namespace CulinaryBlog.Application.Features.Auth.DTOs;

public record UserProfileDto(
    Guid Id,
    string FullName,
    string Email,
    string UserName,
    string? AvatarUrl,
    List<string> Roles,
    bool EmailConfirmed,
    DateTime CreatedAt
);
