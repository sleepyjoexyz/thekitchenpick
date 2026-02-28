export interface AirPurifier {
  id: string;
  brand: string;
  model: string;
  price: number;
  priceRange: "budget" | "mid" | "premium" | "luxury";
  cadrSqFt: number;
  filterType: string;
  hasCarbon: boolean;
  smartFeatures: boolean;
  noiseMinDb: number;
  noiseMaxDb: number;
  filterCostPerYear: number;
  weightLbs: number;
  dimensions: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  amazonAsin: string | null;
  rating: number;
  imageAlt: string;
  lastVerified: null;
}

export const airPurifiers: AirPurifier[] = [
  {
    id: "levoit-core-300s",
    brand: "Levoit",
    model: "Core 300S",
    price: 100,
    priceRange: "budget",
    cadrSqFt: 219,
    filterType: "True HEPA",
    hasCarbon: true,
    smartFeatures: true,
    noiseMinDb: 24,
    noiseMaxDb: 51,
    filterCostPerYear: 60,
    weightLbs: 4.6,
    dimensions: "8.3 x 8.3 x 9.8 inches",
    pros: [
      "Extremely affordable entry point",
      "WiFi and app control despite budget price",
      "Whisper-quiet at lowest settings",
      "Compact and lightweight design",
      "Popular brand with strong support",
    ],
    cons: [
      "Limited room coverage (219 sq ft)",
      "No carbon filter standard (requires upgrade)",
      "Plastic construction",
      "Single filter type",
      "Not suitable for large spaces",
    ],
    bestFor: "Budget-conscious buyers with small bedrooms or offices",
    amazonAsin: "B09B5JBMZC",
    rating: 4.5,
    imageAlt: "Levoit Core 300S compact air purifier",
    lastVerified: null,
  },
  {
    id: "levoit-core-400s",
    brand: "Levoit",
    model: "Core 400S",
    price: 170,
    priceRange: "budget",
    cadrSqFt: 403,
    filterType: "True HEPA",
    hasCarbon: true,
    smartFeatures: true,
    noiseMinDb: 25,
    noiseMaxDb: 52,
    filterCostPerYear: 80,
    weightLbs: 7.0,
    dimensions: "7.5 x 7.5 x 13.2 inches",
    pros: [
      "Excellent value for coverage (403 sq ft)",
      "Smart features at budget price",
      "3-stage filtration with activated carbon",
      "Quiet operation",
      "VortexAir 3D design",
    ],
    cons: [
      "Plastic build quality",
      "Smaller than competitors at same price",
      "CADR could be higher for price",
      "Less durable than premium brands",
    ],
    bestFor: "Budget buyers needing coverage up to 400 sq ft",
    amazonAsin: "B0CHG86RVX",
    rating: 4.4,
    imageAlt: "Levoit Core 400S smart air purifier",
    lastVerified: null,
  },
  {
    id: "coway-airmega-ap-1512hh",
    brand: "Coway",
    model: "Airmega AP-1512HH Mighty",
    price: 160,
    priceRange: "budget",
    cadrSqFt: 361,
    filterType: "True HEPA",
    hasCarbon: true,
    smartFeatures: false,
    noiseMinDb: 24,
    noiseMaxDb: 54,
    filterCostPerYear: 100,
    weightLbs: 14.3,
    dimensions: "15.8 x 8.7 x 18 inches",
    pros: [
      "Excellent CADR for budget price",
      "Durable build quality",
      "Ionizer option (helps dust settling)",
      "Very quiet minimum setting",
      "Long-lasting filters (12 months)",
    ],
    cons: [
      "No smart features",
      "Heavy and takes counter space",
      "Filter replacement cost is higher",
      "Basic display interface",
    ],
    bestFor: "Budget buyers prioritizing durability and performance",
    amazonAsin: "B00SGLSN0E",
    rating: 4.3,
    imageAlt: "Coway Airmega AP-1512HH Mighty purifier",
    lastVerified: null,
  },
  {
    id: "winix-5500-2",
    brand: "Winix",
    model: "5500-2",
    price: 160,
    priceRange: "budget",
    cadrSqFt: 360,
    filterType: "True HEPA",
    hasCarbon: true,
    smartFeatures: false,
    noiseMinDb: 27,
    noiseMaxDb: 57,
    filterCostPerYear: 90,
    weightLbs: 7.6,
    dimensions: "6.3 x 6.3 x 13.8 inches",
    pros: [
      "Excellent coverage at budget price",
      "PlasmaWave ionization technology",
      "Compact design",
      "Energy efficient",
      "Good filter quality",
    ],
    cons: [
      "No smart features or app",
      "Ionizer cannot be disabled (some dislike)",
      "Filter cost mounting",
      "Basic controls",
    ],
    bestFor: "Budget buyers wanting ionization technology",
    amazonAsin: "B01DGHP1NK",
    rating: 4.2,
    imageAlt: "Winix 5500-2 air purifier",
    lastVerified: null,
  },
  {
    id: "blueair-blue-pure-311i-plus",
    brand: "Blueair",
    model: "Blue Pure 311i+",
    price: 200,
    priceRange: "budget",
    cadrSqFt: 388,
    filterType: "True HEPA",
    hasCarbon: true,
    smartFeatures: true,
    noiseMinDb: 17,
    noiseMaxDb: 56,
    filterCostPerYear: 120,
    weightLbs: 4.2,
    dimensions: "6.7 x 6.7 x 15 inches",
    pros: [
      "Ultra-quiet at low settings (17 dB)",
      "Gorgeous minimalist design",
      "Smart controls with app",
      "Very lightweight and portable",
      "Excellent Swedish engineering",
    ],
    cons: [
      "Filter replacement cost is highest in budget",
      "Smaller footprint limits coverage slightly",
      "Premium pricing for features",
      "Plastic parts can feel cheap",
    ],
    bestFor: "Design-conscious buyers valuing quiet operation",
    amazonAsin: "B08FSKCG16",
    rating: 4.4,
    imageAlt: "Blueair Blue Pure 311i+ minimalist design",
    lastVerified: null,
  },
  {
    id: "levoit-everest-air",
    brand: "Levoit",
    model: "EverestAir",
    price: 300,
    priceRange: "mid",
    cadrSqFt: 558,
    filterType: "True HEPA",
    hasCarbon: true,
    smartFeatures: true,
    noiseMinDb: 23,
    noiseMaxDb: 53,
    filterCostPerYear: 100,
    weightLbs: 8.8,
    dimensions: "8.9 x 8.9 x 19 inches",
    pros: [
      "Mid-range room coverage",
      "Smart features and app control",
      "Whisper-quiet operation",
      "Affordable for features provided",
      "Good filter longevity",
    ],
    cons: [
      "Limited availability",
      "Newer model with less user feedback",
      "Not as durable as established brands",
      "Smaller CADR than competitors at same price",
    ],
    bestFor: "Mid-range buyers wanting smart features and quiet operation",
    amazonAsin: "B0D5WYWYSX",
    rating: 4.3,
    imageAlt: "Levoit EverestAir smart purifier",
    lastVerified: null,
  },
  {
    id: "coway-airmega-400s",
    brand: "Coway",
    model: "Airmega 400S",
    price: 450,
    priceRange: "mid",
    cadrSqFt: 1560,
    filterType: "True HEPA",
    hasCarbon: true,
    smartFeatures: true,
    noiseMinDb: 23,
    noiseMaxDb: 56,
    filterCostPerYear: 120,
    weightLbs: 25.6,
    dimensions: "25.2 x 11.2 x 22.4 inches",
    pros: [
      "Exceptional CADR coverage (1560 sq ft)",
      "Smart WiFi control and voice assistant",
      "Dual filter design handles dust and particles",
      "Ionizer technology",
      "Excellent build quality from Korean brand",
    ],
    cons: [
      "Heavy and large footprint",
      "Higher price for budget-conscious",
      "Filter replacement cost moderate",
      "Overkill for small spaces",
    ],
    bestFor: "Buyers needing large room coverage with smart features",
    amazonAsin: "B08THJF61L",
    rating: 4.5,
    imageAlt: "Coway Airmega 400S large room purifier",
    lastVerified: null,
  },
  {
    id: "blueair-healthprotect-7470i",
    brand: "Blueair",
    model: "HealthProtect 7470i",
    price: 600,
    priceRange: "premium",
    cadrSqFt: 418,
    filterType: "True HEPA",
    hasCarbon: true,
    smartFeatures: true,
    noiseMinDb: 20,
    noiseMaxDb: 60,
    filterCostPerYear: 150,
    weightLbs: 13.3,
    dimensions: "9.8 x 9.8 x 16.9 inches",
    pros: [
      "Medical-grade filtration (removes viruses and bacteria)",
      "SensorIQ automatic fan adjustment",
      "Extremely quiet operation",
      "Sleek Scandinavian design",
      "AHAM Certified for allergens",
    ],
    cons: [
      "Premium price point",
      "Expensive filter replacements",
      "Smaller coverage than Coway 400S at higher price",
      "Niche product (overkill for non-immunocompromised)",
    ],
    bestFor: "Premium buyers with allergies or immunocompromised family",
    amazonAsin: "B08YDMQRD3",
    rating: 4.6,
    imageAlt: "Blueair HealthProtect 7470i medical-grade purifier",
    lastVerified: null,
  },
  {
    id: "dyson-pure-cool-tp07",
    brand: "Dyson",
    model: "Pure Cool TP07",
    price: 550,
    priceRange: "mid",
    cadrSqFt: 800,
    filterType: "HEPA H13",
    hasCarbon: true,
    smartFeatures: true,
    noiseMinDb: 38,
    noiseMaxDb: 65,
    filterCostPerYear: 110,
    weightLbs: 7.7,
    dimensions: "7.7 x 7.7 x 39.8 inches",
    pros: [
      "Functions as both purifier and fan",
      "HEPA H13 captures 99.97% of particles",
      "Bladeless design and premium aesthetics",
      "Smart home integration",
      "Top-facing air output avoids direct drafts",
    ],
    cons: [
      "Very tall footprint (tower design)",
      "Expensive for CADR provided",
      "Noisier at higher speeds",
      "Air output direction limited by design",
    ],
    bestFor: "Design-conscious buyers valuing dual fan/purifier function",
    amazonAsin: "B08P5NKXW4",
    rating: 4.4,
    imageAlt: "Dyson Pure Cool TP07 tower fan purifier",
    lastVerified: null,
  },
  {
    id: "dyson-purifier-big-quiet-formaldehyde",
    brand: "Dyson",
    model: "Purifier Big Quiet Formaldehyde",
    price: 750,
    priceRange: "premium",
    cadrSqFt: 1076,
    filterType: "HEPA H13",
    hasCarbon: true,
    smartFeatures: true,
    noiseMinDb: 29,
    noiseMaxDb: 59,
    filterCostPerYear: 150,
    weightLbs: 9.7,
    dimensions: "10 x 10 x 35 inches",
    pros: [
      "Excellent CADR and quiet operation",
      "Detects and removes formaldehyde specifically",
      "Premium design and engineering",
      "Smart monitoring and alerts",
      "Air quality display on unit",
    ],
    cons: [
      "Premium pricing for specialized filtration",
      "Very tall tower design",
      "Expensive filter replacements",
      "Formaldehyde detection niche (overkill for most)",
    ],
    bestFor: "Premium buyers in areas with formaldehyde concerns (new furniture)",
    amazonAsin: "B0B6KTHPND",
    rating: 4.5,
    imageAlt: "Dyson Purifier Big Quiet Formaldehyde tower",
    lastVerified: null,
  },
  {
    id: "molekule-air-pro",
    brand: "Molekule",
    model: "Air Pro",
    price: 700,
    priceRange: "premium",
    cadrSqFt: 1000,
    filterType: "HEPA H13",
    hasCarbon: true,
    smartFeatures: true,
    noiseMinDb: 20,
    noiseMaxDb: 60,
    filterCostPerYear: 140,
    weightLbs: 11.0,
    dimensions: "10 x 10 x 13 inches",
    pros: [
      "PhotoElectroChemical oxidation technology (destroys pollutants)",
      "Excellent quiet operation",
      "Sleek modern design",
      "Smart app and air quality monitoring",
      "Destroys formaldehyde and other VOCs",
    ],
    cons: [
      "Proprietary technology less established than HEPA",
      "Expensive filter replacements",
      "Premium price for unproven long-term reliability",
      "Overkill for basic pollution concerns",
    ],
    bestFor: "Tech-forward buyers wanting cutting-edge filtration technology",
    amazonAsin: "B08SFDZ5S3",
    rating: 4.3,
    imageAlt: "Molekule Air Pro advanced purification system",
    lastVerified: null,
  },
  {
    id: "iqair-healthpro-plus",
    brand: "IQAir",
    model: "HealthPro Plus",
    price: 900,
    priceRange: "premium",
    cadrSqFt: 1125,
    filterType: "HEPA H14",
    hasCarbon: true,
    smartFeatures: false,
    noiseMinDb: 26,
    noiseMaxDb: 67,
    filterCostPerYear: 180,
    weightLbs: 27.5,
    dimensions: "13 x 13 x 21 inches",
    pros: [
      "Medical-grade HEPA H14 (99.995% capture)",
      "Trusted by hospitals and clinics",
      "Extremely effective for allergies and asthma",
      "Excellent build quality (Swiss engineering)",
      "Large tank and effective filtration",
    ],
    cons: [
      "Very heavy and takes counter space",
      "Most expensive filters in this list",
      "No smart features or app",
      "Overkill unless you have severe allergies",
    ],
    bestFor: "Buyers with severe allergies or asthma requiring medical-grade filtration",
    amazonAsin: "B00EIKBG3W",
    rating: 4.6,
    imageAlt: "IQAir HealthPro Plus medical-grade air purifier",
    lastVerified: null,
  },
  {
    id: "austin-air-healthmate",
    brand: "Austin Air",
    model: "HealthMate",
    price: 600,
    priceRange: "premium",
    cadrSqFt: 1500,
    filterType: "True HEPA",
    hasCarbon: true,
    smartFeatures: false,
    noiseMinDb: 35,
    noiseMaxDb: 65,
    filterCostPerYear: 100,
    weightLbs: 30.0,
    dimensions: "15 x 15 x 28 inches",
    pros: [
      "Exceptional CADR (1500 sq ft) at reasonable price",
      "American-made with durability focus",
      "Versatile for large spaces",
      "Chemical filter included standard",
      "Good noise isolation on stand",
    ],
    cons: [
      "Very large footprint and heavy",
      "No smart features",
      "Louder at high speeds",
      "Requires dedicated space",
    ],
    bestFor: "Buyers needing maximum coverage for large homes without smart features",
    amazonAsin: "B003W5Q34O",
    rating: 4.4,
    imageAlt: "Austin Air HealthMate large room purifier",
    lastVerified: null,
  },
];

