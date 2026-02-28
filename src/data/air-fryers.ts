export interface AirFryer {
  id: string;
  brand: string;
  model: string;
  price: number;
  priceRange: "budget" | "mid" | "premium";
  capacityQt: number;
  wattage: number;
  tempMaxF: number;
  hasDualZone: boolean;
  hasRotisserie: boolean;
  isOvenStyle: boolean;
  presets: number;
  dimensions: string;
  weightLbs: number;
  pros: string[];
  cons: string[];
  bestFor: string;
  amazonAsin: string | null;
  rating: number;
  imageAlt: string;
  lastVerified: null;
}

export const airFryers: AirFryer[] = [
  {
    id: "ninja-foodi-dualzone-af300",
    brand: "Ninja",
    model: "Foodi DualZone AF300",
    price: 120,
    priceRange: "budget",
    capacityQt: 8,
    wattage: 1700,
    tempMaxF: 400,
    hasDualZone: true,
    hasRotisserie: false,
    isOvenStyle: false,
    presets: 6,
    dimensions: "17.2 x 12 x 6.4 inches",
    weightLbs: 7.3,
    pros: [
      "Dual zone capability at budget price",
      "Cook two foods simultaneously",
      "8-quart total capacity",
      "Energy efficient",
      "Easy to clean baskets",
    ],
    cons: [
      "Requires manual adjustment for different temp zones",
      "Baskets are smaller individually",
      "Limited preset functions",
    ],
    bestFor: "Families wanting dual zone at budget price",
    amazonAsin: "B09NQ5ZF7R",
    rating: 4.3,
    imageAlt: "Ninja Foodi DualZone AF300 dual basket air fryer",
    lastVerified: null,
  },
  {
    id: "ninja-foodi-xl-af150amz",
    brand: "Ninja",
    model: "Foodi XL AF150AMZ",
    price: 130,
    priceRange: "budget",
    capacityQt: 5.5,
    wattage: 1750,
    tempMaxF: 400,
    hasDualZone: false,
    hasRotisserie: false,
    isOvenStyle: false,
    presets: 8,
    dimensions: "15 x 10.5 x 6 inches",
    weightLbs: 6.8,
    pros: [
      "Excellent value for the price",
      "Multiple preset functions",
      "Quick heat-up time",
      "Crisps food evenly",
      "Compact footprint",
    ],
    cons: [
      "Not dual zone",
      "Smaller capacity than DualZone",
      "Basic display",
    ],
    bestFor: "Singles and couples wanting quality on budget",
    amazonAsin: "B08W8QPRY3",
    rating: 4.2,
    imageAlt: "Ninja Foodi XL AF150AMZ compact air fryer",
    lastVerified: null,
  },
  {
    id: "ninja-foodi-digital-air-fry-oven-sp101",
    brand: "Ninja",
    model: "Foodi Digital Air Fry Oven SP101",
    price: 170,
    priceRange: "mid",
    capacityQt: 10.4,
    wattage: 1800,
    tempMaxF: 450,
    hasDualZone: false,
    hasRotisserie: true,
    isOvenStyle: true,
    presets: 12,
    dimensions: "22.8 x 15.4 x 11.4 inches",
    weightLbs: 21.5,
    pros: [
      "Large capacity for families",
      "Rotisserie function",
      "Convection oven mode",
      "Multiple preset programs",
      "Toasts and bakes too",
    ],
    cons: [
      "Takes counter space",
      "Heavier than basket models",
      "Not portable",
      "Longer preheat time",
    ],
    bestFor: "Families wanting oven-style versatility",
    amazonAsin: "B08TLHXVB7",
    rating: 4.5,
    imageAlt: "Ninja Foodi Digital Air Fry Oven SP101",
    lastVerified: null,
  },
  {
    id: "cosori-pro-le-5qt",
    brand: "Cosori",
    model: "Pro LE 5qt",
    price: 80,
    priceRange: "budget",
    capacityQt: 5,
    wattage: 1500,
    tempMaxF: 400,
    hasDualZone: false,
    hasRotisserie: false,
    isOvenStyle: false,
    presets: 11,
    dimensions: "13.9 x 9.8 x 5.5 inches",
    weightLbs: 5.2,
    pros: [
      "Ultra-budget friendly",
      "Compact size",
      "11 presets",
      "Quiet operation",
      "Great for dorms and small spaces",
    ],
    cons: [
      "Small capacity",
      "Basic construction",
      "Limited temperature range",
    ],
    bestFor: "Ultra-budget shoppers and apartment dwellers",
    amazonAsin: "B08GTQPKFF",
    rating: 4.0,
    imageAlt: "Cosori Pro LE 5qt budget air fryer",
    lastVerified: null,
  },
  {
    id: "cosori-dual-blaze-6-8qt",
    brand: "Cosori",
    model: "Dual Blaze 6.8qt",
    price: 120,
    priceRange: "budget",
    capacityQt: 6.8,
    wattage: 1750,
    tempMaxF: 400,
    hasDualZone: true,
    hasRotisserie: false,
    isOvenStyle: false,
    presets: 8,
    dimensions: "16.5 x 11 x 6 inches",
    weightLbs: 7.5,
    pros: [
      "Dual zone capability",
      "Good capacity at this price",
      "Cook independently in each basket",
      "Durable construction",
      "Quiet operation",
    ],
    cons: [
      "Less intuitive controls than Ninja",
      "Takes some space",
      "Fewer preset options",
    ],
    bestFor: "Budget-conscious families wanting dual zone",
    amazonAsin: "B08NXQR1TY",
    rating: 4.2,
    imageAlt: "Cosori Dual Blaze 6.8qt dual zone air fryer",
    lastVerified: null,
  },
  {
    id: "cosori-turboblaze-6qt",
    brand: "Cosori",
    model: "TurboBlaze 6qt",
    price: 100,
    priceRange: "budget",
    capacityQt: 6,
    wattage: 1700,
    tempMaxF: 400,
    hasDualZone: false,
    hasRotisserie: false,
    isOvenStyle: false,
    presets: 10,
    dimensions: "15.2 x 10.2 x 5.8 inches",
    weightLbs: 6.5,
    pros: [
      "Excellent value",
      "Good capacity",
      "Multiple presets",
      "Sleek design",
      "Intuitive controls",
    ],
    cons: [
      "No dual zone",
      "Average build quality",
      "Limited temperature range",
    ],
    bestFor: "Value-seekers wanting mid-sized basket fryer",
    amazonAsin: "B08LQP1F5F",
    rating: 4.1,
    imageAlt: "Cosori TurboBlaze 6qt air fryer",
    lastVerified: null,
  },
  {
    id: "instant-vortex-plus-6qt",
    brand: "Instant",
    model: "Vortex Plus 6qt",
    price: 100,
    priceRange: "budget",
    capacityQt: 6,
    wattage: 1700,
    tempMaxF: 400,
    hasDualZone: false,
    hasRotisserie: false,
    isOvenStyle: false,
    presets: 6,
    dimensions: "15.5 x 10.4 x 5.8 inches",
    weightLbs: 6.8,
    pros: [
      "Reliable brand reputation",
      "Crisps evenly",
      "Good capacity for price",
      "Sturdy construction",
      "Easy to use",
    ],
    cons: [
      "Fewer presets than competitors",
      "Basic interface",
      "Not as feature-rich",
    ],
    bestFor: "Reliability-focused budget shoppers",
    amazonAsin: "B0841KD1R7",
    rating: 4.2,
    imageAlt: "Instant Vortex Plus 6qt air fryer",
    lastVerified: null,
  },
  {
    id: "instant-vortex-plus-xl-8qt",
    brand: "Instant",
    model: "Vortex Plus XL 8qt",
    price: 130,
    priceRange: "mid",
    capacityQt: 8,
    wattage: 1800,
    tempMaxF: 400,
    hasDualZone: false,
    hasRotisserie: false,
    isOvenStyle: false,
    presets: 8,
    dimensions: "17.2 x 11 x 5.9 inches",
    weightLbs: 8.2,
    pros: [
      "Large capacity for families",
      "Even cooking throughout basket",
      "Reliable brand",
      "Sturdy build",
      "Good preset options",
    ],
    cons: [
      "Takes counter space",
      "No dual zone",
      "Average design aesthetics",
    ],
    bestFor: "Families wanting large single-basket fryer",
    amazonAsin: "B07ZG12R7R",
    rating: 4.3,
    imageAlt: "Instant Vortex Plus XL 8qt air fryer",
    lastVerified: null,
  },
  {
    id: "philips-premium-xxl-hd9867",
    brand: "Philips",
    model: "Premium XXL HD9867",
    price: 250,
    priceRange: "premium",
    capacityQt: 7,
    wattage: 2000,
    tempMaxF: 392,
    hasDualZone: false,
    hasRotisserie: false,
    isOvenStyle: false,
    presets: 15,
    dimensions: "15.7 x 11 x 6.3 inches",
    weightLbs: 8.5,
    pros: [
      "Premium build quality",
      "Fat removal technology",
      "15 preset programs",
      "Connected app control",
      "Excellent crisping",
      "Longest warranty",
    ],
    cons: [
      "Higher price",
      "European size (may differ from US market)",
      "Takes counter space",
    ],
    bestFor: "Premium buyers wanting best build quality",
    amazonAsin: "B08G2ZX8GQ",
    rating: 4.6,
    imageAlt: "Philips Premium XXL HD9867 air fryer",
    lastVerified: null,
  },
  {
    id: "breville-smart-oven-air-fryer-pro",
    brand: "Breville",
    model: "Smart Oven Air Fryer Pro",
    price: 350,
    priceRange: "premium",
    capacityQt: 10,
    wattage: 2400,
    tempMaxF: 450,
    hasDualZone: false,
    hasRotisserie: false,
    isOvenStyle: true,
    presets: 13,
    dimensions: "20.1 x 16.3 x 9.5 inches",
    weightLbs: 28.5,
    pros: [
      "Premium construction",
      "Oven-style versatility",
      "Large capacity",
      "Convection + air fry",
      "Toast, bake, roast functions",
      "Smart controls",
    ],
    cons: [
      "Expensive",
      "Takes significant counter space",
      "Heavy and bulky",
      "Not portable",
    ],
    bestFor: "Premium buyers wanting full oven replacement",
    amazonAsin: "B09C7FJLG5",
    rating: 4.7,
    imageAlt: "Breville Smart Oven Air Fryer Pro premium oven-style",
    lastVerified: null,
  },
  {
    id: "chefman-turbofry-3-6qt",
    brand: "CHEFMAN",
    model: "TurboFry 3.6qt",
    price: 40,
    priceRange: "budget",
    capacityQt: 3.6,
    wattage: 1400,
    tempMaxF: 380,
    hasDualZone: false,
    hasRotisserie: false,
    isOvenStyle: false,
    presets: 6,
    dimensions: "12.5 x 9 x 5.2 inches",
    weightLbs: 4.8,
    pros: [
      "Ultra-budget price",
      "Compact for small kitchens",
      "Basic reliable operation",
      "Heats up quickly",
      "Works as expected",
    ],
    cons: [
      "Very small capacity",
      "Limited features",
      "Basic build quality",
      "Only good for 1-2 servings",
    ],
    bestFor: "Ultra-budget shoppers and singles",
    amazonAsin: "B07R9F38Z5",
    rating: 3.9,
    imageAlt: "CHEFMAN TurboFry 3.6qt ultra-budget air fryer",
    lastVerified: null,
  },
  {
    id: "cuisinart-toa-65-digital-convection",
    brand: "Cuisinart",
    model: "TOA-65 Digital Convection",
    price: 200,
    priceRange: "mid",
    capacityQt: 8,
    wattage: 1800,
    tempMaxF: 450,
    hasDualZone: false,
    hasRotisserie: true,
    isOvenStyle: true,
    presets: 10,
    dimensions: "19.5 x 15.7 x 10.2 inches",
    weightLbs: 26.8,
    pros: [
      "Full oven-style functions",
      "Rotisserie capability",
      "Convection air fryer mode",
      "Toast and bake functions",
      "Reliable brand",
      "Good warranty",
    ],
    cons: [
      "Takes counter space",
      "Heavy",
      "Not dual zone",
      "Preheat time can be long",
    ],
    bestFor: "Those wanting oven replacement at mid price",
    amazonAsin: "B01LYAA9QQ",
    rating: 4.4,
    imageAlt: "Cuisinart TOA-65 Digital Convection Oven air fryer",
    lastVerified: null,
  },
  {
    id: "ninja-foodi-flexdrawer-af500",
    brand: "Ninja",
    model: "Foodi FlexDrawer AF500",
    price: 200,
    priceRange: "mid",
    capacityQt: 10.4,
    wattage: 1800,
    tempMaxF: 400,
    hasDualZone: true,
    hasRotisserie: false,
    isOvenStyle: false,
    presets: 8,
    dimensions: "18.5 x 13 x 6.5 inches",
    weightLbs: 9.2,
    pros: [
      "Flexible dual/single zone design",
      "Large capacity (10.4 qt)",
      "Use as single basket or dual",
      "Even cooking",
      "Multiple preset modes",
    ],
    cons: [
      "Higher price than standard dual zone",
      "Takes counter space",
      "Complex operation",
    ],
    bestFor: "Families wanting maximum versatility",
    amazonAsin: "B095QHGVL2",
    rating: 4.5,
    imageAlt: "Ninja Foodi FlexDrawer AF500 flexible dual zone air fryer",
    lastVerified: null,
  },
  {
    id: "cosori-air-fryer-toaster-oven",
    brand: "Cosori",
    model: "Air Fryer Toaster Oven",
    price: 150,
    priceRange: "mid",
    capacityQt: 5,
    wattage: 1800,
    tempMaxF: 450,
    hasDualZone: false,
    hasRotisserie: false,
    isOvenStyle: true,
    presets: 11,
    dimensions: "18.2 x 14.6 x 9.4 inches",
    weightLbs: 18.5,
    pros: [
      "Compact oven-style option",
      "Multiple cooking modes",
      "Toaster oven functions",
      "Good mid-price option",
      "Convection air fry",
    ],
    cons: [
      "Smaller than full-size ovens",
      "Takes counter space",
      "Not rotisserie",
    ],
    bestFor: "Budget-conscious buyers wanting oven-style",
    amazonAsin: "B08L7KCY9X",
    rating: 4.3,
    imageAlt: "Cosori Air Fryer Toaster Oven compact oven-style",
    lastVerified: null,
  },
];

