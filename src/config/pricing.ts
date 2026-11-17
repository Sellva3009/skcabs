import type { LocalPackage, OutstationRate } from "@/types";

export const pricing = {
  currency: "INR",
  localPackages: [
    {
      id: "local-4h-40km",
      name: "4 Hours / 40 KM",
      hours: 4,
      kilometres: 40,
      startingFromInr: 1200,
    },
    {
      id: "local-8h-80km",
      name: "8 Hours / 80 KM",
      hours: 8,
      kilometres: 80,
      startingFromInr: 2000,
    },
    {
      id: "local-10h-100km",
      name: "10 Hours / 100 KM",
      hours: 10,
      kilometres: 100,
      startingFromInr: 2500,
    },
  ] satisfies LocalPackage[],
  extraHourInr: { min: 200, max: 250 },
  extraKilometreInr: { min: 18, max: 20 },
  outstation: [
    {
      id: "outstation-round",
      name: "Round Trip",
      rateLabel: "₹19–₹21 per kilometre",
      description: "Billed on total kilometres travelled for the round journey.",
    },
    {
      id: "outstation-oneway",
      name: "One-Way Drop",
      rateLabel: "₹20–₹22 per kilometre",
      description: "Point-to-point drop. Confirm the applicable rate for your destination.",
    },
    {
      id: "outstation-driver-allowance",
      name: "Driver allowance",
      rateLabel: "₹400–₹600 per day",
      description: "Applicable on qualifying outstation trips, in addition to the kilometre rate.",
    },
  ] satisfies OutstationRate[],
  disclaimer:
    "Final fare depends on pickup location, destination, total travel distance, trip duration, driver allowance and applicable tolls or parking charges. Contact us on WhatsApp for an exact quotation.",
};

export function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
