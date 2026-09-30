import React from 'react';
import { Clock, Flame, Users, BookOpen, Lock } from 'lucide-react';
import { Recipe, RecipeDifficulty, RecipeStatus } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
  showStatusBadge?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onSelect, showStatusBadge = true }) => {
  const primaryImage = recipe.images.find(img => img.isPrimary) || recipe.images[0];
  const imageUrl = primaryImage?.originalUrl || 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80';

  const getDifficultyLabel = (level: RecipeDifficulty) => {
    switch (level) {
      case RecipeDifficulty.Easy:
        return { text: 'Easy', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case RecipeDifficulty.Medium:
        return { text: 'Medium', color: 'bg-amber-50 text-amber-700 border-amber-200' };
      case RecipeDifficulty.Hard:
        return { text: 'Hard', color: 'bg-orange-50 text-orange-700 border-orange-200' };
      case RecipeDifficulty.Expert:
        return { text: 'Expert', color: 'bg-rose-50 text-rose-700 border-rose-200' };
    }
  };

  const getStatusLabel = (status: RecipeStatus) => {
    switch (status) {
      case RecipeStatus.Published:
        return { text: 'Published', color: 'bg-emerald-500 text-white' };
      case RecipeStatus.Draft:
        return { text: 'Draft', color: 'bg-stone-600 text-white' };
      case RecipeStatus.Archived:
        return { text: 'Archived', color: 'bg-amber-700 text-white' };
    }
  };

  const diff = getDifficultyLabel(recipe.difficulty);
  const stat = getStatusLabel(recipe.status);

  return (
    <div
      onClick={() => onSelect(recipe)}
      className="group bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Image thumbnail container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img
          src={imageUrl}
          alt={recipe.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Category Badge */}
        {recipe.category && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-md bg-white/90 backdrop-blur-xs text-stone-800 shadow-xs border border-white/40">
            {recipe.category.name}
          </span>
        )}

        {/* Status Pill if draft/archived or requested */}
        {showStatusBadge && recipe.status !== RecipeStatus.Published && (
          <span
            className={`absolute top-3 right-3 px-2 py-0.5 text-[11px] font-semibold rounded-md shadow-xs flex items-center gap-1 ${stat.color}`}
          >
            <Lock className="w-3 h-3" />
            {stat.text}
          </span>
        )}
      </div>

      {/* Content details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded border ${diff.color}`}>
              {diff.text}
            </span>
            <span className="text-xs text-stone-400">•</span>
            <span className="text-xs text-stone-500 flex items-center gap-1">
              <Clock className="w-3 h-3 text-stone-400" />
              {recipe.prepTime + recipe.cookTime} mins
            </span>
          </div>

          <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
            {recipe.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
            {recipe.description}
          </p>
        </div>

        {/* Footer meta */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-2">
            {recipe.author?.avatarUrl ? (
              <img
                src={recipe.author.avatarUrl}
                alt={recipe.author.displayName}
                className="w-5 h-5 rounded-full object-cover"
              />
            ) : (
              <div className="w-5 h-5 rounded-full bg-stone-200 flex items-center justify-center text-[10px] font-bold text-stone-600">
                {recipe.author?.displayName?.charAt(0) || 'A'}
              </div>
            )}
            <span className="font-medium truncate max-w-[110px] sm:max-w-[140px]">
              {recipe.author?.displayName || 'Author'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-stone-600 font-mono text-[11px]">
              <Users className="w-3 h-3 text-stone-400" />
              {recipe.servings} servings
            </span>
            {recipe.steps?.length > 0 && (
              <span className="flex items-center gap-1 text-stone-600 font-mono text-[11px]">
                <BookOpen className="w-3 h-3 text-stone-400" />
                {recipe.steps.length} steps
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
