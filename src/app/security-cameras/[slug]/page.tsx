import {
  getSecurityCameraArticle,
  getAllSecurityCameraArticleSlugs,
} from "@/data/security-camera-articles";
import { securityCameras } from "@/data/security-cameras";
import Breadcrumbs from "@/components/Breadcrumbs";
import Comments from "@/components/Comments";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

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
      url: `https://thekitchenpick.com/security-cameras/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getSecurityCameraArticle(slug);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
        <p className="text-gray-600 mt-4">
          <Link
            href="/security-cameras"
            className="text-blue-600 hover:underline"
          >
            Back to comparisons
          </Link>
        </p>
      </div>
    );
  }

  return (
    <article className="bg-white">
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
        <p className="text-lg text-gray-600">{article.description}</p>
      </section>

      {/* Article Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          {article.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("##")) {
              const heading = paragraph.replace("## ", "");
              return (
                <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {heading}
                </h2>
              );
            }
            if (paragraph.startsWith("###")) {
              const heading = paragraph.replace("### ", "");
              return (
                <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  {heading}
                </h3>
              );
            }
            if (paragraph.startsWith("|")) {
              // Handle tables
              const lines = paragraph.split("\n");
              const headerCells = lines[0]
                .split("|")
                .map((cell) => cell.trim())
                .filter((cell) => cell);
              const bodyRows = lines
                .slice(2)
                .map((line) =>
                  line
                    .split("|")
                    .map((cell) => cell.trim())
                    .filter((cell) => cell)
                );

              return (
                <div key={i} className="overflow-x-auto my-6">
                  <table className="w-full border-collapse text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        {headerCells.map((cell, j) => (
                          <th
                            key={j}
                            className="border border-gray-300 px-4 py-2 text-left font-bold"
                          >
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {bodyRows.map((row, j) => (
                        <tr
                          key={j}
                          className={j % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                          {row.map((cell, k) => (
                            <td
                              key={k}
                              className="border border-gray-300 px-4 py-2"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            if (paragraph.trim()) {
              return (
                <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              );
            }
            return null;
          })}
        </div>
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
