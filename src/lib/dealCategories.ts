export interface DealCategory {
  name: string;
  slug: string;
  emoji: string;
  color: string;
  description: string;
}

export const dealCategories: DealCategory[] = [
  { name: "Air Fryers", slug: "air-fryers", emoji: "🍟", color: "orange", description: "Best air fryer deals today — save on top-rated air fryers for your family. Updated daily." },
  { name: "Espresso Machines", slug: "espresso-machines", emoji: "☕", color: "amber", description: "Best espresso machine deals today — save on Breville, De'Longhi & more. Updated daily." },
  { name: "Robot Vacuums", slug: "robot-vacuums", emoji: "🤖", color: "blue", description: "Best robot vacuum deals today — save on Roomba, Roborock & more. Updated daily." },
  { name: "Air Purifiers", slug: "air-purifiers", emoji: "🌬️", color: "sky", description: "Best air purifier deals today — save on HEPA filters for allergies & pets. Updated daily." },
  { name: "Standing Desks", slug: "standing-desks", emoji: "🖥️", color: "green", description: "Best standing desk deals today — save on electric sit-stand desks. Updated daily." },
  { name: "Security Cameras", slug: "security-cameras", emoji: "📹", color: "red", description: "Best security camera deals today — save on indoor & outdoor cameras. Updated daily." },
];

export function getCategoryBySlug(slug: string): DealCategory | undefined {
  return dealCategories.find((c) => c.slug === slug);
}

export function getCategoryByName(name: string): DealCategory | undefined {
  return dealCategories.find((c) => c.name === name);
}

export function getAllCategorySlugs(): string[] {
  return dealCategories.map((c) => c.slug);
}