import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | The Kitchen Pick",
  description: "Terms of Service for The Kitchen Pick. Read our terms and conditions.",
  canonical: "https://thekitchenpick.com/terms",
};

export default function TermsOfService() {
  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p className="text-lg">Last updated: March 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p>By accessing and using The Kitchen Pick (the "Site"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) from The Kitchen Pick for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the Site</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transmit the materials to any other person or "mirror" the materials on any other server</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disclaimer</h2>
            <p>The materials on The Kitchen Pick are provided on an 'as is' basis. The Kitchen Pick makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            <p>Further, The Kitchen Pick does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitations</h2>
            <p>In no event shall The Kitchen Pick or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Kitchen Pick, even if The Kitchen Pick or a representative has been notified orally or in writing of the possibility of such damage.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Accuracy of Materials</h2>
            <p>The materials appearing on The Kitchen Pick could include technical, typographical, or photographic errors. The Kitchen Pick does not warrant that any of the materials on the Site are accurate, complete, or current. The Kitchen Pick may make changes to the materials contained on its Site at any time without notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Links</h2>
            <p>The Kitchen Pick has not reviewed all of the sites linked to its Site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by The Kitchen Pick of the site. Use of any such linked website is at the user's own risk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Modifications</h2>
            <p>The Kitchen Pick may revise these Terms and Conditions for its Site at any time without notice. By using this Site, you are agreeing to be bound by the then current version of these Terms and Conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Governing Law</h2>
            <p>These Terms and Conditions and the provision of materials are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Affiliate Relationship</h2>
            <p>The Kitchen Pick participates in affiliate programs including the Amazon Associates Program. When you click links to products and make purchases, we may earn a commission. This relationship is disclosed in our Privacy Policy and does not affect the objectivity of our product comparisons.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">No Professional Advice</h2>
            <p>The content on The Kitchen Pick is provided for informational purposes only and does not constitute professional advice. We do not provide legal, financial, investment, or medical advice. All information should be independently verified and professional advice should be sought before making significant decisions based on our content.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Comments</h2>
            <p>Comments submitted by users are the responsibility of the commenter. By submitting a comment, you grant The Kitchen Pick the right to publish, modify, or remove the comment. You represent that you have the right to submit the comment and that it does not violate any laws, regulations, or third-party rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Prohibited Conduct</h2>
            <p>Users agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Upload or transmit viruses or malicious code</li>
              <li>Collect or track personal information of others</li>
              <li>Spam, harass, or abuse other users</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Disrupt the normal operation of the Site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
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
