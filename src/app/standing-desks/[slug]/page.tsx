import { getStandingDeskArticle, getAllStandingDeskArticleSlugs } from "@/data/standing-desk-articles";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllStandingDeskArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const article = getStandingDeskArticle(slug);

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
      url: `https://thekitchenpick.com/standing-desks/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getStandingDeskArticle(slug);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
        <p className="text-gray-600 mt-4">
          <Link href="/standing-desks" className="text-blue-600 hover:underline">
            Back to standing desks
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
            { label: "Standing Desks", href: "/standing-desks" },
            { label: article.title, href: `/standing-desks/${slug}` },
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
        <div className="prose prose-sm max-w-none">
          {article.content.split("\n\n").map((paragraph, i) => {
            // Handle markdown headers
            if (paragraph.startsWith("##")) {
              const headerText = paragraph.replace("##", "").trim();
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold text-gray-900 mt-8 mb-4"
                >
                  {headerText}
                </h2>
              );
            }

            if (paragraph.startsWith("#")) {
              const headerText = paragraph.replace("#", "").trim();
              return (
                <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  {headerText}
                </h3>
              );
            }

            // Handle markdown lists
            if (paragraph.startsWith("-")) {
              const items = paragraph.split("\n").filter((line) => line.trim());
              return (
                <ul key={i} className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  {items.map((item, j) => (
                    <li key={j}>{item.replace("-", "").trim()}</li>
                  ))}
                </ul>
              );
            }

            // Handle markdown ordered lists
            if (/^\d+\./.test(paragraph)) {
              const items = paragraph.split("\n").filter((line) => line.trim());
              return (
                <ol key={i} className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                  {items.map((item, j) => (
                    <li key={j}>{item.replace(/^\d+\./, "").trim()}</li>
                  ))}
                </ol>
              );
            }

            // Handle markdown tables
            if (paragraph.includes("|")) {
              const lines = paragraph.split("\n").filter((line) => line.trim());
              if (lines.length > 2) {
                return (
                  <div key={i} className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse">
                      <tbody>
                        {lines.map((line, j) => {
                          const cells = line.split("|").filter((c) => c.trim());
                          // Skip separator row
                          if (cells[0].includes("-")) return null;

                          return (
                            <tr
                              key={j}
                              className={j === 0 ? "bg-gray-100" : j % 2 === 0 ? "bg-white" : "bg-gray-50"}
                            >
                              {cells.map((cell, k) => (
                                <td
                                  key={k}
                                  className={`border border-gray-300 px-4 py-2 ${
                                    j === 0 ? "font-bold" : ""
                                  }`}
                                >
                                  {cell.trim()}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              }
            }

            // Regular paragraph
            return (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>
      </section>

      {/* Related Comparison CTA */}
      <section className="bg-blue-50 border-y border-blue-200 py-12 my-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Compare All Standing Desks
          </h2>
          <p className="text-gray-600 mb-6">
            See the full comparison table with all 14 standing desks, specs,
            prices, and ratings.
          </p>
          <Link
            href="/standing-desks"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition-colors"
          >
            View Comparison Table
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          More Standing Desk Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/standing-desks/single-vs-dual-motor-standing-desks">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Single Motor vs Dual Motor
              </h3>
              <p className="text-sm text-gray-600">
                Speed, stability, and weight capacity differences explained.
              </p>
            </div>
          </Link>

          <Link href="/standing-desks/best-standing-desks-under-400">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Best Desks Under $400
              </h3>
              <p className="text-sm text-gray-600">
                Budget-friendly standing desks that deliver quality.
              </p>
            </div>
          </Link>

          <Link href="/standing-desks/standing-desk-ergonomics-guide">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Ergonomics Setup Guide
              </h3>
              <p className="text-sm text-gray-600">
                Proper heights, positioning, and the 20-8-2 rule.
              </p>
            </div>
          </Link>

          <Link href="/standing-desks/standing-desk-stability-test">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Stability & Wobble Analysis
              </h3>
              <p className="text-sm text-gray-600">
                Why wobble matters and which desks are most stable.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}
