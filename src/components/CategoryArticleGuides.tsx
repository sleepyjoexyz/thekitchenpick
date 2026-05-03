"use client";

import Link from "next/link";

interface ArticleSummary {
  slug: string;
  title: string;
  description: string;
}

interface Props {
  /** URL path for the category, e.g. "/air-fryers" */
  categoryPath: string;
  /** Display name used in the section heading, e.g. "Air Fryer" */
  categoryName: string;
  /** Article record from the data file. Only slug/title/description are read. */
  articles: Record<string, ArticleSummary>;
}

/**
 * Renders a card grid linking to EVERY article in the category's data file.
 * Replaces the hardcoded 4-link "Guides" sections that previously created
 * Ahrefs orphan-page errors (articles in sitemap but never internally linked).
 *
 * Use one instance per category page. The component is a client component so
 * it can be dropped into existing "use client" pages without refactoring.
 */
export default function CategoryArticleGuides({ categoryPath, categoryName, articles }: Props) {
  const all = Object.values(articles);
  if (all.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{categoryName} Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {all.map((article) => (
          <Link
            key={article.slug}
            href={`${categoryPath}/${article.slug}`}
            className="block h-full"
          >
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
              <h3 className="font-bold text-lg text-gray-900 mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{article.description}</p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
