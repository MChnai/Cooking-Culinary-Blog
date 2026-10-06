using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace CulinaryBlog.Application.Features.Auth.Commands.Logout;

public record LogoutCommand(string RefreshToken, string? IpAddress = null) : IRequest<Result<bool>>;

public class LogoutCommandHandler : IRequestHandler<LogoutCommand, Result<bool>>
{
    private readonly IApplicationDbContext _context;
    private readonly ILogger<LogoutCommandHandler> _logger;

    public LogoutCommandHandler(IApplicationDbContext context, ILogger<LogoutCommandHandler> logger)
    {
        _context = context;
        _logger = logger;
    }

    public async Task<Result<bool>> Handle(LogoutCommand request, CancellationToken cancellationToken)
    {
        if (string.IsNullOrWhiteSpace(request.RefreshToken))
        {
            return Result<bool>.Failure("INVALID_TOKEN", "Refresh token cannot be empty.");
        }

        var clientIp = string.IsNullOrWhiteSpace(request.IpAddress) ? "127.0.0.1" : request.IpAddress;

        // 1. Tìm Refresh Token trong CSDL
        var token = await _context.RefreshTokens
            .FirstOrDefaultAsync(rt => rt.Token == request.RefreshToken.Trim(), cancellationToken);

        // 2. Nếu không tìm thấy hoặc đã bị Revoke rồi thì vẫn báo thành công (Idempotent API)
        if (token == null || token.IsRevoked)
        {
            return Result<bool>.Success(true);
        }

        // 3. Gọi method Revoke trên Domain Entity
        token.Revoke(
            ipAddress: clientIp,
            reason: "User logged out"
        );

        await _context.SaveChangesAsync(cancellationToken);

        _logger.LogInformation("User {UserId} logged out successfully. Token revoked.", token.UserId);

        return Result<bool>.Success(true);
    }
}