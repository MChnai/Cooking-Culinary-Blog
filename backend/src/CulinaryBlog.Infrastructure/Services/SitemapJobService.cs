using CulinaryBlog.Application.Common.Interfaces;
using CulinaryBlog.Infrastructure.Jobs;
using Hangfire;

namespace CulinaryBlog.Infrastructure.Services;

public class SitemapJobService : ISitemapJobService
{
    private readonly IRecurringJobManager _recurringJobManager;
    private readonly SitemapJob _sitemapJob;

    public SitemapJobService(IRecurringJobManager recurringJobManager, SitemapJob sitemapJob)
    {
        _recurringJobManager = recurringJobManager;
        _sitemapJob = sitemapJob;
    }

    public void ScheduleRecurringSitemapJob()
    {
        // Cron "0 2 * * *": Chạy định kỳ vào 02:00 AM UTC hàng ngày
        _recurringJobManager.AddOrUpdate<SitemapJob>(
            recurringJobId: "sitemap-generation-job",
            methodCall: job => job.ExecuteAsync(CancellationToken.None),
            cronExpression: "0 2 * * *",
            options: new RecurringJobOptions
            {
                TimeZone = TimeZoneInfo.Utc
            }
        );
    }

    public async Task ExecuteSitemapJobAsync(CancellationToken cancellationToken = default)
    {
        await _sitemapJob.ExecuteAsync(cancellationToken);
    }
}