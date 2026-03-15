import {
  getSecurityCameraArticle,
  getAllSecurityCameraArticleSlugs,
} from "@/data/security-camera-articles";
import { securityCameras } from "@/data/security-cameras";
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
  const slugs = getAllSecurityCameraArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const article = getSecurityCameraArticle(slug);

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
      url: `https://www.thekitchenpick.com/security-cameras/${slug}`,
    },
    alternates: {
      canonical: `https://www.thekitchenpick.com/security-cameras/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getSecurityCameraArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="bg-white">
      <ArticleSchema
        title={article.title}
        description={article.description}
        url={`https://www.thekitchenpick.com/security-cameras/${slug}`}
        datePublished="2025-01-01"
        dateModified="2026-03-01"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.thekitchenpick.com" },
        { name: "Security Cameras", url: "https://www.thekitchenpick.com/security-cameras" },
        { name: article.title, url: `https://www.thekitchenpick.com/security-cameras/${slug}` }
      ]} />

      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { label: "Security Cameras", href: "/security-cameras" },
            { label: article.title, href: `/security-cameras/${slug}` },
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

      {/* Related Cameras Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Cameras Featured in This Guide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityCameras.slice(0, 6).map((camera) => (
            <Link
              key={camera.id}
              href={`/security-cameras/${camera.id}`}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-gray-900">
                {camera.brand} {camera.model}
              </h3>
              <p className="text-gray-600 text-sm mt-1">${camera.price}</p>
              <p className="text-gray-600 text-sm">{camera.resolution}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Back to Comparisons */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Choose Your Camera?
          </h2>
          <p className="text-gray-700 mb-6">
            Compare all 13 security cameras side-by-side with full specifications,
            ratings, and Amazon links.
          </p>
          <Link
            href="/security-cameras"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            View Full Comparison Table
          </Link>
        </div>
      </section>

      {/* Comments */}
      <Comments pagePath={`/security-cameras/${slug}`} siteName="thekitchenpick" />
    </article>
  );
}
