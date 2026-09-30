import React, { useState, useEffect } from 'react';
import {
  X,
  Clock,
  Users,
  Flame,
  CheckCircle2,
  Play,
  Pause,
  RotateCcw,
  Edit3,
  Share2,
  Globe,
  Trash2,
  Archive,
  Eye,
  Check,
  Code,
  Tag,
  AlertTriangle,
} from 'lucide-react';
import { Recipe, RecipeDifficulty, RecipeStatus, ApplicationUser } from '../types';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  currentUser: ApplicationUser | null;
  onEdit: (recipe: Recipe) => void;
  onPublishToggle: (recipe: Recipe) => void;
  onArchiveToggle: (recipe: Recipe) => void;
  onDelete: (recipe: Recipe) => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  recipe,
  onClose,
  currentUser,
  onEdit,
  onPublishToggle,
  onArchiveToggle,
  onDelete,
}) => {
  if (!recipe) return null;

  // Serving Scaler
  const [servings, setServings] = useState(recipe.servings || 4);
  const scaleRatio = servings / (recipe.servings || 4);

  // Active cooking timer
  const [activeStepTimer, setActiveStepTimer] = useState<number | null>(null);
  const [timerSecondsLeft, setTimerSecondsLeft] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Checked ingredients state
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});

  // Show JSON-LD Schema.org preview
  const [showJsonLd, setShowJsonLd] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Permissions
  const isOwner = currentUser && currentUser.id === recipe.authorId;
  const isAdmin = currentUser && currentUser.roles.includes('Admin');
  const canManage = isOwner || isAdmin;

  // Timer countdown hook
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSecondsLeft > 0) {
      interval = setInterval(() => {
        setTimerSecondsLeft(prev => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSecondsLeft]);

  const startTimerForStep = (stepNumber: number, minutes: number) => {
    setActiveStepTimer(stepNumber);
    setTimerSecondsLeft(minutes * 60);
    setIsTimerRunning(true);
  };

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = (minutes: number) => {
    setTimerSecondsLeft(minutes * 60);
    setIsTimerRunning(false);
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleIngredient = (id: string) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/recipes/${recipe.slug}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // JSON-LD Schema.org Recipe generation (NFR-SEO-001)
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.description,
    image: recipe.images.map(img => img.originalUrl),
    author: {
      '@type': 'Person',
      name: recipe.author?.displayName || 'Culinary Blog Chef',
    },
    datePublished: recipe.publishedAt || recipe.createdAt,
    prepTime: `PT${recipe.prepTime}M`,
    cookTime: `PT${recipe.cookTime}M`,
    totalTime: `PT${recipe.prepTime + recipe.cookTime}M`,
    recipeYield: `${servings} servings`,
    recipeCategory: recipe.category?.name || 'Main Course',
    recipeIngredient: recipe.ingredients.map(
      ing => `${ing.quantity ? Math.round(ing.quantity * scaleRatio * 10) / 10 : ''} ${ing.unit || ''} ${ing.name}`.trim()
    ),
    recipeInstructions: recipe.steps.map(step => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.description,
    })),
    nutrition: recipe.nutrition
      ? {
          '@type': 'NutritionInformation',
          calories: `${recipe.nutrition.calories} kcal`,
          proteinContent: `${recipe.nutrition.protein} g`,
          carbohydrateContent: `${recipe.nutrition.carbohydrates} g`,
          fatContent: `${recipe.nutrition.fat} g`,
        }
      : undefined,
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col my-auto">
        {/* Modal Header Bar */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2 flex-wrap">
            {recipe.category && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-100 text-amber-900">
                {recipe.category.name}
              </span>
            )}
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded ${
                recipe.status === RecipeStatus.Published
                  ? 'bg-emerald-100 text-emerald-800'
                  : recipe.status === RecipeStatus.Draft
                  ? 'bg-stone-200 text-stone-700'
                  : 'bg-amber-100 text-amber-800'
              }`}
            >
              {recipe.status === RecipeStatus.Published
                ? 'Published'
                : recipe.status === RecipeStatus.Draft
                ? 'Draft'
                : 'Archived'}
            </span>
            <span className="text-xs font-mono text-stone-400">/{recipe.slug}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-1.5 text-stone-500 hover:text-stone-800 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
              title="Copy URL"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setShowJsonLd(!showJsonLd)}
              className="p-1.5 text-stone-500 hover:text-stone-800 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
              title="View Schema.org JSON-LD"
            >
              <Code className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* JSON-LD Drawer if open */}
          {showJsonLd && (
            <div className="p-4 bg-stone-900 text-emerald-400 rounded-xl font-mono text-xs overflow-x-auto border border-stone-800">
              <div className="flex items-center justify-between text-stone-400 pb-2 mb-2 border-b border-stone-800 font-sans">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-emerald-400" /> Schema.org Recipe (JSON-LD Markup SEO)
                </span>
                <button
                  onClick={() => setShowJsonLd(false)}
                  className="text-xs text-stone-400 hover:text-white cursor-pointer"
                >
                  Close
                </button>
              </div>
              <pre>{JSON.stringify(jsonLdData, null, 2)}</pre>
            </div>
          )}

          {/* Title & Actions Row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 leading-tight">
                {recipe.title}
              </h1>
              <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
                {recipe.description}
              </p>
            </div>

            {/* Owner/Admin Action Toolbar */}
            {canManage && (
              <div className="flex flex-wrap items-center gap-2 shrink-0 bg-stone-50 p-2 rounded-xl border border-stone-200">
                <button
                  onClick={() => onEdit(recipe)}
                  className="px-3 py-1.5 bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 rounded-lg text-xs font-semibold flex items-center gap-1 shadow-2xs transition-colors cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5 text-stone-600" /> Edit
                </button>

                <button
                  onClick={() => onPublishToggle(recipe)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 shadow-2xs transition-colors cursor-pointer ${
                    recipe.status === RecipeStatus.Published
                      ? 'bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  {recipe.status === RecipeStatus.Published ? (
                    <>Unpublish</>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5" /> Publish
                    </>
                  )}
                </button>

                <button
                  onClick={() => onArchiveToggle(recipe)}
                  className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                  title="Archive / Unarchive"
                >
                  <Archive className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onDelete(recipe)}
                  className="p-1.5 text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                  title="Delete Recipe"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-4 rounded-xl border border-stone-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-stone-500 uppercase tracking-wider font-medium">Prep Time</p>
                <p className="text-sm font-semibold text-stone-900">{recipe.prepTime} mins</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-stone-500 uppercase tracking-wider font-medium">Cook Time</p>
                <p className="text-sm font-semibold text-stone-900">{recipe.cookTime} mins</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-stone-500 uppercase tracking-wider font-medium">Servings</p>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setServings(Math.max(1, servings - 1))}
                    className="w-5 h-5 rounded bg-white border border-stone-300 text-stone-600 font-bold hover:bg-stone-100 flex items-center justify-center cursor-pointer text-xs"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold text-stone-900 font-mono">{servings}</span>
                  <button
                    onClick={() => setServings(servings + 1)}
                    className="w-5 h-5 rounded bg-white border border-stone-300 text-stone-600 font-bold hover:bg-stone-100 flex items-center justify-center cursor-pointer text-xs"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-stone-500 uppercase tracking-wider font-medium">Difficulty</p>
                <p className="text-sm font-semibold text-stone-900">
                  {recipe.difficulty === RecipeDifficulty.Easy
                    ? 'Easy'
                    : recipe.difficulty === RecipeDifficulty.Medium
                    ? 'Medium'
                    : recipe.difficulty === RecipeDifficulty.Hard
                    ? 'Hard'
                    : 'Expert'}
                </p>
              </div>
            </div>
          </div>

          {/* Images Gallery */}
          {recipe.images?.length > 0 && (
            <div className="space-y-2">
              <div className="aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img
                  src={recipe.images.find(img => img.isPrimary)?.originalUrl || recipe.images[0].originalUrl}
                  alt={recipe.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              {recipe.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto py-1">
                  {recipe.images.map(img => (
                    <div
                      key={img.id}
                      className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 ${
                        img.isPrimary ? 'border-amber-500' : 'border-stone-200'
                      }`}
                    >
                      <img
                        src={img.originalUrl}
                        alt={img.altText || ''}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      {img.isPrimary && (
                        <span className="absolute bottom-0 inset-x-0 bg-amber-600 text-white text-[9px] font-bold text-center py-0.5">
                          Primary
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Active Step Cooking Timer Banner (if active) */}
          {activeStepTimer !== null && (
            <div className="bg-amber-900 text-white p-4 rounded-xl flex items-center justify-between shadow-lg animate-pulse">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-amber-400" />
                <div>
                  <p className="text-xs text-amber-200 uppercase font-semibold">
                    Active Timer for Step {activeStepTimer}
                  </p>
                  <p className="text-2xl font-mono font-bold">{formatTimer(timerSecondsLeft)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTimer}
                  className="px-3 py-1.5 rounded-lg bg-amber-700 hover:bg-amber-600 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isTimerRunning ? 'Pause' : 'Resume'}
                </button>
                <button
                  onClick={() => resetTimer(recipe.steps.find(s => s.stepNumber === activeStepTimer)?.timerMinutes || 5)}
                  className="p-1.5 rounded-lg bg-amber-800 hover:bg-amber-700 text-xs cursor-pointer"
                  title="Reset"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveStepTimer(null)}
                  className="p-1.5 rounded-lg bg-amber-800 hover:bg-amber-700 text-xs cursor-pointer"
                  title="Dismiss Timer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Ingredients & Nutrition Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ingredients (2 cols) */}
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold font-serif text-stone-900">
                  Ingredients & Quantities
                </h3>
                <span className="text-xs text-stone-500 font-medium">
                  {recipe.ingredients?.length || 0} items (for {servings} servings)
                </span>
              </div>

              <div className="divide-y divide-stone-100 bg-stone-50/70 rounded-xl border border-stone-200 p-2">
                {recipe.ingredients?.map(ing => {
                  const isChecked = checkedIngredients[ing.id];
                  const scaledQty = ing.quantity ? Math.round(ing.quantity * scaleRatio * 10) / 10 : null;

                  return (
                    <div
                      key={ing.id}
                      onClick={() => toggleIngredient(ing.id)}
                      className="py-2.5 px-3 flex items-center justify-between hover:bg-white rounded-lg transition-colors cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-emerald-600 border-emerald-600 text-white'
                              : 'border-stone-300 bg-white'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-4 h-4" />}
                        </div>
                        <span
                          className={`text-sm ${
                            isChecked ? 'line-through text-stone-400' : 'text-stone-800 font-medium'
                          }`}
                        >
                          {ing.name}
                        </span>
                        {ing.notes && (
                          <span className="text-xs text-stone-400 italic">({ing.notes})</span>
                        )}
                      </div>

                      {scaledQty !== null && (
                        <span className="text-xs font-mono font-semibold text-amber-800 bg-amber-50 px-2 py-1 rounded border border-amber-100">
                          {scaledQty} {ing.unit || ''}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Nutrition Facts (1 col) */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold font-serif text-stone-900">
                Nutrition Facts
              </h3>
              <div className="bg-stone-900 text-stone-100 rounded-xl p-4 border border-stone-800 space-y-3">
                <div className="border-b border-stone-800 pb-2">
                  <p className="text-[10px] uppercase font-semibold text-stone-400 tracking-wider">Per Serving</p>
                  <p className="text-2xl font-bold font-serif text-white">
                    {recipe.nutrition?.calories || 450}{' '}
                    <span className="text-xs font-sans font-normal text-stone-400">kcal</span>
                  </p>
                </div>

                <div className="space-y-2 text-xs divide-y divide-stone-800">
                  <div className="pt-2 flex justify-between">
                    <span className="text-stone-400">Protein</span>
                    <span className="font-mono font-semibold text-white">
                      {recipe.nutrition?.protein || 28} g
                    </span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-stone-400">Carbohydrates</span>
                    <span className="font-mono font-semibold text-white">
                      {recipe.nutrition?.carbohydrates || 45} g
                    </span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-stone-400">Fat</span>
                    <span className="font-mono font-semibold text-white">
                      {recipe.nutrition?.fat || 16} g
                    </span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-stone-400">Dietary Fiber</span>
                    <span className="font-mono font-semibold text-white">
                      {recipe.nutrition?.fiber || 3} g
                    </span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-stone-400">Sodium</span>
                    <span className="font-mono font-semibold text-white">
                      {recipe.nutrition?.sodium || 620} mg
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps & Instructions */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif text-stone-900">
              Step-by-Step Instructions
            </h3>

            <div className="space-y-4">
              {recipe.steps?.map(step => (
                <div
                  key={step.id}
                  className="bg-white rounded-xl border border-stone-200 p-4 sm:p-5 flex flex-col sm:flex-row gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center shrink-0 font-mono text-sm shadow-xs">
                    {step.stepNumber}
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-semibold text-stone-900 text-base">{step.title}</h4>

                      {step.timerMinutes && (
                        <button
                          onClick={() => startTimerForStep(step.stepNumber, step.timerMinutes!)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-semibold border border-amber-200 transition-colors cursor-pointer"
                        >
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          <span>Timer: {step.timerMinutes} mins</span>
                        </button>
                      )}
                    </div>

                    <p className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">
                      {step.description}
                    </p>

                    {step.imageUrl && (
                      <div className="mt-3 aspect-[16/9] max-w-md rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
                        <img
                          src={step.imageUrl}
                          alt={step.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Author Card */}
          {recipe.author && (
            <div className="p-4 bg-stone-100/70 rounded-xl border border-stone-200 flex items-center gap-4">
              {recipe.author.avatarUrl ? (
                <img
                  src={recipe.author.avatarUrl}
                  alt={recipe.author.displayName}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-stone-300 flex items-center justify-center font-bold text-stone-700">
                  {recipe.author.displayName.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Recipe by Author</p>
                <p className="font-bold text-stone-900 text-base">{recipe.author.displayName}</p>
                <p className="text-xs text-stone-600">{recipe.author.bio || 'Member of the culinary community.'}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
