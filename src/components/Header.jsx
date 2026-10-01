import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  Sun, 
  Moon, 
  Heart, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  Sparkles,
  ArrowRight,
  SlidersHorizontal
} from 'lucide-react';

export const Header = () => {
  const {
    theme,
    toggleTheme,
    route,
    navigate,
    cartCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsMobileMenuOpen,
    setIsAuthOpen,
    user,
    allProducts,
    formatPrice
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);

  // Search filter
  const searchResults = searchQuery.trim()
    ? allProducts.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchResultClick = (productId) => {
    setSearchQuery('');
    setIsSearchFocused(false);
    navigate(`/product/${productId}`);
  };

  const navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Shop Gear', path: '/products' },
    { label: 'Earbuds', path: '/products?category=earbuds' },
    { label: 'Smartwatches', path: '/products?category=smartwatches' },
    { label: 'About Us', path: '/about' },
    { label: 'Support', path: '/contact' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-slate-100 dark:bg-gradient-to-r dark:from-pulse-dark dark:via-pulse-surface dark:to-pulse-dark border-b border-cyan-500/20 py-2 px-4 text-center text-xs font-semibold tracking-wider text-slate-700 dark:text-slate-300 transition-colors">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <span className="text-pulse-primary animate-pulse">⚡</span>
          <span>
            <strong className="text-slate-900 dark:text-white">FLASH SALE</strong> Use code <span className="text-pulse-primary font-mono font-bold px-1.5 py-0.5 rounded bg-pulse-primary/10 border border-pulse-primary/30">PULSE20</span> for 20% OFF | Free Express Delivery | 1-Year Warranty
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/95 dark:bg-[#07090E]/95 border-b border-slate-200 dark:border-white/10 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <button 
            onClick={() => navigate('/home')} 
            className="flex items-center gap-2.5 text-slate-900 dark:text-white font-heading font-extrabold text-2xl tracking-tight group transition-transform active:scale-95"
            aria-label="PULSE Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pulse-primary to-cyan-600 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <span className="flex items-center">
              PULSE<span className="text-pulse-primary">.</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = route.path === link.path.split('?')[0];
              return (
                <button
                  key={link.label}
                  onClick={() => navigate(link.path)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 relative ${
                    isActive 
                      ? 'text-pulse-primary bg-pulse-primary/10 font-bold shadow-sm' 
                      : 'text-slate-700 dark:text-slate-300 hover:text-pulse-primary hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-pulse-primary rounded-full shadow-glow-sm" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Search Bar with Autocomplete Dropdown */}
          <div className="hidden md:block relative flex-1 max-w-xs xl:max-w-sm" ref={searchRef}>
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search earbuds, watches, bass..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full pl-10 pr-8 py-2 rounded-xl text-sm bg-slate-50 dark:bg-pulse-surface border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-pulse-primary focus:ring-1 focus:ring-pulse-primary transition-all shadow-inner"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-pulse-primary"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Live Autocomplete Results */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-pulse-card/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-2 border-b border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-3">
                  <span>Found {searchResults.length} matches</span>
                  <span className="text-pulse-primary font-medium">Quick Jump</span>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-white/5 max-h-80 overflow-y-auto">
                  {searchResults.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleSearchResultClick(p.id)}
                      className="w-full p-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-left group"
                    >
                      <img src={p.image} alt={p.name} className="w-12 h-12 rounded-lg object-cover bg-slate-900 border border-white/5" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-pulse-primary font-semibold uppercase tracking-wider">{p.categoryLabel}</div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-pulse-primary transition-colors">{p.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{formatPrice(p.price)} <span className="line-through text-slate-400 dark:text-slate-600">{formatPrice(p.originalPrice)}</span></div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-pulse-primary group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-pulse-primary/50 text-slate-700 dark:text-slate-300 hover:text-pulse-primary transition-all relative active:scale-95 shadow-sm"
              aria-label="Toggle Dark/Light Mode"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400 hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-5 h-5 text-pulse-primary hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-pulse-secondary hover:border-pulse-secondary/50 transition-all relative active:scale-95 shadow-sm"
              aria-label="Wishlist"
              title="View Wishlist"
            >
              <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'text-pulse-secondary fill-pulse-secondary/20' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-pulse-secondary text-white text-[10px] font-bold flex items-center justify-center shadow-glow-secondary animate-in zoom-in">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-pulse-primary hover:border-pulse-primary/50 transition-all relative active:scale-95 shadow-sm"
              aria-label="Shopping Bag"
              title="View Bag"
            >
              <ShoppingBag className={`w-5 h-5 ${cartCount > 0 ? 'text-pulse-primary' : ''}`} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-pulse-primary text-black text-[10px] font-bold flex items-center justify-center shadow-glow animate-in zoom-in">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Account */}
            <button
              onClick={() => setIsAuthOpen(true)}
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-pulse-primary hover:border-pulse-primary/50 transition-all active:scale-95 shadow-sm"
              aria-label="User Account"
              title={user ? `Signed in as ${user.name}` : 'Sign In / Register'}
            >
              {user ? (
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-pulse-primary to-pulse-secondary text-black font-bold text-xs flex items-center justify-center">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              ) : (
                <User className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-pulse-primary hover:border-pulse-primary/50 transition-all"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
