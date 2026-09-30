import React, { useState } from 'react';
import {
  PlusCircle,
  FolderTree,
  RotateCcw,
  Eye,
  Edit3,
  Trash2,
  Archive,
  CheckCircle,
  FileText,
  Clock,
  Layers,
  Filter,
} from 'lucide-react';
import { Recipe, Category, RecipeStatus, ApplicationUser } from '../types';
import { db } from '../lib/storage';

interface DashboardProps {
  currentUser: ApplicationUser | null;
  categories: Category[];
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onOpenNewRecipe: () => void;
  onEditRecipe: (recipe: Recipe) => void;
  onOpenCategoryManager: () => void;
  onPublishToggle: (recipe: Recipe) => void;
  onArchiveToggle: (recipe: Recipe) => void;
  onDeleteRecipe: (recipe: Recipe) => void;
  onResetSeed: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  currentUser,
  categories,
  recipes,
  onSelectRecipe,
  onOpenNewRecipe,
  onEditRecipe,
  onOpenCategoryManager,
  onPublishToggle,
  onArchiveToggle,
  onDeleteRecipe,
  onResetSeed,
}) => {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const isAdmin = currentUser && currentUser.roles.includes('Admin');
  const isAuthor = currentUser && currentUser.roles.includes('Author');

  // Filter recipes according to user role & dashboard filters
  let userRecipes = recipes;
  if (!isAdmin && currentUser) {
    userRecipes = recipes.filter(r => r.authorId === currentUser.id);
  }

  if (filterStatus !== 'all') {
    const statusNum = Number(filterStatus);
    userRecipes = userRecipes.filter(r => r.status === statusNum);
  }

  if (filterCategory !== 'all') {
    userRecipes = userRecipes.filter(r => r.categoryId === filterCategory);
  }

  const totalCount = userRecipes.length;
  const publishedCount = userRecipes.filter(r => r.status === RecipeStatus.Published).length;
  const draftCount = userRecipes.filter(r => r.status === RecipeStatus.Draft).length;
  const archivedCount = userRecipes.filter(r => r.status === RecipeStatus.Archived).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Dashboard Top Header */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-amber-100 text-amber-800 rounded-xl">
              <FileText className="w-6 h-6" />
            </span>
            <div>
              <h1 className="text-2xl font-bold font-serif text-stone-900">
                {isAdmin ? 'Admin' : 'Author'} Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-stone-500">
                Welcome, <strong className="text-stone-800">{currentUser?.displayName || 'Author'}</strong>. Manage your culinary products, recipe inventory, and taxonomy.
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {isAdmin && (
            <button
              onClick={onOpenCategoryManager}
              className="px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <FolderTree className="w-4 h-4 text-rose-600" />
              <span>Categories ({categories.length})</span>
            </button>
          )}

          <button
            onClick={onOpenNewRecipe}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>New Recipe</span>
          </button>

          <button
            onClick={onResetSeed}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
            title="Reset PostgreSQL 16 seed data (Bogus Seed)"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
          <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Total Recipes</p>
          <p className="text-2xl font-bold font-mono text-stone-900 mt-1">{totalCount}</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
          <p className="text-xs text-emerald-600 font-medium uppercase tracking-wider">Published</p>
          <p className="text-2xl font-bold font-mono text-emerald-700 mt-1">{publishedCount}</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
          <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Drafts</p>
          <p className="text-2xl font-bold font-mono text-stone-600 mt-1">{draftCount}</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
          <p className="text-xs text-amber-600 font-medium uppercase tracking-wider">Archived</p>
          <p className="text-2xl font-bold font-mono text-amber-700 mt-1">{archivedCount}</p>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-stone-500 flex items-center gap-1 font-medium mr-1">
            <Filter className="w-3.5 h-3.5 text-stone-400" /> Status:
          </span>
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-2.5 py-1 rounded-lg cursor-pointer ${
              filterStatus === 'all'
                ? 'bg-stone-900 text-white font-semibold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            All ({recipes.length})
          </button>
          <button
            onClick={() => setFilterStatus(String(RecipeStatus.Published))}
            className={`px-2.5 py-1 rounded-lg cursor-pointer ${
              filterStatus === String(RecipeStatus.Published)
                ? 'bg-emerald-600 text-white font-semibold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Published
          </button>
          <button
            onClick={() => setFilterStatus(String(RecipeStatus.Draft))}
            className={`px-2.5 py-1 rounded-lg cursor-pointer ${
              filterStatus === String(RecipeStatus.Draft)
                ? 'bg-stone-700 text-white font-semibold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Draft
          </button>
          <button
            onClick={() => setFilterStatus(String(RecipeStatus.Archived))}
            className={`px-2.5 py-1 rounded-lg cursor-pointer ${
              filterStatus === String(RecipeStatus.Archived)
                ? 'bg-amber-700 text-white font-semibold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Archived
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-stone-500">Category:</span>
          <select
            value={filterCategory}
            onChange={e => setFilterCategory(e.target.value)}
            className="px-2.5 py-1 bg-stone-50 border border-stone-300 rounded-lg text-xs"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Recipes Management Table */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Recipe</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Author</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {userRecipes.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-stone-400">
                    No recipes found matching this filter.
                  </td>
                </tr>
              ) : (
                userRecipes.map(recipe => {
                  const cat = categories.find(c => c.id === recipe.categoryId);

                  return (
                    <tr key={recipe.id} className="hover:bg-stone-50/70 transition-colors">
                      <td className="py-3 px-4">
                        <div
                          onClick={() => onSelectRecipe(recipe)}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <img
                            src={recipe.images?.[0]?.originalUrl}
                            alt={recipe.title}
                            referrerPolicy="no-referrer"
                            className="w-12 h-10 rounded-lg object-cover border border-stone-200 shrink-0"
                          />
                          <div>
                            <p className="font-bold text-stone-900 group-hover:text-amber-700 text-sm line-clamp-1 font-serif">
                              {recipe.title}
                            </p>
                            <p className="text-stone-400 font-mono text-[11px]">/{recipe.slug}</p>
                          </div>
                        </div>
                      </td>

                      <td className="py-3 px-4 text-stone-600 font-medium">
                        {cat?.name || 'Uncategorized'}
                      </td>

                      <td className="py-3 px-4 text-stone-500 font-mono">
                        {recipe.prepTime + recipe.cookTime} mins
                      </td>

                      <td className="py-3 px-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold inline-flex items-center gap-1 ${
                            recipe.status === RecipeStatus.Published
                              ? 'bg-emerald-100 text-emerald-800'
                              : recipe.status === RecipeStatus.Draft
                              ? 'bg-stone-100 text-stone-700'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {recipe.status === RecipeStatus.Published
                            ? 'Published'
                            : recipe.status === RecipeStatus.Draft
                            ? 'Draft'
                            : 'Archived'}
                        </span>
                      </td>

                      <td className="py-3 px-4 text-stone-600">
                        {recipe.author?.displayName || 'Anonymous'}
                      </td>

                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => onSelectRecipe(recipe)}
                            className="p-1.5 text-stone-400 hover:text-stone-800 hover:bg-stone-100 rounded-lg cursor-pointer"
                            title="View details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => onEditRecipe(recipe)}
                            className="p-1.5 text-stone-400 hover:text-amber-600 hover:bg-stone-100 rounded-lg cursor-pointer"
                            title="Edit recipe"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => onPublishToggle(recipe)}
                            className={`p-1.5 rounded-lg cursor-pointer ${
                              recipe.status === RecipeStatus.Published
                                ? 'text-amber-600 hover:bg-amber-50'
                                : 'text-emerald-600 hover:bg-emerald-50'
                            }`}
                            title={recipe.status === RecipeStatus.Published ? 'Unpublish' : 'Publish'}
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => onArchiveToggle(recipe)}
                            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg cursor-pointer"
                            title="Archive / Unarchive"
                          >
                            <Archive className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => onDeleteRecipe(recipe)}
                            className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer"
                            title="Delete recipe"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
