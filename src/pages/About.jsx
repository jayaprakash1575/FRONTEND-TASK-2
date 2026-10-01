import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Zap, 
  Award, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  BatteryCharging, 
  Leaf, 
  ArrowRight 
} from 'lucide-react';

export const About = () => {
  const { navigate } = useApp();

  const metrics = [
    { value: '5,000,000+', label: 'Tribe Members Nationwide' },
    { value: '4.8★', label: 'Average Consumer Rating' },
    { value: '50+', label: 'Proprietary Audio Patents' },
    { value: '100%', label: 'In-House Sound Engineering' },
  ];

  const pillars = [
    {
      icon: <Layers className="w-6 h-6 text-pulse-primary" />,
      title: 'Acoustic Mastery',
      desc: 'Every PULSE earbud and headphone is tuned inside our sound chambers with titanium-coated dynamic drivers for deep, punchy sub-bass without acoustic distortion.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-pulse-primary" />,
      title: 'Indestructible Build',
      desc: 'From aerospace-grade titanium alloy smartwatches to IPX7 waterproof party speakers, our hardware is drop-tested and sweat-proofed for the most intense routines.',
    },
    {
      icon: <BatteryCharging className="w-6 h-6 text-pulse-primary" />,
      title: 'ASAP™ Rapid Charge',
      desc: 'Our intelligent dual-cell power controllers give you 5 hours of unyielding music playback in just 10 minutes of Type-C USB charging.',
    },
    {
      icon: <Leaf className="w-6 h-6 text-pulse-primary" />,
      title: 'Eco-Forward Packaging',
      desc: 'Committed to a cleaner planet, all PULSE gear ships in 100% plastic-free recycled soy-ink packaging with zero compromise on unboxing elegance.',
    },
  ];

  const timeline = [
    { year: '2020', title: 'The Genesis', desc: 'PULSE was founded by four audio engineers obsessed with eliminating the middleman markup on true wireless earphones in India.' },
    { year: '2022', title: 'Smart Wearables Boom', desc: 'Launched the Titan AMOLED series, becoming the fastest homegrown wearable brand to clock 1M units sold in under 90 days.' },
    { year: '2024', title: 'Hybrid ANC Breakthrough', desc: 'Unveiled our proprietary 35dB Hybrid Active Noise Cancellation chipset, competing directly against global legacy giants.' },
    { year: '2026', title: 'Cyber Obsidian Ecosystem', desc: 'Expanded into Titanium Smart Health Rings, spatial studio headphones, and high-energy party audio for the global generation.' },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16 space-y-20">
      
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pulse-primary/10 text-pulse-primary border border-pulse-primary/30 shadow-glow-sm">
          <Zap className="w-3.5 h-3.5" /> THE PULSE MANIFESTO
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight">
          Born for the Beat.<br />
          <span className="text-gradient-cyan">Engineered for the Bold.</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          We believe high-fidelity sound, military-grade ruggedness, and cutting-edge AMOLED technology should be accessible to every creator, athlete, and sonic rebel.
        </p>
      </section>

      {/* Statistics Strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((m, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/5 text-center space-y-1 shadow-sm">
            <div className="font-heading font-black text-3xl sm:text-4xl text-pulse-primary">{m.value}</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">{m.label}</div>
          </div>
        ))}
      </section>

      {/* Brand Pillars Grid */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold text-pulse-primary uppercase tracking-wider">OUR FOUR PILLARS</span>
          <h2 className="font-heading font-extrabold text-3xl text-slate-900 dark:text-white mt-1">Why India Chooses PULSE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/5 hover:border-pulse-primary/40 hover:shadow-glow transition-all duration-300 flex gap-5 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-pulse-surface border border-slate-200 dark:border-white/5 flex items-center justify-center shrink-0">
                {p.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">{p.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="space-y-8 max-w-4xl mx-auto">
        <div className="text-center">
          <span className="text-xs font-bold text-pulse-primary uppercase tracking-wider">THE JOURNEY</span>
          <h2 className="font-heading font-extrabold text-3xl text-slate-900 dark:text-white mt-1">How We Got Here</h2>
        </div>

        <div className="relative border-l-2 border-pulse-primary/30 pl-6 md:pl-10 space-y-10 ml-4 md:ml-12">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              <span className="absolute -left-[31px] md:-left-[47px] top-1 w-4 h-4 rounded-full bg-pulse-primary border-4 border-white dark:border-pulse-dark shadow-glow-sm" />
              <div className="font-mono text-xs font-bold text-pulse-primary">{item.year}</div>
              <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white mt-0.5">{item.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="rounded-3xl bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-pulse-card dark:via-pulse-surface dark:to-pulse-card border border-slate-200 dark:border-pulse-primary/30 p-8 md:p-12 text-center space-y-4 shadow-sm dark:shadow-glow-sm">
        <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 dark:text-white">
          Ready to Elevate Your Acoustic Experience?
        </h3>
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
          Explore all 14 flagship electronics backed by our Pan-India 1-year doorstep warranty.
        </p>
        <button
          onClick={() => navigate('/products')}
          className="px-8 py-3.5 rounded-xl bg-pulse-primary text-black font-heading font-extrabold text-xs uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all"
        >
          Explore All Gear
        </button>
      </section>

    </div>
  );
};
