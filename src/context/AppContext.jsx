import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS_DATA } from '../data/products';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Theme state: dark (Obsidian Cyber) or light
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('pulse_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('pulse_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Hash Routing State
  const getHashRoute = () => {
    const hash = window.location.hash.slice(1);
    if (!hash || hash === '/' || hash === '') return { path: '/home', params: {} };
    const [pathPart, queryPart] = hash.split('?');
    const cleanPath = pathPart.startsWith('/') ? pathPart : `/${pathPart}`;
    const params = {};
    if (queryPart) {
      new URLSearchParams(queryPart).forEach((v, k) => {
        params[k] = v;
      });
    }
    if (cleanPath.startsWith('/product/')) {
      const parts = cleanPath.split('/');
      params.id = parts[2];
      return { path: '/product/:id', params };
    }
    return { path: cleanPath, params };
  };

  const [route, setRoute] = useState(getHashRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getHashRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path) => {
    window.location.hash = path.startsWith('#') ? path : `#${path}`;
  };

  // Helper to safely parse and normalize cart items from legacy or corrupted data
  const normalizeCartItem = (rawItem) => {
    if (!rawItem || typeof rawItem !== 'object') return null;

    // Structure 1: New React structure { product: {...}, quantity: number, color: string }
    if (rawItem.product && typeof rawItem.product === 'object' && rawItem.product.id) {
      const freshProduct = PRODUCTS_DATA.find(p => p.id === rawItem.product.id) || rawItem.product;
      const quantity = typeof rawItem.quantity === 'number' && rawItem.quantity > 0 ? rawItem.quantity : 1;
      const color = rawItem.color || (freshProduct.colors && freshProduct.colors[0] ? freshProduct.colors[0].name : 'Default');
      return { product: freshProduct, quantity, color };
    }

    // Structure 2: Legacy Vanilla JS structure { id, name, price, originalPrice, ... }
    if (rawItem.id) {
      const freshProduct = PRODUCTS_DATA.find(p => p.id === rawItem.id);
      if (freshProduct) {
        const quantity = typeof rawItem.quantity === 'number' && rawItem.quantity > 0 ? rawItem.quantity : 1;
        const color = rawItem.color || (freshProduct.colors && freshProduct.colors[0] ? freshProduct.colors[0].name : 'Default');
        return { product: freshProduct, quantity, color };
      }
    }

    return null;
  };

  // Cart State with legacy/corrupted data migration
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('pulse_cart');
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) return [];
      return parsed.map(normalizeCartItem).filter(Boolean);
    } catch (e) {
      console.warn('Error reading pulse_cart from localStorage, resetting:', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('pulse_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage:', e);
    }
  }, [cart]);

  // Wishlist State: ensure array of string product IDs
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('pulse_wishlist');
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) return [];
      return parsed
        .map(item => (typeof item === 'string' ? item : item?.id))
        .filter(Boolean);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('pulse_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage:', e);
    }
  }, [wishlist]);

  // Compare List State (max 3 products)
  const [compareList, setCompareList] = useState([]);

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quickSpecsProduct, setQuickSpecsProduct] = useState(null);

  // Search query
  const [searchQuery, setSearchQuery] = useState('');

  // Discount Coupons
  const [couponCode, setCouponCode] = useState('');
  const [discountRate, setDiscountRate] = useState(0);

  // User Authentication
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('pulse_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('pulse_user', JSON.stringify(userData));
    addToast(`Welcome back, ${userData.name}!`, 'success');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pulse_user');
    addToast('You have been signed out.', 'info');
  };

  // Toast Notification System
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Cart operations
  const addToCart = (product, quantity = 1, selectedColor = null) => {
    if (!product || !product.id) return;
    const chosenColor = selectedColor || (product.colors && product.colors[0] ? product.colors[0].name : 'Default');
    setCart(prev => {
      const existingIndex = prev.findIndex(item => item?.product?.id === product.id && item?.color === chosenColor);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex] = {
          ...copy[existingIndex],
          quantity: (copy[existingIndex].quantity || 1) + quantity
        };
        return copy;
      } else {
        return [...prev, { product, quantity, color: chosenColor }];
      }
    });
    addToast(`Added "${product.name}" to bag!`, 'success');
  };

  const removeFromCart = (productId, color) => {
    setCart(prev => prev.filter(item => !(item?.product?.id === productId && item?.color === color)));
    addToast('Item removed from bag.', 'info');
  };

  const updateCartQuantity = (productId, color, delta) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item?.product?.id === productId && item?.color === color) {
            const newQty = (item.quantity || 1) + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const toggleWishlist = (product) => {
    if (!product || !product.id) return;
    setWishlist(prev => {
      const exists = prev.includes(product.id);
      if (exists) {
        addToast(`Removed "${product.name}" from wishlist`, 'info');
        return prev.filter(id => id !== product.id);
      } else {
        addToast(`Saved "${product.name}" to wishlist ❤️`, 'success');
        return [...prev, product.id];
      }
    });
  };

  const isInWishlist = (productId) => Array.isArray(wishlist) && wishlist.includes(productId);

  // Compare operations
  const toggleCompare = (product) => {
    if (!product || !product.id) return;
    setCompareList(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        addToast(`Removed "${product.name}" from comparison`, 'info');
        return prev.filter(p => p.id !== product.id);
      } else {
        if (prev.length >= 3) {
          addToast('You can compare up to 3 products at a time.', 'warning');
          return prev;
        }
        addToast(`Added "${product.name}" to comparison`, 'info');
        return [...prev, product];
      }
    });
  };

  const removeFromCompare = (productId) => {
    setCompareList(prev => prev.filter(p => p.id !== productId));
  };

  // Coupon handling
  const applyCoupon = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'PULSE20') {
      setCouponCode('PULSE20');
      setDiscountRate(0.20);
      addToast('Coupon PULSE20 applied! 20% discount unlocked.', 'success');
      return true;
    } else if (clean === 'BASS500') {
      setCouponCode('BASS500');
      setDiscountRate(0.15);
      addToast('Coupon BASS500 applied! 15% discount unlocked.', 'success');
      return true;
    } else {
      addToast('Invalid or expired promo code.', 'warning');
      return false;
    }
  };

  // Calculations (resilient against nulls)
  const cartSubtotal = cart.reduce((acc, item) => {
    const price = item?.product?.price ?? 0;
    const qty = item?.quantity ?? 1;
    return acc + price * qty;
  }, 0);

  const cartOriginalTotal = cart.reduce((acc, item) => {
    const orig = item?.product?.originalPrice ?? item?.product?.price ?? 0;
    const qty = item?.quantity ?? 1;
    return acc + orig * qty;
  }, 0);

  const discountAmount = Math.round(cartSubtotal * discountRate);
  const cartShipping = cartSubtotal >= 999 || cartSubtotal === 0 ? 0 : 99;
  const cartFinalTotal = Math.max(0, cartSubtotal - discountAmount + cartShipping);
  const cartCount = cart.reduce((acc, item) => acc + (item?.quantity ?? 1), 0);

  const formatPrice = (amount) => '₹' + Number(amount).toLocaleString('en-IN');

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        route,
        navigate,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartSubtotal,
        cartOriginalTotal,
        discountAmount,
        cartShipping,
        cartFinalTotal,
        cartCount,
        wishlist,
        toggleWishlist,
        isInWishlist,
        compareList,
        toggleCompare,
        removeFromCompare,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isCompareOpen,
        setIsCompareOpen,
        isAuthOpen,
        setIsAuthOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        quickSpecsProduct,
        setQuickSpecsProduct,
        searchQuery,
        setSearchQuery,
        couponCode,
        discountRate,
        applyCoupon,
        user,
        login,
        logout,
        toasts,
        addToast,
        removeToast,
        formatPrice,
        allProducts: PRODUCTS_DATA,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
