namespace CulinaryBlog.Application.Features.Auth.DTOs;

public record UserDto(
    Guid Id,
    string FullName,
    string Email,
    string UserName,
    string? AvatarUrl,
    List<string> Roles
);
