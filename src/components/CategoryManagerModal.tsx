import React, { useState } from 'react';
import { X, Plus, Trash2, Edit2, FolderTree, AlertCircle, Check } from 'lucide-react';
import { Category, ProblemDetails } from '../types';
import { slugify } from '../lib/storage';

interface CategoryManagerModalProps {
  categories: Category[];
  onClose: () => void;
  onCreateCategory: (name: string, description?: string, imageUrl?: string) => { category?: Category; error?: ProblemDetails };
  onUpdateCategory: (id: string, name: string, description?: string) => { category?: Category; error?: ProblemDetails };
  onDeleteCategory: (id: string) => { success: boolean; error?: ProblemDetails };
}

export const CategoryManagerModal: React.FC<CategoryManagerModalProps> = ({
  categories,
  onClose,
  onCreateCategory,
  onUpdateCategory,
  onDeleteCategory,
}) => {
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const resetForm = () => {
    setEditingCategory(null);
    setName('');
    setDescription('');
    setImageUrl('');
    setErrorMsg(null);
  };

  const startEdit = (cat: Category) => {
    setEditingCategory(cat);
    setName(cat.name);
    setDescription(cat.description || '');
    setImageUrl(cat.imageUrl || '');
    setErrorMsg(null);
    setSuccessMsg(null);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!name || name.trim().length < 2) {
      setErrorMsg('Category name must have at least 2 characters.');
      return;
    }

    if (editingCategory) {
      const res = onUpdateCategory(editingCategory.id, name.trim(), description.trim());
      if (res.error) {
        setErrorMsg(res.error.detail);
      } else {
        setSuccessMsg(`Successfully updated category '${name}'.`);
        resetForm();
      }
    } else {
      const res = onCreateCategory(name.trim(), description.trim(), imageUrl.trim());
      if (res.error) {
        setErrorMsg(res.error.detail);
      } else {
        setSuccessMsg(`Successfully created category '${name}' (slug: ${slugify(name)}).`);
        resetForm();
      }
    }
  };

  const handleDelete = (cat: Category) => {
    setErrorMsg(null);
    setSuccessMsg(null);
    const res = onDeleteCategory(cat.id);
    if (!res.success && res.error) {
      setErrorMsg(res.error.detail);
    } else {
      setSuccessMsg(`Deleted category '${cat.name}'.`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col my-auto max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center">
              <FolderTree className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-serif text-stone-900">
                Category Management (FR-CAT)
              </h2>
              <p className="text-xs text-stone-500">
                Permission: Admin | .NET 10 IMemoryCache TTL 60m Invalidation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notifications */}
        {errorMsg && (
          <div className="mx-6 mt-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div className="mx-6 mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Add / Edit Form */}
          <form onSubmit={handleSave} className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-3">
            <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
              {editingCategory ? `Edit: ${editingCategory.name}` : 'Add New Category (FR-CAT-003)'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-stone-600 mb-1">Category Name *</label>
                <input
                  type="text"
                  placeholder="e.g., Traditional Soups & Broths"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-600 mb-1">Generated Slug (Auto-slugify)</label>
                <input
                  type="text"
                  readOnly
                  disabled
                  value={editingCategory ? editingCategory.slug : slugify(name) || 'category'}
                  className="w-full px-3 py-1.5 bg-stone-100 border border-stone-200 rounded-lg text-xs text-stone-500 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-stone-600 mb-1">Short Description</label>
              <input
                type="text"
                placeholder="Summary of culinary category..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-1">
              {editingCategory && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-3 py-1.5 border border-stone-300 hover:bg-white text-stone-600 rounded-lg text-xs cursor-pointer"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                className="px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer shadow-2xs"
              >
                {editingCategory ? 'Save Changes' : <><Plus className="w-3.5 h-3.5" /> Create Category</>}
              </button>
            </div>
          </form>

          {/* List of current categories */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
              Existing Categories ({categories.length})
            </h3>

            <div className="divide-y divide-stone-100 border border-stone-200 rounded-xl overflow-hidden">
              {categories.map(cat => (
                <div
                  key={cat.id}
                  className="p-3 bg-white flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {cat.imageUrl && (
                      <img
                        src={cat.imageUrl}
                        alt={cat.name}
                        className="w-10 h-10 rounded-lg object-cover border border-stone-200"
                      />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-stone-900 text-sm">{cat.name}</span>
                        <span className="font-mono text-[11px] text-stone-400">/{cat.slug}</span>
                      </div>
                      <p className="text-xs text-stone-500">{cat.description || 'No description provided'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-mono font-medium">
                      {cat.recipeCount || 0} recipes
                    </span>

                    <button
                      onClick={() => startEdit(cat)}
                      className="p-1.5 text-stone-400 hover:text-amber-600 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                      title="Edit category"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDelete(cat)}
                      className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                      title="Delete category (requires no associated recipes)"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
