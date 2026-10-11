using CulinaryBlog.Application.Common.Models;
using MediatR;

namespace CulinaryBlog.Application.Features.Files.Commands.DeleteFile;

public record DeleteFileCommand(
    string FilePathOrUrl,
    string? BucketName = null
) : IRequest<Result<bool>>;