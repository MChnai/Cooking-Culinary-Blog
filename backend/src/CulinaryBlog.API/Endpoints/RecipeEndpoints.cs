using CulinaryBlog.Application.Common.Models;
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
    }
}