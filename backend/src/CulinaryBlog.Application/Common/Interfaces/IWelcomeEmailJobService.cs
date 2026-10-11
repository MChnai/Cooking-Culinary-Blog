namespace CulinaryBlog.Application.Common.Interfaces;

public interface IWelcomeEmailJobService
{
    void EnqueueWelcomeEmail(string toEmail, string username);
}