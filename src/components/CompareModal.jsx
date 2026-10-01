import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Trash2, ShoppingBag, CheckCircle2 } from 'lucide-react';

export const CompareModal = () => {
  const {
    isCompareOpen,
    setIsCompareOpen,
    compareList,
    removeFromCompare,
    addToCart,
    formatPrice
  } = useApp();

  if (!isCompareOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={() => setIsCompareOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div>
            <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white">Product Spec Comparison</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Comparing {compareList.length} of 3 devices</p>
          </div>
          <button 
            onClick={() => setIsCompareOpen(false)}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all shadow-xs"
            aria-label="Close comparison"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {compareList.length === 0 ? (
          <div className="p-12 text-center text-slate-500 dark:text-slate-400">
            <p className="text-sm">No devices selected for comparison yet.</p>
          </div>
        ) : (
          <div className="p-6 overflow-x-auto flex-1">
            <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300 border-collapse">
              <thead>
                <tr>
                  <th className="p-3 w-40 text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Specs</th>
                  {compareList.map((product) => (
                    <th key={product.id} className="p-3 min-w-[200px] text-center">
                      <div className="flex flex-col items-center">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-24 h-24 rounded-xl object-contain bg-slate-50 dark:bg-pulse-surface border border-slate-200 dark:border-white/10 p-2 mb-2 shadow-xs" 
                        />
                        <div className="text-xs font-bold text-pulse-primary uppercase tracking-wider">{product.categoryLabel}</div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white">{product.name}</h4>
                        <div className="font-heading font-black text-base text-slate-900 dark:text-white mt-1">
                          {formatPrice(product.price)}
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                          <button
                            onClick={() => addToCart(product)}
                            className="px-3 py-1.5 rounded-lg bg-pulse-primary text-black font-heading font-bold text-xs flex items-center gap-1 shadow-glow-sm hover:shadow-glow"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            Add
                          </button>
                          <button
                            onClick={() => removeFromCompare(product.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                            title="Remove"
                            aria-label="Remove from compare"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/10 text-xs">
                <tr>
                  <td className="p-3 font-bold text-slate-700 dark:text-slate-400">Rating</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-3 text-center text-amber-500 dark:text-amber-400 font-bold">★ {p.rating} ({p.reviewCount})</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-700 dark:text-slate-400">Battery Life / Playtime</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-3 text-center text-slate-800 dark:text-slate-200 font-medium">
                      {p.specs['Total Playtime'] || p.specs['Battery Life'] || 'N/A'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-700 dark:text-slate-400">Water Resistance</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-3 text-center text-slate-800 dark:text-slate-200 font-medium">
                      {p.specs['Water Resistance'] || 'IPX4'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-700 dark:text-slate-400">Connectivity / Bluetooth</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-3 text-center text-slate-800 dark:text-slate-200 font-medium">
                      {p.specs['Bluetooth Version'] || p.specs['Bluetooth'] || 'v5.3'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-700 dark:text-slate-400">Core Technology</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-3 text-center text-slate-800 dark:text-slate-200 font-medium">
                      {p.specs['ANC Depth'] || p.specs['Display'] || p.specs['Driver Size'] || p.specs['Power Output'] || 'Hi-Fi Audio'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-700 dark:text-slate-400">Warranty</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-3 text-center text-emerald-600 dark:text-emerald-400 font-semibold">1-Year Pan-India Replacement</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
