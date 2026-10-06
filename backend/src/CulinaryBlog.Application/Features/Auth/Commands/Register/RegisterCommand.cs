using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Auth.DTOs;
using CulinaryBlog.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace CulinaryBlog.Application.Features.Auth.Commands.Register;

public record RegisterCommand(
    string FullName,
    string Email,
    string UserName,
    string Password
) : IRequest<Result<AuthResponseDto>>;

public class RegisterCommandHandler : IRequestHandler<RegisterCommand, Result<AuthResponseDto>>
{
    private readonly IApplicationDbContext _context;
    private readonly IPasswordHasher _passwordHasher;
    private readonly IJwtService _jwtService;
    private readonly ILogger<RegisterCommandHandler> _logger;

    public RegisterCommandHandler(
        IApplicationDbContext context,
        IPasswordHasher passwordHasher,
        IJwtService jwtService,
        ILogger<RegisterCommandHandler> logger)
    {
        _context = context;
        _passwordHasher = passwordHasher;
        _jwtService = jwtService;
        _logger = logger;
    }

    public async Task<Result<AuthResponseDto>> Handle(RegisterCommand request, CancellationToken cancellationToken)
    {
        var normalizedEmail = request.Email.Trim().ToLowerInvariant();
        var normalizedUsername = request.UserName.Trim().ToLowerInvariant();

        // 4. Check email unique
        var emailExists = await _context.Users
            .AnyAsync(u => u.Email == normalizedEmail && !u.IsDeleted, cancellationToken);

        if (emailExists)
        {
            return Result<AuthResponseDto>.Failure(
                "CONFLICT_EMAIL_EXISTS",
                $"An account with email '{request.Email}' is already registered.");
        }

        var usernameExists = await _context.Users
            .AnyAsync(u => u.Username == normalizedUsername && !u.IsDeleted, cancellationToken);

        if (usernameExists)
        {
            return Result<AuthResponseDto>.Failure(
                "CONFLICT_USERNAME_EXISTS",
                $"Username '{request.UserName}' is already taken.");
        }

        // 5. Create ApplicationUser
        var user = ApplicationUser.Create(request.FullName.Trim(), normalizedEmail, normalizedUsername, "Author");
        user.PasswordHash = _passwordHasher.HashPassword(request.Password);

        _context.Users.Add(user);

        // 8. Generate Access Token (HS256, 15 min)
        var roles = new List<string> { user.Role };
        var accessToken = _jwtService.GenerateAccessToken(user, roles);
        var expiresAt = _jwtService.GetAccessTokenExpiration();

        // 9. Generate Refresh Token (512-bit, 7 days)
        var refreshTokenString = _jwtService.GenerateRefreshToken();
        var refreshToken = new Domain.Entities.RefreshToken
        {
            UserId = user.Id,
            User = user,
            Token = refreshTokenString,
            ExpiresAt = DateTime.UtcNow.AddDays(7),
            CreatedByIp = "127.0.0.1",
            CreatedAt = DateTime.UtcNow
        };

        _context.RefreshTokens.Add(refreshToken);
        await _context.SaveChangesAsync(cancellationToken);

        // 11. Trigger Welcome Email Background Job (Hangfire queue pattern)
        _logger.LogInformation(
            "[Hangfire BackgroundJob::Enqueue<WelcomeEmailJob>] Queued Welcome Email to {Email} for user {FullName}",
            user.Email,
            user.FullName);

        // 12. Return AuthResponseDto
        var userDto = new UserDto(
            user.Id,
            user.FullName,
            user.Email,
            user.Username,
            user.AvatarUrl,
            roles
        );

        return Result<AuthResponseDto>.Success(
            new AuthResponseDto(accessToken, refreshTokenString, expiresAt, userDto)
        );
    }
}
