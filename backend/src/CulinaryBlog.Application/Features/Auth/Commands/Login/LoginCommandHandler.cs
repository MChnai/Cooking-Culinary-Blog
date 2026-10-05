using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.DTOs.Auth;
using CulinaryBlog.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace CulinaryBlog.Application.Features.Auth.Commands.Login;

public record LoginCommand(
    string Email,
    string Password
) : IRequest<Result<AuthResponse>>;

public class LoginCommandHandler : IRequestHandler<LoginCommand, Result<AuthResponse>>
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

    public async Task<Result<AuthResponse>> Handle(LoginCommand request, CancellationToken cancellationToken)
    {
        var normalizedEmail = request.Email.Trim().ToLowerInvariant();

        // 1. Find user by email
        var user = await _context.Users
            .FirstOrDefaultAsync(u => u.Email.ToLower() == normalizedEmail && !u.IsDeleted, cancellationToken);

        if (user == null)
        {
            return Result<AuthResponse>.Failure(
                "INVALID_CREDENTIALS",
                "Invalid email or password.");
        }

        // 2. Check Lockout
        if (user.LockoutEnabled && user.LockoutEnd.HasValue && user.LockoutEnd.Value > DateTimeOffset.UtcNow)
        {
            var remaining = user.LockoutEnd.Value - DateTimeOffset.UtcNow;
            _logger.LogWarning("Login rejected for locked out account {Email}. Remaining minutes: {Minutes}", user.Email, remaining.TotalMinutes);
            return Result<AuthResponse>.Failure(
                "ACCOUNT_LOCKED",
                $"Account is temporarily locked. Try again in {Math.Ceiling(remaining.TotalMinutes)} minute(s).");
        }

        // 3. Verify password
        var passwordValid = _passwordHasher.VerifyPassword(request.Password, user.PasswordHash);
        if (!passwordValid)
        {
            user.AccessFailedCount++;
            if (user.AccessFailedCount >= 5)
            {
                user.LockoutEnd = DateTimeOffset.UtcNow.AddMinutes(15);
                _logger.LogWarning("Account {Email} locked until {LockoutEnd}", user.Email, user.LockoutEnd);
            }

            await _context.SaveChangesAsync(cancellationToken);

            return Result<AuthResponse>.Failure(
                "INVALID_CREDENTIALS",
                "Invalid email or password.");
        }

        // 4. Reset AccessFailedCount on successful login
        user.AccessFailedCount = 0;
        user.LockoutEnd = null;

        // 5. FR-AUTH-002 Token Rotation: Revoke existing active refresh tokens
        var activeTokens = await _context.RefreshTokens
            .Where(rt => rt.UserId == user.Id && !rt.IsRevoked && rt.ExpiresAt > DateTime.UtcNow)
            .ToListAsync(cancellationToken);

        foreach (var activeToken in activeTokens)
        {
            activeToken.Revoke();
        }

        // 6. Generate new Access Token & Refresh Token
        var roles = new List<string> { user.Role };
        var accessToken = _jwtService.GenerateAccessToken(user, roles);
        var refreshTokenString = _jwtService.GenerateRefreshToken();
        var refreshTokenExpiresAt = DateTime.UtcNow.AddDays(7);

        var refreshToken = new CulinaryBlog.Domain.Entities.RefreshToken
        {
            UserId = user.Id,
            User = user,
            Token = refreshTokenString,
            ExpiresAt = refreshTokenExpiresAt,
            CreatedByIp = "127.0.0.1",
            CreatedAt = DateTime.UtcNow
        };

        _context.RefreshTokens.Add(refreshToken);
        await _context.SaveChangesAsync(cancellationToken);

        // 7. Map to AuthResponse DTO
        var response = new AuthResponse(
            user.Id,
            user.Username,
            user.Email,
            user.Role,
            accessToken,
            refreshTokenString,
            refreshTokenExpiresAt
        );

        return Result<AuthResponse>.Success(response);
    }
}