namespace CulinaryBlog.Application.Features.Files.DTOs;

public class FileUploadedDto
{
    public string FileName { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
    public string ContentType { get; set; } = string.Empty;
    public long Size { get; set; }
}