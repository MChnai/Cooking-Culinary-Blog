using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Auth.DTOs;
using CulinaryBlog.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace CulinaryBlog.Application.Features.Auth.Commands.RefreshToken;

public record RefreshTokenCommand(string RefreshToken) : IRequest<Result<AuthResponseDto>>;

public class RefreshTokenCommandHandler : IRequestHandler<RefreshTokenCommand, Result<AuthResponseDto>>
{
    private readonly IApplicationDbContext _context;
    private readonly IJwtService _jwtService;
    private readonly ILogger<RefreshTokenCommandHandler> _logger;

    public RefreshTokenCommandHandler(
        IApplicationDbContext context,
        IJwtService jwtService,
        ILogger<RefreshTokenCommandHandler> logger)
    {
        _context = context;
        _jwtService = jwtService;
        _logger = logger;
    }

    public async Task<Result<AuthResponseDto>> Handle(RefreshTokenCommand request, CancellationToken cancellationToken)
    {
        if (string.IsNullOrWhiteSpace(request.RefreshToken))
        {
            return Result<AuthResponseDto>.Failure("INVALID_TOKEN", "Refresh token cannot be empty.");
        }

        // 3. Find refresh token in database including User
        var token = await _context.RefreshTokens
            .Include(rt => rt.User)
            .FirstOrDefaultAsync(rt => rt.Token == request.RefreshToken.Trim(), cancellationToken);

        // A1: Token not found
        if (token == null)
        {
            return Result<AuthResponseDto>.Failure("INVALID_TOKEN", "Refresh token was not found.");
        }

        // A3: Token already revoked - REUSE ATTACK DETECTED
        if (token.IsRevoked)
        {
            _logger.LogWarning(
                "[SECURITY ALERT] Refresh token reuse detected for User {UserId}! Revoking all descendant tokens for security.",
                token.UserId);

            // Paranoid mode: Invalidate all active tokens for this user
            var activeTokens = await _context.RefreshTokens
                .Where(rt => rt.UserId == token.UserId && !rt.IsRevoked)
                .ToListAsync(cancellationToken);

            foreach (var activeToken in activeTokens)
            {
                activeToken.Revoke("127.0.0.1", "SECURITY_ALERT_REUSE_DETECTED");
            }

            await _context.SaveChangesAsync(cancellationToken);

            return Result<AuthResponseDto>.Failure(
                "TOKEN_REUSE_DETECTED",
                "Refresh token reuse detected. All active sessions have been revoked for your security. Please log in again.");
        }

        // A2: Token expired
        if (token.IsExpired)
        {
            return Result<AuthResponseDto>.Failure("TOKEN_EXPIRED", "Refresh token has expired. Please log in again.");
        }

        // A4: User check
        if (token.User == null || token.User.IsDeleted)
        {
            return Result<AuthResponseDto>.Failure("USER_INACTIVE", "Associated user account is no longer active.");
        }

        // 5. Token Rotation: Mark old token revoked and record replacement
        var newRefreshTokenString = _jwtService.GenerateRefreshToken();
        token.Revoke("127.0.0.1", newRefreshTokenString);

        // 6. Generate new access token
        var roles = new List<string> { token.User.Role };
        var newAccessToken = _jwtService.GenerateAccessToken(token.User, roles);
        var newExpiresAt = _jwtService.GetAccessTokenExpiration();

        // 7. Save new refresh token
        var newRefreshToken = new Domain.Entities.RefreshToken
        {
            UserId = token.UserId,
            User = token.User,
            Token = newRefreshTokenString,
            ExpiresAt = DateTime.UtcNow.AddDays(7),
            CreatedByIp = "127.0.0.1",
            CreatedAt = DateTime.UtcNow
        };

        _context.RefreshTokens.Add(newRefreshToken);
        await _context.SaveChangesAsync(cancellationToken);

        var userDto = new UserDto(
            token.User.Id,
            token.User.FullName,
            token.User.Email,
            token.User.Username,
            token.User.AvatarUrl,
            roles
        );

        return Result<AuthResponseDto>.Success(
            new AuthResponseDto(newAccessToken, newRefreshTokenString, newExpiresAt, userDto)
        );
    }
}
