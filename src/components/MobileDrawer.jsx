import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Home, 
  Grid, 
  Info, 
  HelpCircle, 
  Sun, 
  Moon, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  Headphones,
  Watch,
  Volume2,
  Gamepad2,
  CircleDot
} from 'lucide-react';

export const MobileDrawer = () => {
  const { 
    isMobileMenuOpen, 
    setIsMobileMenuOpen, 
    navigate, 
    route, 
    theme, 
    toggleTheme,
    user,
    setIsAuthOpen 
  } = useApp();

  if (!isMobileMenuOpen) return null;

  const categories = [
    { name: 'True Wireless', sub: 'ANC Audio', cat: 'earbuds', emoji: '🎧' },
    { name: 'Smartwatches', sub: 'AMOLED & BT Calling', cat: 'smartwatches', emoji: '⌚' },
    { name: 'Headphones', sub: 'Studio Hi-Res', cat: 'headphones', emoji: '🎵' },
    { name: 'Gaming Gear', sub: '30ms Ultra Low Latency', cat: 'gaming', emoji: '⚡' },
    { name: 'Party Speakers', sub: 'Waterproof Bass', cat: 'speakers', emoji: '🔊' },
    { name: 'Smart Rings', sub: 'Biometric Titanium', cat: 'rings', emoji: '💍' },
  ];

  const handleNav = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-sm bg-white dark:bg-pulse-card border-r border-slate-200 dark:border-white/10 h-full flex flex-col z-10 shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 font-heading font-extrabold text-xl text-slate-900 dark:text-white">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-pulse-primary to-cyan-600 flex items-center justify-center text-black">
              <Zap className="w-4 h-4 fill-black" />
            </span>
            <span>PULSE<span className="text-pulse-primary">.</span></span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
            aria-label="Close mobile menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col gap-6">
          {/* Main Links */}
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => handleNav('/home')}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200 hover:text-pulse-primary text-sm font-semibold transition-all"
            >
              <span className="flex items-center gap-3">
                <Home className="w-4 h-4 text-pulse-primary" />
                Home
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            </button>

            <button
              onClick={() => handleNav('/products')}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200 hover:text-pulse-primary text-sm font-semibold transition-all"
            >
              <span className="flex items-center gap-3">
                <Grid className="w-4 h-4 text-pulse-primary" />
                All Products
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pulse-primary/10 text-pulse-primary border border-pulse-primary/20">
                14 GEAR
              </span>
            </button>

            <button
              onClick={() => handleNav('/about')}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200 hover:text-pulse-primary text-sm font-semibold transition-all"
            >
              <span className="flex items-center gap-3">
                <Info className="w-4 h-4 text-pulse-primary" />
                Brand Story
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            </button>

            <button
              onClick={() => handleNav('/contact')}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200 hover:text-pulse-primary text-sm font-semibold transition-all"
            >
              <span className="flex items-center gap-3">
                <HelpCircle className="w-4 h-4 text-pulse-primary" />
                Support Hub
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            </button>
          </nav>

          {/* Categories */}
          <div>
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Shop by Category</span>
              <span className="text-[10px] text-pulse-primary font-semibold">6 Ecosystems</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.cat}
                  onClick={() => handleNav(`/products?category=${cat.cat}`)}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-pulse-surface border border-slate-200 dark:border-white/5 hover:border-pulse-primary/40 hover:bg-white dark:hover:bg-pulse-card transition-all text-left flex flex-col gap-1 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">{cat.emoji}</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-pulse-primary transition-colors">{cat.name}</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate">{cat.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* User Account Section */}
          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-pulse-surface border border-slate-200 dark:border-white/5 mt-auto">
            {user ? (
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Signed in as</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{user.name}</div>
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsAuthOpen(true);
                  }}
                  className="text-xs text-pulse-primary hover:underline font-semibold"
                >
                  Account
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsAuthOpen(true);
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pulse-primary to-cyan-500 text-black font-bold text-xs uppercase tracking-wider shadow-glow-sm hover:shadow-glow transition-all"
              >
                Sign In / Register
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-pulse-surface/60 flex flex-col gap-3">
          <button
            onClick={toggleTheme}
            className="w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-pulse-primary hover:border-pulse-primary/40 transition-all bg-white dark:bg-transparent shadow-sm"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                Switch to Light Mode
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-pulse-primary" />
                Switch to Dark Mode
              </>
            )}
          </button>

          <div className="flex items-center justify-around text-[10px] text-slate-500 dark:text-slate-400 pt-2">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-pulse-primary" />
              1-Yr Warranty
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-pulse-secondary" />
              100% Genuine Tech
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
