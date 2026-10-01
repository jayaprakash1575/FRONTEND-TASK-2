import React from 'react';
import { useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileDrawer } from './components/MobileDrawer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickSpecsModal } from './components/QuickSpecsModal';
import { CompareModal } from './components/CompareModal';
import { AuthModal } from './components/AuthModal';
import { ToastContainer } from './components/ToastContainer';

import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export const App = () => {
  const { route } = useApp();

  const renderCurrentPage = () => {
    switch (route.path) {
      case '/home':
        return <Home />;
      case '/products':
        return <Products />;
      case '/product/:id':
        return <ProductDetail />;
      case '/about':
        return <About />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-pulse-dark text-[var(--text-main)] selection:bg-pulse-primary selection:text-black transition-colors duration-200">
      {/* Toast Notification Container */}
      <ToastContainer />

      {/* Main Header */}
      <Header />

      {/* Mobile Drawer */}
      <MobileDrawer />

      {/* Page Content View */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Drawers & Modals */}
      <CartDrawer />
      <WishlistDrawer />
      <QuickSpecsModal />
      <CompareModal />
      <AuthModal />
    </div>
  );
};
