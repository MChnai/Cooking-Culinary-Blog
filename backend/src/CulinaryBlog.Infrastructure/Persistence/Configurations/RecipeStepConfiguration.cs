using CulinaryBlog.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CulinaryBlog.Infrastructure.Persistence.Configurations;

public class RecipeStepConfiguration : IEntityTypeConfiguration<RecipeStep>
{
    public void Configure(EntityTypeBuilder<RecipeStep> builder)
    {
        builder.ToTable("recipe_steps");

        builder.HasKey(rs => rs.Id);
        builder.Property(rs => rs.Id).HasColumnName("id");
        builder.Property(rs => rs.RecipeId).HasColumnName("recipe_id").IsRequired();
        builder.Property(rs => rs.StepNumber).HasColumnName("step_number").IsRequired();
        builder.Property(rs => rs.Title).HasColumnName("title").HasMaxLength(200).IsRequired();
        builder.Property(rs => rs.Description).HasColumnName("description").IsRequired();
        builder.Property(rs => rs.TimerMinutes).HasColumnName("timer_minutes");
        builder.Property(rs => rs.ImageUrl).HasColumnName("image_url").HasMaxLength(500);

        builder.Property(rs => rs.CreatedAt).HasColumnName("created_at").HasDefaultValueSql("NOW()");
        builder.Property(rs => rs.UpdatedAt).HasColumnName("updated_at");
        builder.Property(rs => rs.IsDeleted).HasColumnName("is_deleted").HasDefaultValue(false);
        builder.Property(rs => rs.DeletedAt).HasColumnName("deleted_at");

        builder.HasOne(rs => rs.Recipe)
            .WithMany(r => r.Steps)
            .HasForeignKey(rs => rs.RecipeId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasIndex(rs => rs.RecipeId);
        builder.HasIndex(rs => new { rs.RecipeId, rs.StepNumber });
        builder.HasQueryFilter(rs => !rs.IsDeleted);
    }
}
