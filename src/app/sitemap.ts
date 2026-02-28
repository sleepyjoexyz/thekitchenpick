import { MetadataRoute } from "next";
import { getAllArticleSlugs } from "@/data/articles";
import { getAllRobotVacuumArticleSlugs } from "@/data/robot-vacuum-articles";
import { getAllAirPurifierArticleSlugs } from "@/data/air-purifier-articles";
import { getAllAirFryerArticleSlugs } from "@/data/air-fryer-articles";
import { getAllSecurityCameraArticleSlugs } from "@/data/security-camera-articles";
import { getAllMassageGunArticleSlugs } from "@/data/massage-gun-articles";
import { getAllElectricToothbrushArticleSlugs } from "@/data/electric-toothbrush-articles";
import { getAllClimateControlArticleSlugs } from "@/data/climate-control-articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thekitchenpick.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Category comparison pages
  const categoryPages: MetadataRoute.Sitemap = [
    "espresso-machines",
    "robot-vacuums",
    "air-purifiers",
    "air-fryers",
    "standing-desks",
    "security-cameras",
    "electric-toothbrushes",
    "massage-guns",
    "climate-control",
  ].map((cat) => ({
    url: `${baseUrl}/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Article pages by category
  const espressoArticles = getAllArticleSlugs().map((slug) => ({
    url: `${baseUrl}/espresso-machines/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const robotVacuumArticles = getAllRobotVacuumArticleSlugs().map((slug) => ({
    url: `${baseUrl}/robot-vacuums/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const airPurifierArticles = getAllAirPurifierArticleSlugs().map((slug) => ({
    url: `${baseUrl}/air-purifiers/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const airFryerArticles = getAllAirFryerArticleSlugs().map((slug) => ({
    url: `${baseUrl}/air-fryers/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const securityCameraArticles = getAllSecurityCameraArticleSlugs().map(
    (slug) => ({
      url: `${baseUrl}/security-cameras/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  const massageGunArticles = getAllMassageGunArticleSlugs().map((slug) => ({
    url: `${baseUrl}/massage-guns/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const toothbrushArticles = getAllElectricToothbrushArticleSlugs().map(
    (slug) => ({
      url: `${baseUrl}/electric-toothbrushes/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  const climateArticles = getAllClimateControlArticleSlugs().map((slug) => ({
    url: `${baseUrl}/climate-control/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Standing desk articles are in the shared articles.ts
  const standingDeskSlugs = [
    "single-vs-dual-motor-standing-desks",
    "best-standing-desks-under-400",
    "standing-desk-ergonomics-guide",
    "standing-desk-stability-test",
  ];
  const standingDeskArticles = standingDeskSlugs.map((slug) => ({
    url: `${baseUrl}/standing-desks/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...espressoArticles,
    ...robotVacuumArticles,
    ...airPurifierArticles,
    ...airFryerArticles,
    ...standingDeskArticles,
    ...securityCameraArticles,
    ...massageGunArticles,
    ...toothbrushArticles,
    ...climateArticles,
  ];
}
