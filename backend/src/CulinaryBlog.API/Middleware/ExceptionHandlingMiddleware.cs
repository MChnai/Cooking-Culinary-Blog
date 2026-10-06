using System.Diagnostics;
using System.Text.Json;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;

namespace CulinaryBlog.API.Middleware;

public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionHandlingMiddleware> _logger;

    public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An unhandled exception occurred: {Message}", ex.Message);
            await HandleExceptionAsync(context, ex);
        }
    }

    private static async Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
        context.Response.ContentType = "application/problem+json";

        var traceId = Activity.Current?.Id ?? context.TraceIdentifier;

        if (exception is ValidationException validationException)
        {
            context.Response.StatusCode = StatusCodes.Status422UnprocessableEntity;

            var errors = validationException.Errors
                .GroupBy(e => e.PropertyName)
                .ToDictionary(g => g.Key, g => g.Select(e => e.ErrorMessage).ToArray());

            var problem = new ValidationProblemDetails(errors)
            {
                Type = "https://tools.ietf.org/html/rfc9110#section-15.5.21",
                Title = "Validation Failed",
                Status = StatusCodes.Status422UnprocessableEntity,
                Detail = "One or more validation errors occurred.",
                Instance = context.Request.Path
            };
            problem.Extensions.Add("traceId", traceId);

            await context.Response.WriteAsync(JsonSerializer.Serialize(problem));
            return;
        }

        context.Response.StatusCode = StatusCodes.Status500InternalServerError;

        var defaultProblem = new ProblemDetails
        {
            Type = "https://tools.ietf.org/html/rfc9110#section-15.6.1",
            Title = "An internal server error occurred.",
            Status = StatusCodes.Status500InternalServerError,
            Detail = exception.Message,
            Instance = context.Request.Path
        };
        defaultProblem.Extensions.Add("traceId", traceId);

        await context.Response.WriteAsync(JsonSerializer.Serialize(defaultProblem));
    }
}
