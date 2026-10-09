using System.Security.Claims;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.Commands.CreateRecipe;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using CulinaryBlog.Application.Features.Recipes.Queries.GetRecipes;
using CulinaryBlog.Application.Features.Recipes.Commands.ChangeRecipeStatus;
using CulinaryBlog.Application.Features.Recipes.Commands.UpdateRecipe;
using CulinaryBlog.Application.Features.Recipes.Commands.ArchiveRecipe;
using CulinaryBlog.Application.Features.Recipes.Commands.DeleteRecipe;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using CulinaryBlog.API.Models.Requests;
using CulinaryBlog.Domain.Enums;
using CulinaryBlog.Application.Features.Recipes.Commands.UploadRecipeImage;
using CulinaryBlog.Application.Features.Recipes.Commands.SetPrimaryImage;
using CulinaryBlog.Application.Features.Recipes.Commands.DeleteRecipeImage;
using CulinaryBlog.Application.Features.Recipes.Commands.AddIngredient;
using CulinaryBlog.Application.Features.Recipes.Commands.DeleteIngredient;
using CulinaryBlog.Application.Features.Recipes.Commands.UpdateIngredient;
using CulinaryBlog.Application.Features.Recipes.Queries.GetSteps;
using CulinaryBlog.Application.Features.Recipes.Commands.AddStep;
using CulinaryBlog.Application.Features.Recipes.Commands.UpdateStep;
using CulinaryBlog.Application.Features.Recipes.Commands.DeleteStep;
using CulinaryBlog.Application.Features.Recipes.Queries.GetIngredients;

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

        // FR-RCP-008.1: Upload ảnh công thức
        group.MapPost("/{id:guid}/images", async (
            Guid id,
            IFormFile file,
            [FromForm] string? altText,
            [FromForm] bool isPrimary,
            ClaimsPrincipal user,
            ISender mediator,
            CancellationToken cancellationToken) =>
        {
            var command = new UploadRecipeImageCommand
            {
                RecipeId = id,
                File = file,
                AltText = altText,
                IsPrimary = isPrimary,
                CurrentUser = user
            };

            var result = await mediator.Send(command, cancellationToken);

            if (!result.IsSuccess)
            {
                return Results.BadRequest(result);
            }

            return Results.Created($"/api/recipes/{id}/images/{result.Value!.Id}", result);
        })
        .WithName("UploadRecipeImage")
        .WithSummary("Tải lên ảnh mới cho công thức")
        .WithDescription("FormData (tối đa 5MB, JPEG/PNG/WEBP, kiểm tra Magic Bytes).")
        .RequireAuthorization(policy => policy.RequireRole("Author", "Admin"))
        .DisableAntiforgery()
        .Produces<Result<RecipeImageDto>>(StatusCodes.Status201Created)
        .Produces<Result<RecipeImageDto>>(StatusCodes.Status400BadRequest);

        // FR-RCP-008.2: Thiết lập ảnh đại diện (Primary)
        group.MapPatch("/{id:guid}/images/{imageId:guid}/primary", async (
            Guid id,
            Guid imageId,
            ClaimsPrincipal user,
            ISender mediator,
            CancellationToken cancellationToken) =>
        {
            var command = new SetPrimaryRecipeImageCommand(id, imageId, user);
            var result = await mediator.Send(command, cancellationToken);

            if (!result.IsSuccess)
            {
                return Results.BadRequest(result);
            }

            return Results.NoContent();
        })
        .WithName("SetPrimaryRecipeImage")
        .WithSummary("Đặt ảnh làm đại diện (Primary)")
        .RequireAuthorization(policy => policy.RequireRole("Author", "Admin"))
        .Produces(StatusCodes.Status204NoContent)
        .Produces<Result<Unit>>(StatusCodes.Status400BadRequest);

        // FR-RCP-008.3: Xóa ảnh công thức
        group.MapDelete("/{id:guid}/images/{imageId:guid}", async (
            Guid id,
            Guid imageId,
            ClaimsPrincipal user,
            ISender mediator,
            CancellationToken cancellationToken) =>
        {
            var command = new DeleteRecipeImageCommand(id, imageId, user);
            var result = await mediator.Send(command, cancellationToken);

            if (!result.IsSuccess)
            {
                return Results.BadRequest(result);
            }

            return Results.NoContent();
        })
        .WithName("DeleteRecipeImage")
        .WithSummary("Xóa ảnh công thức và dọn dẹp file MinIO qua Hangfire")
        .RequireAuthorization(policy => policy.RequireRole("Author", "Admin"))
        .Produces(StatusCodes.Status204NoContent)
        .Produces<Result<Unit>>(StatusCodes.Status400BadRequest);

        // FR-RCP-009: Quản lý Nguyên liệu (Tạo Sub-group riêng)
        var ingredientGroup = group.MapGroup("/{recipeId:guid}/ingredients")
                                   .WithTags("Recipe Ingredients");

        // GET: Lấy danh sách nguyên liệu
        ingredientGroup.MapGet("/", async (
            Guid recipeId,
            ISender mediator,
            CancellationToken ct) =>
        {
            var query = new GetRecipeIngredientsQuery(recipeId);
            var result = await mediator.Send(query, ct);
            return result.IsSuccess ? Results.Ok(result) : Results.BadRequest(result);
        });

        // POST: Thêm nguyên liệu mới
        ingredientGroup.MapPost("/", async (
            Guid recipeId,
            [FromBody] CreateIngredientRequest request,
            ClaimsPrincipal user,
            ISender mediator,
            CancellationToken ct) =>
        {
            var command = new AddIngredientCommand
            {
                RecipeId = recipeId,
                Name = request.Name,
                Quantity = request.Quantity,
                Unit = request.Unit,
                Notes = request.Notes,
                SortOrder = request.SortOrder,
                CurrentUser = user
            };

            var result = await mediator.Send(command, ct);
            return result.IsSuccess 
                ? Results.Created($"/api/recipes/{recipeId}/ingredients/{result.Value!.Id}", result) 
                : Results.BadRequest(result);
        }).RequireAuthorization();

        // PUT: Cập nhật nguyên liệu
        ingredientGroup.MapPut("/{ingredientId:guid}", async (
            Guid recipeId,  
            Guid ingredientId,
            [FromBody] UpdateIngredientRequest request,
            ClaimsPrincipal user,
            ISender mediator,
            CancellationToken ct) =>
        {
            var command = new UpdateIngredientCommand
            {
                RecipeId = recipeId,
                IngredientId = ingredientId,
                Name = request.Name,
                Quantity = request.Quantity,
                Unit = request.Unit,
                Notes = request.Notes,
                SortOrder = request.SortOrder,
                CurrentUser = user
            };

            var result = await mediator.Send(command, ct);
            return result.IsSuccess ? Results.Ok(result) : Results.BadRequest(result);
        }).RequireAuthorization();

        // DELETE: Xóa nguyên liệu
        ingredientGroup.MapDelete("/{ingredientId:guid}", async (
            Guid recipeId,
            Guid ingredientId,
            ClaimsPrincipal user,
            ISender mediator,
            CancellationToken ct) =>
        {
            var command = new DeleteIngredientCommand
            {
                RecipeId = recipeId,
                IngredientId = ingredientId,
                CurrentUser = user
            };

            var result = await mediator.Send(command, ct);
            return result.IsSuccess ? Results.Ok(result) : Results.BadRequest(result);
        }).RequireAuthorization();

        // ==========================================
        // FR-RCP-010: Quản lý Các bước Thực hiện (Steps)
        // Sub-group: /api/recipes/{recipeId:guid}/steps
        // ==========================================
        var stepGroup = group.MapGroup("/{recipeId:guid}/steps")
                            .WithTags("Recipe Steps");

        // GET: Lấy danh sách các bước
        stepGroup.MapGet("/", async (
            Guid recipeId,
            ISender mediator,
            CancellationToken ct) =>
        {
            var query = new GetRecipeStepsQuery(recipeId);
            var result = await mediator.Send(query, ct);
            return result.IsSuccess ? Results.Ok(result) : Results.BadRequest(result);
        })
        .WithName("GetRecipeSteps")
        .WithSummary("Lấy danh sách các bước thực hiện");

        // POST: Thêm bước mới
        stepGroup.MapPost("/", async (
            Guid recipeId,
            [FromBody] CreateRecipeStepRequest request,
            ClaimsPrincipal user,
            ISender mediator,
            CancellationToken ct) =>
        {
            var command = new AddRecipeStepCommand
            {
                RecipeId = recipeId,
                Instruction = request.Instruction,
                ImageUrl = request.ImageUrl,
                CurrentUser = user
            };

            var result = await mediator.Send(command, ct);
            return result.IsSuccess 
                ? Results.Created($"/api/recipes/{recipeId}/steps/{result.Value!.Id}", result) 
                : Results.BadRequest(result);
        })
        .WithName("AddRecipeStep")
        .WithSummary("Thêm bước thực hiện mới")
        .RequireAuthorization(policy => policy.RequireRole("Author", "Admin"));

        // PUT: Cập nhật bước thực hiện
        stepGroup.MapPut("/{stepId:guid}", async (
            Guid recipeId,
            Guid stepId,
            [FromBody] UpdateRecipeStepRequest request,
            ClaimsPrincipal user,
            ISender mediator,
            CancellationToken ct) =>
        {
            var command = new UpdateRecipeStepCommand
            {
                RecipeId = recipeId,
                StepId = stepId,
                Instruction = request.Instruction,
                ImageUrl = request.ImageUrl,
                CurrentUser = user
            };

            var result = await mediator.Send(command, ct);
            return result.IsSuccess ? Results.Ok(result) : Results.BadRequest(result);
        })
        .WithName("UpdateRecipeStep")
        .WithSummary("Cập nhật bước thực hiện")
        .RequireAuthorization(policy => policy.RequireRole("Author", "Admin"));

        // DELETE: Xóa bước thực hiện & Re-index
        stepGroup.MapDelete("/{stepId:guid}", async (
            Guid recipeId,
            Guid stepId,
            ClaimsPrincipal user,
            ISender mediator,
            CancellationToken ct) =>
        {
            var command = new DeleteRecipeStepCommand
            {
                RecipeId = recipeId,
                StepId = stepId,
                CurrentUser = user
            };

            var result = await mediator.Send(command, ct);
            return result.IsSuccess ? Results.Ok(result) : Results.BadRequest(result);
        })
        .WithName("DeleteRecipeStep")
        .WithSummary("Xóa bước thực hiện (Tự động sắp xếp lại StepNumber)")
        .RequireAuthorization(policy => policy.RequireRole("Author", "Admin"));
    }
}