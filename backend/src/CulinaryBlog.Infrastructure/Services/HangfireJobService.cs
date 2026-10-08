using System.Linq.Expressions;
using CulinaryBlog.Application.Common.Interfaces;
using Hangfire;

namespace CulinaryBlog.Infrastructure.Services;

public class HangfireJobService : IBackgroundJobService
{
    private readonly IBackgroundJobClient _backgroundJobClient;

    public HangfireJobService(IBackgroundJobClient backgroundJobClient)
    {
        _backgroundJobClient = backgroundJobClient;
    }

    public void Enqueue<T>(Expression<Func<T, Task>> methodCall)
    {
        _backgroundJobClient.Enqueue(methodCall);
    }
}