using CulinaryBlog.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CulinaryBlog.Infrastructure.Persistence.Configurations;

public class UserLoginConfiguration : IEntityTypeConfiguration<UserLogin>
{
    public void Configure(EntityTypeBuilder<UserLogin> builder)
    {
        builder.ToTable("user_logins");

        // Đặt Khóa chính phức hợp (Composite Key)
        builder.HasKey(ul => new { ul.LoginProvider, ul.ProviderKey });

        builder.Property(ul => ul.LoginProvider)
            .HasColumnName("login_provider")
            .HasMaxLength(128)
            .IsRequired();

        builder.Property(ul => ul.ProviderKey)
            .HasColumnName("provider_key")
            .HasMaxLength(256)
            .IsRequired();

        builder.Property(ul => ul.ProviderDisplayName)
            .HasColumnName("provider_display_name")
            .HasMaxLength(256);

        builder.Property(ul => ul.UserId)
            .HasColumnName("user_id")
            .IsRequired();

        // Cấu hình mối quan hệ 1-N với ApplicationUser
        builder.HasOne(ul => ul.User)
            .WithMany(u => u.UserLogins)
            .HasForeignKey(ul => ul.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}