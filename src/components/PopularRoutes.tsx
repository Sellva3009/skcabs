"use client";

import { ArrowRight } from "lucide-react";
import { popularRoutes } from "@/config/routes";
import { getWhatsAppUrl, routeEnquiryMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { Section, SectionHeading } from "@/components/Section";
import { WhatsAppLink } from "@/components/WhatsAppButton";

export function PopularRoutes() {
  return (
    <Section id="routes" className="bg-white">
      <SectionHeading
        eyebrow="Popular routes"
        title="Popular Ertiga Taxi Routes"
        description="Fares vary with pickup point, traffic and waiting time. We do not publish a fixed price for these corridors — ask WhatsApp for the current quotation."
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {popularRoutes.map((route) => (
          <li
            key={route.id}
            className="flex flex-col rounded-2xl border border-line bg-paper p-5 transition hover:border-gold/50"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              {route.tripType}
            </p>
            <h3 className="mt-2 flex flex-wrap items-center gap-2 font-serif text-2xl font-semibold text-navy">
              <span>{route.pickup}</span>
              <ArrowRight className="h-5 w-5 text-gold" aria-hidden />
              <span>{route.destination}</span>
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-muted">{route.description}</p>
            <WhatsAppLink
              href={getWhatsAppUrl(routeEnquiryMessage(route))}
              source={`route-${route.id}`}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-whatsapp-bright px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1ebe5d]"
              onNavigate={() => trackEvent("route_enquiry", { route_id: route.id })}
            >
              Get Fare on WhatsApp
            </WhatsAppLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
