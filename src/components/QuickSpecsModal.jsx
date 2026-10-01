import React from 'react';
import { useApp } from '../context/AppContext';
import { X, ShoppingBag, Heart, Check, Star, ArrowRight } from 'lucide-react';

export const QuickSpecsModal = () => {
  const { 
    quickSpecsProduct, 
    setQuickSpecsProduct, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    formatPrice,
    navigate 
  } = useApp();

  if (!quickSpecsProduct) return null;

  const isWished = isInWishlist(quickSpecsProduct.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={() => setQuickSpecsProduct(null)}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        <button
          onClick={() => setQuickSpecsProduct(null)}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xl bg-slate-100 dark:bg-black/40 backdrop-blur-md flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Side */}
          <div className="relative bg-slate-50 dark:bg-pulse-surface p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10">
            <img 
              src={quickSpecsProduct.image} 
              alt={quickSpecsProduct.name} 
              className="max-h-72 object-contain rounded-2xl drop-shadow-2xl"
            />
            {quickSpecsProduct.badge && (
              <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-pulse-primary text-black shadow-glow-sm">
                {quickSpecsProduct.badge}
              </span>
            )}
          </div>

          {/* Details Side */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-pulse-primary uppercase tracking-wider mb-1">
                {quickSpecsProduct.categoryLabel}
              </div>
              <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white mb-2">
                {quickSpecsProduct.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                {quickSpecsProduct.shortDesc}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-heading font-black text-2xl text-slate-900 dark:text-white">
                  {formatPrice(quickSpecsProduct.price)}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500 line-through">
                  {formatPrice(quickSpecsProduct.originalPrice)}
                </span>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">
                  {quickSpecsProduct.discount}
                </span>
              </div>

              {/* Specs Snapshot */}
              <div className="space-y-2 border-t border-b border-slate-100 dark:border-white/10 py-3 mb-4">
                <div className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400">Core Highlights</div>
                {quickSpecsProduct.features.slice(0, 3).map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <Check className="w-3.5 h-3.5 text-pulse-primary shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  addToCart(quickSpecsProduct);
                  setQuickSpecsProduct(null);
                }}
                className="flex-1 py-3 rounded-xl bg-pulse-primary text-black font-heading font-extrabold text-xs uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Bag
              </button>

              <button
                onClick={() => toggleWishlist(quickSpecsProduct)}
                className={`p-3 rounded-xl border border-slate-300 dark:border-white/10 hover:border-pulse-secondary transition-all shadow-xs ${
                  isWished ? 'bg-pulse-secondary/20 text-pulse-secondary' : 'bg-white dark:bg-pulse-card text-slate-600 dark:text-slate-400 hover:text-pulse-secondary'
                }`}
                title="Save to Wishlist"
                aria-label="Save to Wishlist"
              >
                <Heart className={`w-4 h-4 ${isWished ? 'fill-pulse-secondary' : ''}`} />
              </button>

              <button
                onClick={() => {
                  const id = quickSpecsProduct.id;
                  setQuickSpecsProduct(null);
                  navigate(`/product/${id}`);
                }}
                className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 transition-all shadow-xs"
                title="Full Product Page"
                aria-label="Full Product Page"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
