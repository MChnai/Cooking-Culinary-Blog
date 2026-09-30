export enum RecipeDifficulty {
  Easy = 1,
  Medium = 2,
  Hard = 3,
  Expert = 4,
}

export enum RecipeStatus {
  Draft = 0,
  Published = 1,
  Archived = 2,
}

export type UserRole = 'Guest' | 'Author' | 'Admin';

export interface ApplicationUser {
  id: string;
  email: string;
  userName: string;
  displayName: string;
  avatarUrl?: string;
  bio?: string;
  isActive: boolean;
  emailConfirmed: boolean;
  roles: UserRole[];
  isDeleted?: boolean;
  accessFailedCount?: number;
  lockoutEnd?: string;
  createdAt: string;
}

export interface RecipeNutrition {
  calories?: number;
  protein?: number;
  carbohydrates?: number;
  fat?: number;
  fiber?: number;
  sodium?: number;
}

export interface RecipeStep {
  id: string;
  recipeId: string;
  stepNumber: number;
  title: string;
  description: string;
  timerMinutes?: number;
  imageUrl?: string;
}

export interface RecipeIngredient {
  id: string;
  recipeId: string;
  name: string;
  quantity?: number;
  unit?: string;
  notes?: string;
  orderIndex: number;
}

export interface RecipeImage {
  id: string;
  recipeId: string;
  originalUrl: string;
  mediumUrl?: string;
  thumbnailUrl?: string;
  altText?: string;
  isPrimary: boolean;
  orderIndex: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  orderIndex: number;
  recipeCount?: number;
  createdAt: string;
  updatedAt?: string;
  isDeleted: boolean;
}

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  instructions: string;
  prepTime: number; // minutes
  cookTime: number; // minutes
  servings: number;
  difficulty: RecipeDifficulty;
  status: RecipeStatus;
  categoryId: string;
  category?: Category;
  authorId: string;
  author?: ApplicationUser;
  publishedAt?: string;
  viewCount?: number;
  ratingAverage?: number;
  ratingCount?: number;
  notes?: string;
  nutrition?: RecipeNutrition;
  steps: RecipeStep[];
  ingredients: RecipeIngredient[];
  images: RecipeImage[];
  searchVector?: string;
  createdAt: string;
  updatedAt?: string;
  isDeleted: boolean;
  rowVersion?: string; // concurrency token
}

export interface PagedResult<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface ProblemDetails {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance?: string;
  errors?: Record<string, string[]>;
}

export interface HangfireJob {
  id: string;
  jobName: string;
  type: 'Fire-and-forget' | 'Delayed' | 'Recurring';
  status: 'Enqueued' | 'Processing' | 'Succeeded' | 'Failed' | 'Scheduled';
  triggerReason: string;
  createdAt: string;
  executedAt?: string;
  retryCount: number;
  details?: string;
}

export interface SystemLogEntry {
  id: string;
  timestamp: string;
  level: 'Debug' | 'Information' | 'Warning' | 'Error';
  correlationId: string;
  requestPath: string;
  method: string;
  statusCode: number;
  elapsedMs: number;
  userId?: string;
  message: string;
}

export interface UserDto {
  id: string;
  fullName: string;
  email: string;
  userName: string;
  avatarUrl?: string;
  roles: string[];
}

export interface AuthResponseDto {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
  user: UserDto;
}

export interface RefreshTokenRecord {
  id: string;
  userId: string;
  token: string;
  expiresAt: string;
  isRevoked: boolean;
  revokedAt?: string;
  replacedByToken?: string;
  createdByIp: string;
  createdAt: string;
}

export interface UserProfileDto {
  id: string;
  fullName: string;
  email: string;
  userName: string;
  avatarUrl?: string | null;
  roles: string[];
  emailConfirmed: boolean;
  createdAt: string;
}

export interface UpdateProfileRequestDto {
  fullName?: string;
  avatarUrl?: string;
}
