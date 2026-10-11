using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using MediatR;

namespace CulinaryBlog.Application.Features.Files.Commands.DeleteFile;

public class DeleteFileCommandHandler : IRequestHandler<DeleteFileCommand, Result<bool>>
{
    private readonly IStorageService _storageService;

    public DeleteFileCommandHandler(IStorageService storageService)
    {
        _storageService = storageService;
    }

    public async Task<Result<bool>> Handle(DeleteFileCommand request, CancellationToken cancellationToken)
    {
        if (string.IsNullOrWhiteSpace(request.FilePathOrUrl))
        {
            return Result<bool>.Failure("FILE_PATH_EMPTY", "Đường dẫn file không được để rỗng.");
        }

        // Trích xuất Object Name từ URL hoặc đường dẫn tương đối
        var objectName = ExtractObjectName(request.FilePathOrUrl);

        if (string.IsNullOrWhiteSpace(objectName))
        {
            return Result<bool>.Failure("FILE_NAME_INVALID", "Không thể trích xuất tên file từ đường dẫn đã cung cấp.");
        }

        // Gọi Storage Service thực hiện xóa file khỏi MinIO Bucket
        await _storageService.DeleteFileAsync(objectName, request.BucketName, cancellationToken);

        return Result<bool>.Success(true);
    }
    private static string ExtractObjectName(string filePathOrUrl)
    {
        var trimmed = filePathOrUrl.Trim();

        // Trường hợp truyền URL đầy đủ (ví dụ: http://localhost:9000/culinary-blog/3a5f021e-....png)
        if (Uri.TryCreate(trimmed, UriKind.Absolute, out var uri))
        {
            return Path.GetFileName(uri.AbsolutePath);
        }

        // Trường hợp truyền đường dẫn tương đối hoặc chỉ truyền tên file
        return Path.GetFileName(trimmed);
    }
}