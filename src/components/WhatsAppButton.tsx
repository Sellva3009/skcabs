"use client";

import { MessageCircle } from "lucide-react";
import { generalWhatsAppUrl } from "@/lib/whatsapp";
import { trackWhatsApp } from "@/lib/analytics";
import type { ReactNode } from "react";

type WhatsAppLinkProps = {
  href?: string;
  source: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
  "aria-label"?: string;
};

export function WhatsAppLink({
  href = generalWhatsAppUrl,
  source,
  children,
  className = "",
  onNavigate,
  ...rest
}: WhatsAppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...rest}
      onClick={() => {
        trackWhatsApp(source);
        onNavigate?.();
      }}
    >
      {children}
    </a>
  );
}

export function FloatingWhatsApp() {
  return (
    <WhatsAppLink
      source="floating"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp-bright px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-navy/20 transition hover:-translate-y-0.5 hover:bg-[#1ebe5d] sm:bottom-6 sm:right-6"
      aria-label="Book on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" aria-hidden />
      <span className="hidden sm:inline">Book on WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </WhatsAppLink>
  );
}

export function PrimaryWhatsAppCta({
  href,
  source,
  children,
}: {
  href?: string;
  source: string;
  children: ReactNode;
}) {
  return (
    <WhatsAppLink
      href={href}
      source={source}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp-bright px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1ebe5d]"
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      {children}
    </WhatsAppLink>
  );
}