export function getAirPurifiersByPriceRange(
  range: "budget" | "mid" | "premium" | "luxury"
): AirPurifier[] {
  return airPurifiers.filter((p) => p.priceRange === range);
}

export function getAirPurifiersByRoomSize(maxSqFt: number): AirPurifier[] {
  return airPurifiers.filter((p) => p.cadrSqFt >= maxSqFt);
}

export function getAirPurifersWithSmartFeatures(): AirPurifier[] {
  return airPurifiers.filter((p) => p.smartFeatures);
}

export function sortPurifiersByPrice(
  purifiers: AirPurifier[],
  order: "asc" | "desc" = "asc"
): AirPurifier[] {
  return [...purifiers].sort((a, b) =>
    order === "asc" ? a.price - b.price : b.price - a.price
  );
}

export function sortPurifiersByCADR(
  purifiers: AirPurifier[],
  order: "asc" | "desc" = "desc"
): AirPurifier[] {
  return [...purifiers].sort((a, b) =>
    order === "asc" ? a.cadrSqFt - b.cadrSqFt : b.cadrSqFt - a.cadrSqFt
  );
}

export function sortPurifiersByRating(
  purifiers: AirPurifier[],
  order: "asc" | "desc" = "desc"
): AirPurifier[] {
  return [...purifiers].sort((a, b) =>
    order === "asc" ? a.rating - b.rating : b.rating - a.rating
  );
}
