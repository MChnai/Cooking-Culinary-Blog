using System.Security.Claims;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.Commands.CreateRecipe;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using CulinaryBlog.Application.Features.Recipes.Queries.GetRecipes;
using CulinaryBlog.Application.Features.Recipes.Commands.ChangeRecipeStatus;
using CulinaryBlog.Application.Features.Recipes.Commands.UpdateRecipe;
using CulinaryBlog.Application.Features.Recipes.Commands.ArchiveRecipe;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using CulinaryBlog.API.Models.Requests;
using CulinaryBlog.Domain.Enums;

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

        // FR-RCP-004: Cập nhật Công thức (Author, Admin)
        group.MapPut("/{id:guid}", async (
            Guid id,
            [FromHeader(Name = "If-Match")] string? ifMatch,
            [FromBody] UpdateRecipeRequest request,
            ClaimsPrincipal user,
            ISender mediator,
            CancellationToken cancellationToken) =>
        {
            // 1. Kiểm tra ETag / If-Match header
            if (string.IsNullOrWhiteSpace(ifMatch))
            {
                return Results.BadRequest(Result<Unit>.Failure("MISSING_HEADER", "Thiếu header 'If-Match' (RowVersion)."));
            }

            var cleanETag = ifMatch.Trim('"');
            if (!uint.TryParse(cleanETag, out var rowVersion))
            {
                return Results.BadRequest(Result<Unit>.Failure("INVALID_FORMAT", "Header 'If-Match' phải là số nguyên không âm (uint)."));
            }

            // 2. Map dữ liệu sang Command
            var command = new UpdateRecipeCommand
            {
                Id = id,
                Title = request.Title,
                Description = request.Description,
                PrepTimeMinutes = request.PrepTimeMinutes,
                CookTimeMinutes = request.CookTimeMinutes,
                Servings = request.Servings,
                Difficulty = request.Difficulty,
                CategoryId = request.CategoryId,
                RowVersion = rowVersion,
                CurrentUser = user
            };

            var result = await mediator.Send(command, cancellationToken);

            // 3. Phản hồi HTTP Response
            if (!result.IsSuccess)
            {
                return Results.BadRequest(result);
            }

            return Results.NoContent();
        })
        .WithName("UpdateRecipe")
        .WithSummary("Cập nhật thông tin công thức")
        .WithDescription("Yêu cầu quyền Author (chủ sở hữu) hoặc Admin. Bắt buộc truyền `If-Match` header chứa RowVersion (uint) để kiểm soát Concurrency Control.")
        .RequireAuthorization(policy => policy.RequireRole("Author", "Admin"))
        .Produces(StatusCodes.Status204NoContent)
        .Produces<Result<Unit>>(StatusCodes.Status400BadRequest)
        .Produces(StatusCodes.Status401Unauthorized)
        .Produces(StatusCodes.Status403Forbidden)
        .Produces(StatusCodes.Status404NotFound)
        .Produces(StatusCodes.Status412PreconditionFailed);

        // FR-RCP-005: Xuất bản / Hủy Xuất bản Công thức (Author, Admin)
        group.MapPatch("/{id:guid}/status", async (
            Guid id,
            [FromBody] ChangeRecipeStatusRequest request,
            ClaimsPrincipal user,
            ISender mediator,
            CancellationToken cancellationToken) =>
        {
            var command = new ChangeRecipeStatusCommand
            {
                Id = id,
                Status = request.Status,
                CurrentUser = user
            };

            var result = await mediator.Send(command, cancellationToken);

            if (!result.IsSuccess)
            {
                return Results.BadRequest(result);
            }

            return Results.NoContent();
        })
        .WithName("ChangeRecipeStatus")
        .WithSummary("Xuất bản hoặc Hủy xuất bản công thức (Draft / Published)")
        .WithDescription("Yêu cầu quyền Author (chủ sở hữu) hoặc Admin. Quy tắc: Công thức phải có ít nhất 1 bước thực hiện mới được phép Xuất bản (Published).")
        .RequireAuthorization(policy => policy.RequireRole("Author", "Admin"))
        .Produces(StatusCodes.Status204NoContent)
        .Produces<Result<Unit>>(StatusCodes.Status400BadRequest)
        .Produces(StatusCodes.Status401Unauthorized)
        .Produces(StatusCodes.Status403Forbidden)
        .Produces(StatusCodes.Status404NotFound);

        // FR-RCP-006: Lưu trữ / Bỏ lưu trữ Công thức (Author, Admin)
        group.MapPatch("/{id:guid}/archive", async (
            Guid id,
            [FromBody] ArchiveRecipeRequest request,
            ClaimsPrincipal user,
            ISender mediator,
            CancellationToken cancellationToken) =>
        {
            var command = new ArchiveRecipeCommand
            {
                Id = id,
                IsArchived = request.IsArchived,
                CurrentUser = user
            };

            var result = await mediator.Send(command, cancellationToken);

            if (!result.IsSuccess)
            {
                return Results.BadRequest(result);
            }

            return Results.NoContent();
        })
        .WithName("ArchiveRecipe")
        .WithSummary("Lưu trữ hoặc Bỏ lưu trữ công thức (Archive / Unarchive)")
        .WithDescription("Yêu cầu quyền Author (chủ sở hữu) hoặc Admin. Chuyển công thức sang trạng thái Archived để ẩn khỏi danh sách công khai mà không xóa dữ liệu.")
        .RequireAuthorization(policy => policy.RequireRole("Author", "Admin"))
        .Produces(StatusCodes.Status204NoContent)
        .Produces<Result<Unit>>(StatusCodes.Status400BadRequest)
        .Produces(StatusCodes.Status401Unauthorized)
        .Produces(StatusCodes.Status403Forbidden)
        .Produces(StatusCodes.Status404NotFound);
    }
}