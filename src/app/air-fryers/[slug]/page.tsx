import { getAirFryerArticle, getAllAirFryerArticleSlugs } from "@/data/air-fryer-articles";
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
  const slugs = getAllAirFryerArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const article = getAirFryerArticle(slug);

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
      url: `https://www.thekitchenpick.com/air-fryers/${slug}`,
    },
    alternates: {
      canonical: `https://www.thekitchenpick.com/air-fryers/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getAirFryerArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="bg-white">
      <ArticleSchema
        title={article.title}
        description={article.description}
        url={`https://www.thekitchenpick.com/air-fryers/${slug}`}
        datePublished="2025-01-01"
        dateModified="2026-03-01"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.thekitchenpick.com" },
        { name: "Air Fryers", url: "https://www.thekitchenpick.com/air-fryers" },
        { name: article.title, url: `https://www.thekitchenpick.com/air-fryers/${slug}` }
      ]} />

      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { label: "Air Fryers", href: "/air-fryers" },
            { label: article.title, href: `/air-fryers/${slug}` },
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
            Compare All Air Fryers
          </h2>
          <p className="text-gray-600 mb-6">
            See the full comparison table with all 14 air fryers, specs, and
            prices.
          </p>
          <Link
            href="/air-fryers"
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
          <Link href="/air-fryers/basket-vs-oven-air-fryer">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Basket vs Oven-Style Air Fryers
              </h3>
              <p className="text-sm text-gray-600">
                Understand the trade-offs between basket and oven-style designs.
              </p>
            </div>
          </Link>

          <Link href="/air-fryers/best-air-fryers-under-100">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Best Air Fryers Under $100
              </h3>
              <p className="text-sm text-gray-600">
                Quality air fryers on a budget. Compare top affordable picks.
              </p>
            </div>
          </Link>

          <Link href="/air-fryers/dual-zone-air-fryers-guide">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Dual Zone Air Fryers: Are Two Baskets Better?
              </h3>
              <p className="text-sm text-gray-600">
                Understand dual zone technology and its real-world benefits.
              </p>
            </div>
          </Link>

          <Link href="/air-fryers/air-fryer-vs-convection-oven">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Air Fryer vs Convection Oven
              </h3>
              <p className="text-sm text-gray-600">
                The surprising truth about air fryer and convection technology.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Comments */}
      <Comments pagePath={`/air-fryers/${slug}`} siteName="thekitchenpick" />
    </article>
  );
}
