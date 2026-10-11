using System.Security.Claims;
using Serilog.Context;

namespace CulinaryBlog.API.Middlewares;

public class CorrelationIdMiddleware
{
    private const string CorrelationIdHeaderName = "X-Correlation-ID";
    private readonly RequestDelegate _next;

    public CorrelationIdMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // 1. Lấy mã CorrelationId từ Header request gửi lên hoặc khởi tạo Guid mới
        var correlationId = GetCorrelationId(context);

        // 2. Gán CorrelationId vào Response Header trả về cho Client
        context.Response.Headers.TryAdd(CorrelationIdHeaderName, correlationId);

        // 3. Trích xuất UserId từ JWT Claim (nếu người dùng đã đăng nhập)
        var userId = context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value
                     ?? context.User.FindFirst("sub")?.Value
                     ?? "Anonymous";

        var requestPath = context.Request.Path.Value ?? "/";

        // 4. Push các thuộc tính cấu trúc vào Serilog LogContext
        using (LogContext.PushProperty("CorrelationId", correlationId))
        using (LogContext.PushProperty("UserId", userId))
        using (LogContext.PushProperty("RequestPath", requestPath))
        {
            await _next(context);
        }
    }

    private static string GetCorrelationId(HttpContext context)
    {
        if (context.Request.Headers.TryGetValue(CorrelationIdHeaderName, out var correlationId)
            && !string.IsNullOrWhiteSpace(correlationId))
        {
            return correlationId.ToString();
        }

        return Guid.NewGuid().ToString("N");
    }
}