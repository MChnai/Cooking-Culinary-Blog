using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Domain.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace CulinaryBlog.Infrastructure.Services;

public class JwtService : IJwtService
{
    private readonly IConfiguration _config;

    public JwtService(IConfiguration config)
    {
        _config = config;
    }

    public string GenerateAccessToken(ApplicationUser user, IEnumerable<string> roles)
    {
        // 1. Lấy secret key (Đảm bảokey này giống key trong Program.cs)
        var secretKey = _config["Jwt:Key"] ?? _config["Jwt:SecretKey"]!;
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new List<Claim>
        {
            new(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new(ClaimTypes.Name, user.Username),
            new(ClaimTypes.Email, user.Email),
            new("fullName", user.FullName)
        };

        foreach (var role in roles)
        {
            claims.Add(new Claim(ClaimTypes.Role, role));
        }

        // 2. Tạo Header ép buộc gán "kid" (Key ID)
        var header = new JwtHeader(creds)
        {
            ["kid"] = "CulinaryBlogSecretKeyId" // <-- QUAN TRỌNG: Gán trực tiếp "kid" vào dictionary Header
        };

        // 3. Tạo Payload
        var payload = new JwtPayload(
            issuer: _config["Jwt:Issuer"] ?? "CulinaryBlog.API",
            audience: _config["Jwt:Audience"] ?? "CulinaryBlog.Client",
            claims: claims,
            notBefore: null,
            expires: GetAccessTokenExpiration()
        );

        // 4. Tạo JwtSecurityToken từ Header và Payload
        var token = new JwtSecurityToken(header, payload);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    public string GenerateRefreshToken()
    {
        var randomNumber = new byte[64];
        using var rng = RandomNumberGenerator.Create();
        rng.GetBytes(randomNumber);
        return Convert.ToBase64String(randomNumber);
    }

    public DateTime GetAccessTokenExpiration()
    {
        return DateTime.UtcNow.AddMinutes(15);
    }
}