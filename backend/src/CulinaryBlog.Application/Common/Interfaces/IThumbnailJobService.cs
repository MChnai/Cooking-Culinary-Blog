namespace CulinaryBlog.Application.Common.Interfaces;

public interface IThumbnailJobService
{
    void EnqueueThumbnailJob(string fileName, string bucketName);
}