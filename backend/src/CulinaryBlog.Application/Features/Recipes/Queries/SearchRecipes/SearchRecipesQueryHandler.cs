using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Application.Common.Models;
using CulinaryBlog.Application.Features.Recipes.DTOs;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.Application.Features.Recipes.Queries.SearchRecipes;

// DTO tạm để đọc kết quả từ Stored Function
internal class SearchRecipesRawSqlResult
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public float Rank_Score { get; set; }
    public long Total_Records { get; set; }
}

public class SearchRecipesQueryHandler : IRequestHandler<SearchRecipesQuery, Result<PagedResult<RecipeSearchResultDto>>>
{
    private readonly IApplicationDbContext _dbContext;

    public SearchRecipesQueryHandler(IApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Result<PagedResult<RecipeSearchResultDto>>> Handle(SearchRecipesQuery request, CancellationToken cancellationToken)
    {
        int page = request.Page < 1 ? 1 : request.Page;
        int pageSize = request.PageSize is < 1 or > 100 ? 10 : request.PageSize;
        int offset = (page - 1) * pageSize;

        if (string.IsNullOrWhiteSpace(request.Keyword))
        {
            var emptyResult = new PagedResult<RecipeSearchResultDto>(new List<RecipeSearchResultDto>(), 0, page, pageSize);
            return Result<PagedResult<RecipeSearchResultDto>>.Success(emptyResult);
        }

        // EF Core 8: Sử dụng Database.SqlQueryRaw thực thi Stored Function PostgreSQL
        var rawResults = await _dbContext.Database
            .SqlQueryRaw<SearchRecipesRawSqlResult>(
                "SELECT id AS Id, title AS Title, slug AS Slug, description AS Description, rank_score AS Rank_Score, total_records AS Total_Records FROM fn_search_recipes({0}, {1}, {2})",
                request.Keyword.Trim(), pageSize, offset)
            .ToListAsync(cancellationToken);

        if (!rawResults.Any())
        {
            var emptyResult = new PagedResult<RecipeSearchResultDto>(new List<RecipeSearchResultDto>(), 0, page, pageSize);
            return Result<PagedResult<RecipeSearchResultDto>>.Success(emptyResult);
        }

        long totalCount = rawResults.First().Total_Records;

        var items = rawResults.Select(r => new RecipeSearchResultDto
        {
            Id = r.Id,
            Title = r.Title,
            Slug = r.Slug,
            Description = r.Description,
            RankScore = r.Rank_Score
        }).ToList();

        var pagedResult = new PagedResult<RecipeSearchResultDto>(items, (int)totalCount, page, pageSize);
        return Result<PagedResult<RecipeSearchResultDto>>.Success(pagedResult);
    }
}