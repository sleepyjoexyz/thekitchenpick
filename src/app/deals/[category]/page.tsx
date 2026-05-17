import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DealSchema } from '@/components/DealSchema';
import DealCard from "@/components/DealCard";
import { mockDeals } from "@/data/mockDeals";
import { dealCategories, getCategoryBySlug, getAllCategorySlugs } from "@/lib/dealCategories";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ category: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return {
    title: cat.name + " Deals — Save Today | The Kitchen Pick",
    description: cat.description,
    alternates: { canonical: "https://www.thekitchenpick.com/deals/" + slug },
    openGraph: {
      title: cat.name + " Deals — Save Today | The Kitchen Pick",
      description: cat.description,
      type: 'website',
      url: "https://www.thekitchenpick.com/deals/" + slug,
      images: [
        {
          url: 'https://www.thekitchenpick.com/og-image.png',
          width: 1200,
          height: 630,
          alt: 'The Kitchen Pick',
        },
      ],
      locale: 'en_US',
      siteName: 'The Kitchen Pick',
    },
  };
}

export default async function CategoryDealsPage({ params }: Props) {
  const { category: slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const categoryDeals = mockDeals.filter((d) => d.category === cat.name);
  const otherCategories = dealCategories.filter((c) => c.slug !== slug);

  return (
    <main className="bg-white min-h-screen">
      <DealSchema deals={categoryDeals} categoryName={cat.name} pageUrl={`https://www.thekitchenpick.com/deals/${slug}`} />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <ol className="flex items-center gap-1.5 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
          <li>/</li>
          <li><Link href="/deals" className="hover:text-gray-700">Deals</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{cat.name}</li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{cat.emoji} {cat.name} Deals</h1>
        <p className="text-gray-600 mb-2">{cat.description}</p>
        <p className="text-sm text-gray-500">{categoryDeals.length} deals available — updated daily</p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categoryDeals.map((deal) => (<DealCard key={deal.id} {...deal} />))}
        </div>
      </section>

      {/* Related Guides */}
      {cat.relatedCategories && cat.relatedCategories.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">📚 Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cat.relatedCategories.map((categorySlug) => (
              <Link
                key={categorySlug}
                href={`/${categorySlug}`}
                className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900 mb-1 capitalize">
                  {categorySlug.replace(/-/g, " ")} Guides
                </h3>
                <p className="text-sm text-gray-600">
                  Explore our comprehensive guides and comparisons
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {otherCategories.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">More Deal Categories</h2>
          <div className="flex flex-wrap gap-2">
            {otherCategories.map((c) => (
              <Link key={c.slug} href={'/deals/' + c.slug} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium text-gray-700 transition-colors">
                <span>{c.emoji}</span>
                <span>{c.name}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-100">
        <p className="text-xs text-gray-400">Featured products are editor-selected and link to Amazon. Click through to see the current Amazon price — availability and pricing on Amazon may change at any time. As an Amazon Associate, The Kitchen Pick earns from qualifying purchases.</p>
      </section>
    </main>
  );
}