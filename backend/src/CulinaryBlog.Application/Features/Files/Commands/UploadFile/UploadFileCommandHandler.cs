using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Files.DTOs;
using CulinaryBlog.Application.Common.Metrics;
using MediatR;

namespace CulinaryBlog.Application.Features.Files.Commands.UploadFile;

public class UploadFileCommandHandler : IRequestHandler<UploadFileCommand, Result<FileUploadedDto>>
{
    private readonly IStorageService _storageService;
    private readonly IThumbnailJobService _thumbnailJobService;

    // Các định dạng file cho phép upload (Ảnh & Tài liệu)
    private static readonly string[] AllowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".pdf"];
    private static readonly string[] ImageExtensions = [".jpg", ".jpeg", ".png", ".webp"];
    private const long MaxFileSizeInBytes = 10 * 1024 * 1024; // 10 MB

    public UploadFileCommandHandler(IStorageService storageService, IThumbnailJobService thumbnailJobService) 
    {
        _storageService = storageService;
        _thumbnailJobService = thumbnailJobService;
    }

    public async Task<Result<FileUploadedDto>> Handle(UploadFileCommand request, CancellationToken cancellationToken)
    {
        var file = request.File;

        if (file == null || file.Length == 0)
        {
            return Result<FileUploadedDto>.Failure("FILE_EMPTY", "Tệp tải lên không được để rỗng.");
        }

        if (file.Length > MaxFileSizeInBytes)
        {
            return Result<FileUploadedDto>.Failure("FILE_TOO_LARGE", "Dung lượng tệp vượt quá giới hạn cho phép (tối đa 10MB).");
        }

        var extension = Path.GetExtension(file.FileName).ToLowerInvariant();
        if (!AllowedExtensions.Contains(extension))
        {
            return Result<FileUploadedDto>.Failure("FILE_TYPE_INVALID", $"Định dạng tệp '{extension}' không được hỗ trợ.");
        }

        // Gọi Storage Service lưu vào MinIO (Tên file được tự động sinh GUID ngẫu nhiên)
        var fileUrl = await _storageService.UploadFileAsync(file, request.BucketName, cancellationToken);
        var fileName = Path.GetFileName(new Uri(fileUrl).LocalPath);
        var targetBucket = request.BucketName ?? "culinary-blog";

       if (ImageExtensions.Contains(extension))
        {
            _thumbnailJobService.EnqueueThumbnailJob(fileName, targetBucket);
        }

        var dto = new FileUploadedDto
        {
            FileName = fileName,
            Url = fileUrl,
            ContentType = file.ContentType,
            Size = file.Length
        };
        CulinaryBlogMetrics.FilesUploadedCounter.Add(1, new KeyValuePair<string, object?>("file_type", extension));

        return Result<FileUploadedDto>.Success(dto);
    }
}