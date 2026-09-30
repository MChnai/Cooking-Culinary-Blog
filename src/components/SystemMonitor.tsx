import React, { useState } from 'react';
import { Activity, Clock, RefreshCw, Server, AlertCircle, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';
import { db } from '../lib/storage';
import { HangfireJob, SystemLogEntry } from '../types';

export const SystemMonitor: React.FC = () => {
  const [jobs, setJobs] = useState<HangfireJob[]>(db.getJobs());
  const [logs, setLogs] = useState<SystemLogEntry[]>(db.getLogs());
  const [triggeringJob, setTriggeringJob] = useState<string | null>(null);

  const refreshData = () => {
    setJobs(db.getJobs());
    setLogs(db.getLogs());
  };

  const handleManualTrigger = (jobName: string) => {
    setTriggeringJob(jobName);
    setTimeout(() => {
      if (jobName.includes('Sitemap')) {
        db.enqueueJob(
          'SitemapGenerationJob (FR-JOB-003)',
          'Recurring',
          'Admin manually triggered Hangfire dashboard',
          'Updated sitemap.xml with the latest published recipes.'
        );
      } else if (jobName.includes('Image')) {
        db.enqueueJob(
          'ImageResizeJob (FR-JOB-002)',
          'Fire-and-forget',
          'Manual batch optimization',
          'Verified and generated 300x300 thumbnails for all images.'
        );
      }
      refreshData();
      setTriggeringJob(null);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-100 text-purple-700 rounded-xl">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-serif text-stone-900">
              System Observability & Hangfire Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-stone-500">
              Monitor Health Checks (FR-OBS-001), Background Jobs (FR-JOB), and Serilog Traces (FR-OBS-002)
            </p>
          </div>
        </div>

        <button
          onClick={refreshData}
          className="px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer self-start md:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh Metrics</span>
        </button>
      </div>

      {/* 3 Health Check Probes (/health, /health/live, /health/ready) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono">
              GET /health/ready
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
              Healthy
            </span>
          </div>
          <h3 className="font-bold text-stone-900 text-base">PostgreSQL 16 RDBMS</h3>
          <p className="text-xs text-stone-600">
            Port 5432 • Max 100 connections • Extensions: <code className="text-stone-800 font-mono">unaccent, pg_trgm</code> operational.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono">
              Redis 7 Distributed Cache
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
              Hit Rate 89%
            </span>
          </div>
          <h3 className="font-bold text-stone-900 text-base">Redis 7 Cluster</h3>
          <p className="text-xs text-stone-600">
            Port 6379 • Persistent AOF Mode • Output Cache policies: <code className="text-stone-800 font-mono">RecipeList, RecipeDetail</code>.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono">
              MinIO S3 Storage
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
              Connected
            </span>
          </div>
          <h3 className="font-bold text-stone-900 text-base">MinIO Object Storage</h3>
          <p className="text-xs text-stone-600">
            Port 9000 • Bucket: <code className="text-stone-800 font-mono">culinary-blog</code> • Public-read policy for Recipe Images.
          </p>
        </div>
      </div>

      {/* Hangfire Background Jobs Table (FR-JOB) */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-xs p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-600" />
            <h2 className="font-bold font-serif text-stone-900 text-lg">
              Hangfire Background Jobs (FR-JOB)
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleManualTrigger('SitemapGenerationJob')}
              disabled={triggeringJob !== null}
              className="px-3 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 rounded-lg text-xs font-semibold cursor-pointer disabled:opacity-50"
            >
              Run Sitemap Job
            </button>
            <button
              onClick={() => handleManualTrigger('ImageResizeJob')}
              disabled={triggeringJob !== null}
              className="px-3 py-1 bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 rounded-lg text-xs font-semibold cursor-pointer disabled:opacity-50"
            >
              Run Image Resize Job
            </button>
          </div>
        </div>

        <div className="divide-y divide-stone-100 border border-stone-200 rounded-xl overflow-hidden">
          {jobs.map(job => (
            <div key={job.id} className="p-3.5 bg-white hover:bg-stone-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-stone-900 text-sm">{job.jobName}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-stone-100 text-stone-600 border border-stone-200">
                    {job.type}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-[10px]">
                    {job.status}
                  </span>
                </div>
                <p className="text-stone-600">{job.details || job.triggerReason}</p>
              </div>

              <div className="text-right text-stone-400 font-mono text-[11px] shrink-0">
                {new Date(job.createdAt).toLocaleTimeString('en-US')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Serilog Structured Logs (FR-OBS-002) */}
      <div className="bg-stone-950 text-stone-200 rounded-2xl border border-stone-800 p-5 space-y-3 font-mono text-xs shadow-xl">
        <div className="flex items-center justify-between border-b border-stone-800 pb-3 font-sans">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-white text-base">
              Serilog Structured Audit Log Stream (FR-OBS-002)
            </span>
          </div>
          <span className="text-xs text-stone-400">
            Enriched with CorrelationId, RequestPath, UserId & ElapsedMs
          </span>
        </div>

        <div className="max-h-72 overflow-y-auto space-y-2 pr-2">
          {logs.length === 0 ? (
            <p className="text-stone-500 py-4 text-center">No HTTP request logs captured yet.</p>
          ) : (
            logs.map(log => (
              <div
                key={log.id}
                className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 flex flex-wrap items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-stone-500">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
                  <span
                    className={`font-bold px-1.5 py-0.5 rounded text-[10px] ${
                      log.level === 'Error'
                        ? 'bg-rose-950 text-rose-400'
                        : log.level === 'Warning'
                        ? 'bg-amber-950 text-amber-400'
                        : 'bg-emerald-950 text-emerald-400'
                    }`}
                  >
                    {log.level.toUpperCase()}
                  </span>
                  <span className="text-stone-400 text-[11px]">corr:{log.correlationId}</span>
                  <span className="font-bold text-white">{log.method}</span>
                  <span className="text-sky-400">{log.requestPath}</span>
                  <span className="text-stone-300">→ {log.message}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-stone-800 text-stone-300 font-bold text-[10px]">
                    {log.statusCode}
                  </span>
                  <span className={`text-[11px] ${log.elapsedMs > 50 ? 'text-amber-400 font-bold' : 'text-stone-500'}`}>
                    {log.elapsedMs}ms
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
