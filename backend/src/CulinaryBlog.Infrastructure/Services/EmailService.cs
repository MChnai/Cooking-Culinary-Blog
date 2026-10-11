using CulinaryBlog.Application.Common.Interfaces;
using Microsoft.Extensions.Logging;

namespace CulinaryBlog.Infrastructure.Services;

public class EmailService : IEmailService
{
    private readonly ILogger<EmailService> _logger;

    public EmailService(ILogger<EmailService> logger)
    {
        _logger = logger;
    }

    public async Task SendWelcomeEmailAsync(string toEmail, string username, CancellationToken cancellationToken = default)
    {
        _logger.LogInformation("Đang gửi email chào mừng tới {Email} (Username: {Username})...", toEmail, username);

        // Giả lập logic kết nối SMTP / SendGrid / Mailkit
        await Task.Delay(500, cancellationToken);

        _logger.LogInformation("Đã gửi email chào mừng thành công tới {Email}.", toEmail);
    }
}