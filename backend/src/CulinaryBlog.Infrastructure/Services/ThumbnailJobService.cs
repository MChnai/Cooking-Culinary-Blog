using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Infrastructure.Jobs;
using Hangfire;

namespace CulinaryBlog.Infrastructure.Services;

public class ThumbnailJobService : IThumbnailJobService
{
    private readonly IBackgroundJobClient _backgroundJobClient;

    public ThumbnailJobService(IBackgroundJobClient backgroundJobClient)
    {
        _backgroundJobClient = backgroundJobClient;
    }

    public void EnqueueThumbnailJob(string fileName, string bucketName)
    {
        _backgroundJobClient.Enqueue<GenerateThumbnailsJob>(job => job.ExecuteAsync(fileName, bucketName));
    }
}