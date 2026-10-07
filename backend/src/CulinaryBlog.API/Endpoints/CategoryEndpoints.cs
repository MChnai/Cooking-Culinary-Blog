using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Categories.DTOs;
using CulinaryBlog.Application.Features.Categories.Queries.GetCategories;
using MediatR;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using CulinaryBlog.Application.Features.Categories.Queries.GetCategoryBySlug;
using Microsoft.AspNetCore.Http;
using CulinaryBlog.Application.Features.Categories.Commands.CreateCategory;
using CulinaryBlog.Application.Features.Categories.Commands.UpdateCategory;

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

        //FR-CAT-002: Xem Chi tiết Danh mục & Công thức phân trang (Public / Allow Anonymous)
        group.MapGet("/{slug}", async (
            string slug,
            int? pageNumber,
            int? pageSize,
            HttpContext httpContext,
            ISender mediator,
            CancellationToken cancellationToken) =>
        {
            // Lấy UserId từ Claims nếu User đã đăng nhập (để xem được cả bài Draft của chính mình)
            Guid? currentUserId = null;
            var userIdClaim = httpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (Guid.TryParse(userIdClaim, out var parsedGuid))
            {
                currentUserId = parsedGuid;
            }
            var page = pageNumber is null or <= 0 ? 1 : pageNumber.Value;
            var size = pageSize is null or <= 0 ? 10 : pageSize.Value;

            var query = new GetCategoryBySlugQuery(
                slug,
                page,
                size,
                currentUserId
            );

            var result = await mediator.Send(query, cancellationToken);

            if (!result.IsSuccess)
            {
                return Results.NotFound(result);
            }

            return Results.Ok(result);
        })
        .WithName("GetCategoryBySlug")
        .WithSummary("Xem chi tiết danh mục kèm danh sách công thức phân trang")
        .WithDescription("Trả về danh mục theo Slug. Khách chỉ xem công thức Published; Tác giả đã đăng nhập xem được thêm bài Draft của chính mình.")
        .Produces<Result<CategoryDetailDto>>(StatusCodes.Status200OK)
        .Produces<Result<CategoryDetailDto>>(StatusCodes.Status404NotFound);

        //FR-CAT-003: Tạo Danh mục Mới (Require Authorization: Admin)
        group.MapPost("/", async (
            CreateCategoryCommand command,
            ISender mediator,
            CancellationToken cancellationToken) =>
        {
            var result = await mediator.Send(command, cancellationToken);

            if (!result.IsSuccess)
            {
                return Results.BadRequest(result);
            }

            return Results.Created($"/api/categories/{result.Value}", result);        
        })
        .WithName("CreateCategory")
        .WithSummary("Tạo danh mục mới (Admin)")
        .WithDescription("Tạo danh mục mới, tự động sinh Slug duy nhất và làm mới Cache danh mục.")
        .RequireAuthorization(policy => policy.RequireRole("Admin"))
        .Produces<Result<Guid>>(StatusCodes.Status201Created)
        .Produces<Result<Guid>>(StatusCodes.Status400BadRequest)
        .Produces(StatusCodes.Status401Unauthorized)
        .Produces(StatusCodes.Status403Forbidden);

        // FR-CAT-004: Cập nhật Danh mục [Admin]
        group.MapPut("/{id:guid}", async (
            Guid id,
            UpdateCategoryRequest request,
            ISender mediator,
            CancellationToken cancellationToken) =>
        {
            var command = new UpdateCategoryCommand(id, request.Name, request.Description);
            var result = await mediator.Send(command, cancellationToken);

            if (!result.IsSuccess)
            {
                return Results.BadRequest(result);
            }

            return Results.Ok(result);
        });
    }
}