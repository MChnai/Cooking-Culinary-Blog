using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Files.Commands.UploadFile;
using CulinaryBlog.Application.Features.Files.DTOs;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;

namespace CulinaryBlog.API.Endpoints;

public static class FileEndpoints
{
    public static void MapFileEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/files")
                       .WithTags("File Management");

        // FR-FILE-001: Upload File lên MinIO S3
        group.MapPost("/upload", async (
            IFormFile file,
            [FromForm] string? bucketName,
            ISender mediator,
            CancellationToken cancellationToken) =>
        {
            var command = new UploadFileCommand(file, bucketName);
            var result = await mediator.Send(command, cancellationToken);

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
        .WithName("UploadFile")
        .WithSummary("Upload file lên MinIO Object Storage (FR-FILE-001)")
        .DisableAntiforgery() // Bỏ qua Antiforgery validation cho Multipart Form
        .Produces<Result<FileUploadedDto>>(StatusCodes.Status200OK)
        .Produces(StatusCodes.Status400BadRequest)
        .RequireAuthorization(); // Yêu cầu đã đăng nhập mới được upload
    }
}