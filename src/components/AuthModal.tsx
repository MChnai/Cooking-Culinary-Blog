import React, { useState, useEffect } from 'react';
import {
  X,
  Lock,
  Mail,
  User,
  Shield,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  KeyRound,
  LogIn,
  UserPlus,
  Flame,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { db } from '../lib/storage';
import { ApplicationUser, AuthResponseDto, ProblemDetails, RefreshTokenRecord } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: ApplicationUser | null;
  onAuthSuccess: (user: ApplicationUser, authResponse: AuthResponseDto) => void;
  onLogout: () => void;
  initialTab?: 'login' | 'register' | 'tokens';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onAuthSuccess,
  onLogout,
  initialTab = 'login',
}) => {
  const [tab, setTab] = useState<'login' | 'register' | 'tokens'>(initialTab);

  // Form states
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [regFullName, setRegFullName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [regPassword, setRegPassword] = useState('');

  // Result / Error display
  const [errorDetails, setErrorDetails] = useState<ProblemDetails | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Tokens inspector
  const [tokens, setTokens] = useState<RefreshTokenRecord[]>([]);
  const [selectedTokenToRotate, setSelectedTokenToRotate] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setErrorDetails(null);
      setSuccessMessage(null);
      setTokens(db.getRefreshTokens(currentUser?.id));
      if (initialTab) setTab(initialTab);
    }
  }, [isOpen, currentUser, initialTab]);

  const refreshTokensList = () => {
    setTokens(db.getRefreshTokens(currentUser?.id));
  };

  if (!isOpen) return null;

  // Password validation helpers for FR-AUTH-001
  const hasMinLength = regPassword.length >= 8;
  const hasUpper = /[A-Z]/.test(regPassword);
  const hasDigit = /[0-9]/.test(regPassword);
  const hasSpecial = /[\W_]/.test(regPassword);
  const isPasswordValid = hasMinLength && hasUpper && hasDigit && hasSpecial;

  // FR-AUTH-001: Register Handler
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorDetails(null);
    setSuccessMessage(null);

    const result = db.register({
      fullName: regFullName,
      email: regEmail,
      userName: regUsername,
      password: regPassword,
    });

    setIsProcessing(false);

    if (result.error) {
      setErrorDetails(result.error);
    } else if (result.authResponse) {
      setSuccessMessage(`Account registered successfully! Role 'Author' assigned. Welcome email queued via Hangfire.`);
      const activeUser = db.getCurrentUser();
      if (activeUser) {
        onAuthSuccess(activeUser, result.authResponse);
      }
      refreshTokensList();
    }
  };

  // FR-AUTH-002: Login Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorDetails(null);
    setSuccessMessage(null);

    const result = db.login({
      email: loginEmail,
      password: loginPassword,
    });

    setIsProcessing(false);

    if (result.error) {
      setErrorDetails(result.error);
    } else if (result.authResponse) {
      setSuccessMessage(`Welcome back, ${result.authResponse.user.fullName}! JWT issued with 15m lifetime.`);
      const activeUser = db.getCurrentUser();
      if (activeUser) {
        onAuthSuccess(activeUser, result.authResponse);
      }
      refreshTokensList();
    }
  };

  // FR-AUTH-003: Google OAuth 2.0 Handler
  const handleGoogleLogin = (customName?: string, customEmail?: string) => {
    setIsProcessing(true);
    setErrorDetails(null);
    setSuccessMessage(null);

    const email = customEmail || 'google.chef@culinary.dev';
    const fullName = customName || 'Google Authenticated Chef';
    const avatarUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';

    const result = db.googleLogin({
      email,
      fullName,
      avatarUrl,
    });

    setIsProcessing(false);

    if (result.error) {
      setErrorDetails(result.error);
    } else if (result.authResponse) {
      setSuccessMessage(`Google OAuth 2.0 login successful! Linked profile for ${result.authResponse.user.email}`);
      const activeUser = db.getCurrentUser();
      if (activeUser) {
        onAuthSuccess(activeUser, result.authResponse);
      }
      refreshTokensList();
    }
  };

  // FR-AUTH-004: Token Refresh Handler
  const handleRefreshToken = (tokenStr: string) => {
    setIsProcessing(true);
    setErrorDetails(null);
    setSuccessMessage(null);

    const result = db.refreshToken(tokenStr);
    setIsProcessing(false);

    if (result.error) {
      setErrorDetails(result.error);
      refreshTokensList();
    } else if (result.authResponse) {
      setSuccessMessage(`Token rotated! Old token invalidated, new 7-day token generated.`);
      const activeUser = db.getCurrentUser();
      if (activeUser) {
        onAuthSuccess(activeUser, result.authResponse);
      }
      refreshTokensList();
    }
  };

  // FR-AUTH-004 A3: Simulate Reuse Attack Handler
  const handleSimulateReuseAttack = (revokedToken: string) => {
    setIsProcessing(true);
    setErrorDetails(null);
    setSuccessMessage(null);

    const result = db.simulateReuseAttack(revokedToken);
    setIsProcessing(false);

    if (result.error) {
      setErrorDetails(result.error);
      refreshTokensList();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-stone-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                Authentication & Identity (FR-AUTH)
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
                  ASP.NET 10 Identity
                </span>
              </h2>
              <p className="text-xs text-stone-400">
                JWT (HS256 15m) • PBKDF2 Hashing • Token Rotation • Lockout (5 attempts)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 bg-stone-50 px-6 pt-2">
          <button
            onClick={() => {
              setTab('login');
              setErrorDetails(null);
              setSuccessMessage(null);
            }}
            className={`pb-3 px-4 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              tab === 'login'
                ? 'border-amber-600 text-amber-700 bg-white rounded-t-lg'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            FR-AUTH-002: Login
          </button>
          <button
            onClick={() => {
              setTab('register');
              setErrorDetails(null);
              setSuccessMessage(null);
            }}
            className={`pb-3 px-4 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              tab === 'register'
                ? 'border-amber-600 text-amber-700 bg-white rounded-t-lg'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            FR-AUTH-001: Register
          </button>
          <button
            onClick={() => {
              setTab('tokens');
              setErrorDetails(null);
              setSuccessMessage(null);
              refreshTokensList();
            }}
            className={`pb-3 px-4 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              tab === 'tokens'
                ? 'border-amber-600 text-amber-700 bg-white rounded-t-lg'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            FR-AUTH-004: Token Rotation ({tokens.length})
          </button>
        </div>

        {/* Feedback Messages */}
        {errorDetails && (
          <div className="mx-6 mt-4 p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-semibold text-rose-900 flex items-center gap-2">
                <span>{errorDetails.title}</span>
                <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-rose-200/70 text-rose-900">
                  HTTP {errorDetails.status}
                </span>
              </div>
              <p>{errorDetails.detail}</p>
              {errorDetails.errors && (
                <ul className="list-disc list-inside space-y-0.5 text-rose-700 mt-1 pl-1">
                  {Object.entries(errorDetails.errors).map(([field, errs]) => (
                    <li key={field}>
                      <strong>{field}:</strong> {Array.isArray(errs) ? errs.join(', ') : String(errs)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {successMessage && (
          <div className="mx-6 mt-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-semibold text-emerald-900">Operation Successful</div>
              <p>{successMessage}</p>
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {/* TAB 1: LOGIN (FR-AUTH-002) */}
          {tab === 'login' && (
            <div className="space-y-5">
              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center justify-between">
                <div>
                  <span className="font-semibold">FR-AUTH-002 Security Specs:</span> Token Rotation • Anti-User Enumeration • 5-attempt account lockout (15-min lockout penalty).
                </div>
                <div className="text-[11px] font-mono text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                  Lockout: 5 tries
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={e => setLoginEmail(e.target.value)}
                      placeholder="e.g. author@culinary.dev or admin@culinary.dev"
                      className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="password"
                      required
                      value={loginPassword}
                      onChange={e => setLoginPassword(e.target.value)}
                      placeholder="Enter password (e.g. Culinary@2026)"
                      className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="flex-1 py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <LogIn className="w-4 h-4" />
                    {isProcessing ? 'Authenticating...' : 'Sign In (FR-AUTH-002)'}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setLoginEmail('author@culinary.dev');
                      setLoginPassword('wrong_test_pass');
                    }}
                    title="Simulate failed login attempt to test Account Lockout"
                    className="py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium rounded-xl border border-stone-300 transition-colors"
                  >
                    Simulate Bad Password
                  </button>
                </div>
              </form>

              {/* Quick Fill Credentials */}
              <div className="pt-2 border-t border-stone-200">
                <div className="text-[11px] font-semibold text-stone-500 mb-2">
                  Quick Seed Credentials:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      setLoginEmail('admin@culinary.dev');
                      setLoginPassword('Admin@123456');
                    }}
                    className="p-2 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-lg text-left transition-colors"
                  >
                    <div className="font-semibold text-stone-800">Admin User</div>
                    <div className="text-stone-500 text-[11px]">admin@culinary.dev</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLoginEmail('author@culinary.dev');
                      setLoginPassword('Author@123456');
                    }}
                    className="p-2 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-lg text-left transition-colors"
                  >
                    <div className="font-semibold text-stone-800">Author User</div>
                    <div className="text-stone-500 text-[11px]">author@culinary.dev</div>
                  </button>
                </div>
              </div>

              {/* FR-AUTH-003: Google OAuth 2.0 */}
              <div className="pt-3 border-t border-stone-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-px bg-stone-200 flex-1" />
                  <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                    Or Continue With OAuth 2.0 (FR-AUTH-003)
                  </span>
                  <div className="h-px bg-stone-200 flex-1" />
                </div>

                <button
                  type="button"
                  onClick={() => handleGoogleLogin()}
                  className="w-full py-2.5 px-4 bg-white hover:bg-stone-50 text-stone-700 font-semibold text-xs rounded-xl border border-stone-300 shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.27 21.36 7.37 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.98 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.27 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                  Sign In with Google (FR-AUTH-003)
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: REGISTER (FR-AUTH-001) */}
          {tab === 'register' && (
            <div className="space-y-5">
              <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs text-emerald-900 space-y-1">
                <div className="font-semibold flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-emerald-600" />
                  FR-AUTH-001 Specification Workflow:
                </div>
                <p className="text-emerald-800 text-[11px]">
                  1. Automatic role assignment: <strong>Author</strong> • 2. Auto-login token pair (15m JWT + 7d Refresh Token) • 3. Fire-and-forget Hangfire WelcomeEmailJob queued.
                </p>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        value={regFullName}
                        onChange={e => setRegFullName(e.target.value)}
                        placeholder="e.g. Gordon Ramsay"
                        className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Username * (alphanumeric)
                    </label>
                    <div className="relative">
                      <span className="text-stone-400 absolute left-3 top-2 font-mono text-xs">@</span>
                      <input
                        type="text"
                        required
                        value={regUsername}
                        onChange={e => setRegUsername(e.target.value)}
                        placeholder="gramsay"
                        className="w-full pl-8 pr-3 py-2 text-xs border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      value={regEmail}
                      onChange={e => setRegEmail(e.target.value)}
                      placeholder="gordon@hellskitchen.com"
                      className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="password"
                      required
                      value={regPassword}
                      onChange={e => setRegPassword(e.target.value)}
                      placeholder="Min 8 chars, 1 uppercase, 1 digit, 1 symbol"
                      className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                    />
                  </div>

                  {/* Password Strength Checklist (FR-AUTH-001 Step 3) */}
                  <div className="mt-2.5 p-3 bg-stone-50 border border-stone-200 rounded-xl space-y-1.5 text-[11px]">
                    <div className="font-semibold text-stone-600 mb-1">
                      FR-AUTH-001 FluentValidation Rules:
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className={`flex items-center gap-1.5 ${hasMinLength ? 'text-emerald-700 font-medium' : 'text-stone-400'}`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 ${hasMinLength ? 'text-emerald-600' : 'text-stone-300'}`} />
                        At least 8 characters
                      </div>
                      <div className={`flex items-center gap-1.5 ${hasUpper ? 'text-emerald-700 font-medium' : 'text-stone-400'}`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 ${hasUpper ? 'text-emerald-600' : 'text-stone-300'}`} />
                        1 uppercase letter (A-Z)
                      </div>
                      <div className={`flex items-center gap-1.5 ${hasDigit ? 'text-emerald-700 font-medium' : 'text-stone-400'}`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 ${hasDigit ? 'text-emerald-600' : 'text-stone-300'}`} />
                        1 numeric digit (0-9)
                      </div>
                      <div className={`flex items-center gap-1.5 ${hasSpecial ? 'text-emerald-700 font-medium' : 'text-stone-400'}`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 ${hasSpecial ? 'text-emerald-600' : 'text-stone-300'}`} />
                        1 special symbol (@, #, $)
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing || !isPasswordValid}
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <UserPlus className="w-4 h-4" />
                  {isProcessing ? 'Registering Account...' : 'Create Account & Auto-Login (FR-AUTH-001)'}
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: TOKENS & ROTATION (FR-AUTH-004) */}
          {tab === 'tokens' && (
            <div className="space-y-5">
              <div className="p-3 bg-sky-50/80 border border-sky-200 rounded-xl text-xs text-sky-900 space-y-1">
                <div className="font-semibold flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-sky-600" />
                  FR-AUTH-004: Token Rotation & Paranoid Reuse Detection
                </div>
                <p className="text-sky-800 text-[11px]">
                  When a client refreshes an access token, the old refresh token is marked revoked and linked to its successor. If an already-revoked token is submitted (Reuse Attack detected), all active tokens for that user are terminated immediately!
                </p>
              </div>

              {currentUser && (
                <div className="p-3 bg-stone-100 rounded-xl border border-stone-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-stone-500">Active User:</span>{' '}
                    <span className="font-bold text-stone-900">{currentUser.displayName}</span> ({currentUser.email})
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-800 border border-amber-300">
                    Role: {currentUser.roles.join(', ')}
                  </span>
                </div>
              )}

              {/* Refresh Tokens Table */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                    <KeyRound className="w-3.5 h-3.5 text-stone-600" />
                    Persisted Refresh Tokens ({tokens.length})
                  </h3>
                  <button
                    onClick={refreshTokensList}
                    className="text-[11px] text-amber-700 hover:text-amber-800 flex items-center gap-1 font-medium"
                  >
                    <RefreshCw className="w-3 h-3" /> Refresh Table
                  </button>
                </div>

                {tokens.length === 0 ? (
                  <div className="p-6 text-center text-xs text-stone-400 bg-stone-50 rounded-xl border border-dashed border-stone-200">
                    No refresh tokens generated yet. Sign in or register to issue a token pair.
                  </div>
                ) : (
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {tokens.map(token => (
                      <div
                        key={token.id}
                        className={`p-3 rounded-xl border text-xs transition-all ${
                          token.isRevoked
                            ? 'bg-stone-50/70 border-stone-200 text-stone-500'
                            : 'bg-emerald-50/40 border-emerald-200 text-stone-800 shadow-2xs'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-mono font-medium text-[11px] truncate max-w-[280px]">
                            {token.token}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              token.isRevoked
                                ? 'bg-rose-100 text-rose-800 border border-rose-200'
                                : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            }`}
                          >
                            {token.isRevoked ? 'REVOKED (Inactive)' : 'ACTIVE (Valid)'}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-stone-500">
                          <span>Created: {new Date(token.createdAt).toLocaleTimeString()}</span>
                          <span>Expires: {new Date(token.expiresAt).toLocaleDateString()}</span>
                          {token.replacedByToken && (
                            <span className="text-amber-700 font-mono text-[10px]">
                              Successor: {token.replacedByToken.substring(0, 12)}...
                            </span>
                          )}
                        </div>

                        <div className="mt-2 pt-2 border-t border-stone-200/60 flex items-center gap-2">
                          {!token.isRevoked ? (
                            <button
                              type="button"
                              onClick={() => handleRefreshToken(token.token)}
                              disabled={isProcessing}
                              className="px-2.5 py-1 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-[11px] font-medium flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              <RefreshCw className="w-3 h-3" />
                              Rotate Token (FR-AUTH-004)
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handleSimulateReuseAttack(token.token)}
                              disabled={isProcessing}
                              className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-[11px] font-medium flex items-center gap-1 transition-colors cursor-pointer"
                              title="Test FR-AUTH-004 A3: Reuse Attack Detection"
                            >
                              <AlertTriangle className="w-3 h-3" />
                              Simulate Reuse Attack (FR-AUTH-004 A3)
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>PostgreSQL 16 `refresh_tokens` table connected</span>
          </div>

          <div className="flex items-center gap-2">
            {currentUser && (
              <button
                type="button"
                onClick={() => {
                  onLogout();
                  setSuccessMessage('Logged out successfully.');
                  refreshTokensList();
                }}
                className="px-3 py-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-200 rounded-lg font-medium transition-colors"
              >
                Sign Out
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
