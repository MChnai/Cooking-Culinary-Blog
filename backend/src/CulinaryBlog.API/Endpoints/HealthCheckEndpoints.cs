using CulinaryBlog.Infrastructure.Persistence;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;

namespace CulinaryBlog.API.Endpoints;

public static class HealthCheckEndpoints
{
    public static void MapHealthCheckEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/health")
                       .WithTags("Health Checks"); // Nhóm hiển thị trên Scalar UI

        group.MapGet("/db-check", async (ApplicationDbContext dbContext) =>
        {
            try
            {
                bool canConnect = await dbContext.Database.CanConnectAsync();

                if (!canConnect)
                {
                    return Results.Problem(
                        detail: "Không thể kết nối đến PostgreSQL Docker.", 
                        statusCode: 500);
                }

                var databaseName = dbContext.Database.GetDbConnection().Database;
                
                return Results.Ok(new
                {
                    Status = "Healthy",
                    Message = "Kết nối CSDL PostgreSQL thành công!",
                    Database = databaseName,
                    Timestamp = DateTime.UtcNow
                });
            }
            catch (Exception ex)
            {
                return Results.Problem(
                    detail: $"Lỗi kết nối CSDL: {ex.Message}", 
                    statusCode: 500);
            }
        })
        .WithSummary("Kiểm tra kết nối PostgreSQL Docker")
        .WithDescription("Phương thức GET này dùng để test xem Backend có truy vấn được CSDL Postgres hay không.");
    }
}