export function getAirFryersByPriceRange(
  range: "budget" | "mid" | "premium"
): AirFryer[] {
  return airFryers.filter((f) => f.priceRange === range);
}

export function getAirFryersByCapacity(minQt: number, maxQt: number): AirFryer[] {
  return airFryers.filter((f) => f.capacityQt >= minQt && f.capacityQt <= maxQt);
}

export function getDualZoneAirFryers(): AirFryer[] {
  return airFryers.filter((f) => f.hasDualZone);
}

export function getOvenStyleAirFryers(): AirFryer[] {
  return airFryers.filter((f) => f.isOvenStyle);
}

export function sortAirFryersByPrice(
  fryers: AirFryer[],
  order: "asc" | "desc" = "asc"
): AirFryer[] {
  return [...fryers].sort((a, b) =>
    order === "asc" ? a.price - b.price : b.price - a.price
  );
}

export function sortAirFryersByRating(
  fryers: AirFryer[],
  order: "asc" | "desc" = "desc"
): AirFryer[] {
  return [...fryers].sort((a, b) =>
    order === "asc" ? a.rating - b.rating : b.rating - a.rating
  );
}

export function sortAirFryersByCapacity(
  fryers: AirFryer[],
  order: "asc" | "desc" = "asc"
): AirFryer[] {
  return [...fryers].sort((a, b) =>
    order === "asc" ? a.capacityQt - b.capacityQt : b.capacityQt - a.capacityQt
  );
}
