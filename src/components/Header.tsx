import React from 'react';
import { ChefHat, Search, ShieldCheck, UserCheck, UserX, Database, Terminal, Activity, PlusCircle } from 'lucide-react';
import { ApplicationUser, UserRole } from '../types';

interface HeaderProps {
  activeTab: 'explore' | 'dashboard' | 'api' | 'architecture' | 'monitor';
  setActiveTab: (tab: 'explore' | 'dashboard' | 'api' | 'architecture' | 'monitor') => void;
  currentUser: ApplicationUser | null;
  onSwitchRole: (role: UserRole) => void;
  onOpenNewRecipe: () => void;
  onOpenSearch: () => void;
  searchTerm: string;
  onOpenAuth: (tab?: 'login' | 'register' | 'tokens') => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  currentUser,
  onSwitchRole,
  onOpenNewRecipe,
  onOpenSearch,
  onOpenAuth,
}) => {
  const currentRole: UserRole = currentUser ? (currentUser.roles.includes('Admin') ? 'Admin' : 'Author') : 'Guest';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Top Banner indicating system spec */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
              .NET 10 Minimal APIs
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-sky-950 text-sky-300 border border-sky-800">
              Next.js App Router
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-950 text-amber-300 border border-amber-800">
              PostgreSQL 16 FTS
            </span>
            <span className="hidden sm:inline text-stone-400">| SRS IEEE 830 / ISO 29148 Standard</span>
          </div>

          {/* Quick Role Switcher for instant permission testing */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-stone-400 mr-1">Role:</span>
            <button
              onClick={() => onSwitchRole('Guest')}
              className={`px-2 py-0.5 rounded transition-all text-xs font-medium cursor-pointer ${
                currentRole === 'Guest'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
              title="Guest (Read published recipes only)"
            >
              <span className="flex items-center gap-1">
                <UserX className="w-3 h-3" /> Guest
              </span>
            </button>
            <button
              onClick={() => onSwitchRole('Author')}
              className={`px-2 py-0.5 rounded transition-all text-xs font-medium cursor-pointer ${
                currentRole === 'Author'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
              title="Author (Create/Edit/Delete own recipes)"
            >
              <span className="flex items-center gap-1">
                <UserCheck className="w-3 h-3" /> Author
              </span>
            </button>
            <button
              onClick={() => onSwitchRole('Admin')}
              className={`px-2 py-0.5 rounded transition-all text-xs font-medium cursor-pointer ${
                currentRole === 'Admin'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
              title="Admin (Full CRUD & Category management)"
            >
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Admin
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group select-none"
            onClick={() => setActiveTab('explore')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold font-serif tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
                  Culinary Blog
                </span>
                <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 font-semibold border border-stone-200">
                  v1.0
                </span>
              </div>
              <p className="text-xs text-stone-500 hidden sm:block">
                Recipe & Culinary Products Management Platform
              </p>
            </div>
          </div>

          {/* Search Trigger */}
          <div className="flex-1 max-w-md mx-2 hidden md:block">
            <button
              onClick={onOpenSearch}
              className="w-full flex items-center justify-between px-3.5 py-2 text-sm text-stone-500 bg-stone-100 hover:bg-stone-200/80 border border-stone-200 rounded-lg transition-colors cursor-pointer text-left"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-stone-400" />
                <span>Search recipes (PostgreSQL 16 tsvector FTS)...</span>
              </span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono text-stone-400 bg-white rounded border border-stone-200">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('explore')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeTab === 'explore'
                  ? 'bg-amber-50 text-amber-900 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              Explore
            </button>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-amber-50 text-amber-900 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              Management
            </button>

            <button
              onClick={() => setActiveTab('api')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'api'
                  ? 'bg-sky-50 text-sky-900 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Terminal className="w-4 h-4 text-sky-600" />
              <span className="hidden sm:inline">REST API</span>
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'architecture'
                  ? 'bg-emerald-50 text-emerald-900 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Database className="w-4 h-4 text-emerald-600" />
              <span className="hidden sm:inline">C# & SQL Architecture</span>
            </button>

            <button
              onClick={() => setActiveTab('monitor')}
              className={`px-2.5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'monitor'
                  ? 'bg-purple-50 text-purple-900 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
              title="System observability & Hangfire jobs"
            >
              <Activity className="w-4 h-4 text-purple-600" />
            </button>
          </nav>

          {/* Action Button: Create Recipe */}
          {/* Action Buttons: FR-AUTH & Create Recipe */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg md:hidden cursor-pointer"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* FR-AUTH Module Trigger */}
            <button
              onClick={() => onOpenAuth()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-300 hover:bg-stone-100 text-stone-700 text-xs font-semibold transition-colors cursor-pointer"
              title="FR-AUTH: User Management & Token Rotation"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>{currentUser ? currentUser.displayName.split(' ')[0] : 'Sign In'}</span>
              <span className="hidden lg:inline text-[10px] font-mono px-1 rounded bg-stone-200 text-stone-600">
                FR-AUTH
              </span>
            </button>

            {currentRole !== 'Guest' ? (
              <button
                onClick={onOpenNewRecipe}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium shadow-xs transition-colors cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Create Recipe</span>
              </button>
            ) : (
              <button
                onClick={() => onOpenAuth('login')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
