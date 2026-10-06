using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Auth.DTOs;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Auth.Queries.GetCurrentUser;

public record GetCurrentUserQuery(Guid UserId) : IRequest<Result<UserProfileDto>>;

public class GetCurrentUserQueryHandler : IRequestHandler<GetCurrentUserQuery, Result<UserProfileDto>>
{
    private readonly IApplicationDbContext _context;

    public GetCurrentUserQueryHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result<UserProfileDto>> Handle(GetCurrentUserQuery request, CancellationToken cancellationToken)
    {
        var user = await _context.Users
            .AsNoTracking()
            .FirstOrDefaultAsync(u => u.Id == request.UserId && !u.IsDeleted, cancellationToken);

        if (user == null)
        {
            return Result<UserProfileDto>.Failure("NOT_FOUND", "User was not found or has been deactivated.");
        }

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
