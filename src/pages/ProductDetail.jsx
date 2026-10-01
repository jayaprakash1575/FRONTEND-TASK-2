import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  Scale, 
  Check, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  MapPin, 
  Plus, 
  Minus, 
  Share2, 
  MessageSquare,
  Sparkles,
  ArrowRight,
  Zap
} from 'lucide-react';

export const ProductDetail = () => {
  const {
    allProducts,
    route,
    addToCart,
    toggleWishlist,
    isInWishlist,
    toggleCompare,
    compareList,
    formatPrice,
    navigate,
    addToast
  } = useApp();

  const productId = route.params && route.params.id ? route.params.id : 'pulse-anc-apex';
  const product = allProducts.find(p => p.id === productId) || allProducts[0];

  // Gallery state
  const [selectedImage, setSelectedImage] = useState(product.image);
  // Selected color
  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors[0] ? product.colors[0].name : 'Default'
  );
  // Quantity
  const [quantity, setQuantity] = useState(1);

  // Sync state if product changes
  useEffect(() => {
    setSelectedImage(product.image);
    setSelectedColor(product.colors && product.colors[0] ? product.colors[0].name : 'Default');
    setQuantity(1);
    setPincodeMsg(null);
  }, [product]);

  // Indian Pincode Delivery Checker
  const [pincode, setPincode] = useState('');
  const [pincodeMsg, setPincodeMsg] = useState(null);

  const handleCheckPincode = (e) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pincode.trim())) {
      setPincodeMsg({ error: true, text: 'Please enter a valid 6-digit Indian PIN code.' });
      return;
    }
    const days = Math.floor(Math.random() * 2) + 1;
    const date = new Date();
    date.setDate(date.getDate() + days);
    const dateStr = date.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' });
    setPincodeMsg({
      error: false,
      text: `Express Delivery by ${dateStr} | Cash on Delivery Available`
    });
  };

  // Review Modal State
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewAuthor, setReviewAuthor] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewsList, setReviewsList] = useState([
    {
      author: 'Sameer Sen',
      rating: 5,
      date: '2 days ago',
      verified: true,
      text: 'Phenomenal acoustic separation. The sub-bass punch is crisp without muddying the mids. Easily outperforms competitors costing twice as much.',
    },
    {
      author: 'Priya Nambiar',
      rating: 5,
      date: '1 week ago',
      verified: true,
      text: 'Battery endurance is incredible. I took it on a 4-day trip and never had to plug it in. Fast charging is blazing quick.',
    },
  ]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewAuthor || !reviewComment) return;
    setReviewsList([
      {
        author: reviewAuthor,
        rating: reviewRating,
        date: 'Just now',
        verified: true,
        text: reviewComment,
      },
      ...reviewsList
    ]);
    setIsReviewModalOpen(false);
    setReviewAuthor('');
    setReviewComment('');
    addToast('Thank you! Your verified review has been published.', 'success');
  };

  // Related products in the same category
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const isWished = isInWishlist(product.id);
  const isCompared = compareList.some(p => p.id === product.id);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
      
      {/* Breadcrumb Navigation */}
      <nav className="text-xs text-slate-500 dark:text-slate-400 mb-8 flex items-center gap-2">
        <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer" onClick={() => navigate('/home')}>Home</span>
        <span>/</span>
        <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer" onClick={() => navigate('/products')}>Catalog</span>
        <span>/</span>
        <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer" onClick={() => navigate(`/products?category=${product.category}`)}>
          {product.categoryLabel}
        </span>
        <span>/</span>
        <span className="text-pulse-primary font-bold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* ========================================================
          PRODUCT OVERVIEW (Gallery + Specs + Purchase)
          ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 mb-16">
        
        {/* Left Column: Multi-Angle Gallery */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto shrink-0">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border p-1 bg-slate-50 dark:bg-pulse-surface transition-all ${
                    selectedImage === img
                      ? 'border-pulse-primary shadow-glow-sm scale-105'
                      : 'border-slate-200 dark:border-white/10 opacity-70 hover:opacity-100 hover:border-slate-400 dark:hover:border-white/30'
                  }`}
                  aria-label={`Thumbnail ${idx + 1}`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover rounded-lg" />
                </button>
              ))}
            </div>
          )}

          {/* Main Stage Image */}
          <div className="flex-1 rounded-3xl bg-slate-50/80 dark:bg-pulse-surface border border-slate-200 dark:border-white/10 p-8 flex items-center justify-center relative overflow-hidden group shadow-sm">
            {product.badge && (
              <span className="absolute top-6 left-6 text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-pulse-primary text-black shadow-glow-sm z-10">
                {product.badge}
              </span>
            )}

            <img
              src={selectedImage}
              alt={product.name}
              className="max-h-[420px] object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Column: Pricing & Purchase Configuration */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <div className="text-xs font-bold text-pulse-primary uppercase tracking-wider mb-1">
              {product.categoryLabel}
            </div>
            <h1 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight mb-2">
              {product.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic mb-4">
              "{product.tagline}"
            </p>

            {/* Rating Stars & Stock Badge */}
            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-white/10 pb-4 mb-4">
              <div className="flex items-center text-amber-500 dark:text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-lg">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="text-xs font-extrabold ml-1.5 text-slate-900 dark:text-white">{product.rating}</span>
                <span className="text-slate-500 dark:text-slate-400 text-xs ml-1">/ 5</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">({product.reviewCount.toLocaleString()} Verified Reviews)</span>
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold ml-auto flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                In Stock ({product.stockCount} left)
              </span>
            </div>

            {/* Price Block */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-heading font-black text-3xl sm:text-4xl text-slate-900 dark:text-white">
                {formatPrice(product.price)}
              </span>
              <span className="text-base text-slate-400 dark:text-slate-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-2.5 py-1 rounded-lg">
                {product.discount}
              </span>
            </div>

            {/* Color Swatch Picker */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Color Variant: <strong className="text-pulse-primary">{selectedColor}</strong>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                        selectedColor === c.name
                          ? 'border-pulse-primary bg-pulse-primary/10 text-slate-900 dark:text-white shadow-glow-sm'
                          : 'border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-slate-300 dark:border-white/30" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper & Actions */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center bg-slate-100 dark:bg-pulse-card border border-slate-300 dark:border-white/10 rounded-xl p-1 shadow-xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-bold text-sm text-slate-900 dark:text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={() => addToCart(product, quantity, selectedColor)}
                className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-pulse-primary to-cyan-400 hover:from-cyan-400 hover:to-pulse-primary text-black font-heading font-extrabold text-sm uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Bag
              </button>

              {/* Wishlist & Compare Buttons */}
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3.5 rounded-xl border border-slate-300 dark:border-white/10 hover:border-pulse-secondary transition-all shadow-xs ${
                  isWished ? 'bg-pulse-secondary/20 text-pulse-secondary' : 'bg-white dark:bg-pulse-card text-slate-600 dark:text-slate-400 hover:text-pulse-secondary'
                }`}
                title="Save to Wishlist"
                aria-label="Save to Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWished ? 'fill-pulse-secondary' : ''}`} />
              </button>

              <button
                onClick={() => toggleCompare(product)}
                className={`p-3.5 rounded-xl border border-slate-300 dark:border-white/10 hover:border-pulse-primary transition-all shadow-xs ${
                  isCompared ? 'bg-pulse-primary/20 text-pulse-primary' : 'bg-white dark:bg-pulse-card text-slate-600 dark:text-slate-400 hover:text-pulse-primary'
                }`}
                title="Compare Specs"
                aria-label="Compare Specs"
              >
                <Scale className="w-5 h-5" />
              </button>
            </div>

            {/* Live Indian Pincode Delivery Checker */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-pulse-surface border border-slate-200 dark:border-white/10 space-y-3 mb-6 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                <MapPin className="w-4 h-4 text-pulse-primary" />
                Delivery &amp; Service Availability
              </div>
              <form onSubmit={handleCheckPincode} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit PIN code (e.g. 560001)"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                  className="flex-1 px-3 py-2 rounded-xl text-xs bg-white dark:bg-pulse-card border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-pulse-primary font-mono shadow-xs"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white font-bold text-xs uppercase transition-all shadow-xs"
                >
                  Check
                </button>
              </form>
              {pincodeMsg && (
                <div className={`text-xs font-semibold ${pincodeMsg.error ? 'text-rose-500 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                  {pincodeMsg.text}
                </div>
              )}
            </div>

            {/* Highlights summary */}
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-200 dark:border-white/10">
                <ShieldCheck className="w-4 h-4 text-pulse-primary" />
                <span>1-Yr Doorstep Warranty</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-200 dark:border-white/10">
                <RotateCcw className="w-4 h-4 text-pulse-primary" />
                <span>7-Day Return Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          SPECIFICATIONS & ACOUSTIC HIGHLIGHTS
          ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
        {/* Core Features */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/10 shadow-sm">
          <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-pulse-primary" />
            Engineering &amp; Acoustic Highlights
          </h3>
          <div className="space-y-4">
            {product.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-pulse-primary/10 text-pulse-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specification Matrix */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/10 shadow-sm">
          <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white mb-6">
            Technical Specifications
          </h3>
          <div className="divide-y divide-slate-100 dark:divide-white/10 text-xs sm:text-sm">
            {Object.entries(product.specs).map(([specKey, specVal]) => (
              <div key={specKey} className="py-2.5 flex justify-between gap-4">
                <span className="text-slate-500 dark:text-slate-400 font-semibold">{specKey}</span>
                <span className="text-slate-900 dark:text-white text-right font-medium">{specVal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          CUSTOMER REVIEWS SECTION
          ======================================================== */}
      <div className="p-8 md:p-10 rounded-3xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/10 mb-16 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6 mb-8">
          <div>
            <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">Tribe Reviews &amp; Feedback</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Authentic experiences from verified gear owners</p>
          </div>
          <button
            onClick={() => setIsReviewModalOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider transition-all self-start sm:self-auto flex items-center gap-2 border border-slate-300 dark:border-white/10 shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-pulse-primary" />
            Write a Review
          </button>
        </div>

        {/* Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.map((rev, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-pulse-surface border border-slate-200 dark:border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pulse-primary/20 text-pulse-primary font-bold text-xs flex items-center justify-center">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">{rev.author}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">{rev.date}</div>
                  </div>
                </div>
                {rev.verified && (
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1 border border-emerald-200 dark:border-emerald-500/20">
                    <Check className="w-3 h-3" /> Verified Buyer
                  </span>
                )}
              </div>

              <div className="flex items-center text-amber-400 gap-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic font-medium">
                "{rev.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          WRITE REVIEW MODAL
          ======================================================== */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={() => setIsReviewModalOpen(false)} />
          <div className="relative w-full max-w-lg bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 z-10 animate-in zoom-in-95 shadow-2xl">
            <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white mb-2">Write a Verified Review</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">Reviewing {product.name}</p>

            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-400 mb-1">Your Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewRating(star)}
                      className="p-1 text-amber-400 hover:scale-125 transition-transform"
                      aria-label={`${star} star`}
                    >
                      <Star className={`w-6 h-6 ${star <= reviewRating ? 'fill-amber-400' : 'text-slate-300 dark:text-slate-600'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={reviewAuthor}
                  onChange={(e) => setReviewAuthor(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-pulse-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-400 mb-1">Your Acoustic Experience</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell the tribe about the sound quality, bass response, build, and battery..."
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-pulse-primary resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsReviewModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-pulse-primary text-black font-bold text-xs uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          RELATED GEAR RECOMMENDATIONS
          ======================================================== */}
      {relatedProducts.length > 0 && (
        <div>
          <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white mb-6">
            You Might Also Like
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => navigate(`/product/${p.id}`)}
                className="p-5 rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/10 hover:border-pulse-primary/50 shadow-sm hover:shadow-xl dark:hover:shadow-glow transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="bg-slate-50/70 dark:bg-slate-900/40 rounded-xl p-4 mb-4 flex items-center justify-center">
                  <img src={p.image} alt={p.name} className="h-40 object-contain mx-auto group-hover:scale-105 transition-transform drop-shadow-md" />
                </div>
                <div>
                  <div className="text-[10px] text-pulse-primary uppercase font-bold tracking-wider">{p.categoryLabel}</div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-pulse-primary transition-colors truncate mb-1">
                    {p.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-heading font-bold text-base text-slate-900 dark:text-white">{formatPrice(p.price)}</span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 line-through">{formatPrice(p.originalPrice)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
