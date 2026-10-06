using CulinaryBlog.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CulinaryBlog.Infrastructure.Persistence.Configurations;

public class RecipeIngredientConfiguration : IEntityTypeConfiguration<RecipeIngredient>
{
    public void Configure(EntityTypeBuilder<RecipeIngredient> builder)
    {
        builder.ToTable("recipe_ingredients");

        builder.HasKey(ri => ri.Id);
        builder.Property(ri => ri.Id).HasColumnName("id");
        builder.Property(ri => ri.RecipeId).HasColumnName("recipe_id").IsRequired();
        builder.Property(ri => ri.Name).HasColumnName("name").HasMaxLength(150).IsRequired();
        builder.Property(ri => ri.Quantity).HasColumnName("quantity").HasPrecision(8, 2);
        builder.Property(ri => ri.Unit).HasColumnName("unit").HasMaxLength(50);
        builder.Property(ri => ri.Notes).HasColumnName("notes").HasMaxLength(255);
        builder.Property(ri => ri.OrderIndex).HasColumnName("order_index").HasDefaultValue(0);

        builder.Property(ri => ri.CreatedAt).HasColumnName("created_at").HasDefaultValueSql("NOW()");
        builder.Property(ri => ri.UpdatedAt).HasColumnName("updated_at");
        builder.Property(ri => ri.IsDeleted).HasColumnName("is_deleted").HasDefaultValue(false);
        builder.Property(ri => ri.DeletedAt).HasColumnName("deleted_at");

        builder.HasOne(ri => ri.Recipe)
            .WithMany(r => r.Ingredients)
            .HasForeignKey(ri => ri.RecipeId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasIndex(ri => ri.RecipeId);
        builder.HasQueryFilter(ri => !ri.IsDeleted);
    }
}
