import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShoppingBag, 
  Heart, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  Star, 
  Play, 
  Pause, 
  Volume2, 
  Sliders,
  ChevronLeft,
  ChevronRight,
  Flame,
  Award
} from 'lucide-react';

export const Home = () => {
  const {
    allProducts,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setQuickSpecsProduct,
    formatPrice,
    navigate
  } = useApp();

  // Hero carousel slides
  const slides = [
    {
      id: 'pulse-anc-apex',
      tag: '🔥 FLAGSHIP AUDIO LAUNCH',
      title: 'FEEL THE SOUND.',
      highlight: 'AETHER WAVE PRO.',
      colorClass: 'text-gradient-cyan',
      desc: 'Immerse yourself in 35dB Hybrid Active Noise Cancellation, 13mm Titanium Drivers, and 60 hours of unyielding battery endurance.',
      image: '/assets/images/hero-banner.jpg',
      specs: ['35dB Hybrid ANC', '60-Hr Playtime', '13mm Titanium Drivers', 'Spatial Audio'],
      floatingBadge: '35dB Hybrid ANC',
      glowColor: 'bg-cyan-500/20',
      btnText: 'Explore Apex Pro',
      btnClass: 'bg-pulse-primary text-black shadow-glow hover:shadow-glow-lg',
      link: '/product/pulse-anc-apex',
    },
    {
      id: 'pulse-titan-ultra',
      tag: '⚡ TITANIUM RUGGED WEARABLE',
      title: 'BUILT TO CONQUER.',
      highlight: 'TITAN ULTRA AMOLED.',
      colorClass: 'text-gradient-pink',
      desc: '1.96-inch curved Always-on AMOLED display with 1000 nits brightness, one-tap Bluetooth calling, and military-grade titanium durability.',
      image: '/assets/images/smartwatch-ultra.jpg',
      specs: ['1.96" Curved AMOLED', '1000 Nits Display', 'Titanium Frame', 'BT Calling'],
      floatingBadge: '1.96" Always-on AMOLED',
      glowColor: 'bg-pink-500/20',
      btnText: 'Shop Titan Ultra',
      btnClass: 'bg-pulse-secondary text-white shadow-glow-secondary hover:opacity-95',
      link: '/product/pulse-titan-ultra',
    },
    {
      id: 'pulse-studio-one',
      tag: '🎧 AUDIOPHILE ACOUSTICS',
      title: 'PURE STUDIO.',
      highlight: 'ZERO DISTORTION.',
      colorClass: 'text-gradient-cyan',
      desc: 'Custom 40mm bio-cellulose drivers tuned for master-grade acoustic separation and 42dB adaptive noise cancellation.',
      image: '/assets/images/headphones-anc.jpg',
      specs: ['40mm Bio Drivers', '42dB Adaptive ANC', 'Hi-Res Certified', '50h Battery'],
      floatingBadge: '42dB Adaptive ANC',
      glowColor: 'bg-cyan-500/20',
      btnText: 'Discover Studio Pro',
      btnClass: 'bg-pulse-primary text-black shadow-glow hover:shadow-glow-lg',
      link: '/product/pulse-studio-one',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Flash Sale Timer (Hours, Minutes, Seconds)
  const [timeLeft, setTimeLeft] = useState({ hours: 11, minutes: 42, seconds: 18 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            hours = hours > 0 ? hours - 1 : 12;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Category Tabs Filter for Trending Bestsellers
  const [activeTab, setActiveTab] = useState('all');
  const tabs = [
    { id: 'all', label: 'All Flagships' },
    { id: 'earbuds', label: 'Earbuds' },
    { id: 'smartwatches', label: 'Smartwatches' },
    { id: 'headphones', label: 'Headphones' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'speakers', label: 'Speakers' },
  ];

  const trendingProducts = allProducts
    .filter(p => activeTab === 'all' || p.category === activeTab)
    .slice(0, 8);

  // Sound Lab™ Equalizer Simulator
  const [eqPreset, setEqPreset] = useState('bass'); // 'bass' | 'vocal' | 'gaming'
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Categories list
  const categories = [
    { name: 'True Wireless', sub: 'ANC Audio', cat: 'earbuds', icon: '🎧' },
    { name: 'Smartwatches', sub: 'AMOLED & BT Calling', cat: 'smartwatches', icon: '⌚' },
    { name: 'Headphones', sub: 'Studio Hi-Res', cat: 'headphones', icon: '🎵' },
    { name: 'Gaming Gear', sub: '30ms Low Latency', cat: 'gaming', icon: '⚡' },
    { name: 'Party Speakers', sub: 'Waterproof Bass', cat: 'speakers', icon: '🔊' },
    { name: 'Smart Rings', sub: 'Biometric Titanium', cat: 'rings', icon: '💍' },
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-20">
      
      {/* ========================================================
          HERO BANNER CAROUSEL (Split 2-Column Showcase)
          ======================================================== */}
      <section className="relative min-h-[640px] lg:h-[780px] w-full overflow-hidden bg-[#07090E] border-b border-white/10 flex items-center keep-white hero-showcase">
        {/* Ambient background grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-300 flex items-center ${
                isActive ? 'opacity-100 z-10 pointer-events-auto visible' : 'opacity-0 z-0 pointer-events-none invisible'
              }`}
            >
              {/* Dynamic ambient background glow */}
              <div className={`absolute right-1/4 top-1/4 w-[500px] h-[500px] ${slide.glowColor} rounded-full blur-[140px] pointer-events-none opacity-40`} />

              <div className="container mx-auto px-6 lg:px-12 py-10 w-full relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Typography, Specs & Actions */}
                  <div className="lg:col-span-7 flex flex-col justify-center space-y-5 text-left order-2 lg:order-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-pulse-primary/15 text-pulse-primary border border-pulse-primary/40 shadow-glow-sm">
                        {slide.tag}
                      </span>
                    </div>

                    <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                      <span className="text-white drop-shadow-md">{slide.title}</span><br />
                      <span className={slide.colorClass}>{slide.highlight}</span>
                    </h1>

                    <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
                      {slide.desc}
                    </p>

                    {/* Hardware Specs Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {slide.specs.map((spec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 text-slate-200 border border-white/15 backdrop-blur-md shadow-xs"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4 pt-3">
                      <button
                        onClick={() => navigate(slide.link)}
                        className={`px-8 py-3.5 rounded-xl font-heading font-extrabold text-sm uppercase tracking-wider transition-all flex items-center gap-2 active:scale-95 shadow-xl ${slide.btnClass}`}
                      >
                        <span>{slide.btnText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => navigate('/products')}
                        className="px-7 py-3.5 rounded-xl border border-white/30 text-white font-heading font-bold text-sm uppercase tracking-wider hover:bg-white/15 hover:border-white/50 transition-all backdrop-blur-md bg-white/10 active:scale-95 shadow-sm"
                      >
                        View All Gear
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Unobstructed, Crystal-Clear Product Art */}
                  <div className="lg:col-span-5 flex items-center justify-center relative order-1 lg:order-2">
                    <div className="relative w-full max-w-md lg:max-w-lg aspect-square flex items-center justify-center p-4">
                      {/* Radial backlight */}
                      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-white/5 via-white/10 to-transparent blur-xl" />
                      
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="max-h-[320px] sm:max-h-[420px] lg:max-h-[500px] w-auto object-contain rounded-3xl drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] transform transition-transform duration-700 hover:scale-105"
                      />

                      {/* Floating Feature Pill Badge */}
                      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-6 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-xl border border-white/20 text-xs font-bold text-white shadow-xl flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-pulse-primary animate-ping" />
                        <span>{slide.floatingBadge}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Controls */}
        <div className="absolute bottom-6 left-0 right-0 z-30">
          <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
            {/* Slide Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'w-10 bg-pulse-primary shadow-glow-sm' : 'w-2.5 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
                className="w-10 h-10 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:text-pulse-primary hover:border-pulse-primary transition-all active:scale-95 shadow-md"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
                className="w-10 h-10 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:text-pulse-primary hover:border-pulse-primary transition-all active:scale-95 shadow-md"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          TRUST ASSURANCE STRIP
          ======================================================== */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/5 shadow-sm hover:border-pulse-primary/40 hover:shadow-glow transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-pulse-primary/15 text-pulse-primary mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-1">1-Year Brand Warranty</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">Pan-India doorstep pickup and replacement guarantee on all flagship gear.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/5 shadow-sm hover:border-pulse-primary/40 hover:shadow-glow transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-pulse-primary/15 text-pulse-primary mb-4 group-hover:scale-110 transition-transform">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-1">7-Day Return Policy</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">Not feeling the acoustics? Enjoy zero-friction 7-day hassle-free returns.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/5 shadow-sm hover:border-pulse-primary/40 hover:shadow-glow transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-pulse-primary/15 text-pulse-primary mb-4 group-hover:scale-110 transition-transform">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-1">Free Express Delivery</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">Lightning-fast dispatch within 24 hours via premium air courier partners.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/5 shadow-sm hover:border-pulse-primary/40 hover:shadow-glow transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-pulse-primary/15 text-pulse-primary mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-1">Direct-to-Tribe Value</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">Master-grade audio components without distributor markups. Always best price.</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          SHOP BY CATEGORY ECOSYSTEM
          ======================================================== */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-pulse-primary uppercase tracking-wider">EXPLORE ECOSYSTEM</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white mt-1">Shop by Category</h2>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-2">Engineered for athletes, gamers, commuters, and true sound purists</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.cat}
              onClick={() => navigate(`/products?category=${cat.cat}`)}
              className="p-5 rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/5 hover:border-pulse-primary/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-pulse-surface flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white group-hover:text-pulse-primary transition-colors">
                {cat.name}
              </h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{cat.sub}</p>
            </button>
          ))}
        </div>
      </section>

      {/* ========================================================
          FLASH SALE LIVE COUNTDOWN STRIP
          ======================================================== */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="rounded-3xl bg-slate-950 dark:bg-gradient-to-r dark:from-pulse-card dark:via-pulse-surface dark:to-pulse-card border border-pulse-primary/40 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-white keep-white">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-pulse-primary/20 border border-pulse-primary/40 flex items-center justify-center text-pulse-primary shadow-glow-sm shrink-0">
              <Flame className="w-8 h-8 animate-pulse text-amber-400" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-xl text-white uppercase tracking-tight">
                Flash Deals Ending Soon
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Extra 20% off all flagship gear with code <strong className="text-pulse-primary font-mono font-bold">PULSE20</strong>
              </p>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center bg-black/60 border border-white/15 px-4 py-2 rounded-xl min-w-[64px]">
              <span className="font-heading font-black text-2xl text-white font-mono">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-[10px] uppercase font-bold text-slate-400">Hours</span>
            </div>
            <span className="text-pulse-primary font-bold text-xl">:</span>
            <div className="flex flex-col items-center bg-black/60 border border-white/15 px-4 py-2 rounded-xl min-w-[64px]">
              <span className="font-heading font-black text-2xl text-white font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-[10px] uppercase font-bold text-slate-400">Mins</span>
            </div>
            <span className="text-pulse-primary font-bold text-xl">:</span>
            <div className="flex flex-col items-center bg-black/60 border border-white/15 px-4 py-2 rounded-xl min-w-[64px]">
              <span className="font-heading font-black text-2xl text-pulse-primary font-mono">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-[10px] uppercase font-bold text-slate-400">Secs</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/products')}
            className="px-6 py-3 rounded-xl bg-pulse-primary text-black font-heading font-extrabold text-xs uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all active:scale-95 shrink-0"
          >
            Claim Deals Now
          </button>
        </div>
      </section>

      {/* ========================================================
          TRENDING BESTSELLERS WITH CATEGORY TABS
          ======================================================== */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-pulse-primary uppercase tracking-wider">TRIBE FAVORITES</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white mt-1">Trending Bestsellers</h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-pulse-primary text-black shadow-glow-sm'
                    : 'bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-400 hover:text-pulse-primary hover:border-pulse-primary/40 shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => {
            const isWished = isInWishlist(product.id);
            return (
              <article
                key={product.id}
                className="group relative flex flex-col rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-pulse-primary/40 transition-all duration-300 overflow-hidden"
              >
                {/* Top Badge & Wishlist Button */}
                <div className="flex items-center justify-between p-3.5 z-10">
                  {product.badge ? (
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-pulse-primary/15 text-pulse-primary border border-pulse-primary/30">
                      {product.badge}
                    </span>
                  ) : <span />}

                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isWished 
                        ? 'bg-pulse-secondary text-white shadow-sm' 
                        : 'bg-slate-100 dark:bg-black/50 text-slate-600 dark:text-slate-400 hover:text-pulse-secondary border border-slate-200 dark:border-white/10'
                    }`}
                    aria-label="Save to Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWished ? 'fill-white' : ''}`} />
                  </button>
                </div>

                {/* Product Image */}
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
                      className="px-4 py-2 rounded-xl bg-pulse-primary text-black font-extrabold text-xs uppercase tracking-wider shadow-glow-sm hover:scale-105 transition-all"
                    >
                      Quick Specs
                    </button>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-5 flex-1 flex flex-col justify-between border-t border-slate-100 dark:border-white/5">
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

                    {/* Rating & Reviews */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span className="text-xs font-bold ml-1 text-slate-900 dark:text-white">{product.rating}</span>
                      </div>
                      <span className="text-slate-400 dark:text-slate-600 text-xs">•</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">({product.reviewCount.toLocaleString()})</span>
                    </div>

                    {/* Color Dots */}
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
      </section>

      {/* ========================================================
          INTERACTIVE SOUND LAB™ EQUALIZER
          ======================================================== */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="rounded-3xl bg-slate-950 dark:bg-gradient-to-br dark:from-pulse-card dark:via-pulse-surface dark:to-pulse-dark border border-pulse-primary/30 p-8 md:p-12 overflow-hidden relative shadow-2xl text-white keep-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pulse-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pulse-primary/15 text-pulse-primary border border-pulse-primary/40 mb-3 shadow-glow-sm">
                <Sliders className="w-3.5 h-3.5" /> Acoustic Engineering Lab
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
                PULSE Sound Lab™ <br />
                <span className="text-gradient-cyan">Real-Time Acoustic EQ</span>
              </h2>
              <p className="text-xs md:text-sm text-slate-300 mb-6 leading-relaxed">
                Test our proprietary DSP audio profiles tuned by acoustic engineers. Select a sound signature profile below to simulate our custom dual-cavity drivers in action.
              </p>

              {/* Mode Buttons */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                <button
                  onClick={() => setEqPreset('bass')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    eqPreset === 'bass'
                      ? 'bg-pulse-primary text-black shadow-glow'
                      : 'bg-white/10 border border-white/20 text-slate-200 hover:text-white hover:bg-white/20'
                  }`}
                >
                  🔊 Signature Bass Boost™ (+8dB Sub-Bass)
                </button>
                <button
                  onClick={() => setEqPreset('vocal')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    eqPreset === 'vocal'
                      ? 'bg-pulse-secondary text-white shadow-glow-secondary'
                      : 'bg-white/10 border border-white/20 text-slate-200 hover:text-white hover:bg-white/20'
                  }`}
                >
                  🎙️ Crystal Vocal &amp; Podcasts
                </button>
                <button
                  onClick={() => setEqPreset('gaming')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    eqPreset === 'gaming'
                      ? 'bg-amber-400 text-black shadow-glow-sm'
                      : 'bg-white/10 border border-white/20 text-slate-200 hover:text-white hover:bg-white/20'
                  }`}
                >
                  ⚡ Beast™ 30ms Ultra Low Latency
                </button>
              </div>

              {/* Simulation Audio Play Trigger */}
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all border border-white/20 shadow-sm"
              >
                {isPlayingAudio ? (
                  <>
                    <Pause className="w-4 h-4 text-pulse-primary" />
                    <span>Pause EQ Demo</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 text-pulse-primary" />
                    <span>Simulate Soundstage Audio</span>
                  </>
                )}
              </button>
            </div>

            {/* EQ Frequency Bars Visualizer */}
            <div className="p-6 rounded-2xl bg-black/80 border border-white/15 flex flex-col gap-4 shadow-inner">
              <div className="flex items-center justify-between text-xs text-slate-300 border-b border-white/10 pb-3">
                <span className="font-mono text-pulse-primary font-bold">20Hz — 20kHz Acoustic Response</span>
                <span className="flex items-center gap-1.5 font-bold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Active Profile: {eqPreset.toUpperCase()}
                </span>
              </div>

              {/* Dynamic Animated Bars */}
              <div className="h-44 flex items-end justify-between gap-1.5 pt-4">
                {[
                  { label: '32Hz', bass: 95, vocal: 40, gaming: 70 },
                  { label: '64Hz', bass: 90, vocal: 45, gaming: 75 },
                  { label: '125Hz', bass: 85, vocal: 50, gaming: 80 },
                  { label: '250Hz', bass: 70, vocal: 65, gaming: 65 },
                  { label: '500Hz', bass: 60, vocal: 85, gaming: 70 },
                  { label: '1kHz', bass: 55, vocal: 95, gaming: 75 },
                  { label: '2kHz', bass: 60, vocal: 90, gaming: 85 },
                  { label: '4kHz', bass: 70, vocal: 80, gaming: 95 },
                  { label: '8kHz', bass: 80, vocal: 75, gaming: 90 },
                  { label: '16kHz', bass: 75, vocal: 70, gaming: 85 },
                ].map((bar, idx) => {
                  const targetHeight = bar[eqPreset];
                  const height = isPlayingAudio 
                    ? `${Math.max(20, (targetHeight + Math.sin(Date.now() / 200 + idx) * 15))}%` 
                    : `${targetHeight}%`;

                  return (
                    <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                      <div className="w-full bg-slate-800 rounded-t-lg h-full flex items-end overflow-hidden">
                        <div
                          className={`w-full rounded-t-lg transition-all duration-300 ${
                            eqPreset === 'bass'
                              ? 'bg-gradient-to-t from-cyan-600 to-pulse-primary shadow-glow-sm'
                              : eqPreset === 'vocal'
                              ? 'bg-gradient-to-t from-pink-600 to-pulse-secondary shadow-glow-secondary'
                              : 'bg-gradient-to-t from-amber-600 to-amber-400'
                          }`}
                          style={{ height }}
                        />
                      </div>
                      <span className="text-[9px] font-mono text-slate-400">{bar.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          VERIFIED BUYER REVIEWS STRIP
          ======================================================== */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-pulse-primary uppercase tracking-wider">VERIFIED TESTIMONIALS</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white mt-1">Loved by 5M+ Audiophiles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Vikramaditya S.',
              role: 'Competitive Valorant Gamer',
              product: 'Pulse Apex Pro ANC',
              quote: 'The 30ms latency mode is insane. Zero delay on footsteps, and the hybrid ANC cuts out my mechanical keyboard clatter entirely.',
              rating: 5,
            },
            {
              name: 'Ananya Deshmukh',
              role: 'Marathon Runner & Architect',
              product: 'Pulse Titan Ultra Smartwatch',
              quote: '10 days battery without charging is a game-changer. The AMOLED display is crystal clear even under harsh noon sunlight during my 10k runs.',
              rating: 5,
            },
            {
              name: 'Rohan Mehra',
              role: 'Sound Producer & Audiophile',
              product: 'Pulse Studio One Pro ANC',
              quote: 'The acoustic balance and bass responsiveness blow competing ₹15,000 headphones out of the water. PULSE is redefining consumer audio in India.',
              rating: 5,
            },
          ].map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-lg hover:border-pulse-primary/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center text-amber-400 gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic mb-4 leading-relaxed font-medium">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">{rev.name}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">{rev.role}</div>
                </div>
                <span className="text-[10px] font-bold text-pulse-primary px-2.5 py-0.5 rounded-full bg-pulse-primary/10 border border-pulse-primary/20">
                  {rev.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
