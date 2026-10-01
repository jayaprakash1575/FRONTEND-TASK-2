/**
 * PULSE Audio & Wearables - Product Catalog Data
 * Expanded Catalog with 14 Flagship Consumer Electronics
 * Inspired by premium electronics brands: boAt, Noise, Boult, Fire-Boltt, Mivi
 */

export const PRODUCTS_DATA = [
  {
    id: "pulse-anc-apex",
    name: "Pulse Apex Pro ANC Earbuds",
    tagline: "Silence the Chaos. Hear the Pulse.",
    category: "earbuds",
    categoryLabel: "True Wireless",
    price: 2499,
    originalPrice: 5999,
    discount: "58% OFF",
    rating: 4.9,
    reviewCount: 3420,
    badge: "BESTSELLER",
    isBestseller: true,
    isTrending: true,
    isNew: false,
    image: "/assets/images/earbuds-anc.jpg",
    gallery: [
      "/assets/images/earbuds-anc.jpg",
      "/assets/images/earbuds-transparent.jpg",
      "/assets/images/gaming-earbuds.jpg"
    ],
    colors: [
      { name: "Obsidian Black", hex: "#11141a" },
      { name: "Cyber Cyan", hex: "#00E5FF" },
      { name: "Cloud White", hex: "#e2e8f0" }
    ],
    inStock: true,
    stockCount: 42,
    shortDesc: "Hybrid Active Noise Cancellation up to 35dB, 13mm Titanium Drivers, Quad-Mic ENC for crystal clear calls, and a massive 60 hours total playtime with Fast Fuel charging.",
    features: [
      "Hybrid ANC up to 35dB with Transparency Mode",
      "Massive 60-Hour Total Battery with Fast Charge (10m = 5h)",
      "Quad-Mic AI Environmental Noise Cancellation (ENC)",
      "Spatial Audio 3D Soundstage",
      "Bluetooth v5.3 with Instant Auto-Pairing (PulseSync™)",
      "IPX5 Sweat & Water Resistance"
    ],
    specs: {
      "Driver Size": "13mm Dynamic Titanium Drivers",
      "Bluetooth Version": "v5.3 Low Energy",
      "ANC Depth": "35dB Hybrid Noise Cancellation",
      "Total Playtime": "Up to 60 Hours (Case + Buds)",
      "Charging Time": "45 mins (Type-C SuperCharge)",
      "Water Resistance": "IPX5 Splash & Sweat Resistant",
      "Microphones": "4x Mems with AI ClearVoice ENC",
      "Frequency Response": "20Hz - 20,000Hz",
      "Warranty": "1-Year Comprehensive Replacement Warranty"
    }
  },
  {
    id: "pulse-titan-ultra",
    name: "Pulse Titan Ultra Smartwatch",
    tagline: "Rugged Elegance. Unstoppable Performance.",
    category: "smartwatches",
    categoryLabel: "Smartwatches",
    price: 3999,
    originalPrice: 8999,
    discount: "56% OFF",
    rating: 4.8,
    reviewCount: 2890,
    badge: "FLAGSHIP",
    isBestseller: true,
    isTrending: true,
    isNew: true,
    image: "/assets/images/smartwatch-ultra.jpg",
    gallery: [
      "/assets/images/smartwatch-ultra.jpg",
      "/assets/images/smartwatch-tactical.jpg",
      "/assets/images/smartwatch-luxe.jpg"
    ],
    colors: [
      { name: "Titanium Slate", hex: "#4b5563" },
      { name: "Blaze Orange", hex: "#FF6B00" },
      { name: "Stealth Black", hex: "#0f172a" }
    ],
    inStock: true,
    stockCount: 28,
    shortDesc: "1.96-inch Always-on AMOLED Display with 1000 nits peak brightness, Aerospace-grade Titanium Alloy Casing, One-Tap Bluetooth Calling with dedicated speaker, and 120+ Sports Modes.",
    features: [
      "1.96\" Ultra-Crisp Curved AMOLED (410x502 px, 1000 Nits)",
      "Aerospace-Grade Titanium Alloy Rugged Case",
      "Advanced Bluetooth HD Calling with Noise-Reduced Mic",
      "24/7 Biometric Suite: SpO2, Heart Rate, HRV & Stress",
      "120+ Professional Workout & Sports Modes",
      "Up to 10 Days Battery Life on a Single Charge"
    ],
    specs: {
      "Display": "1.96\" AMOLED, 1000 Nits Brightness, Always-On",
      "Build Material": "Titanium Alloy with Ceramic Back",
      "Bluetooth": "v5.3 BLE + Classic Calling Audio",
      "Battery Life": "Up to 10 Days (Typical) / 30 Days (Standby)",
      "Sensors": "Optical PPG, 3-Axis Gyro, Barometer, SpO2",
      "Water Resistance": "IP68 & 3ATM Dust & Waterproof",
      "Voice Assistant": "Compatible with Google Assistant & Siri",
      "App Compatibility": "Pulse Health Sync (iOS 12+ & Android 8+)",
      "Warranty": "1-Year Brand Replacement Guarantee"
    }
  },
  {
    id: "pulse-phantom-trans",
    name: "Pulse Phantom Cyber Clear TWS",
    tagline: "See the Technology. Feel the Rhythm.",
    category: "earbuds",
    categoryLabel: "True Wireless",
    price: 2199,
    originalPrice: 4999,
    discount: "56% OFF",
    rating: 4.8,
    reviewCount: 1980,
    badge: "CYBER LAUNCH",
    isBestseller: false,
    isTrending: true,
    isNew: true,
    image: "/assets/images/earbuds-transparent.jpg",
    gallery: [
      "/assets/images/earbuds-transparent.jpg",
      "/assets/images/earbuds-anc.jpg",
      "/assets/images/gaming-earbuds.jpg"
    ],
    colors: [
      { name: "Cyber Clear Gold", hex: "#d4af37" },
      { name: "Stealth Smoke", hex: "#334155" },
      { name: "Electric Cyan", hex: "#00E5FF" }
    ],
    inStock: true,
    stockCount: 50,
    shortDesc: "Futuristic transparent acrylic chassis revealing precision micro-circuitry, illuminated gold contact pins, and breathing blue LED status halos. Equipped with 13mm Bionic Drivers and 45-hour battery.",
    features: [
      "100% Transparent HyperClear™ Acrylic Case & Buds",
      "Internal Circuitry Illuminated with Cyber Blue LEDs",
      "13mm Bionic Bass Boost Drivers with Ultra-Wide Soundstage",
      "AI Dual-Microphone Environmental Noise Cancellation",
      "45 Hours Total Massive Battery Endurance",
      "Fast Type-C Quick Fuel (10 min = 4 hours)"
    ],
    specs: {
      "Case Design": "Clear High-Impact Polycarbonate Acrylic",
      "Driver": "13mm Dynamic Titanium-Coated Drivers",
      "Lighting": "Breathing Dual-Zone Blue Status LEDs",
      "Bluetooth": "v5.3 Fast Sync with Dual Pairing",
      "Battery Playtime": "45 Hours Total (Case + Buds)",
      "Water Resistance": "IPX4 Sweat Resistant",
      "Warranty": "1-Year Brand Replacement Warranty"
    }
  },
  {
    id: "pulse-force-tactical",
    name: "Pulse Force Military Rugged Smartwatch",
    tagline: "Combat Tested. Extreme Survival Readiness.",
    category: "smartwatches",
    categoryLabel: "Smartwatches",
    price: 4499,
    originalPrice: 9999,
    discount: "55% OFF",
    rating: 4.9,
    reviewCount: 3210,
    badge: "MILITARY TOUGH",
    isBestseller: true,
    isTrending: true,
    isNew: true,
    image: "/assets/images/smartwatch-tactical.jpg",
    gallery: [
      "/assets/images/smartwatch-tactical.jpg",
      "/assets/images/smartwatch-ultra.jpg",
      "/assets/images/smart-ring.jpg"
    ],
    colors: [
      { name: "Olive Tactical Drab", hex: "#4b5320" },
      { name: "Stealth Carbon Black", hex: "#1c1917" },
      { name: "Desert Coyote Tan", hex: "#d2b48c" }
    ],
    inStock: true,
    stockCount: 35,
    shortDesc: "Engineered to MIL-STD-810H standards with shock-resistant screw-bolted bezel, real-time digital compass, barometric altimeter, emergency LED torch, and an astonishing 18 days of battery endurance.",
    features: [
      "MIL-STD-810H Military Certified for Extreme Shock & Temperature",
      "Built-in Digital Compass, Barometer & Precision Altimeter",
      "High-Lumen Emergency Side LED Torch Light",
      "1.43\" Ultra-Durable Corning Gorilla Glass HD Display",
      "18-Day Battery Life on a Single Charge / 45-Day Standby",
      "Rugged Bluetooth Calling with High-Decibel Speaker"
    ],
    specs: {
      "Durability Standard": "MIL-STD-810H Shock & Drop Resistant",
      "Glass Protection": "Corning Gorilla Glass 3 with Anti-Fingerprint",
      "Sensors": "Digital Compass, Altimeter, Barometer, 24/7 SpO2",
      "Battery Life": "18 Days (Heavy Use) / 45 Days (Standby)",
      "Waterproof": "5ATM & IP69K High-Pressure Waterproof",
      "Flashlight": "Ultra-Bright Side Mounted White LED Torch",
      "Warranty": "1-Year Comprehensive Replacement Warranty"
    }
  },
  {
    id: "pulse-studio-one",
    name: "Pulse Studio Pro Over-Ear ANC",
    tagline: "Audiophile Grade Precision. Pure Immersion.",
    category: "headphones",
    categoryLabel: "Headphones",
    price: 4999,
    originalPrice: 9999,
    discount: "50% OFF",
    rating: 4.9,
    reviewCount: 1450,
    badge: "PRO AUDIO",
    isBestseller: false,
    isTrending: true,
    isNew: false,
    image: "/assets/images/headphones-anc.jpg",
    gallery: [
      "/assets/images/headphones-anc.jpg",
      "/assets/images/earbuds-anc.jpg",
      "/assets/images/speaker-party.jpg"
    ],
    colors: [
      { name: "Matte Carbon", hex: "#18181b" },
      { name: "Brushed Gunmetal", hex: "#64748b" },
      { name: "Midnight Navy", hex: "#1e293b" }
    ],
    inStock: true,
    stockCount: 19,
    shortDesc: "Engineered for pure studio acoustic fidelity. Features 40mm custom bio-cellulose drivers, 42dB Adaptive Noise Cancellation, ultra-soft protein leather ear cushions, and 50 hours of wireless playback.",
    features: [
      "Industry-Leading 42dB Adaptive Active Noise Cancellation",
      "Custom 40mm Bio-Cellulose High-Definition Drivers",
      "50-Hour Playtime with ANC On / 65-Hour Playtime ANC Off",
      "Ultra-Plush Memory Foam Protein Leather Ear Cushions",
      "Dual Device Multipoint Bluetooth Pairing",
      "Wired 3.5mm Hi-Res Audio Mode with Zero Latency"
    ],
    specs: {
      "Driver": "40mm Bio-Cellulose Dynamic Transducers",
      "Frequency Range": "16Hz - 40,000Hz (Hi-Res Certified)",
      "Codecs Supported": "LDAC, AAC, SBC",
      "Battery Playtime": "50 Hours (ANC On) / 65 Hours (ANC Off)",
      "Weight": "248g Lightweight Ergonomic Foldable Build",
      "Charging": "USB Type-C Rapid Fuel (10 min = 6 hours)",
      "Cables Included": "3.5mm Gold-Plated Braided Cable & Type-C",
      "Warranty": "1-Year Express Replacement Warranty"
    }
  },
  {
    id: "pulse-mecha-g1",
    name: "Pulse Mecha G1 Low-Latency Gaming TWS",
    tagline: "Dominate the Battleground. Zero Audio Lag.",
    category: "gaming",
    categoryLabel: "Gaming Audio",
    price: 1899,
    originalPrice: 4499,
    discount: "58% OFF",
    rating: 4.7,
    reviewCount: 5120,
    badge: "GAMER PICK",
    isBestseller: true,
    isTrending: false,
    isNew: false,
    image: "/assets/images/gaming-earbuds.jpg",
    gallery: [
      "/assets/images/gaming-earbuds.jpg",
      "/assets/images/earbuds-transparent.jpg",
      "/assets/images/speaker-party.jpg"
    ],
    colors: [
      { name: "Cyber Armor Silver", hex: "#475569" },
      { name: "Neon Matrix Green", hex: "#10b981" },
      { name: "Stealth Void Black", hex: "#0f172a" }
    ],
    inStock: true,
    stockCount: 65,
    shortDesc: "30ms Beast™ Mode ultra-low latency gaming audio with custom-tuned footsteps equalizer, mechanical slide-open charging case with cyberpunk breathing RGB LEDs, and quad gaming microphones.",
    features: [
      "Ultra-Low 30ms Beast™ Mode Latency for Competitive Gaming",
      "Mechanical Cyber Casing with Breathing RGB LED Lights",
      "10mm Titanium Bionic Drivers tuned for Footstep Detection",
      "Dual Mic Environmental Gaming Noise Cancellation",
      "40-Hour Extended Battery with Quick Juice",
      "Touch Controls for Instant Game / Music Mode Toggle"
    ],
    specs: {
      "Latency": "30ms Ultra-Low Sync Latency",
      "Driver": "10mm Titanium Bionic Gaming Drivers",
      "Lighting": "Breathing Dual-Zone RGB LED",
      "Battery Life": "8h Earbuds + 32h Case (40h Total)",
      "Water Resistance": "IPX4 Sweat Resistant",
      "Bluetooth": "v5.3 with Fast Gaming RF Mode",
      "Warranty": "1-Year Brand Warranty"
    }
  },
  {
    id: "pulse-thunder-soundbar",
    name: "Pulse Thunder 160W Cinema Soundbar",
    tagline: "Explosive Cinema Soundstage for Your Living Room.",
    category: "speakers",
    categoryLabel: "Home Audio",
    price: 7999,
    originalPrice: 15999,
    discount: "50% OFF",
    rating: 4.9,
    reviewCount: 1120,
    badge: "DOLBY 2.1",
    isBestseller: false,
    isTrending: true,
    isNew: true,
    image: "/assets/images/soundbar-cinema.jpg",
    gallery: [
      "/assets/images/soundbar-cinema.jpg",
      "/assets/images/speaker-party.jpg",
      "/assets/images/speaker-clip.jpg"
    ],
    colors: [
      { name: "Brushed Aluminum Black", hex: "#18181b" },
      { name: "Obsidian Gunmetal", hex: "#334155" }
    ],
    inStock: true,
    stockCount: 16,
    shortDesc: "160W peak output with 2.1 channel Dolby Audio, dedicated 6.5-inch down-firing wireless subwoofer with neon blue underglow LED, HDMI eARC, Optical, and Bluetooth 5.3.",
    features: [
      "160W Explosive Peak Output with Dolby Audio 2.1",
      "Wireless 6.5\" Down-Firing Deep Bass Subwoofer with Blue Glow",
      "HDMI eARC, Optical Input, AUX 3.5mm & USB Playback",
      "Dedicated EQ Profiles: Movie, Music, News & 3D Spatial Surround",
      "Ultra-Slim 2.4\" Height fits perfectly under any 43\" - 75\" TV",
      "Includes Premium Infrared Remote Control with Bass Adjust"
    ],
    specs: {
      "Total Power": "160W Peak RMS Output (Soundbar 80W + Sub 80W)",
      "Subwoofer Driver": "6.5\" Long-Throw Down-Firing Bass Transducer",
      "Connectivity": "HDMI eARC, Optical Digital, BT 5.3, USB, 3.5mm",
      "Dolby Decoding": "Dolby Digital & Dolby Pro Logic II",
      "Soundbar Size": "860mm x 65mm x 75mm",
      "Subwoofer Size": "240mm x 240mm x 280mm (Wireless 2.4GHz)",
      "Warranty": "1-Year On-Site Brand Warranty"
    }
  },
  {
    id: "pulse-trailbeat-clip",
    name: "Pulse TrailBeat Rugged Clip Speaker",
    tagline: "Clip On. Blast Out. 100% Waterproof.",
    category: "speakers",
    categoryLabel: "Bluetooth Speakers",
    price: 1699,
    originalPrice: 3499,
    discount: "51% OFF",
    rating: 4.7,
    reviewCount: 4150,
    badge: "OUTDOOR BEST",
    isBestseller: true,
    isTrending: false,
    isNew: true,
    image: "/assets/images/speaker-clip.jpg",
    gallery: [
      "/assets/images/speaker-clip.jpg",
      "/assets/images/speaker-party.jpg",
      "/assets/images/soundbar-cinema.jpg"
    ],
    colors: [
      { name: "Blaze Orange", hex: "#f97316" },
      { name: "Tactical Matte Black", hex: "#1c1917" },
      { name: "Pacific Blue", hex: "#0284c7" }
    ],
    inStock: true,
    stockCount: 75,
    shortDesc: "Ultra-compact rugged speaker with integrated heavy-duty aluminum carabiner clip. IP67 waterproof & dustproof, 12W thumping bass radiator, and 16 hours of playtime for cycling, trekking, and gym.",
    features: [
      "Integrated Heavy-Duty Aluminum Carabiner Clip",
      "12W RMS High-Impact Bass Transducer with Side Radiator",
      "IP67 Fully Waterproof, Dustproof & Floatable Design",
      "16-Hour Marathon Battery with USB-C Fast Fuel",
      "TWS Stereo Pair: Link Two TrailBeats for 24W Stereo Sound",
      "Shockproof Rubberized Bumpers survive 2-Meter Drops"
    ],
    specs: {
      "Audio Output": "12W RMS Custom Dynamic Driver",
      "Waterproof Rating": "IP67 Submersible (Floats in water)",
      "Battery Endurance": "16 Hours at 65% Volume",
      "Mounting": "Built-in Forged Aluminum Carabiner",
      "Weight": "285 grams Lightweight Adventure Profile",
      "Bluetooth": "v5.3 with 15-Meter Wireless Range",
      "Warranty": "1-Year Replacement Warranty"
    }
  },
  {
    id: "pulse-blast-40",
    name: "Pulse Blast 40W Rugged Party Speaker",
    tagline: "Feel the Bass Earthquake. 100% Waterproof.",
    category: "speakers",
    categoryLabel: "Bluetooth Speakers",
    price: 3499,
    originalPrice: 6999,
    discount: "50% OFF",
    rating: 4.8,
    reviewCount: 1870,
    badge: "PARTY BASS",
    isBestseller: false,
    isTrending: true,
    isNew: false,
    image: "/assets/images/speaker-party.jpg",
    gallery: [
      "/assets/images/speaker-party.jpg",
      "/assets/images/speaker-clip.jpg",
      "/assets/images/soundbar-cinema.jpg"
    ],
    colors: [
      { name: "Ballistic Black", hex: "#18181b" },
      { name: "Electric Cyan", hex: "#00E5FF" },
      { name: "Crimson Blaze", hex: "#e11d48" }
    ],
    inStock: true,
    stockCount: 22,
    shortDesc: "40W RMS stereo output featuring dual passive bass radiators, 360-degree pulsating RGB sound-sync light show, IPX7 waterproof submergeable design, and 24 hours of non-stop playtime.",
    features: [
      "40W Explosive RMS Stereo Sound with Deep Bass Radiators",
      "Dynamic Multi-Color RGB Beat-Synchronized Light Show",
      "IPX7 100% Waterproof & Float-Resistant Build",
      "TWS Multi-Link: Pair Two Speakers for 80W True Stereo",
      "24-Hour Party Battery with Built-In Power Bank Function",
      "Integrated Carrying Strap & Rugged Shockproof Bumpers"
    ],
    specs: {
      "Audio Output": "40W RMS Dual Dynamic Drivers + Passive Woofers",
      "Frequency Response": "50Hz - 20kHz",
      "Waterproof Rating": "IPX7 Submersible up to 1 meter for 30 min",
      "Battery Capacity": "6600mAh Rechargeable Lithium-Ion",
      "Playtime": "Up to 24 Hours at 60% Volume",
      "Powerbank Function": "Yes (Charges your smartphone via USB-A)",
      "Connectivity": "Bluetooth 5.3, AUX 3.5mm, MicroSD slot",
      "Warranty": "1-Year Pulse Replacement Guarantee"
    }
  },
  {
    id: "pulse-halo-ring",
    name: "Pulse Halo Biometric Titanium Smart Ring",
    tagline: "Invisible Tech. Infinite Health Insights.",
    category: "rings",
    categoryLabel: "Smart Rings",
    price: 6999,
    originalPrice: 12999,
    discount: "46% OFF",
    rating: 4.9,
    reviewCount: 860,
    badge: "INNOVATION",
    isBestseller: false,
    isTrending: true,
    isNew: true,
    image: "/assets/images/smart-ring.jpg",
    gallery: [
      "/assets/images/smart-ring.jpg",
      "/assets/images/smartwatch-ultra.jpg",
      "/assets/images/smartwatch-luxe.jpg"
    ],
    colors: [
      { name: "Brushed Titanium", hex: "#94a3b8" },
      { name: "Obsidian Black", hex: "#0f172a" },
      { name: "Solar Gold", hex: "#eab308" }
    ],
    inStock: true,
    stockCount: 15,
    shortDesc: "Crafted from Grade-5 aerospace titanium. Weighing just 2.4 grams with continuous sleep staging, skin temperature tracking, HRV readiness scores, and 5ATM water resistance.",
    features: [
      "Grade-5 Aerospace Titanium with Medical Grade Hypoallergenic Resin",
      "Ultra-Lightweight 2.4 Grams Featherweight Profile",
      "Clinical Grade Optical Biometric Sensors (SpO2, Pulse, Temp)",
      "Daily Sleep Staging, Readiness Score & Stress Monitoring",
      "5ATM (50 Meters) Water Resistant for Swimming & Showers",
      "7 Days Battery Life with Magnetic Fast Charging Cradle"
    ],
    specs: {
      "Material": "Titanium Outer Shell + Medical-Grade Resin Core",
      "Weight": "2.4 - 2.9 grams (depends on size)",
      "Sensors": "Red & Infrared LEDs, Optical Heart Sensor, Skin Temp",
      "Water Resistance": "5ATM (Up to 50 meters depth)",
      "Battery": "Up to 7 Days with 40-minute fast magnetic dock",
      "Connectivity": "Bluetooth Low Energy (BLE 5.2)",
      "Sizes Available": "Sizes 7, 8, 9, 10, 11 (Ring Sizing Kit available)",
      "Warranty": "1-Year Warranty & Free Size Exchange"
    }
  },
  {
    id: "pulse-rockerz-150",
    name: "Pulse Rockerz 150 Wireless Neckband",
    tagline: "Unshakable Grip. Deep Signature Bass.",
    category: "neckbands",
    categoryLabel: "Neckbands",
    price: 1299,
    originalPrice: 2999,
    discount: "57% OFF",
    rating: 4.6,
    reviewCount: 6300,
    badge: "VALUE KING",
    isBestseller: true,
    isTrending: false,
    isNew: false,
    image: "/assets/images/neckband-bass.jpg",
    gallery: [
      "/assets/images/neckband-bass.jpg",
      "/assets/images/earbuds-anc.jpg",
      "/assets/images/gaming-earbuds.jpg"
    ],
    colors: [
      { name: "Rage Red & Black", hex: "#dc2626" },
      { name: "Shadow Black", hex: "#18181b" },
      { name: "Electric Blue", hex: "#2563eb" }
    ],
    inStock: true,
    stockCount: 80,
    shortDesc: "12mm bionic drivers tuned for thumping bass, magnetic instant on/off earbuds, flexible silicone collar, ASAP charge (10 mins = 20 hours), and 45 hours total playtime.",
    features: [
      "12mm Dynamic Bass Boost Drivers for Thumping Audio",
      "Magnetic Hall-Switch Earbuds (Snap to Pause, Separate to Play)",
      "ASAP™ Fast Fuel: 10 Minutes Charge gives 20 Hours Music",
      "45 Hours Total Massive Battery Endurance",
      "Dual Device Pairing with Seamless Audio Switch",
      "IPX5 Sweat & Water Resistance for Heavy Workouts"
    ],
    specs: {
      "Driver": "12mm Composite Bass Transducers",
      "Battery Life": "Up to 45 Hours Playback",
      "Fast Charging": "10 Mins Charge = 20 Hours Playtime",
      "Neckband Material": "Skin-Friendly Flexible Memory Silicon",
      "Microphone": "AI-Enhanced Voice Cancellation Mic",
      "Water Resistance": "IPX5 Splash Resistant",
      "Warranty": "1-Year Pulse Hassle-Free Replacement"
    }
  },
  {
    id: "pulse-luxe-orbit",
    name: "Pulse Luxe Orbit Round Smartwatch",
    tagline: "Timeless Craftsmanship Meets Modern Intelligence.",
    category: "smartwatches",
    categoryLabel: "Smartwatches",
    price: 3299,
    originalPrice: 7499,
    discount: "56% OFF",
    rating: 4.8,
    reviewCount: 2190,
    badge: "NEW LAUNCH",
    isBestseller: false,
    isTrending: true,
    isNew: true,
    image: "/assets/images/smartwatch-luxe.jpg",
    gallery: [
      "/assets/images/smartwatch-luxe.jpg",
      "/assets/images/smartwatch-ultra.jpg",
      "/assets/images/smart-ring.jpg"
    ],
    colors: [
      { name: "Champagne Gold", hex: "#d4af37" },
      { name: "Midnight Obsidian", hex: "#18181b" },
      { name: "Rose Blush", hex: "#e0a899" }
    ],
    inStock: true,
    stockCount: 34,
    shortDesc: "1.43-inch circular HD AMOLED display with 466x466 resolution, rotating functional digital crown, premium zinc alloy chassis with dual straps included in the box.",
    features: [
      "1.43\" Ultra-Vivid Circular AMOLED Display (466x466, 60Hz)",
      "Precision Zinc Alloy Bezel with Knurled Digital Crown",
      "Bluetooth Single-Chip Calling with Crystal Clear Loudspeaker",
      "200+ Designer Watch Faces & Cloud Customization",
      "Women's Cycle Tracker, 24/7 Heart Rate & SpO2 Monitoring",
      "Dual Strap Box: Includes Premium Silicone & Milanese Metal Strap"
    ],
    specs: {
      "Display": "1.43\" Circular AMOLED, 466x466 resolution, 600 Nits",
      "Bezel": "Brushed Zinc Alloy with Stainless Steel Accents",
      "Battery": "Up to 7 Days Standard Use, 25 Days Standby",
      "Water Resistance": "IP68 Dust & Splash Proof",
      "Calling": "Single-Chip Bluetooth 5.3 with Noise-Cancelling Mic",
      "Health Tracking": "Heart Rate, SpO2, Sleep, Stress, Breath Training",
      "Warranty": "1-Year Replacement Warranty"
    }
  },
  {
    id: "pulse-aero-glide",
    name: "Pulse Aero Glide Featherweight TWS",
    tagline: "Zero Ear Fatigue. 13mm Pure Bass.",
    category: "earbuds",
    categoryLabel: "True Wireless",
    price: 1499,
    originalPrice: 3299,
    discount: "54% OFF",
    rating: 4.7,
    reviewCount: 2780,
    badge: "LIGHTWEIGHT",
    isBestseller: true,
    isTrending: false,
    isNew: false,
    image: "/assets/images/earbuds-anc.jpg",
    gallery: [
      "/assets/images/earbuds-anc.jpg",
      "/assets/images/earbuds-transparent.jpg",
      "/assets/images/gaming-earbuds.jpg"
    ],
    colors: [
      { name: "Frost White", hex: "#f8fafc" },
      { name: "Midnight Blue", hex: "#1e3a8a" },
      { name: "Mint Sage", hex: "#6ee7b7" }
    ],
    inStock: true,
    stockCount: 60,
    shortDesc: "Weighing just 3.2 grams per bud with half-in-ear ergonomic pressure-relief vents. Features 13mm bass boost drivers, quad mic AI ENC, and 38 hours of playtime.",
    features: [
      "3.2g Featherweight Ergonomics for all-day comfort",
      "13mm Dynamic Bass Boost Titanium Drivers",
      "38 Hours Total Playtime with Pocket Pebble Case",
      "Quad-Mic AI Environmental Noise Cancellation",
      "Touch Control Volume & Track Navigation",
      "IPX4 Splash & Sweat Proof"
    ],
    specs: {
      "Weight": "3.2g per earbud (Ultra Featherweight)",
      "Driver": "13mm Dynamic Bass Drivers",
      "Battery": "38 Hours Total (Buds 7h + Case 31h)",
      "Bluetooth": "v5.3 Low Energy Instant Connect",
      "Microphones": "Quad AI Mics for crystal calls",
      "Warranty": "1-Year Brand Replacement Guarantee"
    }
  },
  {
    id: "pulse-stealth-combat",
    name: "Pulse Stealth Combat Pro Gaming Headset",
    tagline: "Acoustic Footstep Tracker. 7.1 Spatial Surround.",
    category: "gaming",
    categoryLabel: "Gaming Audio",
    price: 2999,
    originalPrice: 6499,
    discount: "53% OFF",
    rating: 4.8,
    reviewCount: 1640,
    badge: "ESPORTS GEAR",
    isBestseller: false,
    isTrending: true,
    isNew: true,
    image: "/assets/images/headphones-anc.jpg",
    gallery: [
      "/assets/images/headphones-anc.jpg",
      "/assets/images/gaming-earbuds.jpg",
      "/assets/images/speaker-party.jpg"
    ],
    colors: [
      { name: "Cyber Void Black", hex: "#0f172a" },
      { name: "Neon Matrix Green", hex: "#10b981" },
      { name: "Shadow Crimson", hex: "#dc2626" }
    ],
    inStock: true,
    stockCount: 30,
    shortDesc: "Custom-tuned for competitive eSports with 50mm neodymium acoustic drivers, detachable broadcast-grade boom mic, breathable memory foam cushions, and dual wireless + 3.5mm low-latency modes.",
    features: [
      "50mm High-Density Neodymium Acoustic Transducers",
      "Virtual 7.1 Spatial Soundstage for Pinpoint Footstep Accuracy",
      "Detachable Broadcast-Grade Noise-Cancelling Boom Microphone",
      "Dual Wireless 2.4GHz Dongle (20ms) + Bluetooth 5.3 + 3.5mm Aux",
      "Breathable Memory Foam Cooling-Gel Ear Cushions",
      "40-Hour Extended Battery with Quick USB-C Fuel"
    ],
    specs: {
      "Driver Size": "50mm Neodymium Magnet Drivers",
      "Frequency Response": "12Hz - 28,000Hz Ultra-Wide",
      "Wireless Connectivity": "2.4GHz Ultra-Low Latency Dongle + BT 5.3",
      "Microphone": "Detachable 6mm Cardioid Boom Mic",
      "Playtime": "Up to 40 Hours (RGB Off) / 25 Hours (RGB On)",
      "Weight": "270g Lightweight Tournament Design",
      "Warranty": "1-Year Comprehensive Replacement Warranty"
    }
  }
];

