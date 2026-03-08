import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | The Kitchen Pick",
  description: "Privacy policy for The Kitchen Pick. Learn how we protect your information.",
    alternates: {
      canonical: "https://www.thekitchenpick.com/privacy",
    },
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p className="text-lg">Last updated: March 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
            <p>The Kitchen Pick ("we", "us", "our", or "Site") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your personal information when you visit our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
            <p>When you visit our Site, we automatically collect certain information about your device and usage:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Browser and device type</li>
              <li>IP address</li>
              <li>Pages visited and time spent</li>
              <li>Referral source</li>
              <li>Operating system</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information You Provide</h3>
            <p>When you submit comments or contact us via email, we collect:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your name</li>
              <li>Email address</li>
              <li>Comment content</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies and Tracking</h2>
            <p>We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. This includes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Analytics cookies (Google Analytics)</li>
              <li>Essential cookies (site functionality)</li>
              <li>Performance cookies (speed and reliability)</li>
            </ul>
            <p>You can control cookie preferences through your browser settings. Disabling cookies may affect site functionality.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p>We use collected information for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Improving and personalizing your experience</li>
              <li>Analyzing site usage and trends</li>
              <li>Responding to your inquiries</li>
              <li>Publishing comments you submit</li>
              <li>Sending updates (if you subscribe)</li>
              <li>Legal compliance and fraud prevention</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Affiliate Disclosure</h2>
            <p>The Kitchen Pick is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and related sites.</p>
            <p>When you click our affiliate links and make a purchase, we may earn a commission at no additional cost to you. This helps support our research and content creation.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">AI-Assisted Content</h2>
            <p>Some content on this Site was prepared with AI-assisted research and writing tools. All information is independently verified against primary sources before publication. AI is used to improve efficiency and consistency, but human judgment and editorial standards govern all published material.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Links</h2>
            <p>Our Site may contain links to third-party websites, including Amazon and other retailers. We are not responsible for the privacy practices of external sites. We encourage you to review their privacy policies before providing personal information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
            <p>We implement reasonable technical and organizational measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is completely secure. We cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
            <p>Depending on your location, you may have rights including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            <p>To exercise these rights, contact us at the address below.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Policy Changes</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last modified" date. Continued use of the Site indicates your acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <p className="font-semibold mt-4">
              Email: <a href="mailto:contact@thekitchenpick.com" className="text-blue-600 hover:underline">contact@thekitchenpick.com</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-blue-600 hover:underline font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
