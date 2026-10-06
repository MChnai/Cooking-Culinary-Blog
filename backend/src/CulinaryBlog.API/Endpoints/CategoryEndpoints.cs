using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Categories.DTOs;
using CulinaryBlog.Application.Features.Categories.Queries.GetCategories;
using MediatR;
using Microsoft.AspNetCore.Http;

namespace CulinaryBlog.API.Endpoints;

public static class CategoryEndpoints
{
    public static void MapCategoryEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/categories").WithTags("Categories");

        // FR-CAT-001: Xem Danh sách Danh mục (Public)
        group.MapGet("/", async (ISender mediator, CancellationToken cancellationToken) =>
        {
            var query = new GetCategoriesQuery();
            var result = await mediator.Send(query, cancellationToken);

            return Results.Ok(result);
        })
        .WithName("GetCategories")
        .WithSummary("Xem danh sách danh mục")
        .WithDescription("Trả về danh sách tất cả danh mục kèm số lượng công thức (recipeCount). Dữ liệu được cache 60 phút.")
        .Produces<Result<List<CategoryDto>>>(StatusCodes.Status200OK);
    }
}