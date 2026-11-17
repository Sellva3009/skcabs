"use client";

import { Clock, Gauge } from "lucide-react";
import { pricing, formatInr } from "@/config/pricing";
import { getWhatsAppUrl, packageEnquiryMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { Section, SectionHeading } from "@/components/Section";
import { WhatsAppLink } from "@/components/WhatsAppButton";

export function RentalPackages() {
  return (
    <Section id="tariff">
      <SectionHeading
        eyebrow="Tariff"
        title="Affordable Ertiga Rental Packages"
        description="Starting fares for the petrol 7-seater Ertiga. Limits below are part of each local package. Extra time, extra kilometres, driver allowance, tolls and parking are billed separately."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Local rental
          </h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {pricing.localPackages.map((pkg, index) => (
              <li
                key={pkg.id}
                className={`flex flex-col rounded-2xl border bg-white p-5 shadow-sm ${
                  index === 1 ? "border-gold" : "border-line"
                }`}
              >
                {index === 1 ? (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
                    Often chosen
                  </p>
                ) : (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                    Local package
                  </p>
                )}
                <h4 className="font-serif text-2xl font-semibold text-navy">{pkg.name}</h4>
                <p className="mt-3 text-sm text-muted">Starting from</p>
                <p className="text-3xl font-semibold tracking-tight text-navy">
                  {formatInr(pkg.startingFromInr)}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-navy">
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gold" aria-hidden />
                    {pkg.hours} hours included
                  </li>
                  <li className="flex items-center gap-2">
                    <Gauge className="h-4 w-4 text-gold" aria-hidden />
                    {pkg.kilometres} km included
                  </li>
                </ul>
                <WhatsAppLink
                  href={getWhatsAppUrl(packageEnquiryMessage(pkg))}
                  source={`package-${pkg.id}`}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-whatsapp-bright px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1ebe5d]"
                  onNavigate={() =>
                    trackEvent("package_enquiry", { package_id: pkg.id })
                  }
                >
                  Get quote on WhatsApp
                </WhatsAppLink>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">
            Extra hour: ₹{pricing.extraHourInr.min}–₹{pricing.extraHourInr.max}. Extra
            kilometre: ₹{pricing.extraKilometreInr.min}–₹{pricing.extraKilometreInr.max}.
          </p>
        </div>

        <div className="rounded-2xl bg-navy p-6 text-white sm:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-soft">
            Outstation rental
          </h3>
          <ul className="mt-5 space-y-4">
            {pricing.outstation.map((item) => (
              <li key={item.id} className="border-b border-white/10 pb-4 last:border-0">
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="font-serif text-xl">{item.name}</h4>
                  <WhatsAppLink
                    href={getWhatsAppUrl(packageEnquiryMessage(item))}
                    source={`package-${item.id}`}
                    className="shrink-0 text-xs font-semibold text-whatsapp-bright hover:underline"
                    onNavigate={() =>
                      trackEvent("package_enquiry", { package_id: item.id })
                    }
                  >
                    Enquire
                  </WhatsAppLink>
                </div>
                <p className="mt-1 text-lg font-semibold text-gold-soft">{item.rateLabel}</p>
                <p className="mt-1 text-sm text-white/70">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-8 rounded-2xl border border-line bg-white px-5 py-4 text-sm leading-6 text-muted">
        {pricing.disclaimer}
      </p>
    </Section>
  );
}
