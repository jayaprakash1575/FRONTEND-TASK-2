import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('PULSE UI ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    try {
      localStorage.removeItem('pulse_cart');
      localStorage.removeItem('pulse_wishlist');
    } catch (e) {
      console.warn('Could not clear storage:', e);
    }
    window.location.hash = '#/home';
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-pulse-dark flex items-center justify-center p-6 text-white text-center">
          <div className="max-w-md w-full bg-pulse-card border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h2 className="font-heading font-extrabold text-2xl text-white mb-2">Something went wrong</h2>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              We encountered a display issue. Click below to clear cached temporary data and reload the application smoothly.
            </p>
            <button
              onClick={this.handleReset}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-pulse-primary text-black font-bold text-xs uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Cache & Reload App
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
