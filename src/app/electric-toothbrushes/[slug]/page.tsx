import {
  getElectricToothbrushArticle,
  getAllElectricToothbrushArticleSlugs,
} from "@/data/electric-toothbrush-articles";
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
  const slugs = getAllElectricToothbrushArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const article = getElectricToothbrushArticle(slug);

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
      url: `https://www.thekitchenpick.com/electric-toothbrushes/${slug}`,
    },
    alternates: {
      canonical: `https://www.thekitchenpick.com/electric-toothbrushes/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getElectricToothbrushArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="bg-white">
      <ArticleSchema
        title={article.title}
        description={article.description}
        url={`https://www.thekitchenpick.com/electric-toothbrushes/${slug}`}
        datePublished="2025-01-01"
        dateModified="2026-03-01"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.thekitchenpick.com" },
        { name: "Electric Toothbrushes", url: "https://www.thekitchenpick.com/electric-toothbrushes" },
        { name: article.title, url: `https://www.thekitchenpick.com/electric-toothbrushes/${slug}` }
      ]} />

      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { label: "Electric Toothbrushes", href: "/electric-toothbrushes" },
            { label: article.title, href: `/electric-toothbrushes/${slug}` },
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
            Compare All Electric Toothbrushes
          </h2>
          <p className="text-gray-600 mb-6">
            See the full comparison table with all 13 electric toothbrushes,
            specs, features, and prices.
          </p>
          <Link
            href="/electric-toothbrushes"
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
          <Link href="/electric-toothbrushes/sonic-vs-oscillating-toothbrush">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Sonic vs Oscillating: Which Cleans Better?
              </h3>
              <p className="text-sm text-gray-600">
                Compare the two main electric toothbrush technologies and see
                which is gentler on gums.
              </p>
            </div>
          </Link>

          <Link href="/electric-toothbrushes/best-electric-toothbrushes-under-100">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Best Electric Toothbrushes Under $100
              </h3>
              <p className="text-sm text-gray-600">
                Find great electric toothbrushes on a budget and learn what
                features actually matter at this price.
              </p>
            </div>
          </Link>

          <Link href="/electric-toothbrushes/electric-toothbrush-replacement-head-costs">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                The Hidden Cost: Replacement Heads
              </h3>
              <p className="text-sm text-gray-600">
                Calculate true ownership costs including replacement heads by
                brand and model.
              </p>
            </div>
          </Link>

          <Link href="/electric-toothbrushes/do-you-need-a-smart-toothbrush">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Smart Toothbrushes: Worth It or Gimmick?
              </h3>
              <p className="text-sm text-gray-600">
                Learn what smart features actually do and who should upgrade to
                app-connected models.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Comments */}
      <Comments pagePath={`/electric-toothbrushes/${slug}`} siteName="thekitchenpick" />
    </article>
  );
}
