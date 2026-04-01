import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Captain John's Fishing Charters",
  description: "Terms of Service for Captain John's Fishing Charters, Port Elizabeth.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-bold text-ocean-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: April 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-heading font-bold text-ocean-900">1. Acceptance of Terms</h2>
            <p>
              By booking a trip or purchasing lures from Captain John&apos;s Fishing Charters
              (&quot;we&quot;, &quot;us&quot;, &quot;Captain John&apos;s&quot;), you agree to these Terms of Service. If
              you do not agree, please do not proceed with a booking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-ocean-900">2. Bookings & Confirmation</h2>
            <p>
              All bookings are confirmed only once a deposit has been received and you have
              received written or WhatsApp confirmation from Captain John. An enquiry or
              expression of interest does not constitute a confirmed booking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-ocean-900">3. Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cancellations 7+ days before trip:</strong> Full refund of deposit.
              </li>
              <li>
                <strong>Cancellations 48 hours – 7 days before trip:</strong> 50% of deposit
                retained.
              </li>
              <li>
                <strong>Cancellations within 48 hours:</strong> Deposit is non-refundable.
              </li>
              <li>
                <strong>Weather cancellations by Captain John:</strong> Full refund or
                rescheduling at your option. Captain John reserves the right to cancel any
                trip at his sole discretion for safety reasons.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-ocean-900">4. Safety & Conduct</h2>
            <p>
              All clients must follow the safety instructions of Captain John at all times.
              We reserve the right to refuse service or terminate a trip without refund if a
              client&apos;s behaviour poses a risk to themselves, other passengers, or the vessel.
            </p>
            <p className="mt-3">
              All clients participate in fishing activities at their own risk. Captain John
              carries appropriate marine insurance and all legally required safety equipment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-ocean-900">5. Liability</h2>
            <p>
              Captain John&apos;s Fishing Charters is not liable for any loss, damage, injury, or
              expenses arising from participation in fishing activities, except where such
              liability cannot be excluded by law. Clients are encouraged to arrange
              appropriate personal travel and activity insurance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-ocean-900">6. Fishing Regulations</h2>
            <p>
              All fishing activities comply with South African marine fishing regulations.
              Clients are responsible for obtaining any personal fishing licences required
              by law. Captain John&apos;s Fishing Charters holds all necessary permits for
              commercial guiding in the Eastern Cape.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-ocean-900">7. Handmade Lures</h2>
            <p>
              All lures are handmade to order. Orders are confirmed via WhatsApp or email.
              Payments are required in full before dispatch. We do not accept returns on
              custom-colour lures unless there is a manufacturing defect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-ocean-900">8. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Republic of South Africa. Any
              disputes will be subject to the jurisdiction of the courts of the Eastern Cape.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-ocean-900">9. Contact</h2>
            <p>
              Questions about these terms? Contact us at{' '}
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