// Product Categories Definition
const CATEGORIES_DATA = [
  { id: "all", name: "All Products", count: PRODUCTS_DATA.length, icon: "grid" },
  { id: "earbuds", name: "True Wireless", count: PRODUCTS_DATA.filter(p => p.category === "earbuds").length, icon: "headphones" },
  { id: "smartwatches", name: "Smartwatches", count: PRODUCTS_DATA.filter(p => p.category === "smartwatches").length, icon: "watch" },
  { id: "headphones", name: "Headphones", count: PRODUCTS_DATA.filter(p => p.category === "headphones").length, icon: "volume-2" },
  { id: "gaming", name: "Gaming Audio", count: PRODUCTS_DATA.filter(p => p.category === "gaming").length, icon: "zap" },
  { id: "speakers", name: "Party & Home Speakers", count: PRODUCTS_DATA.filter(p => p.category === "speakers").length, icon: "speaker" },
  { id: "rings", name: "Smart Rings", count: PRODUCTS_DATA.filter(p => p.category === "rings").length, icon: "disc" },
  { id: "neckbands", name: "Neckbands", count: PRODUCTS_DATA.filter(p => p.category === "neckbands").length, icon: "activity" }
];

// Customer Reviews Data
const REVIEWS_DATA = [
  {
    author: "Kabir Sharma",
    avatar: "KS",
    role: "Verified Tech Reviewer",
    rating: 5,
    title: "Apex Pro ANC rivals ₹15,000 earbuds!",
    text: "The noise cancellation blew my mind during my daily metro commute. The bass is clean, thumping, and the soundstage feels wide. Outstanding build quality.",
    product: "Pulse Apex Pro ANC Earbuds",
    verified: true,
    date: "2 days ago"
  },
  {
    author: "Ananya Iyer",
    avatar: "AI",
    role: "Marathon Runner & Fitness Coach",
    rating: 5,
    title: "Titan Ultra has replaced my expensive smartwatch",
    text: "The AMOLED display is super bright under direct sunlight. Battery lasts easily 8 days with heavy workout tracking and continuous heart rate. Premium look!",
    product: "Pulse Titan Ultra Smartwatch",
    verified: true,
    date: "1 week ago"
  },
  {
    author: "Rohan Varma",
    avatar: "RV",
    role: "Audio Producer & DJ",
    rating: 5,
    title: "Studio Pro ANC: Exceptional acoustic neutrality",
    text: "Deep, rich sub-bass with zero distortion at high volumes. The 42dB ANC completely shuts out studio hum. Super comfortable for 6-hour editing sessions.",
    product: "Pulse Studio Pro Over-Ear ANC",
    verified: true,
    date: "2 weeks ago"
  },
  {
    author: "Major Devendra S.",
    avatar: "DS",
    role: "High-Altitude Trekker & Veteran",
    rating: 5,
    title: "Pulse Force Military: Unbreakable companion",
    text: "Took this watch on a 14,000 ft Himalayan pass. The digital compass and altimeter were spot on, and battery was at 65% after 12 days in sub-zero cold!",
    product: "Pulse Force Military Rugged Smartwatch",
    verified: true,
    date: "4 days ago"
  },
  {
    author: "Vikram Malhotra",
    avatar: "VM",
    role: "Competitive FPS Gamer",
    rating: 5,
    title: "Mecha G1 - 30ms latency is totally real",
    text: "I can hear enemy footsteps and gunshot directions instantaneously. The RGB mechanical case looks straight out of cyberpunk anime. Total head-turner!",
    product: "Pulse Mecha G1 Low-Latency Gaming TWS",
    verified: true,
    date: "3 weeks ago"
  },
  {
    author: "Sneha Kapadia",
    avatar: "SK",
    role: "Architect & Interior Designer",
    rating: 5,
    title: "Thunder 160W Soundbar transforms movie nights",
    text: "The wireless down-firing subwoofer produces genuine theater-shaking rumble. The blue underglow accent matches my TV backlights. Phenomenal value for money!",
    product: "Pulse Thunder 160W Cinema Soundbar",
    verified: true,
    date: "5 days ago"
  }
];

