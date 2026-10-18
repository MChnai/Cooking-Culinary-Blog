export interface ApiEndpointDoc {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  module: 'Authentication' | 'Categories' | 'Recipes' | 'Health & System';
  summary: string;
  authRequired: boolean;
  requiredRole?: string;
  requestSample?: string;
  responseSample: string;
  statusCodes: { code: number; desc: string }[];
}

export const API_ENDPOINTS: ApiEndpointDoc[] = [
  // Authentication
  {
    method: 'POST',
    path: '/api/v1/auth/register',
    module: 'Authentication',
    summary: 'Register new account (FR-AUTH-001) - Automatically assigns Author role, issues JWT & triggers WelcomeEmailJob via Hangfire',
    authRequired: false,
    requestSample: JSON.stringify(
      {
        fullName: 'Nguyen Van Minh',
        email: 'minh.chef@culinaryblog.com',
        userName: 'minhchef',
        password: 'Password123@#',
      },
      null,
      2
    ),
    responseSample: JSON.stringify(
      {
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        refreshToken: 'dGhpc19pc19hX3JhbmRvbV81MTJiaXRfdG9rZW4...',
        expiresAt: '2026-09-15T10:05:00Z',
        user: {
          id: 'usr-8a9d12f',
          fullName: 'Nguyen Van Minh',
          email: 'minh.chef@culinaryblog.com',
          userName: 'minhchef',
          roles: ['Author'],
        },
      },
      null,
      2
    ),
    statusCodes: [
      { code: 201, desc: 'Registered successfully and issued JWT' },
      { code: 409, desc: 'AUTH_EMAIL_EXISTS - Email is already registered' },
      { code: 422, desc: 'VALIDATION_ERROR - Password or input data failed validation' },
    ],
  },
  {
    method: 'POST',
    path: '/api/v1/auth/login',
    module: 'Authentication',
    summary: 'Login with Email/Password (FR-AUTH-002) - Token rotation, anti user-enumeration',
    authRequired: false,
    requestSample: JSON.stringify(
      {
        email: 'admin@culinaryblog.com',
        password: 'AdminPassword123!',
      },
      null,
      2
    ),
    responseSample: JSON.stringify(
      {
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        refreshToken: '4f90a8c2... (7 days valid)',
        expiresIn: 900,
        user: {
          id: 'usr-admin-001',
          displayName: 'Executive Chef Admin',
          roles: ['Admin', 'Author'],
        },
      },
      null,
      2
    ),
    statusCodes: [
      { code: 200, desc: 'Login successful' },
      { code: 401, desc: 'AUTH_INVALID_CREDENTIALS - Invalid email or password' },
      { code: 423, desc: 'LOCKED - Account temporarily locked after 5 failed attempts' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/auth/me',
    module: 'Authentication',
    summary: 'Get current user profile (FR-AUTH-006)',
    authRequired: true,
    responseSample: JSON.stringify(
      {
        id: 'usr-admin-001',
        email: 'admin@culinaryblog.com',
        displayName: 'Executive Chef Admin',
        avatarUrl: 'https://images.unsplash.com/...',
        bio: 'Executive Chef with over 15 years in Michelin-starred establishments.',
        roles: ['Admin', 'Author'],
        emailConfirmed: true,
      },
      null,
      2
    ),
    statusCodes: [
      { code: 200, desc: 'Success' },
      { code: 401, desc: 'Unauthorized or token expired' },
    ],
  },

  // Categories
  {
    method: 'GET',
    path: '/api/v1/categories',
    module: 'Categories',
    summary: 'Get list of categories (FR-CAT-001) - Cached with IMemoryCache TTL 60m',
    authRequired: false,
    responseSample: JSON.stringify(
      [
        {
          id: 'cat-001',
          name: 'Main Courses',
          slug: 'main-courses',
          description: 'Hearty, wholesome main dishes for family dinners.',
          recipeCount: 3,
        },
        {
          id: 'cat-003',
          name: 'Noodles & Broths',
          slug: 'noodles-and-broths',
          description: 'Artisanal broths and regional noodle specialties.',
          recipeCount: 2,
        },
      ],
      null,
      2
    ),
    statusCodes: [{ code: 200, desc: 'Success' }],
  },
  {
    method: 'POST',
    path: '/api/v1/categories',
    module: 'Categories',
    summary: 'Create new category (FR-CAT-003) - Requires Admin role, auto-generates slug',
    authRequired: true,
    requiredRole: 'Admin',
    requestSample: JSON.stringify(
      {
        name: 'Artisan Pastry & Baking',
        description: 'French croissants, sourdough, and patisserie creations.',
        imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      },
      null,
      2
    ),
    responseSample: JSON.stringify(
      {
        id: 'cat-9b2f44',
        name: 'Artisan Pastry & Baking',
        slug: 'artisan-pastry-and-baking',
        description: 'French croissants, sourdough, and patisserie creations.',
        recipeCount: 0,
      },
      null,
      2
    ),
    statusCodes: [
      { code: 201, desc: 'Category created successfully, cache invalidated' },
      { code: 403, desc: 'Forbidden - Requires Admin role' },
      { code: 409, desc: 'CATEGORY_NAME_EXISTS - Category name or slug already exists' },
    ],
  },
  {
    method: 'DELETE',
    path: '/api/v1/categories/{id}',
    module: 'Categories',
    summary: 'Delete category (FR-CAT-005) - Soft constraint: forbidden if recipes still attached',
    authRequired: true,
    requiredRole: 'Admin',
    responseSample: '{} (204 No Content)',
    statusCodes: [
      { code: 204, desc: 'Category deleted successfully' },
      { code: 409, desc: 'CATEGORY_DELETE_HAS_RECIPES - Category contains active recipes' },
      { code: 404, desc: 'CATEGORY_NOT_FOUND' },
    ],
  },

  // Recipes
  {
    method: 'GET',
    path: '/api/v1/recipes',
    module: 'Recipes',
    summary: 'Paginated recipe catalog with filters & sorting (FR-RCP-001)',
    authRequired: false,
    responseSample: JSON.stringify(
      {
        items: [
          {
            id: 'rcp-001',
            title: 'Authentic Hanoi Seared Beef Pho',
            slug: 'authentic-hanoi-beef-pho',
            prepTime: 40,
            cookTime: 180,
            difficulty: 3,
            status: 1,
            categoryName: 'Noodles & Broths',
            authorName: 'Chef Michael Nguyen',
          },
        ],
        totalCount: 6,
        page: 1,
        pageSize: 12,
        totalPages: 1,
        hasNextPage: false,
        hasPreviousPage: false,
      },
      null,
      2
    ),
    statusCodes: [
      { code: 200, desc: 'Success' },
      { code: 422, desc: 'Invalid pagination or filter parameters' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/recipes/search?q={keyword}',
    module: 'Recipes',
    summary: 'PostgreSQL Full-Text Search with tsvector + unaccent + GIN indexing (FR-SRCH-001)',
    authRequired: false,
    responseSample: JSON.stringify(
      {
        items: [
          {
            id: 'rcp-001',
            title: 'Authentic Hanoi Seared Beef Pho',
            relevanceScore: 85,
            slug: 'authentic-hanoi-beef-pho',
          },
        ],
        totalCount: 1,
      },
      null,
      2
    ),
    statusCodes: [
      { code: 200, desc: 'Success' },
      { code: 422, desc: 'Search query too short (< 2 characters)' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/recipes/{slug}',
    module: 'Recipes',
    summary: 'Get recipe detail by slug (FR-RCP-002) - Eager loading steps, ingredients, nutrition, author',
    authRequired: false,
    responseSample: JSON.stringify(
      {
        id: 'rcp-001',
        title: 'Authentic Hanoi Seared Beef Pho',
        slug: 'authentic-hanoi-beef-pho',
        prepTime: 40,
        cookTime: 180,
        servings: 4,
        nutrition: { calories: 520, protein: 34, carbohydrates: 62, fat: 14 },
        steps: [{ stepNumber: 1, title: 'Blanch and prepare beef bones', timerMinutes: 10 }],
        ingredients: [{ name: 'Fresh rice pho noodles', quantity: 600, unit: 'gram' }],
        rowVersion: 'AAAAAAAAB9A=',
      },
      null,
      2
    ),
    statusCodes: [
      { code: 200, desc: 'Success' },
      { code: 404, desc: 'RECIPE_NOT_FOUND' },
      { code: 403, desc: 'RECIPE_FORBIDDEN - Draft recipes only accessible to author or Admin' },
    ],
  },
  {
    method: 'POST',
    path: '/api/v1/recipes',
    module: 'Recipes',
    summary: 'Create new recipe (FR-RCP-003) - Default status Draft, auto slug, dispatch MediatR CreateRecipeCommand',
    authRequired: true,
    requiredRole: 'Author',
    requestSample: JSON.stringify(
      {
        title: 'Fresh Rolled Steamed Rice Sheets',
        description: 'Silky steamed rice crepes filled with seasoned minced pork and wood-ear mushrooms.',
        categoryId: 'cat-003',
        prepTime: 30,
        cookTime: 20,
        servings: 4,
        difficulty: 2,
        steps: [
          { stepNumber: 1, title: 'Prepare the batter', description: 'Whisk rice flour, tapioca starch, water, and oil until smooth.' },
        ],
        ingredients: [
          { name: 'Rice flour', quantity: 200, unit: 'gram' },
        ],
      },
      null,
      2
    ),
    responseSample: JSON.stringify(
      {
        id: 'rcp-72fa91',
        title: 'Fresh Rolled Steamed Rice Sheets',
        slug: 'fresh-rolled-steamed-rice-sheets',
        status: 0, // Draft
      },
      null,
      2
    ),
    statusCodes: [
      { code: 201, desc: 'Recipe created successfully (Draft status)' },
      { code: 401, desc: 'Unauthorized' },
      { code: 422, desc: 'VALIDATION_ERROR' },
    ],
  },
  {
    method: 'PATCH',
    path: '/api/v1/recipes/{id}/publish',
    module: 'Recipes',
    summary: 'Publish recipe (FR-RCP-005) - Enforces business rule: at least 1 step & 1 ingredient',
    authRequired: true,
    requiredRole: 'Owner / Admin',
    responseSample: JSON.stringify({ status: 1, publishedAt: '2026-09-15T09:40:00Z' }, null, 2),
    statusCodes: [
      { code: 200, desc: 'Published successfully' },
      { code: 400, desc: 'RECIPE_PUBLISH_INCOMPLETE - Missing required steps or ingredients' },
      { code: 403, desc: 'RECIPE_FORBIDDEN - Not the recipe owner or Admin' },
    ],
  },

  // Health
  {
    method: 'GET',
    path: '/health',
    module: 'Health & System',
    summary: 'System health check (FR-OBS-001) - Verifies PostgreSQL 16, Redis 7, MinIO S3',
    authRequired: false,
    responseSample: JSON.stringify(
      {
        status: 'Healthy',
        totalDuration: '00:00:00.0123512',
        entries: {
          npgsql: { status: 'Healthy', description: 'PostgreSQL 16 active on port 5432' },
          redis: { status: 'Healthy', description: 'Redis 7 ping OK on port 6379' },
          minio: { status: 'Healthy', description: 'MinIO S3 bucket culinary-blog accessible' },
        },
      },
      null,
      2
    ),
    statusCodes: [
      { code: 200, desc: 'Healthy' },
      { code: 503, desc: 'Unhealthy' },
    ],
  },
];

export const CSHARP_CLEAN_ARCHITECTURE_SNIPPETS = {
  domainRecipe: `// ==========================================
// 1. DOMAIN LAYER: CulinaryBlog.Domain/Entities/Recipe.cs
// Zero third-party dependencies outside of .NET BCL
// ==========================================
namespace CulinaryBlog.Domain.Entities;

public class Recipe : BaseEntity
{
    public string Title { get; private set; } = null!;
    public string Slug { get; private set; } = null!;
    public string Description { get; private set; } = null!;
    public string Instructions { get; private set; } = null!;
    public int PrepTime { get; private set; } // minutes
    public int CookTime { get; private set; } // minutes
    public int Servings { get; private set; }
    public RecipeDifficulty Difficulty { get; private set; }
    public RecipeStatus Status { get; private set; }
    public DateTime? PublishedAt { get; private set; }

    // Foreign Keys & Navigations
    public Guid CategoryId { get; private set; }
    public virtual Category Category { get; private set; } = null!;
    public string AuthorId { get; private set; } = null!;
    public virtual ApplicationUser Author { get; private set; } = null!;

    // Owned Entity (Columns embedded in Recipes table)
    public RecipeNutrition? Nutrition { get; private set; }

    // Collections
    public virtual ICollection<RecipeStep> Steps { get; private set; } = new List<RecipeStep>();
    public virtual ICollection<RecipeIngredient> Ingredients { get; private set; } = new List<RecipeIngredient>();
    public virtual ICollection<RecipeImage> Images { get; private set; } = new List<RecipeImage>();

    // PostgreSQL tsvector computed column
    public NpgsqlTypes.NpgsqlTsVector? SearchVector { get; private set; }

    public static Recipe Create(string title, string description, Guid categoryId, string authorId,
        int prepTime, int cookTime, int servings, RecipeDifficulty difficulty)
    {
        return new Recipe
        {
            Id = Guid.NewGuid(),
            Title = title,
            Slug = SlugHelper.Generate(title),
            Description = description,
            CategoryId = categoryId,
            AuthorId = authorId,
            PrepTime = prepTime,
            CookTime = cookTime,
            Servings = servings,
            Difficulty = difficulty,
            Status = RecipeStatus.Draft, // Default is Draft according to FR-RCP-003
            CreatedAt = DateTime.UtcNow
        };
    }

    public void Publish()
    {
        if (!Steps.Any() || !Ingredients.Any())
            throw new DomainException("A recipe must have at least 1 step and 1 ingredient before publishing.");

        Status = RecipeStatus.Published;
        PublishedAt = DateTime.UtcNow;
        UpdatedAt = DateTime.UtcNow;
    }
}`,

  applicationMediatr: `// ==========================================
// 2. APPLICATION LAYER: CulinaryBlog.Application/Features/Recipes/Commands/CreateRecipeCommand.cs
// CQRS Pattern with MediatR + FluentValidation
// ==========================================
namespace CulinaryBlog.Application.Features.Recipes.Commands;

public record CreateRecipeCommand(
    string Title,
    string Description,
    Guid CategoryId,
    int PrepTimeMinutes,
    int CookTimeMinutes,
    int Servings,
    RecipeDifficulty Difficulty,
    List<CreateRecipeStepDto>? Steps,
    List<CreateRecipeIngredientDto>? Ingredients
) : IRequest<RecipeDto>, ICacheInvalidator;

public class CreateRecipeCommandValidator : AbstractValidator<CreateRecipeCommand>
{
    public CreateRecipeCommandValidator()
    {
        RuleFor(x => x.Title).NotEmpty().Length(5, 200);
        RuleFor(x => x.Description).NotEmpty().MaximumLength(2000);
        RuleFor(x => x.PrepTimeMinutes).GreaterThan(0);
        RuleFor(x => x.CookTimeMinutes).GreaterThanOrEqualTo(0);
        RuleFor(x => x.Servings).GreaterThan(0);
        RuleFor(x => x.CategoryId).NotEmpty();
    }
}

public class CreateRecipeCommandHandler : IRequestHandler<CreateRecipeCommand, RecipeDto>
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly ICurrentUser _currentUser;
    private readonly IBackgroundJobClient _backgroundJobs;

    public CreateRecipeCommandHandler(IUnitOfWork uow, ICurrentUser user, IBackgroundJobClient jobs)
    {
        _unitOfWork = uow;
        _currentUser = user;
        _backgroundJobs = jobs;
    }

    public async Task<RecipeDto> Handle(CreateRecipeCommand request, CancellationToken ct)
    {
        var category = await _unitOfWork.Categories.GetByIdAsync(request.CategoryId, ct)
            ?? throw new NotFoundException($"Category {request.CategoryId} not found.");

        var recipe = Recipe.Create(
            request.Title, request.Description, request.CategoryId,
            _currentUser.UserId!, request.PrepTimeMinutes,
            request.CookTimeMinutes, request.Servings, request.Difficulty);

        await _unitOfWork.Recipes.AddAsync(recipe, ct);
        await _unitOfWork.SaveChangesAsync(ct);

        // Trigger asynchronous Hangfire background job to generate thumbnails and index
        _backgroundJobs.Enqueue<IFileStorageService>(s => s.OptimizeRecipeAssetsAsync(recipe.Id));

        return recipe.ToDto();
    }
}`,

  presentationMinimalApi: `// ==========================================
// 3. PRESENTATION LAYER: CulinaryBlog.API/Endpoints/RecipesEndpoints.cs
// ASP.NET 10 Core Minimal APIs with MapGroup & TypedResults
// ==========================================
namespace CulinaryBlog.API.Endpoints;

public static class RecipesEndpoints
{
    public static RouteGroupBuilder MapRecipesEndpoints(this RouteGroupBuilder group)
    {
        group.MapGet("/", async (
            [AsParameters] RecipeQueryParams query,
            IMediator mediator) =>
        {
            var result = await mediator.Send(new GetRecipesQuery(query));
            return TypedResults.Ok(result);
        })
        .WithName("GetRecipes")
        .CacheOutput("RecipeList"); // .NET 10 Output Cache

        group.MapGet("/{slug}", async (string slug, IMediator mediator) =>
        {
            var recipe = await mediator.Send(new GetRecipeBySlugQuery(slug));
            return TypedResults.Ok(recipe);
        })
        .WithName("GetRecipeBySlug")
        .CacheOutput("RecipeDetail");

        group.MapGet("/search", async (
            [FromQuery] string q,
            [FromQuery] int page,
            [FromQuery] int pageSize,
            IMediator mediator) =>
        {
            var results = await mediator.Send(new SearchRecipesQuery(q, page, pageSize));
            return TypedResults.Ok(results);
        })
        .WithName("SearchRecipes");

        group.MapPost("/", async (
            CreateRecipeCommand command,
            IMediator mediator) =>
        {
            var created = await mediator.Send(command);
            return TypedResults.Created($"/api/v1/recipes/{created.Slug}", created);
        })
        .RequireAuthorization("AuthorPolicy") // RBAC
        .AddEndpointFilter<ValidationFilter<CreateRecipeCommand>>();

        group.MapPatch("/{id:guid}/publish", async (
            Guid id,
            IMediator mediator) =>
        {
            var result = await mediator.Send(new PublishRecipeCommand(id, IsPublish: true));
            return TypedResults.Ok(result);
        })
        .RequireAuthorization("AuthorPolicy");

        return group;
    }
}`,

  postgresSchemaDdl: `-- =========================================================
-- 4. DATABASE: PostgreSQL 16 Schema with DDL, tsvector & triggers
-- Database: culinary_blog_db (PostgreSQL 16)
-- =========================================================

-- Enable required extensions according to CONS-006 & FR-SRCH-001
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "unaccent";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Categories Table
CREATE TABLE "Categories" (
    "Id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "Name" VARCHAR(100) NOT NULL,
    "Slug" VARCHAR(120) NOT NULL UNIQUE,
    "Description" TEXT NULL,
    "ImageUrl" VARCHAR(500) NULL,
    "OrderIndex" INT NOT NULL DEFAULT 0,
    "CreatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "UpdatedAt" TIMESTAMPTZ NULL,
    "IsDeleted" BOOLEAN NOT NULL DEFAULT FALSE,
    "RowVersion" BYTEA NOT NULL DEFAULT decode('00000000', 'hex')
);
CREATE UNIQUE INDEX "IDX_Category_Slug" ON "Categories"("Slug") WHERE "IsDeleted" = FALSE;

-- Recipes Table with Owned Entity Nutrition & tsvector
CREATE TABLE "Recipes" (
    "Id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "Title" VARCHAR(200) NOT NULL,
    "Slug" VARCHAR(220) NOT NULL UNIQUE,
    "Description" TEXT NOT NULL,
    "Instructions" TEXT NOT NULL,
    "PrepTime" INT NOT NULL CHECK ("PrepTime" > 0),
    "CookTime" INT NOT NULL CHECK ("CookTime" >= 0),
    "Servings" INT NOT NULL CHECK ("Servings" > 0),
    "Difficulty" SMALLINT NOT NULL DEFAULT 1, -- 1: Easy, 2: Medium, 3: Hard, 4: Expert
    "Status" SMALLINT NOT NULL DEFAULT 0,     -- 0: Draft, 1: Published, 2: Archived
    "PublishedAt" TIMESTAMPTZ NULL,
    "CategoryId" UUID NOT NULL REFERENCES "Categories"("Id") ON DELETE RESTRICT,
    "AuthorId" VARCHAR(450) NOT NULL REFERENCES "AspNetUsers"("Id"),
    
    -- Owned Entity: RecipeNutrition (embedded columns)
    "Nutrition_Calories" DECIMAL(8,2) NULL,
    "Nutrition_Protein" DECIMAL(8,2) NULL,
    "Nutrition_Carbohydrates" DECIMAL(8,2) NULL,
    "Nutrition_Fat" DECIMAL(8,2) NULL,
    "Nutrition_Fiber" DECIMAL(8,2) NULL,
    "Nutrition_Sodium" DECIMAL(8,2) NULL,

    -- Full-Text Search tsvector
    "SearchVector" TSVECTOR NULL,

    "CreatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "UpdatedAt" TIMESTAMPTZ NULL,
    "IsDeleted" BOOLEAN NOT NULL DEFAULT FALSE,
    "RowVersion" BYTEA NOT NULL
);

-- Full-Text Search GIN Index
CREATE INDEX "IDX_Recipe_Search" ON "Recipes" USING GIN("SearchVector");
CREATE INDEX "IDX_Recipe_Slug" ON "Recipes"("Slug") WHERE "IsDeleted" = FALSE;
CREATE INDEX "IDX_Recipe_CategoryId" ON "Recipes"("CategoryId");
CREATE INDEX "IDX_Recipe_AuthorId" ON "Recipes"("AuthorId");

-- PostgreSQL Trigger automatically updates SearchVector using unaccent
CREATE OR REPLACE FUNCTION recipes_search_vector_trigger() RETURNS trigger AS $$
BEGIN
  new."SearchVector" :=
     setweight(to_tsvector('english', unaccent(coalesce(new."Title", ''))), 'A') ||
     setweight(to_tsvector('english', unaccent(coalesce(new."Description", ''))), 'B');
  return new;
END
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_recipes_update_search_vector
BEFORE INSERT OR UPDATE ON "Recipes"
FOR EACH ROW EXECUTE FUNCTION recipes_search_vector_trigger();`,

  programMinimalApi: `// =========================================================
// 5. ASP.NET 10 MINIMAL APIS: Program.cs (.NET 10.0 / C# 14)
// =========================================================
using System.Text;
using CulinaryBlog.API.Endpoints;
using CulinaryBlog.API.Middleware;
using CulinaryBlog.Application;
using CulinaryBlog.Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// 1. Clean Architecture Layers Dependency Injection
builder.Services.AddApplication();
builder.Services.AddInfrastructure(builder.Configuration);

// 2. RFC 7807 Problem Details
builder.Services.AddProblemDetails();

// 3. OpenAPI 3.1 & Scalar Integration (.NET 10 Native OpenAPI)
builder.Services.AddOpenApi();

// 4. In-Memory Caching & Output Caching
builder.Services.AddMemoryCache();

// 5. JWT Authentication & Authorization
var jwtKey = builder.Configuration["Jwt:SecretKey"] ?? "super-secret-key-that-is-at-least-32-chars-long-123456";
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"] ?? "CulinaryBlog.API",
            ValidAudience = builder.Configuration["Jwt:Audience"] ?? "CulinaryBlog.Client",
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey))
        };
    });

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("AdminOnly", policy => policy.RequireRole("Admin"));
    options.AddPolicy("AuthorOrAdmin", policy => policy.RequireRole("Admin", "Author"));
});

// 6. CORS for Frontend Client (Next.js / Vite)
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure Middleware Pipeline
app.UseMiddleware<ExceptionHandlingMiddleware>();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference(options =>
    {
        options.WithTitle("Culinary Blog .NET 10 Minimal APIs")
               .WithTheme(ScalarTheme.Moon)
               .WithDefaultHttpClient(ScalarTarget.CSharp, ScalarClient.HttpClient);
    });
}

app.UseCors();
app.UseAuthentication();
app.UseAuthorization();

// Map Minimal APIs Route Groups
var apiV1 = app.MapGroup("/api/v1");

apiV1.MapGroup("/recipes").MapRecipeEndpoints().WithTags("Recipes");
apiV1.MapGroup("/categories").MapCategoryEndpoints().WithTags("Categories");
apiV1.MapGroup("/auth").MapAuthEndpoints().WithTags("Authentication");

app.MapGet("/health", () => TypedResults.Ok(new
{
    status = "Healthy",
    framework = ".NET 10.0 Minimal APIs",
    database = "PostgreSQL 16",
    timestamp = DateTime.UtcNow
})).WithTags("System");

app.Run();`,

  dockerCompose: `# =========================================================
# 6. DOCKER COMPOSE: ASP.NET 10 & PostgreSQL 16
# =========================================================
services:
  postgres:
    image: postgres:16-alpine
    container_name: culinaryblog-postgres
    restart: unless-stopped
    environment:
      POSTGRES_DB: culinaryblog
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
      - ./scripts/init_postgresql16_schema.sql:/docker-entrypoint-initdb.d/01_init.sql:ro
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres -d culinaryblog"]
      interval: 5s
      timeout: 5s
      retries: 5

  api:
    build:
      context: .
      dockerfile: src/CulinaryBlog.API/Dockerfile
    container_name: culinaryblog-api
    restart: unless-stopped
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      ASPNETCORE_ENVIRONMENT: Development
      ConnectionStrings__DefaultConnection: "Host=postgres;Port=5432;Database=culinaryblog;Username=postgres;Password=postgres;Include Error Detail=true"
    ports:
      - "5000:5000"

volumes:
  pgdata:`,
};
