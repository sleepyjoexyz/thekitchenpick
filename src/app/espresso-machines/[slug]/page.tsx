import { getArticle, getAllArticleSlugs } from "@/data/articles";
import { espressoMachines } from "@/data/espresso-machines";
import Breadcrumbs from "@/components/Breadcrumbs";
import ComparisonTable from "@/components/ComparisonTable";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const article = getArticle(slug);

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
      url: `https://thekitchenpick.com/espresso-machines/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getArticle(slug);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
        <p className="text-gray-600 mt-4">
          <Link href="/espresso-machines" className="text-blue-600 hover:underline">
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
            { label: "Espresso Machines", href: "/espresso-machines" },
            { label: article.title, href: `/espresso-machines/${slug}` },
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
            Compare All Machines
          </h2>
          <p className="text-gray-600 mb-6">
            See the full comparison table with all 15 espresso machines, specs,
            and prices.
          </p>
          <Link
            href="/espresso-machines"
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
          <Link href="/espresso-machines/semi-automatic-vs-super-automatic">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Semi-Automatic vs Super-Automatic
              </h3>
              <p className="text-sm text-gray-600">
                Understand the difference between manual control and full automation.
              </p>
            </div>
          </Link>

          <Link href="/espresso-machines/best-espresso-machines-under-500">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Best Machines Under $500
              </h3>
              <p className="text-sm text-gray-600">
                Quality espresso on a budget. Compare our top affordable picks.
              </p>
            </div>
          </Link>

          <Link href="/espresso-machines/do-you-need-a-built-in-grinder">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Built-In Grinder: Necessary?
              </h3>
              <p className="text-sm text-gray-600">
                Integrated grinders save space but come with tradeoffs.
              </p>
            </div>
          </Link>

          <Link href="/espresso-machines/single-boiler-vs-dual-boiler">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-gray-900 mb-2">
                Single vs Dual Boiler
              </h3>
              <p className="text-sm text-gray-600">
                Boiler types affect temperature control and workflow.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}
