"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { business } from "@/config/business";
import { trackPhone } from "@/lib/analytics";
import { Section, SectionHeading } from "@/components/Section";
import { BookingForm } from "@/components/BookingForm";
import { PrimaryWhatsAppCta } from "@/components/WhatsAppButton";

export function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <SectionHeading
        eyebrow="Contact"
        title="Plan Your Journey With Us"
        description="Call, message on WhatsApp, or fill the enquiry form. We reply with availability and a fare quotation."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="space-y-4">
          <div className="rounded-2xl border border-line bg-paper p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-navy">
              <Phone className="h-4 w-4 text-gold" aria-hidden />
              Phone
            </p>
            <a
              href={`tel:${business.phoneTel}`}
              onClick={() => trackPhone("contact")}
              className="mt-2 inline-block text-lg font-semibold text-navy hover:text-gold"
            >
              {business.phoneDisplay}
            </a>
            <p className="mt-3 flex gap-2">
              <PrimaryWhatsAppCta source="contact">WhatsApp booking</PrimaryWhatsAppCta>
            </p>
            <a
              href={`tel:${business.phoneTel}`}
              onClick={() => trackPhone("contact-button")}
              className="mt-3 inline-flex items-center justify-center rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy hover:bg-white"
            >
              Click to call
            </a>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-navy">
              <MapPin className="h-4 w-4 text-gold" aria-hidden />
              Service areas
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              {business.serviceCities.join(", ")}, {business.serviceState}
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-navy">
              <Clock className="h-4 w-4 text-gold" aria-hidden />
              Operating hours
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">{business.operatingHours}</p>
          </div>
          <a
            href={business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-line bg-paper p-5 text-navy transition hover:border-gold/50 hover:bg-white"
            aria-label="Follow SK Cabs on Instagram (opens in a new tab)"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold-soft">
              <InstagramIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold">Follow SK Cabs on Instagram</span>
              <span className="mt-0.5 block text-xs text-muted">@skcabshosur</span>
            </span>
          </a>
        </aside>
        <div className="rounded-2xl border border-line bg-paper p-5 sm:p-8">
          <h3 className="font-serif text-2xl font-semibold text-navy">Booking enquiry</h3>
          <p className="mt-2 mb-6 text-sm text-muted">
            All fields except additional requirements are required. We open WhatsApp
            with a prefilled message.
          </p>
          <BookingForm />
        </div>
      </div>
    </Section>
  );
}
