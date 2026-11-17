import { business } from "@/config/business";
import type { LocalPackage, OutstationRate, RouteItem } from "@/types";

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${business.whatsappNumber}?text=${encoded}`;
}

export function generalEnquiryMessage(): string {
  return `Hello! I would like to book an Ertiga taxi.

Name:
Pickup:
Destination:
Travel Date:
Pickup Time:
Passengers:
Trip Type:`;
}

export function routeEnquiryMessage(route: RouteItem): string {
  return `Hello! I would like a fare quote for this Ertiga taxi route.

Pickup: ${route.pickup}
Destination: ${route.destination}
Trip type: ${route.tripType}

Name:
Travel Date:
Pickup Time:
Passengers:
One-way / Round trip:`;
}

export function packageEnquiryMessage(pkg: LocalPackage | OutstationRate): string {
  const detail =
    "hours" in pkg
      ? `${pkg.name} (local: ${pkg.hours} hours / ${pkg.kilometres} KM)`
      : `${pkg.name} (${pkg.rateLabel})`;

  return `Hello! I would like a quotation for an Ertiga rental package.

Package: ${detail}

Name:
Pickup:
Destination:
Travel Date:
Pickup Time:
Passengers:
Trip Type:`;
}

export type BookingFormPayload = {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  travelDate: string;
  pickupTime: string;
  passengers: string;
  tripType: string;
  requirements: string;
};

export function bookingFormMessage(data: BookingFormPayload): string {
  return `Hello! I would like to book an Ertiga taxi.

Name: ${data.name}
Phone: ${data.phone}
Pickup: ${data.pickup}
Destination: ${data.destination}
Travel Date: ${data.travelDate}
Pickup Time: ${data.pickupTime}
Passengers: ${data.passengers}
Trip Type: ${data.tripType}
Additional requirements: ${data.requirements || "—"}`;
}

export const generalWhatsAppUrl = getWhatsAppUrl(generalEnquiryMessage());
