import type { GalleryImage, NavItem } from "@/types";

/**
 * Replace placeholder contact values before launch.
 * Keep this file as the single source of truth for public business details.
 */
export const business = {
  name: "SK Cabs",
  shortName: "SK Cabs",
  legalName: "SK Cabs",
  tagline: "Chauffeur-driven 7-seater Ertiga rentals",
  description:
    "Chauffeur-driven Maruti Suzuki Ertiga taxi service for local trips, airport transfers, family travel and outstation journeys across Hosur, Krishnagiri, Dharmapuri and Salem.",
  // Replace with the live 10-digit mobile number, country code 91, no plus or spaces.
  whatsappNumber: "919943157707",
  // Display-only phone. Keep in sync with whatsappNumber.
  phoneDisplay: "+91 99431 57707",
  phoneTel: "+919943157707",
  social: {
    instagram: "https://www.instagram.com/skcabshosur/",
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://skcabshosur.com",
  operatingHours: "Advance booking recommended. Share your travel date on WhatsApp to check availability.",
  hoursDisplay: "By appointment · Advance booking",
  vehicle: {
    make: "Maruti Suzuki",
    model: "Ertiga",
    seating: 7,
    fuel: "Petrol",
    transmission: "Manual",
    ac: true,
    chauffeurDriven: true,
  },
  serviceCities: ["Hosur", "Krishnagiri", "Dharmapuri", "Salem"] as const,
  serviceState: "Tamil Nadu",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  searchConsoleVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
} as const;

export const seo = {
  title: "Ertiga Taxi in Hosur | 7 Seater Cab & Outstation Rental",
  description:
    "Book a chauffeur-driven 7-seater Ertiga taxi in Hosur, Krishnagiri, Dharmapuri and Salem. Local trips, airport transfers, one-way drops and outstation rentals. Get a fare on WhatsApp.",
  keywords: [
    "Ertiga taxi in Hosur",
    "Ertiga rental in Hosur",
    "7 seater taxi in Hosur",
    "Ertiga taxi in Krishnagiri",
    "outstation Ertiga taxi",
    "Hosur to Bangalore airport taxi",
  ],
} as const;

export const navigation: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "vehicle", label: "Our Vehicle", href: "#vehicle" },
  { id: "services", label: "Services", href: "#services" },
  { id: "tariff", label: "Tariff", href: "#tariff" },
  { id: "routes", label: "Popular Routes", href: "#routes" },
  { id: "reviews", label: "Customer Reviews", href: "#reviews" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/ertiga/front.jpg",
    alt: "White Maruti Suzuki Ertiga 7-seater taxi, front three-quarter view, available in Hosur",
    width: 1206,
    height: 669,
    caption: "Front exterior",
  },
  {
    src: "/images/ertiga/side.jpg",
    alt: "Side profile of the chauffeur-driven white Maruti Ertiga rental car",
    width: 1206,
    height: 665,
    caption: "Side exterior",
  },
  {
    src: "/images/ertiga/second-row.jpg",
    alt: "Second-row seating in the Ertiga 7-seater taxi with black and beige upholstery",
    width: 1206,
    height: 658,
    caption: "Second-row seating",
  },
  {
    src: "/images/ertiga/third-row.jpg",
    alt: "Third-row passenger seats in the Maruti Ertiga family taxi",
    width: 1206,
    height: 667,
    caption: "Third-row seating",
  },
  {
    src: "/images/ertiga/dashboard.jpg",
    alt: "Dashboard, infotainment screen and front seats of the petrol Ertiga taxi",
    width: 1206,
    height: 657,
    caption: "Dashboard and front cabin",
  },
  {
    src: "/images/ertiga/cabin.jpg",
    alt: "Cabin view looking forward through the Ertiga, showing seating for family travel",
    width: 1206,
    height: 667,
    caption: "Cabin from the rear",
  },
  {
    src: "/images/ertiga/mid-cabin.jpg",
    alt: "Middle cabin of the Ertiga taxi with AC vents and leatherette seat covers",
    width: 1206,
    height: 670,
    caption: "Interior cabin",
  },
];

export const heroImage = galleryImages[0];
