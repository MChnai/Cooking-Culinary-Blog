export const RecipeStatus = {
  Draft: 0,
  Published: 1,
} as const;

export type RecipeStatus = (typeof RecipeStatus)[keyof typeof RecipeStatus];

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Ingredient {
  name: string;
  amount: string;
  unit: string;
}

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  coverImageUrl?: string;
  thumbnailUrl?: string;
  cookingTimeMinutes: number;
  servings: number;
  status: RecipeStatus;
  authorId: string;
  authorName: string;
  categoryId: string;
  categoryName: string;
  ingredients: Ingredient[];
  createdAt: string;
  updatedAt?: string;
}