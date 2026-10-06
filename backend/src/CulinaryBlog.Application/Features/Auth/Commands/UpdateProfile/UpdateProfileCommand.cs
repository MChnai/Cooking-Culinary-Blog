using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Auth.DTOs;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Auth.Commands.UpdateProfile;

public record UpdateProfileRequest(string? FullName, string? AvatarUrl);

public record UpdateProfileCommand(
    Guid UserId,
    string? FullName,
    string? AvatarUrl
) : IRequest<Result<UserProfileDto>>;

public class UpdateProfileCommandHandler : IRequestHandler<UpdateProfileCommand, Result<UserProfileDto>>
{
    private readonly IApplicationDbContext _context;

    public UpdateProfileCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result<UserProfileDto>> Handle(UpdateProfileCommand request, CancellationToken cancellationToken)
    {
        var user = await _context.Users
            .FirstOrDefaultAsync(u => u.Id == request.UserId && !u.IsDeleted, cancellationToken);

        if (user == null)
        {
            return Result<UserProfileDto>.Failure("NOT_FOUND", "User was not found or has been deactivated.");
        }

        // Partial update (PATCH): only update supplied non-null fields
        if (request.FullName != null)
        {
            user.FullName = request.FullName.Trim();
        }

        if (request.AvatarUrl != null)
        {
            user.AvatarUrl = string.IsNullOrWhiteSpace(request.AvatarUrl) ? null : request.AvatarUrl.Trim();
        }

        user.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync(cancellationToken);

        var roles = string.IsNullOrWhiteSpace(user.Role)
            ? new List<string> { "Author" }
            : user.Role.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries).ToList();

        var profile = new UserProfileDto(
            Id: user.Id,
            FullName: user.FullName,
            Email: user.Email,
            UserName: user.Username,
            AvatarUrl: user.AvatarUrl,
            Roles: roles,
            EmailConfirmed: user.EmailConfirmed,
            CreatedAt: user.CreatedAt
        );

        return Result<UserProfileDto>.Success(profile);
    }
}
