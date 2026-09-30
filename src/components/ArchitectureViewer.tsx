import React, { useState } from 'react';
import { Database, Layers, Copy, Check, Server, Shield, FileCode, CheckCircle, Download, Terminal, FolderGit2 } from 'lucide-react';
import { CSHARP_CLEAN_ARCHITECTURE_SNIPPETS } from '../lib/apiDocs';

export const ArchitectureViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'domain' | 'application' | 'presentation' | 'program' | 'postgres' | 'docker'>('program');
  const [copied, setCopied] = useState(false);

  const getActiveCode = () => {
    switch (activeTab) {
      case 'domain':
        return CSHARP_CLEAN_ARCHITECTURE_SNIPPETS.domainRecipe;
      case 'application':
        return CSHARP_CLEAN_ARCHITECTURE_SNIPPETS.applicationMediatr;
      case 'presentation':
        return CSHARP_CLEAN_ARCHITECTURE_SNIPPETS.presentationMinimalApi;
      case 'program':
        return CSHARP_CLEAN_ARCHITECTURE_SNIPPETS.programMinimalApi;
      case 'postgres':
        return CSHARP_CLEAN_ARCHITECTURE_SNIPPETS.postgresSchemaDdl;
      case 'docker':
        return CSHARP_CLEAN_ARCHITECTURE_SNIPPETS.dockerCompose;
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(getActiveCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
              <Layers className="w-6 h-6" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold font-serif text-stone-900">
                  ASP.NET 10 Core Minimal APIs Backend
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-mono font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  .NET 10.0 Verified
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                Full 4-layer Clean Architecture solution with CQRS, MediatR, FluentValidation, and PostgreSQL 16
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href="/CulinaryBlog-NET10-Backend-Source.zip"
            download="CulinaryBlog-NET10-Backend-Source.zip"
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download .NET 10 Solution (.ZIP)</span>
          </a>

          <span className="text-xs px-2.5 py-2 rounded-xl bg-stone-100 border border-stone-200 font-mono text-stone-600 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-stone-500" />
            <span>dotnet run --project src/CulinaryBlog.API</span>
          </span>
        </div>
      </div>

      {/* 6 Solution Architecture Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
        <div
          onClick={() => setActiveTab('program')}
          className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
            activeTab === 'program'
              ? 'bg-amber-50 border-amber-400 shadow-xs ring-1 ring-amber-400'
              : 'bg-white border-stone-200 hover:bg-stone-50'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-amber-900 uppercase">Program.cs</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">.NET 10</span>
          </div>
          <h4 className="font-semibold text-stone-900 text-xs">API Entry Point</h4>
          <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
            Minimal APIs MapGroup, RFC 7807 Problem Details, Scalar OpenAPI UI, JWT Auth.
          </p>
        </div>

        <div
          onClick={() => setActiveTab('domain')}
          className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
            activeTab === 'domain'
              ? 'bg-amber-50 border-amber-400 shadow-xs ring-1 ring-amber-400'
              : 'bg-white border-stone-200 hover:bg-stone-50'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-amber-900 uppercase">1. Domain</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">Core</span>
          </div>
          <h4 className="font-semibold text-stone-900 text-xs">CulinaryBlog.Domain</h4>
          <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
            Entities (Recipe, Category), Value Objects, Enums. Zero external packages.
          </p>
        </div>

        <div
          onClick={() => setActiveTab('application')}
          className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
            activeTab === 'application'
              ? 'bg-amber-50 border-amber-400 shadow-xs ring-1 ring-amber-400'
              : 'bg-white border-stone-200 hover:bg-stone-50'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-amber-900 uppercase">2. Application</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-100 text-sky-800">CQRS</span>
          </div>
          <h4 className="font-semibold text-stone-900 text-xs">CulinaryBlog.Application</h4>
          <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
            MediatR Commands, Queries, FluentValidation Pipeline Behaviors, DTOs.
          </p>
        </div>

        <div
          onClick={() => setActiveTab('presentation')}
          className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
            activeTab === 'presentation'
              ? 'bg-amber-50 border-amber-400 shadow-xs ring-1 ring-amber-400'
              : 'bg-white border-stone-200 hover:bg-stone-50'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-amber-900 uppercase">3. Endpoints</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">Route Groups</span>
          </div>
          <h4 className="font-semibold text-stone-900 text-xs">RecipeEndpoints.cs</h4>
          <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
            TypedResults with multi-filter search, pagination, and life cycle transitions.
          </p>
        </div>

        <div
          onClick={() => setActiveTab('postgres')}
          className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
            activeTab === 'postgres'
              ? 'bg-amber-50 border-amber-400 shadow-xs ring-1 ring-amber-400'
              : 'bg-white border-stone-200 hover:bg-stone-50'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-amber-900 uppercase">4. PostgreSQL 16</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-100 text-purple-800">DBMS</span>
          </div>
          <h4 className="font-semibold text-stone-900 text-xs">Schema & FTS DDL</h4>
          <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
            tsvector generated column, GIN index, unaccent extension, and seeds.
          </p>
        </div>

        <div
          onClick={() => setActiveTab('docker')}
          className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
            activeTab === 'docker'
              ? 'bg-amber-50 border-amber-400 shadow-xs ring-1 ring-amber-400'
              : 'bg-white border-stone-200 hover:bg-stone-50'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-amber-900 uppercase">5. Docker</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-100 text-rose-800">Compose</span>
          </div>
          <h4 className="font-semibold text-stone-900 text-xs">docker-compose.yml</h4>
          <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
            Multi-stage Dockerfile with mcr.microsoft.com/dotnet/sdk:10.0 and PostgreSQL.
          </p>
        </div>
      </div>

      {/* Code Viewer Box */}
      <div className="bg-stone-900 rounded-2xl border border-stone-800 shadow-xl overflow-hidden">
        <div className="px-6 py-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileCode className="w-5 h-5 text-amber-400" />
            <span className="font-mono text-xs sm:text-sm font-semibold text-stone-200">
              {activeTab === 'program' && 'backend/src/CulinaryBlog.API/Program.cs (ASP.NET 10 Minimal APIs)'}
              {activeTab === 'domain' && 'backend/src/CulinaryBlog.Domain/Entities/Recipe.cs (C# 14 / .NET 10)'}
              {activeTab === 'application' && 'backend/src/CulinaryBlog.Application/Features/Recipes/Commands/CreateRecipe/CreateRecipeCommand.cs (MediatR CQRS)'}
              {activeTab === 'presentation' && 'backend/src/CulinaryBlog.API/Endpoints/RecipeEndpoints.cs (Minimal APIs MapGroup)'}
              {activeTab === 'postgres' && 'backend/scripts/init_postgresql16_schema.sql (PostgreSQL 16 Schema + tsvector FTS)'}
              {activeTab === 'docker' && 'backend/docker-compose.yml (ASP.NET 10 & PostgreSQL 16 Containers)'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyCode}
              className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Code'}</span>
            </button>
          </div>
        </div>

        <pre className="p-6 text-xs sm:text-sm font-mono text-emerald-400 overflow-x-auto max-h-[550px] leading-relaxed">
          {getActiveCode()}
        </pre>
      </div>
    </div>
  );
};
