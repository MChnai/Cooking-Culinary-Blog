namespace CulinaryBlog.Application.Common.Interfaces;

public interface ISitemapJobService
{
    void ScheduleRecurringSitemapJob();
    Task ExecuteSitemapJobAsync(CancellationToken cancellationToken = default);
}