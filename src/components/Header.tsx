"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { business, navigation } from "@/config/business";
import { trackPhone } from "@/lib/analytics";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { BrandLogo } from "@/components/BrandLogo";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#home" className="min-w-0">
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="rounded-full px-2.5 py-1.5 text-[13px] font-medium text-navy/80 transition hover:bg-sand hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${business.phoneTel}`}
            onClick={() => trackPhone("header")}
            className="hidden items-center justify-center rounded-full border border-line p-2 text-navy transition hover:bg-sand sm:inline-flex"
            aria-label={`Call ${business.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" />
          </a>
          <WhatsAppLink
            source="header"
            className="hidden rounded-full bg-whatsapp-bright px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1ebe5d] sm:inline-flex"
          >
            Book on WhatsApp
          </WhatsAppLink>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-line p-2 text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-paper px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-navy hover:bg-sand"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <WhatsAppLink
              source="header-mobile"
              className="inline-flex items-center justify-center rounded-full bg-whatsapp-bright px-4 py-3 text-sm font-semibold text-white"
              onNavigate={() => setOpen(false)}
            >
              Book on WhatsApp
            </WhatsAppLink>
            <a
              href={`tel:${business.phoneTel}`}
              onClick={() => {
                trackPhone("header-mobile");
                setOpen(false);
              }}
              className="inline-flex items-center justify-center rounded-full border border-line px-4 py-3 text-sm font-semibold text-navy"
            >
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
