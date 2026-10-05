using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.DTOs.Auth;
using CulinaryBlog.Domain.Entities; // Chứa ApplicationUser
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using CulinaryBlog.Application.Features.Auth.Commands.Login;
using MediatR;
using Microsoft.AspNetCore.Mvc;


namespace CulinaryBlog.API.Endpoints;

public static class AuthEndpoints
{
    public static void MapAuthEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/auth")
                       .WithTags("Authentication");

        // POST: Register
        group.MapPost("/register", async (RegisterRequest request, IApplicationDbContext dbContext, IPasswordHasher passwordHasher) =>
        {
            var existingUser = await dbContext.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
            if (existingUser != null)
            {
                return Results.BadRequest(new { Message = "Email đã được sử dụng." });
            }

            // SỬA TẠI ĐÂY: Dùng ApplicationUser thay vì User
            var user = new ApplicationUser
            {
                Id = Guid.NewGuid(),
                Username = request.Username,
                Email = request.Email,
                PasswordHash = passwordHasher.HashPassword(request.Password),
                CreatedAt = DateTime.UtcNow
            };

            dbContext.Users.Add(user);
            await dbContext.SaveChangesAsync(CancellationToken.None);

            return Results.Created($"/api/auth/users/{user.Id}", new 
            { 
                Message = "Đăng ký thành công!", 
                UserId = user.Id,
                user.Username,
                user.Email 
            });
        })
        .WithSummary("Đăng ký tài khoản mới (POST)");

        // GET: All Users
        group.MapGet("/users", async (IApplicationDbContext dbContext) =>
        {
            var users = await dbContext.Users
                .AsNoTracking()
                .Select(u => new 
                {
                    u.Id,
                    u.Username,
                    u.Email,
                    u.Role,
                    u.CreatedAt
                })
                .ToListAsync();

            return Results.Ok(new { Total = users.Count, Data = users });
        })
        .WithSummary("Lấy danh sách tất cả người dùng (GET)");

        // GET: User by ID
        group.MapGet("/users/{id:guid}", async (Guid id, IApplicationDbContext dbContext) =>
        {
            var user = await dbContext.Users
                .AsNoTracking()
                .Where(u => u.Id == id)
                .Select(u => new 
                {
                    u.Id,
                    u.Username,
                    u.Email,
                    u.Role,
                    u.CreatedAt
                })
                .FirstOrDefaultAsync();

            if (user == null)
            {
                return Results.NotFound(new { Message = "Không tìm thấy người dùng." });
            }

            return Results.Ok(user);
        })
        .WithSummary("Lấy thông tin chi tiết người dùng theo ID (GET)");

        // FR-AUTH-002: Login
        group.MapPost("/login", async (
            [FromBody] LoginCommand command, 
            [FromServices] ISender sender, 
            CancellationToken ct) =>
        {
            var result = await sender.Send(command, ct);

            if (!result.IsSuccess)
            {
                return Results.BadRequest(new 
                { 
                    code = result.ErrorCode, 
                    message = result.ErrorMessage 
                });
            }

            return Results.Ok(result.Value);
        })
        .WithName("Login")
        .AllowAnonymous();
    }
}