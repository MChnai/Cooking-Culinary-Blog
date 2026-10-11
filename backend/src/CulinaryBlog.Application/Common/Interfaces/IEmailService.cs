namespace CulinaryBlog.Application.Common.Interfaces;

public interface IEmailService
{
    Task SendWelcomeEmailAsync(string toEmail, string username, CancellationToken cancellationToken = default);
}