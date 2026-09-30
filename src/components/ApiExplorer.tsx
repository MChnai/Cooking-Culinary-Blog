import React, { useState } from 'react';
import { Terminal, Send, CheckCircle, AlertCircle, Copy, Check, Shield } from 'lucide-react';
import { API_ENDPOINTS, ApiEndpointDoc } from '../lib/apiDocs';
import { db } from '../lib/storage';

export const ApiExplorer: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpointDoc>(API_ENDPOINTS[0]);
  const [requestBody, setRequestBody] = useState<string>(selectedEndpoint.requestSample || '');
  const [responseOutput, setResponseOutput] = useState<string | null>(null);
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  const [latencyMs, setLatencyMs] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSelectEndpoint = (ep: ApiEndpointDoc) => {
    setSelectedEndpoint(ep);
    setRequestBody(ep.requestSample || '');
    setResponseOutput(null);
    setResponseStatus(null);
    setLatencyMs(null);
  };

  const executeEndpoint = () => {
    const start = performance.now();

    // Simulate endpoint execution based on path and method
    let status = 200;
    let result: any = null;

    try {
      if (selectedEndpoint.path === '/api/v1/categories' && selectedEndpoint.method === 'GET') {
        status = 200;
        result = db.getCategories();
      } else if (selectedEndpoint.path === '/api/v1/recipes' && selectedEndpoint.method === 'GET') {
        status = 200;
        result = db.getRecipes({});
      } else if (selectedEndpoint.path.includes('/search')) {
        status = 200;
        result = db.searchRecipes('pho bo');
      } else if (selectedEndpoint.path === '/api/v1/auth/register' && selectedEndpoint.method === 'POST') {
        const parsed = JSON.parse(requestBody || '{}');
        const res = db.register(parsed);
        if (res.error) {
          status = res.error.status;
          result = res.error;
        } else {
          status = 201;
          result = res.authResponse;
        }
      } else if (selectedEndpoint.path === '/api/v1/auth/login' && selectedEndpoint.method === 'POST') {
        const parsed = JSON.parse(requestBody || '{}');
        const res = db.login(parsed);
        if (res.error) {
          status = res.error.status;
          result = res.error;
        } else {
          status = 200;
          result = res.authResponse;
        }
      } else if (selectedEndpoint.path === '/api/v1/auth/google' && selectedEndpoint.method === 'POST') {
        const parsed = JSON.parse(requestBody || '{}');
        const res = db.googleLogin(parsed);
        if (res.error) {
          status = res.error.status;
          result = res.error;
        } else {
          status = 200;
          result = res.authResponse;
        }
      } else if (selectedEndpoint.path === '/api/v1/auth/refresh' && selectedEndpoint.method === 'POST') {
        const parsed = JSON.parse(requestBody || '{}');
        const res = db.refreshToken(parsed.refreshToken || '');
        if (res.error) {
          status = res.error.status;
          result = res.error;
        } else {
          status = 200;
          result = res.authResponse;
        }
      } else if (selectedEndpoint.path === '/health') {
        status = 200;
        result = {
          status: 'Healthy',
          totalDuration: '00:00:00.0124',
          entries: {
            npgsql: { status: 'Healthy', description: 'PostgreSQL 16 connection pool OK (100 max)' },
            redis: { status: 'Healthy', description: 'Redis 7 ping OK on port 6379' },
            minio: { status: 'Healthy', description: 'MinIO S3 bucket culinary-blog accessible' },
          },
        };
      } else if (selectedEndpoint.path === '/api/v1/auth/me') {
        const user = db.getCurrentUser();
        if (!user) {
          status = 401;
          result = {
            type: 'AUTH_UNAUTHORIZED',
            title: 'Unauthorized',
            status: 401,
            detail: 'Bearer token is missing or expired.',
          };
        } else {
          status = 200;
          result = user;
        }
      } else if (selectedEndpoint.method === 'POST' && selectedEndpoint.path === '/api/v1/categories') {
        const parsed = JSON.parse(requestBody || '{}');
        const res = db.createCategory(parsed.name || 'New Category', parsed.description, parsed.imageUrl);
        if (res.error) {
          status = res.error.status;
          result = res.error;
        } else {
          status = 201;
          result = res.category;
        }
      } else {
        // Sample mock response from spec
        status = selectedEndpoint.statusCodes[0]?.code || 200;
        try {
          result = JSON.parse(selectedEndpoint.responseSample);
        } catch {
          result = { message: selectedEndpoint.responseSample };
        }
      }
    } catch (err: any) {
      status = 400;
      result = {
        type: 'VALIDATION_ERROR',
        title: 'Bad Request',
        status: 400,
        detail: err?.message || 'Invalid request body JSON syntax.',
      };
    }

    const elapsed = Math.round(performance.now() - start + Math.random() * 15 + 10);
    setLatencyMs(elapsed);
    setResponseStatus(status);
    setResponseOutput(JSON.stringify(result, null, 2));

    db.addLog(
      selectedEndpoint.method,
      selectedEndpoint.path,
      status,
      elapsed,
      `Executed API via Scalar/Swagger Explorer: ${selectedEndpoint.summary}`
    );
  };

  const getMethodBadge = (m: string) => {
    switch (m) {
      case 'GET':
        return 'bg-sky-100 text-sky-800 border-sky-300';
      case 'POST':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'PUT':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'PATCH':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'DELETE':
        return 'bg-rose-100 text-rose-800 border-rose-300';
      default:
        return 'bg-stone-100 text-stone-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-sky-100 text-sky-700 rounded-xl">
              <Terminal className="w-6 h-6" />
            </span>
            <div>
              <h1 className="text-2xl font-bold font-serif text-stone-900">
                .NET 10 Minimal APIs & Scalar Explorer
              </h1>
              <p className="text-xs sm:text-sm text-stone-500">
                Directly interact with ~30 REST endpoints adhering to RFC 7807 Problem Details
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs px-3 py-1 rounded-full bg-stone-100 border border-stone-200 font-mono text-stone-600">
            Base URL: /api/v1
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono font-semibold">
            Status: Active
          </span>
        </div>
      </div>

      {/* Main 2-Column Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Sidebar: Endpoint list (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 shadow-xs p-4 space-y-3 max-h-[780px] overflow-y-auto">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">
              Endpoints ({API_ENDPOINTS.length})
            </span>
            <span className="text-[11px] text-stone-400 font-mono">ASP.NET 10</span>
          </div>

          <div className="space-y-1.5">
            {API_ENDPOINTS.map((ep, idx) => {
              const isSelected =
                selectedEndpoint.path === ep.path && selectedEndpoint.method === ep.method;

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectEndpoint(ep)}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                      : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 truncate">
                      <span
                        className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${
                          isSelected
                            ? 'bg-stone-800 text-stone-200 border-stone-700'
                            : getMethodBadge(ep.method)
                        }`}
                      >
                        {ep.method}
                      </span>
                      <span className="font-mono text-xs truncate">{ep.path}</span>
                    </div>

                    {ep.authRequired && (
                      <Shield className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-amber-400' : 'text-stone-400'}`} />
                    )}
                  </div>

                  <p
                    className={`text-[11px] mt-1 line-clamp-1 ${
                      isSelected ? 'text-stone-300' : 'text-stone-500'
                    }`}
                  >
                    {ep.summary}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Pane: Endpoint Details & Runner (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xs p-5 space-y-4">
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${getMethodBadge(
                    selectedEndpoint.method
                  )}`}
                >
                  {selectedEndpoint.method}
                </span>
                <span className="font-mono font-semibold text-stone-900 text-sm sm:text-base">
                  {selectedEndpoint.path}
                </span>

                {selectedEndpoint.authRequired ? (
                  <span className="text-[11px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-medium">
                    Auth: Bearer JWT ({selectedEndpoint.requiredRole || 'Author'})
                  </span>
                ) : (
                  <span className="text-[11px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium">
                    Public (Anonymous)
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-stone-600">{selectedEndpoint.summary}</p>
            </div>

            {/* Request Body editor if applicable */}
            {selectedEndpoint.requestSample && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                    Request Body (application/json)
                  </label>
                  <span className="text-[11px] text-stone-400 font-mono">Editable</span>
                </div>
                <textarea
                  rows={6}
                  value={requestBody}
                  onChange={e => setRequestBody(e.target.value)}
                  className="w-full p-3 font-mono text-xs bg-stone-900 text-emerald-400 rounded-xl border border-stone-800 focus:ring-1 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>
            )}

            {/* Execute Button */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1.5 text-xs text-stone-500">
                <span>Expected Status Codes:</span>
                {selectedEndpoint.statusCodes.map(sc => (
                  <span
                    key={sc.code}
                    className="font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 text-[11px]"
                  >
                    {sc.code}
                  </span>
                ))}
              </div>

              <button
                onClick={executeEndpoint}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Execute Request</span>
              </button>
            </div>
          </div>

          {/* Response Box */}
          {responseOutput && (
            <div className="bg-stone-900 rounded-2xl border border-stone-800 p-5 space-y-3 text-stone-100 shadow-md">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase font-bold text-stone-400">Response</span>
                  <span
                    className={`font-mono text-xs px-2.5 py-0.5 rounded-md font-bold ${
                      responseStatus! < 300
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        : 'bg-rose-950 text-rose-400 border border-rose-800'
                    }`}
                  >
                    HTTP {responseStatus}
                  </span>
                  {latencyMs && (
                    <span className="text-[11px] font-mono text-stone-400">
                      {latencyMs} ms
                    </span>
                  )}
                </div>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(responseOutput);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="text-xs text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy</span>
                </button>
              </div>

              <pre className="p-3 bg-stone-950 rounded-xl overflow-x-auto text-xs font-mono text-emerald-400 max-h-96">
                {responseOutput}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
