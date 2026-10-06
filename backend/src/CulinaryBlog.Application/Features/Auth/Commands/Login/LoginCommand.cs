using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Auth.DTOs;
using CulinaryBlog.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace CulinaryBlog.Application.Features.Auth.Commands.Login;

public record LoginCommand(
    string Email,
    string Password
) : IRequest<Result<AuthResponseDto>>;

public class LoginCommandHandler : IRequestHandler<LoginCommand, Result<AuthResponseDto>>
{
    private readonly IApplicationDbContext _context;
    private readonly IPasswordHasher _passwordHasher;
    private readonly IJwtService _jwtService;
    private readonly ILogger<LoginCommandHandler> _logger;

    public LoginCommandHandler(
        IApplicationDbContext context,
        IPasswordHasher passwordHasher,
        IJwtService jwtService,
        ILogger<LoginCommandHandler> logger)
    {
        _context = context;
        _passwordHasher = passwordHasher;
        _jwtService = jwtService;
        _logger = logger;
    }

    public async Task<Result<AuthResponseDto>> Handle(LoginCommand request, CancellationToken cancellationToken)
    {
        var normalizedEmail = request.Email.Trim().ToLowerInvariant();

        // 4. Find user by email
        var user = await _context.Users
            .FirstOrDefaultAsync(u => u.Email == normalizedEmail && !u.IsDeleted, cancellationToken);

        // Anti-User Enumeration: Generic error if user not found
        if (user == null)
        {
            return Result<AuthResponseDto>.Failure(
                "INVALID_CREDENTIALS",
                "Invalid email or password.");
        }

        // 6. Check Lockout
        if (user.LockoutEnabled && user.LockoutEnd.HasValue && user.LockoutEnd.Value > DateTimeOffset.UtcNow)
        {
            var remaining = user.LockoutEnd.Value - DateTimeOffset.UtcNow;
            _logger.LogWarning("Login rejected for locked out account {Email}. Remaining minutes: {Minutes}", user.Email, remaining.TotalMinutes);
            return Result<AuthResponseDto>.Failure(
                "ACCOUNT_LOCKED",
                $"Account is temporarily locked due to multiple failed login attempts. Try again in {Math.Ceiling(remaining.TotalMinutes)} minute(s).");
        }

        // 5. Verify password
        var passwordValid = _passwordHasher.VerifyPassword(request.Password, user.PasswordHash);
        if (!passwordValid)
        {
            user.AccessFailedCount++;
            if (user.AccessFailedCount >= 5)
            {
                user.LockoutEnd = DateTimeOffset.UtcNow.AddMinutes(15);
                _logger.LogWarning("Account {Email} has reached 5 failed attempts and is locked until {LockoutEnd}", user.Email, user.LockoutEnd);
            }

            await _context.SaveChangesAsync(cancellationToken);

            return Result<AuthResponseDto>.Failure(
                "INVALID_CREDENTIALS",
                "Invalid email or password.");
        }

        // 10. Reset AccessFailedCount on successful login
        user.AccessFailedCount = 0;
        user.LockoutEnd = null;

        // 7. Generate Access Token (15 min)
        var roles = new List<string> { user.Role };
        var accessToken = _jwtService.GenerateAccessToken(user, roles);
        var expiresAt = _jwtService.GetAccessTokenExpiration();

        // 8. Generate Refresh Token (7 days)
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
