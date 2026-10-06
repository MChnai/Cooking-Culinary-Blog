using FluentValidation;

namespace CulinaryBlog.Application.Features.Auth.Commands.UpdateProfile;

public class UpdateProfileCommandValidator : AbstractValidator<UpdateProfileCommand>
{
    public UpdateProfileCommandValidator()
    {
        RuleFor(x => x.UserId)
            .NotEmpty().WithMessage("User identifier is required.");

        When(x => x.FullName != null, () =>
        {
            RuleFor(x => x.FullName)
                .NotEmpty().WithMessage("Full name cannot be empty.")
                .Length(2, 100).WithMessage("Full name must be between 2 and 100 characters.");
        });

        When(x => !string.IsNullOrWhiteSpace(x.AvatarUrl), () =>
        {
            RuleFor(x => x.AvatarUrl)
                .Must(url => Uri.TryCreate(url, UriKind.Absolute, out var uriResult) &&
                             (uriResult.Scheme == Uri.UriSchemeHttp || uriResult.Scheme == Uri.UriSchemeHttps))
                .WithMessage("Avatar URL must be a valid HTTP or HTTPS web address.");
        });
    }
}
