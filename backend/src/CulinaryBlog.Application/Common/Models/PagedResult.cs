namespace CulinaryBlog.Application.Common.Models;

public class PagedResult<T>
{
    public IReadOnlyCollection<T> Items { get; init; } = Array.Empty<T>();
    public int PageIndex { get; init; }
    public int PageSize { get; init; }
    public int TotalCount { get; init; }
    public int TotalPages => (int)Math.Ceiling((double)TotalCount / (PageSize > 0 ? PageSize : 1));
    public bool HasPreviousPage => PageIndex > 1;
    public bool HasNextPage => PageIndex < TotalPages;

    // Parameterless constructor phục vụ cho Serialization/Deserialization (System.Text.Json)
    public PagedResult()
    {
    }

    public PagedResult(IReadOnlyCollection<T> items, int count, int pageIndex, int pageSize)
    {
        Items = items;
        TotalCount = count;
        PageIndex = pageIndex;
        PageSize = pageSize;
    }

    public static PagedResult<T> Create(IReadOnlyCollection<T> items, int count, int pageIndex, int pageSize)
    {
        return new PagedResult<T>(items, count, pageIndex, pageSize);
    }
}