import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Captain John's Fishing Charters",
  description: "Privacy Policy for Captain John's Fishing Charters, Port Elizabeth.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-bold text-ocean-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: April 2026</p>

        <div className="prose prose-lg prose-ocean max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-heading font-bold text-ocean-900">1. Who We Are</h2>
            <p>
              Captain John&apos;s Fishing Charters is a fishing guide and charter business based
              in Port Elizabeth (Gqeberha), Eastern Cape, South Africa. This policy explains
              how we collect, use, and protect your personal information when you use this
              website or contact us about our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-ocean-900">2. Information We Collect</h2>
            <p>We collect information you provide directly to us:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number (optional)</li>
              <li>Enquiry details including preferred dates, group size, and tour interest</li>
            </ul>
            <p className="mt-3">
              This information is collected only when you submit an enquiry form on this
              website. We do not use tracking pixels, third-party advertising networks, or
              behavioural analytics tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-ocean-900">3. How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Respond to your booking enquiry</li>
              <li>Arrange and confirm fishing trips</li>
              <li>Send you information directly relevant to your booking</li>
            </ul>
            <p className="mt-3">
              We will not use your information for marketing without your explicit consent,
              and we will never sell or share your personal data with third parties for
              commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-ocean-900">4. Data Storage</h2>
            <p>
              Enquiry data is stored securely using Supabase, a cloud database provider. Data
              is stored on servers in compliance with applicable data protection standards.
              Notification emails are sent via Resend. Neither provider uses your data for
              any purpose beyond facilitating our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-ocean-900">5. Data Retention</h2>
            <p>
              We retain enquiry data for as long as necessary to fulfil the booking or
              respond to your enquiry. You may request deletion of your data at any time by
              contacting us at the email address below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-ocean-900">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-ocean-900">7. Contact</h2>
            <p>
              For any privacy-related questions or requests, please contact us at{' '}
              {businessEmail ? (
                <a
                  href={`mailto:${businessEmail}`}
                  className="text-ocean-600 underline"
                >
                  {businessEmail}
                </a>
              ) : (
                'the email address on our contact page'
              )}
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
