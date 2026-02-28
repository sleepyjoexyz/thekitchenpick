import Link from "next/link";

const footerLinks = [
  { label: "Espresso Machines", href: "/espresso-machines" },
  { label: "Air Fryers", href: "/air-fryers" },
  { label: "Robot Vacuums", href: "/robot-vacuums" },
  { label: "Air Purifiers", href: "/air-purifiers" },
  { label: "Standing Desks", href: "/standing-desks" },
  { label: "Security Cameras", href: "/security-cameras" },
  { label: "Electric Toothbrushes", href: "/electric-toothbrushes" },
  { label: "Massage Guns", href: "/massage-guns" },
  { label: "Climate Control", href: "/climate-control" },
];

export default function Footer() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">About</h3>
            <p className="text-sm text-gray-600">
              The Kitchen Pick provides data-driven comparisons of home and
              kitchen products. No sponsored rankings, no fake reviews — just
              specs and facts.
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href} className="list-none">
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
            <p className="text-sm text-gray-600 mb-4">
              Questions? Feedback?{" "}
              <a
                href="mailto:contact@thekitchenpick.com"
                className="text-blue-600 hover:underline"
              >
                Get in touch
              </a>
            </p>
            <h3 className="font-bold text-gray-900 mb-4 mt-6">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="text-center text-sm text-gray-600 space-y-2">
            <p>&copy; 2026 The Kitchen Pick. All rights reserved.</p>
            <p>
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
            <p className="text-xs">
              Prices and availability are subject to change. Last updated:{" "}
              {currentDate}
            </p>
            <p className="text-xs pt-2 text-gray-500">
              This website was prepared with AI-assisted research by DWU
              Consulting. It is provided for informational purposes only and
              does not constitute legal, financial, or investment advice. All
              data should be independently verified before use in any official
              capacity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
