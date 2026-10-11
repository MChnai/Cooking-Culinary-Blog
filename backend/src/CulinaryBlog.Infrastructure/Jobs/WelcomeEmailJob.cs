using CulinaryBlog.Application.Common.Interfaces;
using Hangfire;
using Microsoft.Extensions.Logging;

namespace CulinaryBlog.Infrastructure.Jobs;

public class WelcomeEmailJob
{
    private readonly IEmailService _emailService;
    private readonly ILogger<WelcomeEmailJob> _logger;

    public WelcomeEmailJob(IEmailService emailService, ILogger<WelcomeEmailJob> logger)
    {
        _emailService = emailService;
        _logger = logger;
    }

    // Yêu cầu FR-JOB-001: Retry tối đa 3 lần nếu gặp sự cố kết nối SMTP/Mạng
    [AutomaticRetry(Attempts = 3, OnAttemptsExceeded = AttemptsExceededAction.Fail)]
    public async Task ExecuteAsync(string toEmail, string username)
    {
        _logger.LogInformation("Thực thi Hangfire Job [FR-JOB-001]: Gửi email chào mừng tới {Email}", toEmail);
        await _emailService.SendWelcomeEmailAsync(toEmail, username);
    }
}