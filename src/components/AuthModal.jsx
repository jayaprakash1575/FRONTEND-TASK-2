import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Lock, Mail, User, Phone, Eye, EyeOff, ShieldCheck, Check } from 'lucide-react';

export const AuthModal = () => {
  const { isAuthOpen, setIsAuthOpen, login, user, logout } = useApp();
  const [tab, setTab] = useState('login'); // 'login' or 'signup'
  
  // Login fields
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup fields
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isAuthOpen) return null;

  // Calculate password strength (0 to 4)
  const calculateStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  };

  const pwdStrength = calculateStrength(signupPassword);
  const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong', 'Unbreakable'];
  const strengthColors = ['bg-rose-500', 'bg-amber-500', 'bg-cyan-500', 'bg-emerald-500'];

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setErrorMsg('Please fill in all credentials.');
      return;
    }
    setErrorMsg('');
    login({
      name: loginEmail.split('@')[0],
      email: loginEmail
    });
    setIsAuthOpen(false);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!signupName || !signupEmail || !signupPhone || !signupPassword) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    if (signupPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    setErrorMsg('');
    login({
      name: signupName,
      email: signupEmail,
      phone: signupPhone
    });
    setIsAuthOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={() => setIsAuthOpen(false)}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-md bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 z-10 animate-in zoom-in-95 duration-200">
        <button
          onClick={() => setIsAuthOpen(false)}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all shadow-xs"
          aria-label="Close auth modal"
        >
          <X className="w-5 h-5" />
        </button>

        {user ? (
          /* Profile / Logout state */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pulse-primary to-pulse-secondary text-black font-bold text-2xl flex items-center justify-center mx-auto mb-4 shadow-glow-sm">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white mb-1">{user.name}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">{user.email}</p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 space-y-2 mb-6 text-left shadow-xs">
              <div className="flex justify-between">
                <span>Account Status:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> PULSE VIP Member
                </span>
              </div>
              <div className="flex justify-between">
                <span>Warranty Claims:</span>
                <span className="text-slate-900 dark:text-white font-semibold">Active (Pan-India)</span>
              </div>
            </div>
            <button
              onClick={() => {
                logout();
                setIsAuthOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30 font-bold text-xs uppercase tracking-wider hover:bg-rose-500 hover:text-white transition-all"
            >
              Sign Out
            </button>
          </div>
        ) : (
          /* Login & Signup Forms */
          <>
            {/* Tab Switcher */}
            <div className="flex p-1 rounded-xl bg-slate-100 dark:bg-pulse-surface border border-slate-200 dark:border-white/10 mb-6">
              <button
                onClick={() => { setTab('login'); setErrorMsg(''); }}
                className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  tab === 'login' ? 'bg-pulse-primary text-black font-extrabold shadow-glow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => { setTab('signup'); setErrorMsg(''); }}
                className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  tab === 'signup' ? 'bg-pulse-primary text-black font-extrabold shadow-glow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Register
              </button>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-600 dark:text-rose-300 text-xs mb-4 font-medium">
                {errorMsg}
              </div>
            )}

            {tab === 'login' ? (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="alex@pulse.audio"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-pulse-primary shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-pulse-primary shadow-xs"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded bg-slate-100 dark:bg-pulse-surface border-slate-300 dark:border-white/10 text-pulse-primary focus:ring-0" />
                    <span>Remember me</span>
                  </label>
                  <a href="#/contact" onClick={() => setIsAuthOpen(false)} className="text-pulse-primary font-semibold hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-pulse-primary text-black font-heading font-extrabold text-sm uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all active:scale-95"
                >
                  Sign In to PULSE
                </button>
              </form>
            ) : (
              <form onSubmit={handleSignupSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-pulse-primary shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="alex@pulse.audio"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-pulse-primary shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      value={signupPhone}
                      onChange={(e) => setSignupPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-pulse-primary shadow-xs font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-1">Create Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="Minimum 8 characters"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-2 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-pulse-primary shadow-xs"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {/* Strength Meter */}
                  {signupPassword && (
                    <div className="mt-2 space-y-1">
                      <div className="flex gap-1 h-1">
                        {[1, 2, 3, 4].map((step) => (
                          <div 
                            key={step}
                            className={`flex-1 rounded-full transition-all ${
                              pwdStrength >= step ? strengthColors[step - 1] : 'bg-slate-200 dark:bg-slate-800'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">
                        Strength: <strong className="text-slate-900 dark:text-white">{strengthLabels[pwdStrength]}</strong>
                      </span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-pulse-secondary text-white font-heading font-extrabold text-sm uppercase tracking-wider shadow-glow-secondary hover:opacity-95 transition-all mt-4 active:scale-95"
                >
                  Create PULSE Account
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};
