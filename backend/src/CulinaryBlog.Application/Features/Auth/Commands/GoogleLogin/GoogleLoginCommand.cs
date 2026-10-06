using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Auth.DTOs;
using CulinaryBlog.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace CulinaryBlog.Application.Features.Auth.Commands.GoogleLogin;

public record GoogleLoginCommand(
    string ProviderKey,
    string Email,
    string FullName,
    string? AvatarUrl
) : IRequest<Result<AuthResponseDto>>;

public class GoogleLoginCommandHandler : IRequestHandler<GoogleLoginCommand, Result<AuthResponseDto>>
{
    private readonly IApplicationDbContext _context;
    private readonly IJwtService _jwtService;
    private readonly ILogger<GoogleLoginCommandHandler> _logger;

    public GoogleLoginCommandHandler(
        IApplicationDbContext context,
        IJwtService jwtService,
        ILogger<GoogleLoginCommandHandler> logger)
    {
        _context = context;
        _jwtService = jwtService;
        _logger = logger;
    }

    public async Task<Result<AuthResponseDto>> Handle(GoogleLoginCommand request, CancellationToken cancellationToken)
    {
        if (string.IsNullOrWhiteSpace(request.Email))
        {
            return Result<AuthResponseDto>.Failure(
                "INVALID_GOOGLE_PROFILE",
                "Google profile does not contain a verified email address.");
        }

        var normalizedEmail = request.Email.Trim().ToLowerInvariant();

        // 6. Find user by Google provider key or email
        var user = await _context.Users
            .FirstOrDefaultAsync(u => (u.GoogleProviderKey == request.ProviderKey || u.Email == normalizedEmail) && !u.IsDeleted, cancellationToken);

        if (user == null)
        {
            // 7. First-time Google login: auto-register with role "Author"
            var baseUsername = normalizedEmail.Split('@')[0];
            var safeUsername = baseUsername.Replace(".", "_").Replace("-", "_");

            // Ensure username uniqueness
            var usernameCandidate = safeUsername;
            var counter = 1;
            while (await _context.Users.AnyAsync(u => u.Username == usernameCandidate, cancellationToken))
            {
                usernameCandidate = $"{safeUsername}_{counter++}";
            }

            user = ApplicationUser.Create(
                string.IsNullOrWhiteSpace(request.FullName) ? baseUsername : request.FullName.Trim(),
                normalizedEmail,
                usernameCandidate,
                "Author"
            );
            user.AvatarUrl = request.AvatarUrl;
            user.GoogleProviderKey = request.ProviderKey;

            _context.Users.Add(user);
            _logger.LogInformation("Provisioned new user {Email} via Google OAuth 2.0 with role Author", user.Email);
        }
        else
        {
            // 8. Link Google login if not already linked
            if (string.IsNullOrEmpty(user.GoogleProviderKey))
            {
                user.GoogleProviderKey = request.ProviderKey;
            }

            if (!string.IsNullOrEmpty(request.AvatarUrl) && string.IsNullOrEmpty(user.AvatarUrl))
            {
                user.AvatarUrl = request.AvatarUrl;
            }
        }

        // 9. Generate tokens
        var roles = new List<string> { user.Role };
        var accessToken = _jwtService.GenerateAccessToken(user, roles);
        var expiresAt = _jwtService.GetAccessTokenExpiration();

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
