import Image from "next/image";
import { Check } from "lucide-react";
import { business, heroImage } from "@/config/business";
import { heroHighlights } from "@/config/services";
import { PrimaryWhatsAppCta } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {business.serviceCities.join(" · ")}
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-5xl">
            Comfortable 7-Seater Ertiga Taxi Service in Hosur & Nearby Cities
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Looking for a reliable chauffeur-driven Ertiga rental? Enjoy
            comfortable family travel, airport transfers, local trips and
            outstation journeys across Hosur, Krishnagiri, Dharmapuri and Salem.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryWhatsAppCta source="hero">
              Book Your Trip on WhatsApp
            </PrimaryWhatsAppCta>
            <a
              href="#tariff"
              className="inline-flex items-center justify-center rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:border-gold hover:bg-sand"
            >
              View Rental Packages
            </a>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {heroHighlights.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-2 text-sm font-medium text-navy"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sand text-gold">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 hidden h-28 w-28 rounded-full border border-gold/30 lg:block" />
          <figure className="relative overflow-hidden rounded-[1.5rem] bg-sand shadow-[0_24px_60px_-28px_rgba(21,34,56,0.45)]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              priority
              sizes="(max-width: 1024px) 100vw, 520px"
              className="h-auto w-full object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-navy/90 px-4 py-3 text-sm text-white backdrop-blur-sm">
              Maruti Suzuki Ertiga · Petrol · 7-seater AC · Chauffeur-driven
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
