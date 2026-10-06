using CulinaryBlog.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CulinaryBlog.Infrastructure.Persistence.Configurations;

public class RecipeImageConfiguration : IEntityTypeConfiguration<RecipeImage>
{
    public void Configure(EntityTypeBuilder<RecipeImage> builder)
    {
        builder.ToTable("recipe_images");

        builder.HasKey(img => img.Id);
        builder.Property(img => img.Id).HasColumnName("id");
        builder.Property(img => img.RecipeId).HasColumnName("recipe_id").IsRequired();
        builder.Property(img => img.OriginalUrl).HasColumnName("original_url").HasMaxLength(500).IsRequired();
        builder.Property(img => img.ThumbnailUrl).HasColumnName("thumbnail_url").HasMaxLength(500);
        builder.Property(img => img.AltText).HasColumnName("alt_text").HasMaxLength(200);
        builder.Property(img => img.IsPrimary).HasColumnName("is_primary").HasDefaultValue(false);
        builder.Property(img => img.DisplayOrder).HasColumnName("display_order").HasDefaultValue(0);

        builder.Property(img => img.CreatedAt).HasColumnName("created_at").HasDefaultValueSql("NOW()");
        builder.Property(img => img.UpdatedAt).HasColumnName("updated_at");
        builder.Property(img => img.IsDeleted).HasColumnName("is_deleted").HasDefaultValue(false);
        builder.Property(img => img.DeletedAt).HasColumnName("deleted_at");

        builder.HasOne(img => img.Recipe)
            .WithMany(r => r.Images)
            .HasForeignKey(img => img.RecipeId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasIndex(img => img.RecipeId);
        builder.HasQueryFilter(img => !img.IsDeleted);
    }
}
