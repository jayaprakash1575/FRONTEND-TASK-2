import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export const WishlistDrawer = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    toggleWishlist,
    addToCart,
    allProducts,
    formatPrice,
    navigate
  } = useApp();

  if (!isWishlistOpen) return null;

  const wishedProducts = allProducts.filter(p => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white dark:bg-pulse-card border-l border-slate-200 dark:border-white/10 h-full flex flex-col z-10 shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-pulse-secondary fill-pulse-secondary/20" />
            <h3 className="font-heading font-black text-lg text-slate-900 dark:text-white">Your Saved Gear</h3>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-pulse-secondary/15 text-pulse-secondary font-bold">
              {wishedProducts.length} items
            </span>
          </div>
          <button 
            onClick={() => setIsWishlistOpen(false)}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {wishedProducts.length === 0 ? (
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-pulse-surface border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-black text-lg text-slate-900 dark:text-white mb-1">No Saved Products Yet</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xs mb-6">
              Tap the heart icon on any device to save it for later or compare.
            </p>
            <button
              onClick={() => {
                setIsWishlistOpen(false);
                navigate('/products');
              }}
              className="px-6 py-2.5 rounded-xl bg-pulse-secondary text-white font-bold text-xs uppercase tracking-wider shadow-glow-secondary hover:opacity-90 transition-all"
            >
              Browse Catalog
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-slate-100 dark:divide-white/10">
            {wishedProducts.map((product) => (
              <div key={product.id} className="py-4 first:pt-0 last:pb-0 flex gap-4 items-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-20 h-20 rounded-xl object-contain bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-1 shrink-0" 
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-pulse-primary uppercase font-bold tracking-wider">
                    {product.categoryLabel}
                  </span>
                  <h4 
                    onClick={() => {
                      setIsWishlistOpen(false);
                      navigate(`/product/${product.id}`);
                    }}
                    className="font-bold text-sm text-slate-900 dark:text-white truncate hover:text-pulse-primary cursor-pointer transition-colors"
                  >
                    {product.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-heading font-black text-sm text-slate-900 dark:text-white">{formatPrice(product.price)}</span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 line-through">{formatPrice(product.originalPrice)}</span>
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    <button
                      onClick={() => {
                        addToCart(product);
                        toggleWishlist(product);
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-pulse-primary text-black font-heading font-bold text-xs flex items-center gap-1.5 hover:bg-cyan-300 transition-all shadow-glow-sm"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Move to Bag
                    </button>
                    <button
                      onClick={() => toggleWishlist(product)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                      title="Remove from wishlist"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
