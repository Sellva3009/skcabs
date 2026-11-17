export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

export type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type LocalPackage = {
  id: string;
  name: string;
  hours: number;
  kilometres: number;
  startingFromInr: number;
};

export type OutstationRate = {
  id: string;
  name: string;
  rateLabel: string;
  description: string;
};

export type RouteItem = {
  id: string;
  pickup: string;
  destination: string;
  tripType: string;
  description: string;
};

export type ServiceArea = {
  id: string;
  city: string;
  state: string;
  title: string;
  summary: string;
  highlights: string[];
  nearby: string[];
  futurePath: string;
};

export type Testimonial = {
  id: string;
  name: string;
  location?: string;
  rating?: number;
  quote: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type HeroHighlight = {
  id: string;
  label: string;
};

export type AnalyticsEventName =
  | "whatsapp_click"
  | "phone_click"
  | "booking_form_submit"
  | "route_enquiry"
  | "package_enquiry";
