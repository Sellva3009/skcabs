import { business, seo } from "@/config/business";
import { serviceAreas } from "@/config/services";
import type { Metadata } from "next";

export function absoluteUrl(path = "/"): string {
  const base = business.siteUrl.replace(/\/$/, "");
  if (path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata(): Metadata {
  const url = absoluteUrl("/");
  const ogImage = absoluteUrl("/images/ertiga/front.jpg");

  return {
    metadataBase: new URL(business.siteUrl),
    title: seo.title,
    description: seo.description,
    keywords: [...seo.keywords],
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: "/brand/sk-cabs-mark.svg", type: "image/svg+xml" },
        { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      ],
    },
    verification: business.searchConsoleVerification
      ? { google: business.searchConsoleVerification }
      : undefined,
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: business.name,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: ogImage,
          width: 1206,
          height: 669,
          alt: "White Maruti Suzuki Ertiga 7-seater taxi in Hosur",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage],
    },
  };
}

export function taxiServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: business.name,
    description: business.description,
    url: absoluteUrl("/"),
    telephone: business.phoneTel,
    image: absoluteUrl("/images/ertiga/front.jpg"),
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area.city,
      containedInPlace: {
        "@type": "State",
        name: area.state,
      },
    })),
    provider: {
      "@type": "LocalBusiness",
      name: business.legalName,
      telephone: business.phoneTel,
      url: absoluteUrl("/"),
      areaServed: business.serviceCities.map((city) => ({
        "@type": "City",
        name: city,
      })),
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/"),
      servicePhone: business.phoneTel,
    },
  };
}

export const futureSeoPaths = [
  "/hosur/ertiga-taxi",
  "/krishnagiri/ertiga-taxi",
  "/dharmapuri/ertiga-taxi",
  "/salem/ertiga-taxi",
  "/outstation-taxi",
  "/airport-transfer",
  "/routes/hosur-to-bangalore-airport",
] as const;
