namespace CulinaryBlog.Domain.ValueObjects;

public record RecipeNutrition
{
    public int Calories { get; init; }
    public decimal Protein { get; init; }
    public decimal Carbohydrates { get; init; }
    public decimal Fat { get; init; }
    public decimal? Fiber { get; init; }
    public decimal? Sugar { get; init; }
    public decimal? Sodium { get; init; }
}
