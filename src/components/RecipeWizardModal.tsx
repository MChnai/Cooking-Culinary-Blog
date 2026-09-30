import React, { useState } from 'react';
import { X, Plus, Trash2, Clock, Upload, Check, AlertCircle } from 'lucide-react';
import { Recipe, Category, RecipeDifficulty, RecipeStatus, RecipeStep, RecipeIngredient } from '../types';

interface RecipeWizardModalProps {
  recipeToEdit?: Recipe | null;
  categories: Category[];
  onClose: () => void;
  onSave: (recipeData: Partial<Recipe>, publishImmediately?: boolean) => void;
}

export const RecipeWizardModal: React.FC<RecipeWizardModalProps> = ({
  recipeToEdit,
  categories,
  onClose,
  onSave,
}) => {
  const [activeTab, setActiveTab] = useState<'info' | 'ingredients' | 'steps' | 'nutrition'>('info');

  // Form states
  const [title, setTitle] = useState(recipeToEdit?.title || '');
  const [description, setDescription] = useState(recipeToEdit?.description || '');
  const [categoryId, setCategoryId] = useState(recipeToEdit?.categoryId || categories[0]?.id || '');
  const [prepTime, setPrepTime] = useState(recipeToEdit?.prepTime || 20);
  const [cookTime, setCookTime] = useState(recipeToEdit?.cookTime || 30);
  const [servings, setServings] = useState(recipeToEdit?.servings || 4);
  const [difficulty, setDifficulty] = useState<RecipeDifficulty>(recipeToEdit?.difficulty || RecipeDifficulty.Easy);

  // Ingredients state
  const [ingredients, setIngredients] = useState<Partial<RecipeIngredient>[]>(
    recipeToEdit?.ingredients || [
      { name: '', quantity: 100, unit: 'gram', notes: '', orderIndex: 1 },
    ]
  );

  // Steps state
  const [steps, setSteps] = useState<Partial<RecipeStep>[]>(
    recipeToEdit?.steps || [
      { stepNumber: 1, title: '', description: '', timerMinutes: 5 },
    ]
  );

  // Nutrition state
  const [calories, setCalories] = useState(recipeToEdit?.nutrition?.calories || 400);
  const [protein, setProtein] = useState(recipeToEdit?.nutrition?.protein || 25);
  const [carbs, setCarbs] = useState(recipeToEdit?.nutrition?.carbohydrates || 40);
  const [fat, setFat] = useState(recipeToEdit?.nutrition?.fat || 15);

  // Hero image
  const [imageUrl, setImageUrl] = useState(
    recipeToEdit?.images?.[0]?.originalUrl ||
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80'
  );

  const [validationError, setValidationError] = useState<string | null>(null);

  // Add/Remove ingredient
  const handleAddIngredient = () => {
    setIngredients(prev => [
      ...prev,
      { name: '', quantity: 50, unit: 'gram', orderIndex: prev.length + 1 },
    ]);
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients(prev => prev.filter((_, i) => i !== index));
  };

  const handleIngredientChange = (index: number, field: keyof RecipeIngredient, value: any) => {
    setIngredients(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  // Add/Remove step
  const handleAddStep = () => {
    setSteps(prev => [
      ...prev,
      { stepNumber: prev.length + 1, title: '', description: '', timerMinutes: 5 },
    ]);
  };

  const handleRemoveStep = (index: number) => {
    setSteps(prev => {
      const filtered = prev.filter((_, i) => i !== index);
      return filtered.map((s, i) => ({ ...s, stepNumber: i + 1 }));
    });
  };

  const handleStepChange = (index: number, field: keyof RecipeStep, value: any) => {
    setSteps(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const validateAndSubmit = (publishImmediately = false) => {
    if (!title || title.trim().length < 5) {
      setValidationError('Recipe title must be at least 5 characters long (FluentValidation Rule).');
      setActiveTab('info');
      return;
    }
    if (!description || description.trim().length < 10) {
      setValidationError('Please enter a recipe description (at least 10 characters).');
      setActiveTab('info');
      return;
    }

    const validIngredients = ingredients.filter(i => i.name && i.name.trim().length > 0);
    const validSteps = steps.filter(s => s.description && s.description.trim().length > 0);

    if (publishImmediately && (validSteps.length === 0 || validIngredients.length === 0)) {
      setValidationError('To publish immediately, the recipe must contain at least 1 ingredient and 1 instruction step.');
      return;
    }

    const payload: Partial<Recipe> = {
      title: title.trim(),
      description: description.trim(),
      categoryId,
      prepTime: Number(prepTime),
      cookTime: Number(cookTime),
      servings: Number(servings),
      difficulty,
      nutrition: {
        calories: Number(calories),
        protein: Number(protein),
        carbohydrates: Number(carbs),
        fat: Number(fat),
      },
      ingredients: validIngredients as RecipeIngredient[],
      steps: validSteps as RecipeStep[],
      images: [
        {
          id: 'img-' + Date.now(),
          recipeId: recipeToEdit?.id || '',
          originalUrl: imageUrl,
          isPrimary: true,
          orderIndex: 1,
        },
      ],
    };

    onSave(payload, publishImmediately);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div>
            <h2 className="text-lg sm:text-xl font-bold font-serif text-stone-900">
              {recipeToEdit ? 'Edit Recipe' : 'Create New Recipe'}
            </h2>
            <p className="text-xs text-stone-500">
              .NET 10 CQRS CreateRecipeCommand / UpdateRecipeCommand with FluentValidation
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-3 border-b border-stone-200 flex gap-2 sm:gap-4 overflow-x-auto bg-white">
          <button
            onClick={() => setActiveTab('info')}
            className={`pb-3 text-xs sm:text-sm font-medium border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'info'
                ? 'border-amber-600 text-amber-900 font-semibold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            1. General Info
          </button>
          <button
            onClick={() => setActiveTab('ingredients')}
            className={`pb-3 text-xs sm:text-sm font-medium border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'ingredients'
                ? 'border-amber-600 text-amber-900 font-semibold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            2. Ingredients ({ingredients.length})
          </button>
          <button
            onClick={() => setActiveTab('steps')}
            className={`pb-3 text-xs sm:text-sm font-medium border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'steps'
                ? 'border-amber-600 text-amber-900 font-semibold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            3. Cooking Steps ({steps.length})
          </button>
          <button
            onClick={() => setActiveTab('nutrition')}
            className={`pb-3 text-xs sm:text-sm font-medium border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'nutrition'
                ? 'border-amber-600 text-amber-900 font-semibold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            4. Nutrition & Photo
          </button>
        </div>

        {/* Error notification */}
        {validationError && (
          <div className="mx-6 mt-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {activeTab === 'info' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Recipe Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={e => {
                    setTitle(e.target.value);
                    setValidationError(null);
                  }}
                  placeholder="e.g. Authentic Hanoi Beef Pho"
                  className="w-full px-3.5 py-2 border border-stone-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Brief Description (SEO Description) *
                </label>
                <textarea
                  value={description}
                  onChange={e => {
                    setDescription(e.target.value);
                    setValidationError(null);
                  }}
                  rows={3}
                  placeholder="Describe the aroma, flavor profile, history, and key highlights of this dish..."
                  className="w-full px-3.5 py-2 border border-stone-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Category
                  </label>
                  <select
                    value={categoryId}
                    onChange={e => setCategoryId(e.target.value)}
                    className="w-full px-3.5 py-2 border border-stone-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Difficulty
                  </label>
                  <select
                    value={difficulty}
                    onChange={e => setDifficulty(Number(e.target.value) as RecipeDifficulty)}
                    className="w-full px-3.5 py-2 border border-stone-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
                  >
                    <option value={RecipeDifficulty.Easy}>Easy</option>
                    <option value={RecipeDifficulty.Medium}>Medium</option>
                    <option value={RecipeDifficulty.Hard}>Hard</option>
                    <option value={RecipeDifficulty.Expert}>Expert</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Prep Time (min)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={prepTime}
                    onChange={e => setPrepTime(Number(e.target.value))}
                    className="w-full px-3.5 py-2 border border-stone-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Cook Time (min)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={cookTime}
                    onChange={e => setCookTime(Number(e.target.value))}
                    className="w-full px-3.5 py-2 border border-stone-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Servings
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={servings}
                    onChange={e => setServings(Number(e.target.value))}
                    className="w-full px-3.5 py-2 border border-stone-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs text-stone-500">
                  Specify ingredients and precise portions for this recipe.
                </p>
                <button
                  type="button"
                  onClick={handleAddIngredient}
                  className="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-md text-xs font-semibold flex items-center gap-1 border border-amber-200 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Ingredient
                </button>
              </div>

              <div className="space-y-2">
                {ingredients.map((ing, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200"
                  >
                    <span className="text-xs font-mono text-stone-400 w-5 text-center">{idx + 1}</span>
                    <input
                      type="text"
                      placeholder="Ingredient name *"
                      value={ing.name || ''}
                      onChange={e => handleIngredientChange(idx, 'name', e.target.value)}
                      className="flex-2 px-2.5 py-1.5 bg-white border border-stone-300 rounded text-xs focus:ring-1 focus:ring-amber-500"
                    />
                    <input
                      type="number"
                      placeholder="Qty"
                      value={ing.quantity || ''}
                      onChange={e => handleIngredientChange(idx, 'quantity', Number(e.target.value))}
                      className="w-16 px-2.5 py-1.5 bg-white border border-stone-300 rounded text-xs focus:ring-1 focus:ring-amber-500"
                    />
                    <input
                      type="text"
                      placeholder="Unit (g, tbsp, pcs...)"
                      value={ing.unit || ''}
                      onChange={e => handleIngredientChange(idx, 'unit', e.target.value)}
                      className="w-28 px-2.5 py-1.5 bg-white border border-stone-300 rounded text-xs focus:ring-1 focus:ring-amber-500"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveIngredient(idx)}
                      className="p-1.5 text-stone-400 hover:text-rose-600 cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'steps' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs text-stone-500">
                  Step-by-step preparation with optional countdown timer.
                </p>
                <button
                  type="button"
                  onClick={handleAddStep}
                  className="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-md text-xs font-semibold flex items-center gap-1 border border-amber-200 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Step
                </button>
              </div>

              <div className="space-y-3">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-stone-50 p-3 rounded-xl border border-stone-200 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center font-mono">
                          {idx + 1}
                        </span>
                        <input
                          type="text"
                          placeholder="Step title (e.g. Blanch beef bones)"
                          value={step.title || ''}
                          onChange={e => handleStepChange(idx, 'title', e.target.value)}
                          className="px-2.5 py-1 bg-white border border-stone-300 rounded text-xs font-semibold w-64 focus:ring-1 focus:ring-amber-500"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-stone-500 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-stone-400" />
                          Timer:
                        </span>
                        <input
                          type="number"
                          placeholder="Min"
                          value={step.timerMinutes || ''}
                          onChange={e => handleStepChange(idx, 'timerMinutes', Number(e.target.value))}
                          className="w-16 px-2 py-1 bg-white border border-stone-300 rounded text-xs focus:ring-1 focus:ring-amber-500"
                        />
                        <span className="text-xs text-stone-400">min</span>

                        <button
                          type="button"
                          onClick={() => handleRemoveStep(idx)}
                          className="p-1 text-stone-400 hover:text-rose-600 cursor-pointer ml-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <textarea
                      placeholder="Detailed instructions for this step..."
                      value={step.description || ''}
                      onChange={e => handleStepChange(idx, 'description', e.target.value)}
                      rows={2}
                      className="w-full px-2.5 py-1.5 bg-white border border-stone-300 rounded-md text-xs focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'nutrition' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Hero Image URL (URL / MinIO S3)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    placeholder="https://..."
                    className="flex-1 px-3.5 py-2 border border-stone-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                {imageUrl && (
                  <div className="mt-2 aspect-[16/9] max-w-sm rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
                    <img
                      src={imageUrl}
                      alt="Preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-stone-200">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Nutritional Breakdown (RecipeNutrition Owned Entity)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <span className="text-[11px] text-stone-500 block mb-1">Calories (kcal)</span>
                    <input
                      type="number"
                      value={calories}
                      onChange={e => setCalories(Number(e.target.value))}
                      className="w-full px-3 py-1.5 border border-stone-300 rounded-lg text-xs font-mono focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-500 block mb-1">Protein (g)</span>
                    <input
                      type="number"
                      value={protein}
                      onChange={e => setProtein(Number(e.target.value))}
                      className="w-full px-3 py-1.5 border border-stone-300 rounded-lg text-xs font-mono focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-500 block mb-1">Carbohydrates (g)</span>
                    <input
                      type="number"
                      value={carbs}
                      onChange={e => setCarbs(Number(e.target.value))}
                      className="w-full px-3 py-1.5 border border-stone-300 rounded-lg text-xs font-mono focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-500 block mb-1">Fat (g)</span>
                    <input
                      type="number"
                      value={fat}
                      onChange={e => setFat(Number(e.target.value))}
                      className="w-full px-3 py-1.5 border border-stone-300 rounded-lg text-xs font-mono focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
          <div className="text-xs text-stone-500">
            {activeTab !== 'info' && (
              <button
                type="button"
                onClick={() => {
                  if (activeTab === 'nutrition') setActiveTab('steps');
                  else if (activeTab === 'steps') setActiveTab('ingredients');
                  else if (activeTab === 'ingredients') setActiveTab('info');
                }}
                className="text-stone-600 hover:text-stone-900 font-semibold cursor-pointer"
              >
                ← Back to previous step
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => validateAndSubmit(false)}
              className="px-4 py-2 border border-stone-300 hover:bg-white text-stone-700 rounded-lg text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
            >
              Save as Draft
            </button>

            <button
              type="button"
              onClick={() => validateAndSubmit(true)}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Publish Recipe</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
