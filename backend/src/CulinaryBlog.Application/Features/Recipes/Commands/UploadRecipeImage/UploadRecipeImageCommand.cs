using System.Security.Claims;
using CulinaryBlog.Application.Common.Helpers;
using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using CulinaryBlog.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;


namespace CulinaryBlog.Application.Features.Recipes.Commands.UploadRecipeImage;

public record UploadRecipeImageCommand : IRequest<Result<RecipeImageDto>>
{
    public Guid RecipeId { get; init; }
    public IFormFile File { get; init; } = default!;
    public string? AltText { get; init; }
    public bool IsPrimary { get; init; }
    public ClaimsPrincipal CurrentUser { get; init; } = default!;
}

public class UploadRecipeImageCommandHandler : IRequestHandler<UploadRecipeImageCommand, Result<RecipeImageDto>>
{
    private readonly IApplicationDbContext _context;
    private readonly IFileStorageService _fileStorageService;

    public UploadRecipeImageCommandHandler(IApplicationDbContext context, IFileStorageService fileStorageService)
    {
        _context = context;
        _fileStorageService = fileStorageService;
    }

    public async Task<Result<RecipeImageDto>> Handle(UploadRecipeImageCommand request, CancellationToken cancellationToken)
    {
        // 1. Kiểm tra File (5MB, MIME, Magic Bytes)
        var (isValid, errorMessage) = await FileValidationHelper.ValidateImageAsync(request.File);
        if (!isValid)
        {
            return Result<RecipeImageDto>.Failure("INVALID_FILE", errorMessage!);
        }

        // 2. Kiểm tra tồn tại công thức & Phân quyền
        var recipe = await _context.Recipes
            .Include(r => r.Images)
            .FirstOrDefaultAsync(r => r.Id == request.RecipeId, cancellationToken);

        if (recipe == null)
        {
            return Result<RecipeImageDto>.Failure("NOT_FOUND", "Không tìm thấy công thức.");
        }

        var userIdClaim = request.CurrentUser.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var isOwner = Guid.TryParse(userIdClaim, out var userId) && recipe.AuthorId == userId;
        var isAdmin = request.CurrentUser.IsInRole("Admin");

        if (!isOwner && !isAdmin)
        {
            return Result<RecipeImageDto>.Failure("FORBIDDEN", "Bạn không có quyền quản lý ảnh của công thức này.");
        }

        // 3. Upload file lên MinIO
        var fileUrl = await _fileStorageService.UploadFileAsync(request.File, "recipes", cancellationToken);

        // 4. Xử lý logic IsPrimary (Nếu chọn primary thì bỏ primary của các ảnh khác)
        if (request.IsPrimary || !recipe.Images.Any())
        {
            foreach (var img in recipe.Images)
            {
                img.IsPrimary = false;
            }
        }

        var newImage = new RecipeImage
        {
            Id = Guid.NewGuid(),
            RecipeId = recipe.Id,
            OriginalUrl = fileUrl,
            AltText = request.AltText,
            IsPrimary = request.IsPrimary || !recipe.Images.Any(),
            DisplayOrder = recipe.Images.Count + 1,
            CreatedAt = DateTime.UtcNow
        };

        _context.RecipeImages.Add(newImage);
        await _context.SaveChangesAsync(cancellationToken);

        var dto = new RecipeImageDto
        {
            Id = newImage.Id,
            OriginalUrl = newImage.OriginalUrl,
            ThumbnailUrl = newImage.ThumbnailUrl,
            AltText = newImage.AltText,
            IsPrimary = newImage.IsPrimary,
            DisplayOrder = newImage.DisplayOrder
        };

        return Result<RecipeImageDto>.Success(dto);
    }
}