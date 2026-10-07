using System.Security.Claims;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.Commands.CreateRecipe;
using CulinaryBlog.Application.Features.Recipes.DTOs;
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

        // FR-RCP-003: Tạo Công thức Mới (Author, Admin)
        group.MapPost("/", async (
            [FromBody] CreateRecipeCommand command,
            ClaimsPrincipal user,
            ISender mediator,
            CancellationToken cancellationToken) =>
        {
            var userIdClaim = user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (!Guid.TryParse(userIdClaim, out var authorId))
            {
                return Results.Unauthorized();
            }

            var commandWithAuthor = command with { AuthorId = authorId };
            var result = await mediator.Send(commandWithAuthor, cancellationToken);

            if (!result.IsSuccess)
            {
                return Results.BadRequest(result);
            }

            return Results.CreatedAtRoute("GetRecipeDetail", new { identifier = result.Value }, result);
        })
        .WithName("CreateRecipe")
        .WithSummary("Tạo công thức mới (Trạng thái Draft)")
        .WithDescription("Khởi tạo bài viết công thức mới ở trạng thái Draft. Cho phép đính kèm Steps, Ingredients, Nutrition.")
        .RequireAuthorization(policy => policy.RequireRole("Author", "Admin"))
        .Produces<Result<Guid>>(StatusCodes.Status201Created)
        .Produces<Result<Guid>>(StatusCodes.Status400BadRequest)
        .Produces(StatusCodes.Status401Unauthorized)
        .Produces(StatusCodes.Status403Forbidden);
    }
}