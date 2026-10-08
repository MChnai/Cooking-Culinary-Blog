using Microsoft.AspNetCore.Http;

namespace CulinaryBlog.Application.Common.Helpers;

public static class FileValidationHelper
{
    private static readonly Dictionary<string, List<byte[]>> AllowedImageSignatures = new()
    {
        { "image/jpeg", new List<byte[]> { new byte[] { 0xFF, 0xD8, 0xFF } } },
        { "image/png", new List<byte[]> { new byte[] { 0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A } } },
        { "image/webp", new List<byte[]> { new byte[] { 0x52, 0x49, 0x46, 0x46 } } } // RIFF header
    };

    public static async Task<(bool IsValid, string? ErrorMessage)> ValidateImageAsync(IFormFile file, long maxFileSizeInBytes = 5 * 1024 * 1024)
    {
        if (file == null || file.Length == 0)
        {
            return (false, "File ảnh không được để trống.");
        }

        if (file.Length > maxFileSizeInBytes)
        {
            return (false, "Dung lượng ảnh vượt quá giới hạn 5MB.");
        }

        var contentType = file.ContentType.ToLowerInvariant();
        if (!AllowedImageSignatures.ContainsKey(contentType))
        {
            return (false, "Định dạng ảnh không hỗ trợ. Chỉ chấp nhận JPEG, PNG, WEBP.");
        }

        // Kiểm tra Magic Bytes
        using var stream = file.OpenReadStream();
        using var reader = new BinaryReader(stream);
        var signatures = AllowedImageSignatures[contentType];
        var headerBytes = reader.ReadBytes(signatures.Max(m => m.Length));

        var matchesMagicByte = signatures.Any(signature => 
            headerBytes.Take(signature.Length).SequenceEqual(signature));

        if (!matchesMagicByte)
        {
            return (false, "Nội dung tệp không khớp với định dạng ảnh hợp lệ (Magic Bytes check failed).");
        }

        return (true, null);
    }
}