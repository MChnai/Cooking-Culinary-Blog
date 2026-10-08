using System.Linq.Expressions;

namespace CulinaryBlog.Application.Common.Interfaces;

public interface IBackgroundJobService
{
    void Enqueue<T>(Expression<Func<T, Task>> methodCall);
}