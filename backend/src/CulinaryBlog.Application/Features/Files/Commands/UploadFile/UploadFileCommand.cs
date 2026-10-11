using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Files.DTOs;
using MediatR;
using Microsoft.AspNetCore.Http;

namespace CulinaryBlog.Application.Features.Files.Commands.UploadFile;

public record UploadFileCommand(
    IFormFile File,
    string? BucketName = null
) : IRequest<Result<FileUploadedDto>>;