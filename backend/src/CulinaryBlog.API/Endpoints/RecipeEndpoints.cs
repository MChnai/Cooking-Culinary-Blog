using System.Security.Claims;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using CulinaryBlog.Application.Features.Recipes.Queries.GetRecipeDetail;
using CulinaryBlog.Application.Features.Recipes.Queries.GetRecipes;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace CulinaryBlog.API.Endpoints;

public static class RecipeEndpoints
{
    public static void MapRecipeEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/recipes").WithTags("Recipes");

        // FR-RCP-001: Xem Danh sách Công thức (Public)
        group.MapGet("/", async (
            [FromQuery] int? pageNumber,
            [FromQuery] int? pageSize,
            [FromQuery] Guid? categoryId,
            [FromQuery] int? difficulty,
            [FromQuery] int? maxTotalTime,
            [FromQuery] string? searchTerm,
            [FromQuery] string? sortBy,
            [FromQuery] string? sortDirection,
            ISender mediator,
            CancellationToken cancellationToken) =>
        {
            var query = new GetRecipesQuery(
                pageNumber ?? 1,
                pageSize ?? 10,
                categoryId,
                difficulty,
                maxTotalTime,
                searchTerm,
                sortBy,
                sortDirection
            );

            var result = await mediator.Send(query, cancellationToken);

            return Results.Ok(result);
        })
        .WithName("GetRecipes")
        .WithSummary("Xem danh sách công thức (Phân trang, Lọc, Sắp xếp)")
        .WithDescription("Trả về danh sách công thức công khai. Kết quả được Cache Output 15 phút.")
        .CacheOutput(policy => policy.Expire(TimeSpan.FromMinutes(15)).SetVaryByQuery("*"))
        .Produces<Result<PaginatedList<RecipeDto>>>(StatusCodes.Status200OK);

        // FR-RCP-002: Xem Chi tiết Công thức
        group.MapGet("/{identifier}", async (
            string identifier,
            ClaimsPrincipal user,
            ISender mediator,
            CancellationToken cancellationToken) =>
        {
            // Lấy ID người dùng từ JWT Claims
            Guid? currentUserId = null;
            var userIdClaim = user.FindFirst(ClaimTypes.NameIdentifier)?.Value 
                           ?? user.FindFirst("sub")?.Value;

            if (Guid.TryParse(userIdClaim, out var parsedGuid))
            {
                currentUserId = parsedGuid;
            }

            var isAdmin = user.IsInRole("Admin");

            var query = new GetRecipeDetailQuery(identifier, currentUserId, isAdmin);
            var result = await mediator.Send(query, cancellationToken);

            if (!result.IsSuccess)
            {
                return Results.BadRequest(result);
            }

            return Results.Ok(result);
        })
        .WithName("GetRecipeDetail")
        .WithSummary("Xem chi tiết công thức (Id hoặc Slug)")
        .WithDescription("Trả về đầy đủ thông tin công thức và các bảng con. Output Cache 60 phút theo Cache Tag.")
        .CacheOutput(policy => policy
            .Expire(TimeSpan.FromMinutes(60))
            .SetVaryByRouteValue("identifier")
            .Tag("recipe-detail"))
        .Produces<Result<RecipeDetailDto>>(StatusCodes.Status200OK)
        .Produces<Result<RecipeDetailDto>>(StatusCodes.Status400BadRequest);
    }
}