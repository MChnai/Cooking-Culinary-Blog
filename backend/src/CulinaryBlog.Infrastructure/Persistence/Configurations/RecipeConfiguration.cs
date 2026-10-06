using CulinaryBlog.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CulinaryBlog.Infrastructure.Persistence.Configurations;

public class RecipeConfiguration : IEntityTypeConfiguration<Recipe>
{
    public void Configure(EntityTypeBuilder<Recipe> builder)
    {
        builder.ToTable("recipes");

        builder.HasKey(r => r.Id);
        builder.Property(r => r.Id).HasColumnName("id");
        builder.Property(r => r.Title).HasColumnName("title").HasMaxLength(255).IsRequired();
        builder.Property(r => r.Slug).HasColumnName("slug").HasMaxLength(280).IsRequired();
        builder.Property(r => r.Description).HasColumnName("description");
        builder.Property(r => r.Instructions).HasColumnName("instructions");
        builder.Property(r => r.Notes).HasColumnName("notes");

        builder.Property(r => r.PrepTimeMinutes).HasColumnName("prep_time_minutes").HasDefaultValue(0);
        builder.Property(r => r.CookTimeMinutes).HasColumnName("cook_time_minutes").HasDefaultValue(0);
        builder.Property(r => r.Servings).HasColumnName("servings").HasDefaultValue(4);
        builder.Property(r => r.Difficulty).HasColumnName("difficulty").HasConversion<string>().HasMaxLength(20);
        builder.Property(r => r.Status).HasColumnName("status").HasConversion<string>().HasMaxLength(20);

        builder.Property(r => r.PublishedAt).HasColumnName("published_at");
        builder.Property(r => r.ViewCount).HasColumnName("view_count").HasDefaultValue(0);
        builder.Property(r => r.RatingAverage).HasColumnName("rating_average").HasPrecision(3, 2).HasDefaultValue(0);
        builder.Property(r => r.RatingCount).HasColumnName("rating_count").HasDefaultValue(0);

        builder.Property(r => r.CategoryId).HasColumnName("category_id");
        builder.Property(r => r.AuthorId).HasColumnName("author_id");

        builder.Property(r => r.CreatedAt).HasColumnName("created_at").HasDefaultValueSql("NOW()");
        builder.Property(r => r.UpdatedAt).HasColumnName("updated_at");
        builder.Property(r => r.IsDeleted).HasColumnName("is_deleted").HasDefaultValue(false);
        builder.Property(r => r.DeletedAt).HasColumnName("deleted_at");

        builder.Property(r => r.RowVersion)
            .HasColumnName("xmin")
            .HasColumnType("xid")
            .ValueGeneratedOnAddOrUpdate()
            .IsConcurrencyToken();

        // Owned Entity Nutrition
        builder.OwnsOne(r => r.Nutrition, nb =>
        {
            nb.Property(n => n.Calories).HasColumnName("calories").HasDefaultValue(0);
            nb.Property(n => n.Protein).HasColumnName("protein").HasPrecision(6, 2).HasDefaultValue(0);
            nb.Property(n => n.Carbohydrates).HasColumnName("carbohydrates").HasPrecision(6, 2).HasDefaultValue(0);
            nb.Property(n => n.Fat).HasColumnName("fat").HasPrecision(6, 2).HasDefaultValue(0);
            nb.Property(n => n.Fiber).HasColumnName("fiber").HasPrecision(6, 2);
            nb.Property(n => n.Sugar).HasColumnName("sugar").HasPrecision(6, 2);
            nb.Property(n => n.Sodium).HasColumnName("sodium").HasPrecision(8, 2);
        });

        // Relationships
        builder.HasOne(r => r.Category)
            .WithMany(c => c.Recipes)
            .HasForeignKey(r => r.CategoryId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(r => r.Author)
            .WithMany(u => u.Recipes)
            .HasForeignKey(r => r.AuthorId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasMany(r => r.Ingredients)
            .WithOne(i => i.Recipe)
            .HasForeignKey(i => i.RecipeId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasMany(r => r.Steps)
            .WithOne(s => s.Recipe)
            .HasForeignKey(s => s.RecipeId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasMany(r => r.Images)
            .WithOne(img => img.Recipe)
            .HasForeignKey(img => img.RecipeId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasIndex(r => r.Slug).IsUnique();
        builder.HasIndex(r => r.CategoryId);
        builder.HasIndex(r => r.AuthorId);
        builder.HasIndex(r => r.Status);
        builder.HasIndex(r => r.PublishedAt);

        builder.HasQueryFilter(r => !r.IsDeleted);
    }
}
