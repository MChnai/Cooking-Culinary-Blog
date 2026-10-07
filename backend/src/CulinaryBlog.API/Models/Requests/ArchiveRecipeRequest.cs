namespace CulinaryBlog.API.Models.Requests;

public record ArchiveRecipeRequest
{
    public bool IsArchived { get; init; }
}