// Frequently Asked Questions
const FAQS_DATA = [
  {
    q: "How does the 1-Year Comprehensive Replacement Warranty work?",
    a: "Every PULSE product comes with an automatic 1-Year Pan-India Replacement Warranty. If your device develops any hardware or manufacturing defect, simply submit a request on our support page or WhatsApp. Our courier partner will pick it up right from your doorstep and deliver a brand new replacement unit within 3-5 business days."
  },
  {
    q: "What is your 7-Day Hassle-Free Return Policy?",
    a: "We want you to love your sound experience! If you are not 100% thrilled with your purchase, you can initiate a return or exchange within 7 days of delivery through your order dashboard or customer care with no questions asked."
  },
  {
    q: "How long does shipping take across India?",
    a: "Orders placed before 2:00 PM are dispatched on the same business day from our fulfillment centers. Metro cities (Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata) receive delivery within 24-48 hours. Other locations take 3-4 business days. Express shipping is 100% free on all prepaid orders."
  },
  {
    q: "How does PulseSync™ Instant Auto-Pairing work?",
    a: "PulseSync™ uses Bluetooth 5.3 Low Energy Hall-sensor magnetic switches. Simply flip open the charging case lid (or unclip magnetic earbuds) and your smartphone will instantly detect a pairing prompt within 0.2 seconds."
  },
  {
    q: "Are PULSE audio products sweat and water resistant for workouts?",
    a: "Yes! All our earbuds and neckbands feature minimum IPX5 water and sweat resistance, making them fully resilient against intense workout sweat, rainfall, and dust. Our party speakers feature IPX7 submersible waterproofing."
  }
];
