import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Truck,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    cartSubtotal,
    cartOriginalTotal,
    discountAmount,
    cartShipping,
    cartFinalTotal,
    formatPrice,
    couponCode,
    applyCoupon,
    navigate,
    addToast
  } = useApp();

  const [inputCoupon, setInputCoupon] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 999;
  const shippingProgress = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));
  const amountNeeded = Math.max(0, freeShippingThreshold - cartSubtotal);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!inputCoupon) return;
    applyCoupon(inputCoupon);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      clearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={() => {
          setIsCartOpen(false);
          setCheckoutComplete(false);
        }}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white dark:bg-pulse-card border-l border-slate-200 dark:border-white/10 h-full flex flex-col z-10 shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-pulse-primary" />
            <h3 className="font-heading font-black text-lg text-slate-900 dark:text-white">Your Shopping Bag</h3>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-pulse-primary/15 text-pulse-primary font-bold">
              {cart.reduce((a, b) => a + b.quantity, 0)} items
            </span>
          </div>
          <button 
            onClick={() => {
              setIsCartOpen(false);
              setCheckoutComplete(false);
            }}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {checkoutComplete ? (
          /* Order Placed Success View */
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-5 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-heading font-black text-2xl text-slate-900 dark:text-white mb-2">Order Confirmed!</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Thank you for trusting PULSE Audio. Your order tracking ID is <span className="font-mono text-pulse-primary font-bold">#PLS-{(Math.random() * 900000 + 100000).toFixed(0)}</span>.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-200 dark:border-white/10 w-full text-xs text-slate-700 dark:text-slate-300 space-y-2 mb-6 shadow-xs">
              <div className="flex justify-between">
                <span>Estimated Delivery:</span>
                <span className="text-slate-900 dark:text-white font-bold">Within 48 Hours</span>
              </div>
              <div className="flex justify-between">
                <span>Pan-India Warranty:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">1-Year Doorstep</span>
              </div>
            </div>
            <button
              onClick={() => {
                setCheckoutComplete(false);
                setIsCartOpen(false);
                navigate('/products');
              }}
              className="w-full py-3 rounded-xl bg-pulse-primary text-black font-heading font-extrabold text-sm uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all"
            >
              Continue Exploring Gear
            </button>
          </div>
        ) : cart.length === 0 ? (
          /* Empty Cart State */
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-pulse-surface border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 mb-4">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-black text-lg text-slate-900 dark:text-white mb-1">Your Bag is Empty</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xs mb-6">
              Looks like you haven't added any flagship audio or wearables yet.
            </p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                navigate('/products');
              }}
              className="px-6 py-2.5 rounded-xl bg-pulse-primary text-black font-heading font-bold text-xs uppercase tracking-wider shadow-glow-sm hover:shadow-glow transition-all"
            >
              Explore Flagship Gear
            </button>
          </div>
        ) : (
          /* Cart Items & Summary */
          <>
            {/* Free Shipping Progress */}
            <div className="p-4 bg-slate-50 dark:bg-pulse-surface border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <Truck className="w-3.5 h-3.5 text-pulse-primary" />
                  {cartSubtotal >= freeShippingThreshold ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Free Express Delivery Unlocked! 🎉</span>
                  ) : (
                    <span>Add {formatPrice(amountNeeded)} more for <strong>FREE Delivery</strong></span>
                  )}
                </span>
                <span className="text-pulse-primary font-mono font-bold">{shippingProgress}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-pulse-primary to-cyan-400 rounded-full transition-all duration-500" 
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 divide-y divide-slate-100 dark:divide-white/10">
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.color}`} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="w-20 h-20 rounded-xl object-contain bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-1 shrink-0" 
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 
                          onClick={() => {
                            setIsCartOpen(false);
                            navigate(`/product/${item.product.id}`);
                          }}
                          className="font-bold text-sm text-slate-900 dark:text-white truncate hover:text-pulse-primary cursor-pointer transition-colors"
                        >
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.color)}
                          className="text-slate-400 hover:text-rose-500 transition-colors p-1"
                          title="Remove item"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold">{item.product.categoryLabel}</span>
                        <span className="text-slate-400 dark:text-slate-600">•</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-medium">
                          {item.color}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 bg-slate-100 dark:bg-pulse-surface border border-slate-300 dark:border-white/10 rounded-lg p-1">
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.color, -1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-slate-900 dark:text-white w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.color, 1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="font-heading font-black text-sm text-slate-900 dark:text-white">
                          {formatPrice(item.product.price * item.quantity)}
                        </div>
                        {item.product.originalPrice > item.product.price && (
                          <div className="text-[10px] text-slate-400 dark:text-slate-500 line-through">
                            {formatPrice(item.product.originalPrice * item.quantity)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coupon Code Input */}
            <div className="p-4 bg-slate-50 dark:bg-pulse-surface/80 border-t border-slate-200 dark:border-white/10">
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (PULSE20)"
                  value={inputCoupon}
                  onChange={(e) => setInputCoupon(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl text-xs bg-white dark:bg-pulse-card border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 uppercase focus:outline-none focus:border-pulse-primary shadow-xs font-medium"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  Apply
                </button>
              </form>
              {couponCode && (
                <div className="flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-2">
                  <span>Code {couponCode} active</span>
                  <span>-{(discountAmount).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
                </div>
              )}
            </div>

            {/* Summary & Checkout Button */}
            <div className="p-5 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-pulse-surface space-y-3">
              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="text-slate-900 dark:text-white font-semibold">{formatPrice(cartSubtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                    <span>Special Promo Discount</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Express Pan-India Delivery</span>
                  <span className="text-slate-900 dark:text-white font-semibold">
                    {cartShipping === 0 ? <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase">Free</span> : formatPrice(cartShipping)}
                  </span>
                </div>
                <div className="border-t border-slate-200 dark:border-white/10 pt-2 flex justify-between text-sm font-heading font-black text-slate-900 dark:text-white">
                  <span>Total Amount</span>
                  <span className="text-lg text-pulse-primary">{formatPrice(cartFinalTotal)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pulse-primary to-cyan-400 hover:from-cyan-400 hover:to-pulse-primary text-black font-heading font-extrabold text-sm uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Processing Payment...
                  </span>
                ) : (
                  <>
                    <span>Proceed to Instant Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-pulse-primary" />
                <span>256-Bit SSL Encrypted &amp; 100% Secure Checkout</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
