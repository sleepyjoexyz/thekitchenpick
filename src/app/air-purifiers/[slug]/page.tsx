import {
  getAirPurifierArticle,
  getAllAirPurifierArticleSlugs,
} from "@/data/air-purifier-articles";
import { airPurifiers } from "@/data/air-purifiers";
import Breadcrumbs from "@/components/Breadcrumbs";
import Comments from "@/components/Comments";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { ArticleSchema, BreadcrumbSchema } from "@/components/JsonLd";
import MarkdownContent from "@/components/MarkdownContent";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllAirPurifierArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const article = getAirPurifierArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | The Kitchen Pick`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://www.thekitchenpick.com/air-purifiers/${slug}`,
    },
    alternates: {
      canonical: `https://www.thekitchenpick.com/air-purifiers/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getAirPurifierArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="bg-white">
      <ArticleSchema
        title={article.title}
        description={article.description}
        url={`https://www.thekitchenpick.com/air-purifiers/${slug}`}
        datePublished="2025-01-01"
        dateModified="2026-03-01"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.thekitchenpick.com" },
        { name: "Air Purifiers", url: "https://www.thekitchenpick.com/air-purifiers" },
        { name: article.title, url: `https://www.thekitchenpick.com/air-purifiers/${slug}` }
      ]} />

      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { label: "Air Purifiers", href: "/air-purifiers" },
            { label: article.title, href: `/air-purifiers/${slug}` },
          ]}
        />
      </div>

      {/* Article Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        <p className="text-sm text-gray-500 mt-2">Last updated: March 2026</p>
        <p className="text-lg text-gray-600 mt-4">{article.description}</p>
      </section>

      {/* Article Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <MarkdownContent content={article.content} />
      </section>

      {/* Related Comparison CTA */}
      <section className="bg-blue-50 border-y border-blue-200 py-12 my-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Compare All Purifiers
          </h2>
          <p className="text-gray-600 mb-6">
            See the full comparison table with all 12 air purifiers, specs, and
            prices.
          </p>
          <Link
            href="/air-purifiers"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition-colors"
          >
            View Comparison Table
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          More Guides & Comparisons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/air-purifiers/hepa-filter-types-explained">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                HEPA Filter Types Explained
              </h3>
              <p className="text-sm text-gray-600">
                Understand H11, H13, and H14 filters and their efficiency levels.
              </p>
            </div>
          </Link>

          <Link href="/air-purifiers/best-air-purifiers-for-allergies">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Best Purifiers for Allergies
              </h3>
              <p className="text-sm text-gray-600">
                Target specific allergens and find the right purifier for you.
              </p>
            </div>
          </Link>

          <Link href="/air-purifiers/air-purifier-running-costs">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                True Cost of Ownership
              </h3>
              <p className="text-sm text-gray-600">
                Calculate 5 and 10-year costs including filters and electricity.
              </p>
            </div>
          </Link>

          <Link href="/air-purifiers/do-air-purifiers-help-with-smoke">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Wildfire Smoke & Air Purifiers
              </h3>
              <p className="text-sm text-gray-600">
                Learn which purifiers effectively handle smoke and particulates.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Comments */}
      <Comments pagePath={`/air-purifiers/${slug}`} siteName="thekitchenpick" />
    </article>
  );
}
