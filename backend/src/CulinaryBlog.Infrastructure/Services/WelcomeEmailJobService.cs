using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Infrastructure.Jobs;
using Hangfire;

namespace CulinaryBlog.Infrastructure.Services;

public class WelcomeEmailJobService : IWelcomeEmailJobService
{
    private readonly IBackgroundJobClient _backgroundJobClient;

    public WelcomeEmailJobService(IBackgroundJobClient backgroundJobClient)
    {
        _backgroundJobClient = backgroundJobClient;
    }

    public void EnqueueWelcomeEmail(string toEmail, string username)
    {
        // Enqueue Fire-and-Forget Job qua Hangfire Client
        _backgroundJobClient.Enqueue<WelcomeEmailJob>(job => job.ExecuteAsync(toEmail, username));
    }
}