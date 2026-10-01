# PULSE™ - Next-Gen Audio & Smart Wearables

A responsive, high-energy consumer electronics eCommerce web application inspired by leading lifestyle brands such as **boAt**, **Noise**, **Boult**, **Fire-Boltt**, and **Mivi**.

---

## ⚡ Live Features Overview

### 1. Multi-Page Architecture (Seamless Client-Side Routing)
- **Home (`#/home`)**:
  - Hero banner carousel with autoplay, pause-on-hover, slide timer, and indicator dots
  - Shop by category cards (True Wireless, Smartwatches, Headphones, Gaming Audio, Party Speakers, Smart Rings)
  - Live Flash Sale countdown timer (hours, minutes, seconds)
  - Trending bestsellers with category filter tabs (up to 8 trending products)
  - **Interactive Sound Lab™**: Real-time acoustic frequency equalizer visualizer with mode presets (*Signature Bass Boost™*, *Crisp Vocal*, *Beast™ Gaming Mode*)
  - Customer review cards from verified buyers
  - VIP Club newsletter signup with instant ₹500 discount prompt
- **Products Catalog (`#/products`)**:
  - **14 Flagship Products** across True Wireless, AMOLED & Tactical Smartwatches, ANC Studio Headphones, Low-Latency Gaming Gear, Cinema Soundbars, Portable Bluetooth Clip Speakers, and Titanium Smart Health Rings
  - Real-time search query filtering
  - Category selector
  - Maximum price range slider (₹999 to ₹10,000) with live price readout
  - Hardware feature toggles (*Active Noise Cancellation*, *AMOLED Display*, *Water Resistant*, *Calling*, *Fast Charge*)
  - Star rating filter (4.8★+, 4.5★+, All)
  - Sorting (Featured, Price: Low-to-High, Price: High-to-Low, Highest Rated, Newest)
  - Active filter tags with one-click clear and "Reset All Filters" button
  - **Loading Skeleton State**: Shimmering animated placeholder cards on filter changes
- **Product Details (`#/product/:id`)**:
  - Breadcrumb navigation
  - Multi-angle gallery with thumbnail switcher
  - Dynamic stock count and rating badge
  - Interactive color variant picker
  - Quantity selector (`-` / `+`)
  - **Live Pincode Delivery Checker**: Validates 6-digit Indian PIN codes and displays express delivery date and COD status
  - Comprehensive technical specifications table
  - In-depth acoustic overview
  - Customer feedback with "Write a Review" interactive modal
  - Related product recommendations carousel
- **About Us (`#/about`)**:
  - Brand story (*"Born for the Beat. Engineered for the Bold."*)
  - Innovation metrics counter (5M+ Tribe, 4.8★ Avg Rating, 50+ Patents, 100% In-house Tuning)
  - Four brand pillars (Acoustic Mastery, Indestructible Build, ASAP™ Rapid Charge, Eco-Forward Packaging)
  - Brand evolution timeline (2020 – 2026)
- **Contact Us (`#/contact`)**:
  - Direct support channels (24/7 WhatsApp, Toll-Free Hotline, Email Helpdesk, Experience Centers)
  - Support ticket form with real-time field validation and ticket ID generation
  - Interactive FAQ accordion (expand/collapse with smooth transition)
- **Authentication Pages**:
  - **Login (`#/login`)**: Real-time validation for email and password, remember-me checkbox, forgot password prompt, social login
  - **Sign Up (`#/signup`)**: Real-time validation for name, email, 10-digit mobile number, password with **animated 4-tier strength meter**, confirm password match, and terms checkbox

---

### 2. Shopping Bag & Wishlist System
- **Cart Drawer (Slide-out)**:
  - Accessible via header cart icon with live badge counter
  - Quantity stepper (`-` / `+`) with auto-removal on 0
  - Item removal button
  - Free express shipping progress meter (unlocks at ₹999 threshold)
  - Promo coupon engine: Enter **`PULSE20`** for an instant 20% discount or **`BASS500`** for 15% discount
  - Live subtotal, discount, and total calculation
  - **Express Checkout Modal**: Customer shipping address form, payment method selector (UPI / Card / Cash on Delivery), order summary, and order confirmation screen with order ID
- **Wishlist Drawer (Slide-out)**:
  - Accessible via header heart icon with live badge counter
  - Instant one-click "Add to Bag" from wishlist
  - Heart icon button with pop animation across all product cards

---

### 3. Theme Toggle & UI Polish
- **Dark / Light Mode Toggle**:
  - Cyber Obsidian Dark Mode (default) with deep blacks, frosted glass, and electric cyan/neon accents
  - Clean Silver Light Mode with crisp contrast
  - Saved to `localStorage` for cross-session persistence
- **Toast Notifications System**:
  - Floating notification stack with smooth slide-in, auto-dismiss countdown timer bar, and status icons (Success, Info, Warning, Error)
  - Triggers on cart addition, wishlist update, promo codes, form submissions, and mode toggles
- **Header Live Autocomplete**:
  - Typed search popup showing matching gear with images, prices, and categories

---

---

## ⚛️ React JS & Vite Architecture

The application has been converted into a modular, high-performance **React JS** application powered by **Vite** and **Tailwind CSS**:

### 📁 Project Structure:
```text
src/
├── context/
│   └── AppContext.jsx       # Global state (Cart, Wishlist, Compare, Search, Theme, Toasts, Auth)
├── data/
│   └── products.js          # Catalog data with 14 flagship electronics & specs
├── components/
│   ├── Header.jsx           # Sticky navbar, search autocomplete, theme switcher, badges
│   ├── MobileDrawer.jsx     # Mobile slide-over menu & ecosystem pills
│   ├── CartDrawer.jsx       # Slide-over cart, free delivery progress, coupons, simulated checkout
│   ├── WishlistDrawer.jsx   # Slide-over saved gear list with move-to-bag
│   ├── QuickSpecsModal.jsx  # Rapid spec modal preview
│   ├── CompareModal.jsx     # Side-by-side technical spec comparison matrix
│   ├── AuthModal.jsx        # Login & Sign Up modal with animated password strength meter
│   ├── ToastContainer.jsx   # Interactive notification alerts
│   └── Footer.jsx           # VIP Newsletter, brand links, trust badges
├── pages/
│   ├── Home.jsx             # Hero carousel, category ecosystem, flash sale timer, Sound Lab™ EQ
│   ├── Products.jsx         # Catalog page with faceted filters, live price slider, sort & search
│   ├── ProductDetail.jsx    # Product page with gallery, Indian pincode checker, review modal
│   ├── About.jsx            # Brand manifesto, innovation metrics, and evolution timeline
│   └── Contact.jsx          # Support channels, priority ticket generator, FAQ accordion
├── App.jsx                  # Main application orchestrator & hash router
├── main.jsx                 # React 18 / 19 DOM root mount
└── index.css                # Tailwind directives & design tokens
```

---

## 🚀 How to Run Locally

### Start Development Server:
```powershell
npm run dev
```
Vite will start the fast HMR development server at **`http://localhost:3000/`**.

### Build for Production:
```powershell
npm run build
```
Generates the optimized production bundle in the `dist/` directory.

### Preview Production Build:
```powershell
npm run preview
```
