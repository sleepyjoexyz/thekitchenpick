import Link from "next/link";

// Import getters for all categories
import { getEspressoMachineArticle, getAllEspressoMachineArticleSlugs } from "@/data/espresso-machine-articles";
import { getAirFryerArticle, getAllAirFryerArticleSlugs } from "@/data/air-fryer-articles";
import { getStandingDeskArticle, getAllStandingDeskArticleSlugs } from "@/data/standing-desk-articles";
import { getClimateControlArticle, getAllClimateControlArticleSlugs } from "@/data/climate-control-articles";
import { getElectricToothbrushArticle, getAllElectricToothbrushArticleSlugs } from "@/data/electric-toothbrush-articles";
import { getAirPurifierArticle, getAllAirPurifierArticleSlugs } from "@/data/air-purifier-articles";
import { getMassageGunArticle, getAllMassageGunArticleSlugs } from "@/data/massage-gun-articles";
import { getSecurityCameraArticle, getAllSecurityCameraArticleSlugs } from "@/data/security-camera-articles";
import { getRobotVacuumArticle, getAllRobotVacuumArticleSlugs } from "@/data/robot-vacuum-articles";

interface CrossCategoryLinksProps {
  currentCategory: string;
}

interface CategoryConfig {
  name: string;
  path: string;
  getSlugs: () => string[];
  getArticle: (slug: string) => any;
}

const categoryMap: Record<string, CategoryConfig> = {
  "espresso-machines": {
    name: "Espresso Machines",
    path: "/espresso-machines",
    getSlugs: getAllEspressoMachineArticleSlugs,
    getArticle: getEspressoMachineArticle,
  },
  "air-fryers": {
    name: "Air Fryers",
    path: "/air-fryers",
    getSlugs: getAllAirFryerArticleSlugs,
    getArticle: getAirFryerArticle,
  },
  "standing-desks": {
    name: "Standing Desks",
    path: "/standing-desks",
    getSlugs: getAllStandingDeskArticleSlugs,
    getArticle: getStandingDeskArticle,
  },
  "climate-control": {
    name: "Climate Control",
    path: "/climate-control",
    getSlugs: getAllClimateControlArticleSlugs,
    getArticle: getClimateControlArticle,
  },
  "electric-toothbrushes": {
    name: "Electric Toothbrushes",
    path: "/electric-toothbrushes",
    getSlugs: getAllElectricToothbrushArticleSlugs,
    getArticle: getElectricToothbrushArticle,
  },
  "air-purifiers": {
    name: "Air Purifiers",
    path: "/air-purifiers",
    getSlugs: getAllAirPurifierArticleSlugs,
    getArticle: getAirPurifierArticle,
  },
  "massage-guns": {
    name: "Massage Guns",
    path: "/massage-guns",
    getSlugs: getAllMassageGunArticleSlugs,
    getArticle: getMassageGunArticle,
  },
  "security-cameras": {
    name: "Security Cameras",
    path: "/security-cameras",
    getSlugs: getAllSecurityCameraArticleSlugs,
    getArticle: getSecurityCameraArticle,
  },
  "robot-vacuums": {
    name: "Robot Vacuums",
    path: "/robot-vacuums",
    getSlugs: getAllRobotVacuumArticleSlugs,
    getArticle: getRobotVacuumArticle,
  },
};

const relatedCategories: Record<string, string[]> = {
  "espresso-machines": ["air-fryers", "standing-desks", "air-purifiers"],
  "air-fryers": ["espresso-machines", "robot-vacuums", "air-purifiers"],
  "standing-desks": ["espresso-machines", "air-purifiers", "massage-guns"],
  "climate-control": ["air-purifiers", "air-fryers", "massage-guns"],
  "electric-toothbrushes": ["massage-guns", "air-purifiers", "standing-desks"],
  "air-purifiers": ["robot-vacuums", "air-fryers", "climate-control"],
  "massage-guns": ["electric-toothbrushes", "standing-desks", "climate-control"],
  "security-cameras": ["robot-vacuums", "air-purifiers", "standing-desks"],
  "robot-vacuums": ["air-fryers", "air-purifiers", "security-cameras"],
};

export default function CrossCategoryLinks({ currentCategory }: CrossCategoryLinksProps) {
  const related = relatedCategories[currentCategory] || [];

  const links = related
    .map((catKey) => {
      const cat = categoryMap[catKey];
      if (!cat) return null;
      const slugs = cat.getSlugs();
      if (slugs.length === 0) return null;
      const firstSlug = slugs[0];
      const article = cat.getArticle(firstSlug);
      if (!article) return null;
      return {
        catKey,
        cat,
        slug: firstSlug,
        article,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  if (links.length === 0) {
    return null;
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {links.map(({ catKey, cat, slug, article }) => (
          <Link
            key={catKey}
            href={`${cat.path}/${slug}`}
            className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-gray-200 transition"
          >
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
              {cat.name}
            </p>
            <h3 className="font-semibold text-gray-900 text-sm">{article.title}</h3>
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
