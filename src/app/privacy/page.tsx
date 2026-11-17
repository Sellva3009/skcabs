import type { Metadata } from "next";
import { business } from "@/config/business";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Privacy policy | ${business.name}`,
  description: `How ${business.name} handles enquiry information sent through this website.`,
  alternates: { canonical: absoluteUrl("/privacy") },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Placeholder
      </p>
      <h1 className="mt-3 font-serif text-4xl font-semibold text-navy">Privacy policy</h1>
      <div className="mt-8 space-y-4 text-sm leading-7 text-muted">
        <p>
          This page is a placeholder until a full privacy policy is published.
          The website does not store booking form submissions on a server. When
          you submit an enquiry, your browser opens WhatsApp with a prefilled
          message.
        </p>
        <p>
          If Google Analytics is enabled, anonymous usage events such as
          WhatsApp clicks may be recorded. We do not send your name, phone
          number or message text to analytics.
        </p>
        <p>
          Contact {business.phoneDisplay} for questions about this notice.
        </p>
      </div>
    </main>
  );
}
