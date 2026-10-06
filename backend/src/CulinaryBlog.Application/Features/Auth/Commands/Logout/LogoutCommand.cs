using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace CulinaryBlog.Application.Features.Auth.Commands.Logout;

public record LogoutCommand(string? RefreshToken, Guid? UserId = null) : IRequest<Result<bool>>;

public class LogoutCommandHandler : IRequestHandler<LogoutCommand, Result<bool>>
{
    private readonly IApplicationDbContext _context;
    private readonly ILogger<LogoutCommandHandler> _logger;

    public LogoutCommandHandler(
        IApplicationDbContext context,
        ILogger<LogoutCommandHandler> logger)
    {
        _context = context;
        _logger = logger;
    }

    public async Task<Result<bool>> Handle(LogoutCommand request, CancellationToken cancellationToken)
    {
        // A1: If no refresh token provided, return success idempotently (FR-AUTH-005: 204 No Content)
        if (string.IsNullOrWhiteSpace(request.RefreshToken))
        {
            _logger.LogInformation("Logout requested without specific refresh token. Successfully completed.");
            return Result<bool>.Success(true);
        }

        var trimmedToken = request.RefreshToken.Trim();

        // 3. Find refresh token in database
        var token = await _context.RefreshTokens
            .FirstOrDefaultAsync(rt => rt.Token == trimmedToken, cancellationToken);

        // A1: If token not found in database, still return success idempotently (prevents state leakage)
        if (token == null)
        {
            _logger.LogInformation("Logout requested for token not found in database. Idempotent success.");
            return Result<bool>.Success(true);
        }

        // 4. Verify token belongs to current user if UserId was extracted from JWT
        if (request.UserId.HasValue && token.UserId != request.UserId.Value)
        {
            _logger.LogWarning("Logout attempted for token belonging to another user. Denying revocation without revealing details.");
            return Result<bool>.Success(true);
        }

        // Revoke token if not already revoked
        if (!token.IsRevoked)
        {
            token.Revoke();
            await _context.SaveChangesAsync(cancellationToken);
            _logger.LogInformation("Revoked refresh token for User {UserId} successfully.", token.UserId);
        }

        return Result<bool>.Success(true);
    }
}
