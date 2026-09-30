import React, { useState, useEffect } from 'react';
import { Search, X, Flame, Clock, Sparkles, Filter } from 'lucide-react';
import { Recipe, Category } from '../types';
import { db, removeVietnameseAccents } from '../lib/storage';

interface SearchModalProps {
  categories: Category[];
  onClose: () => void;
  onSelectRecipe: (recipe: Recipe) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  categories,
  onClose,
  onSelectRecipe,
}) => {
  const [keyword, setKeyword] = useState('');
  const [selectedCat, setSelectedCat] = useState<string>('');
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (keyword.trim().length >= 1) {
      const res = db.searchRecipes(keyword, selectedCat || undefined);
      setResults(res.items);
    } else {
      setResults([]);
    }
  }, [keyword, selectedCat]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 pt-12 sm:pt-20">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col">
        {/* Search Input Box */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3 bg-stone-50">
          <Search className="w-5 h-5 text-amber-600 shrink-0" />
          <input
            type="text"
            autoFocus
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            placeholder="Search recipes (e.g. 'beef pho', 'spring roll', 'coffee', 'caramelized pork')..."
            className="flex-1 bg-transparent text-sm sm:text-base text-stone-900 placeholder-stone-400 focus:outline-hidden"
          />
          {keyword && (
            <button
              onClick={() => setKeyword('')}
              className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 rounded-md text-xs font-semibold bg-stone-200 hover:bg-stone-300 text-stone-700 cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* PostgreSQL 16 FTS feature note & filter */}
        <div className="px-4 py-2.5 bg-amber-50/70 border-b border-amber-100 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-amber-900 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>PostgreSQL 16 tsvector + unaccent (FTS rank ordering & accent-insensitive query)</span>
          </div>

          <div className="flex items-center gap-1">
            <Filter className="w-3 h-3 text-stone-400" />
            <select
              value={selectedCat}
              onChange={e => setSelectedCat(e.target.value)}
              className="text-xs bg-white border border-stone-300 rounded px-2 py-0.5"
            >
              <option value="">All categories</option>
              {categories.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Results list */}
        <div className="p-3 max-h-[60vh] overflow-y-auto divide-y divide-stone-100">
          {keyword.trim().length === 0 ? (
            <div className="py-8 text-center text-stone-400 text-xs">
              <p>Type keywords to trigger the Full-Text Search indexing engine.</p>
              <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                {['pho', 'pork belly', 'spring rolls', 'coffee', 'peanut dip', 'salad'].map(hint => (
                  <button
                    key={hint}
                    onClick={() => setKeyword(hint)}
                    className="px-2 py-1 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded text-xs cursor-pointer"
                  >
                    #{hint}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-stone-400 text-xs">
              No recipes found matching keyword "{keyword}".
            </div>
          ) : (
            results.map(r => (
              <div
                key={r.id}
                onClick={() => {
                  onSelectRecipe(r);
                  onClose();
                }}
                className="p-3 flex items-center justify-between hover:bg-stone-50 rounded-xl transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                    <img
                      src={r.images?.[0]?.originalUrl}
                      alt={r.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif font-bold text-stone-900 group-hover:text-amber-700 text-sm">
                        {r.title}
                      </h4>
                      {r.category && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-stone-100 text-stone-600 rounded">
                          {r.category.name}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                      {r.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                    ts_rank: {r.relevanceScore}%
                  </span>
                  <span className="text-[11px] text-stone-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {r.cookTime}p
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
