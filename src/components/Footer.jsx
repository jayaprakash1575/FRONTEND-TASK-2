import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Zap, 
  Send, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Headphones, 
  CheckCircle2
} from 'lucide-react';

export const Footer = () => {
  const { navigate, addToast } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    addToast('Welcome to PULSE Tribe! Use code PULSE20 for 20% off.', 'success');
    setEmail('');
  };

  return (
    <footer className="bg-slate-100 dark:bg-pulse-dark border-t border-slate-200 dark:border-white/10 pt-16 pb-12 mt-auto transition-colors">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Newsletter Strip */}
        <div className="relative rounded-3xl bg-white dark:bg-gradient-to-r dark:from-pulse-card dark:via-pulse-surface dark:to-pulse-card border border-slate-200 dark:border-white/10 p-8 md:p-12 mb-16 overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-pulse-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-pulse-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pulse-primary/15 text-pulse-primary border border-pulse-primary/30 mb-3 shadow-glow-sm">
                <Zap className="w-3.5 h-3.5" /> PULSE VIP Tribe
              </span>
              <h3 className="font-heading font-black text-2xl md:text-3xl text-slate-900 dark:text-white mb-2">
                Unlock ₹500 Off Your First Order
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Join 500,000+ sound revolutionaries. Receive exclusive access to secret drops, firmware updates, and VIP acoustic tuning sessions.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-slate-50 dark:bg-pulse-dark/80 border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-pulse-primary shadow-xs"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-pulse-primary text-black font-heading font-extrabold text-xs uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 active:scale-95 shrink-0"
              >
                <span>Claim ₹500</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-heading font-extrabold text-2xl tracking-tight">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pulse-primary to-cyan-600 flex items-center justify-center text-black shadow-glow-sm">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <span>PULSE<span className="text-pulse-primary">.</span></span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Engineered for the relentless. PULSE designs and tunes award-winning Active Noise Cancelling audio, titanium AMOLED smartwatches, and audiophile-grade lifestyle electronics.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-white dark:bg-pulse-surface border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-pulse-primary hover:border-pulse-primary/40 shadow-xs transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X / Twitter" className="w-9 h-9 rounded-xl bg-white dark:bg-pulse-surface border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-pulse-primary hover:border-pulse-primary/40 shadow-xs transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-xl bg-white dark:bg-pulse-surface border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-pulse-primary hover:border-pulse-primary/40 shadow-xs transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-white dark:bg-pulse-surface border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-pulse-primary hover:border-pulse-primary/40 shadow-xs transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Gear Collections</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li><button onClick={() => navigate('/products?category=earbuds')} className="hover:text-pulse-primary transition-colors font-medium">True Wireless ANC</button></li>
              <li><button onClick={() => navigate('/products?category=smartwatches')} className="hover:text-pulse-primary transition-colors font-medium">AMOLED Smartwatches</button></li>
              <li><button onClick={() => navigate('/products?category=headphones')} className="hover:text-pulse-primary transition-colors font-medium">Studio ANC Headphones</button></li>
              <li><button onClick={() => navigate('/products?category=gaming')} className="hover:text-pulse-primary transition-colors font-medium">Ultra Low Latency Gaming</button></li>
              <li><button onClick={() => navigate('/products?category=speakers')} className="hover:text-pulse-primary transition-colors font-medium">Rugged Party Speakers</button></li>
              <li><button onClick={() => navigate('/products?category=rings')} className="hover:text-pulse-primary transition-colors font-medium">Titanium Smart Rings</button></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Explore</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li><button onClick={() => navigate('/about')} className="hover:text-pulse-primary transition-colors font-medium">Our Brand Story</button></li>
              <li><button onClick={() => navigate('/products')} className="hover:text-pulse-primary transition-colors font-medium">All 14 Flagship Products</button></li>
              <li><button onClick={() => navigate('/home')} className="hover:text-pulse-primary transition-colors font-medium">Interactive Sound Lab™</button></li>
              <li><button onClick={() => navigate('/about')} className="hover:text-pulse-primary transition-colors font-medium">Research &amp; Patents</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-pulse-primary transition-colors font-medium">Experience Centers</button></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Support &amp; Trust</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li><button onClick={() => navigate('/contact')} className="hover:text-pulse-primary transition-colors font-medium">Pan-India Warranty Claim</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-pulse-primary transition-colors font-medium">Track Active Shipment</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-pulse-primary transition-colors font-medium">7-Day Return Policy</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-pulse-primary transition-colors font-medium">24/7 WhatsApp Support</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-pulse-primary transition-colors font-medium">Support FAQs</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} PULSE Technologies Inc. All Rights Reserved. Engineered for the bold.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-pulse-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-pulse-primary cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-pulse-primary cursor-pointer transition-colors">Security Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
