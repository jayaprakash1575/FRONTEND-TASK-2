import React, { useState, useMemo, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  X, 
  Star, 
  ShoppingBag, 
  Heart, 
  Scale, 
  RotateCcw,
  Sparkles,
  ArrowUpDown
} from 'lucide-react';

export const Products = () => {
  const {
    allProducts,
    addToCart,
    toggleWishlist,
    isInWishlist,
    compareList,
    toggleCompare,
    setQuickSpecsProduct,
    formatPrice,
    route,
    navigate,
    setIsCompareOpen
  } = useApp();

  // Category from URL query or state
  const initialCat = route.params && route.params.category ? route.params.category : 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCat);

  useEffect(() => {
    if (route.params && route.params.category) {
      setSelectedCategory(route.params.category);
    }
  }, [route.params]);

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Trigger brief skeleton shimmer when switching categories
  const handleCategoryChange = (cat) => {
    setIsLoading(true);
    setSelectedCategory(cat);
    setTimeout(() => setIsLoading(false), 250);
  };

  const featureOptions = [
    { id: 'anc', label: 'Active Noise Cancellation' },
    { id: 'amoled', label: 'AMOLED Display' },
    { id: 'water', label: 'Water Resistant (IPX5+)' },
    { id: 'calling', label: 'Bluetooth Calling' },
    { id: 'fastcharge', label: 'Fast SuperCharge' },
  ];

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'earbuds', label: 'True Wireless (Earbuds)' },
    { id: 'smartwatches', label: 'Smartwatches' },
    { id: 'headphones', label: 'Studio Headphones' },
    { id: 'gaming', label: 'Gaming Audio' },
    { id: 'speakers', label: 'Party Speakers' },
    { id: 'rings', label: 'Smart Rings' },
  ];

  const handleFeatureToggle = (id) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
    setMaxPrice(10000);
    setSelectedFeatures([]);
    setMinRating(0);
    setSortBy('featured');
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return allProducts
      .filter((p) => {
        // Category
        if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
        // Search
        if (searchTerm.trim()) {
          const q = searchTerm.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchDesc = p.shortDesc.toLowerCase().includes(q);
          const matchCat = p.categoryLabel.toLowerCase().includes(q);
          if (!matchName && !matchDesc && !matchCat) return false;
        }
        // Price
        if (p.price > maxPrice) return false;
        // Rating
        if (minRating > 0 && p.rating < minRating) return false;
        // Features
        if (selectedFeatures.length > 0) {
          const featsStr = JSON.stringify(p.features).toLowerCase();
          const specsStr = JSON.stringify(p.specs).toLowerCase();
          for (let f of selectedFeatures) {
            if (f === 'anc' && !featsStr.includes('anc') && !specsStr.includes('anc')) return false;
            if (f === 'amoled' && !featsStr.includes('amoled') && !specsStr.includes('amoled')) return false;
            if (f === 'water' && !featsStr.includes('water') && !specsStr.includes('ipx')) return false;
            if (f === 'calling' && !featsStr.includes('calling') && !specsStr.includes('calling')) return false;
            if (f === 'fastcharge' && !featsStr.includes('charge') && !specsStr.includes('charge')) return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        return 0; // 'featured' keeps original ordering
      });
  }, [allProducts, selectedCategory, searchTerm, maxPrice, selectedFeatures, minRating, sortBy]);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
      
      {/* Top Banner / Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6 mb-8">
        <div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
            <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer" onClick={() => navigate('/home')}>Home</span>
            <span>/</span>
            <span className="text-pulse-primary font-bold">Catalog</span>
          </div>
          <h1 className="font-heading font-black text-3xl md:text-4xl text-slate-900 dark:text-white">
            Explore All Products
          </h1>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Showing <strong className="text-slate-900 dark:text-white font-bold">{filteredProducts.length}</strong> flagship consumer electronics
          </p>
        </div>

        {/* Top Controls: Search, Sort & Mobile Filter Trigger */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search gear..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-white dark:bg-pulse-card border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-pulse-primary shadow-xs"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 pr-8 rounded-xl text-xs bg-white dark:bg-pulse-card border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-pulse-primary cursor-pointer appearance-none shadow-xs font-medium"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest Launches</option>
            </select>
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="lg:hidden px-4 py-2 rounded-xl bg-white dark:bg-pulse-surface border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-xs font-bold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-white/5 shadow-xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-pulse-primary" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* ========================================================
            FILTER SIDEBAR (Desktop & Mobile Drawer)
            ======================================================== */}
        <aside className={`lg:block ${isMobileFilterOpen ? 'block' : 'hidden'} lg:col-span-1`}>
          <div className="p-6 rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/10 shadow-sm sticky top-28 space-y-6">
            
            {/* Header & Reset */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
              <div className="flex items-center gap-2 font-heading font-bold text-base text-slate-900 dark:text-white">
                <SlidersHorizontal className="w-4 h-4 text-pulse-primary" />
                Filter Gear
              </div>
              <button
                onClick={resetFilters}
                className="text-xs text-pulse-primary hover:underline flex items-center gap-1 font-semibold"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            </div>

            {/* Category Selector */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3">Category</h4>
              <div className="space-y-1.5">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleCategoryChange(c.id)}
                    className={`w-full px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all flex items-center justify-between ${
                      selectedCategory === c.id
                        ? 'bg-pulse-primary text-black font-bold shadow-glow-sm'
                        : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{c.label}</span>
                    <span className="text-[10px] opacity-75 font-mono">
                      {c.id === 'all' 
                        ? allProducts.length 
                        : allProducts.filter(p => p.category === c.id).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="border-t border-slate-200 dark:border-white/10 pt-5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">Max Budget</h4>
                <span className="text-xs font-mono font-bold text-pulse-primary">{formatPrice(maxPrice)}</span>
              </div>
              <input
                type="range"
                min="999"
                max="10000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-pulse-primary cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-mono">
                <span>₹999</span>
                <span>₹10,000</span>
              </div>
            </div>

            {/* Hardware Features */}
            <div className="border-t border-slate-200 dark:border-white/10 pt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3">Hardware Highlights</h4>
              <div className="space-y-2">
                {featureOptions.map((f) => (
                  <label key={f.id} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 cursor-pointer hover:text-slate-900 dark:hover:text-white">
                    <input
                      type="checkbox"
                      checked={selectedFeatures.includes(f.id)}
                      onChange={() => handleFeatureToggle(f.id)}
                      className="rounded bg-slate-100 dark:bg-pulse-surface border-slate-300 dark:border-white/10 text-pulse-primary focus:ring-0"
                    />
                    <span>{f.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Star Rating Filter */}
            <div className="border-t border-slate-200 dark:border-white/10 pt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3">Minimum Rating</h4>
              <div className="flex flex-col gap-1.5">
                {[
                  { stars: 4.8, label: '4.8★ & Above' },
                  { stars: 4.5, label: '4.5★ & Above' },
                  { stars: 0, label: 'All Ratings' },
                ].map((r) => (
                  <button
                    key={r.stars}
                    onClick={() => setMinRating(r.stars)}
                    className={`px-3 py-1.5 rounded-lg text-xs text-left font-semibold transition-all ${
                      minRating === r.stars
                        ? 'bg-amber-400/20 text-amber-600 dark:text-amber-400 border border-amber-400/40'
                        : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Compare Bar Notification if items selected */}
            {compareList.length > 0 && (
              <div className="border-t border-slate-200 dark:border-white/10 pt-5">
                <button
                  onClick={() => setIsCompareOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pulse-primary to-cyan-500 text-black font-bold text-xs uppercase tracking-wider shadow-glow-sm hover:shadow-glow flex items-center justify-center gap-2"
                >
                  <Scale className="w-4 h-4" />
                  Compare ({compareList.length}/3)
                </button>
              </div>
            )}
          </div>
        </aside>

        {/* ========================================================
            PRODUCT GRID & LOADING SKELETONS
            ======================================================== */}
        <main className="lg:col-span-3">
          {/* Active Filter Pills Strip */}
          {(selectedCategory !== 'all' || searchTerm || maxPrice < 10000 || selectedFeatures.length > 0 || minRating > 0) && (
            <div className="flex flex-wrap items-center gap-2 mb-6 p-3 rounded-xl bg-slate-100 dark:bg-pulse-surface border border-slate-200 dark:border-white/10 shadow-xs">
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">Active Filters:</span>
              
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-pulse-primary/15 text-pulse-primary border border-pulse-primary/30 font-semibold">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory('all')} aria-label="Remove category filter"><X className="w-3 h-3" /></button>
                </span>
              )}

              {searchTerm && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-pulse-primary/15 text-pulse-primary border border-pulse-primary/30 font-semibold">
                  "{searchTerm}"
                  <button onClick={() => setSearchTerm('')} aria-label="Remove search filter"><X className="w-3 h-3" /></button>
                </span>
              )}

              {maxPrice < 10000 && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-pulse-primary/15 text-pulse-primary border border-pulse-primary/30 font-semibold">
                  &lt; {formatPrice(maxPrice)}
                  <button onClick={() => setMaxPrice(10000)} aria-label="Remove price filter"><X className="w-3 h-3" /></button>
                </span>
              )}

              {selectedFeatures.map(f => (
                <span key={f} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-pulse-primary/15 text-pulse-primary border border-pulse-primary/30 font-semibold">
                  {f.toUpperCase()}
                  <button onClick={() => handleFeatureToggle(f)} aria-label={`Remove ${f} filter`}><X className="w-3 h-3" /></button>
                </span>
              ))}

              <button
                onClick={resetFilters}
                className="text-xs text-rose-500 hover:underline ml-auto font-semibold"
              >
                Clear All
              </button>
            </div>
          )}

          {isLoading ? (
            /* Skeleton Loading State */
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/10 flex flex-col gap-4 animate-pulse">
                  <div className="w-full h-48 bg-slate-200 dark:bg-slate-800/60 rounded-xl" />
                  <div className="h-4 w-1/3 bg-slate-200 dark:bg-slate-800/60 rounded" />
                  <div className="h-5 w-4/5 bg-slate-200 dark:bg-slate-800/60 rounded" />
                  <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-800/60 rounded" />
                  <div className="h-6 w-2/5 bg-slate-200 dark:bg-slate-800/60 rounded mt-auto" />
                  <div className="h-10 w-full bg-slate-200 dark:bg-slate-800/60 rounded-xl" />
                </div>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            /* Empty Search Results */
            <div className="p-16 rounded-3xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/10 text-center flex flex-col items-center shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-pulse-surface flex items-center justify-center text-slate-400 mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white mb-2">No Matching Gear Found</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mb-6">
                Try loosening your filter parameters, resetting the price threshold, or searching for broader terms like "earbuds" or "watch".
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-2.5 rounded-xl bg-pulse-primary text-black font-bold text-xs uppercase tracking-wider shadow-glow-sm hover:shadow-glow"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            /* Product Cards Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const isWished = isInWishlist(product.id);
                const isCompared = compareList.some(p => p.id === product.id);

                return (
                  <article
                    key={product.id}
                    className="group relative flex flex-col rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/10 hover:border-pulse-primary/50 shadow-sm hover:shadow-xl dark:hover:shadow-glow transition-all duration-300 overflow-hidden"
                  >
                    {/* Card Top: Badges, Compare & Wishlist */}
                    <div className="flex items-center justify-between p-3.5 z-10">
                      {product.badge ? (
                        <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-pulse-primary/15 text-pulse-primary border border-pulse-primary/30">
                          {product.badge}
                        </span>
                      ) : <span />}

                      <div className="flex items-center gap-1.5">
                        {/* Compare Toggle */}
                        <button
                          onClick={() => toggleCompare(product)}
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                            isCompared 
                              ? 'bg-pulse-primary text-black font-bold shadow-xs' 
                              : 'bg-slate-100 dark:bg-black/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
                          }`}
                          title={isCompared ? 'Remove from compare' : 'Compare device'}
                          aria-label="Compare device"
                        >
                          <Scale className="w-3.5 h-3.5" />
                        </button>

                        {/* Wishlist Toggle */}
                        <button
                          onClick={() => toggleWishlist(product)}
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                            isWished 
                              ? 'bg-pulse-secondary text-white shadow-xs' 
                              : 'bg-slate-100 dark:bg-black/50 text-slate-600 dark:text-slate-400 hover:text-pulse-secondary border border-slate-200 dark:border-white/10'
                          }`}
                          title="Save to Wishlist"
                          aria-label="Save to Wishlist"
                        >
                          <Heart className={`w-3.5 h-3.5 ${isWished ? 'fill-white' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Image Area */}
                    <div 
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="relative px-6 py-4 cursor-pointer flex items-center justify-center bg-slate-50/70 dark:bg-slate-900/40 overflow-hidden"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-48 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-xl"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setQuickSpecsProduct(product);
                          }}
                          className="px-4 py-2 rounded-xl bg-pulse-primary text-black font-bold text-xs uppercase tracking-wider shadow-glow-sm hover:scale-105 transition-all"
                        >
                          Quick Specs
                        </button>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-5 flex-1 flex flex-col justify-between border-t border-slate-100 dark:border-white/10">
                      <div>
                        <div className="text-[10px] font-bold text-pulse-primary uppercase tracking-wider mb-1">
                          {product.categoryLabel}
                        </div>
                        <h3 
                          onClick={() => navigate(`/product/${product.id}`)}
                          className="font-heading font-bold text-base text-slate-900 dark:text-white hover:text-pulse-primary cursor-pointer transition-colors truncate mb-2"
                        >
                          {product.name}
                        </h3>

                        {/* Ratings */}
                        <div className="flex items-center gap-1.5 mb-3">
                          <div className="flex items-center text-amber-400">
                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                            <span className="text-xs font-bold ml-1 text-slate-900 dark:text-white">{product.rating}</span>
                          </div>
                          <span className="text-slate-400 dark:text-slate-600 text-xs">•</span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400">({product.reviewCount.toLocaleString()})</span>
                        </div>

                        {/* Colors */}
                        <div className="flex items-center gap-1.5 mb-4">
                          {product.colors.map((c, i) => (
                            <span
                              key={i}
                              className="w-3.5 h-3.5 rounded-full border border-slate-300 dark:border-white/20 shadow-xs"
                              style={{ backgroundColor: c.hex }}
                              title={c.name}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        {/* Price */}
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="font-heading font-black text-xl text-slate-900 dark:text-white">
                            {formatPrice(product.price)}
                          </span>
                          <span className="text-xs text-slate-400 dark:text-slate-500 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                          <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">
                            {product.discount}
                          </span>
                        </div>

                        {/* Add to Bag */}
                        <button
                          onClick={() => addToCart(product)}
                          className="w-full py-2.5 rounded-xl bg-pulse-primary hover:bg-cyan-300 text-black font-heading font-extrabold text-xs uppercase tracking-wider shadow-glow-sm hover:shadow-glow transition-all flex items-center justify-center gap-2 active:scale-95"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Bag
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
