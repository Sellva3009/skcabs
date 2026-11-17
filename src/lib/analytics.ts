import type { AnalyticsEventName } from "@/types";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Fire a lead event. Do not pass names, phone numbers, or free-text messages.
 */
export function trackEvent(name: AnalyticsEventName, params: EventParams = {}): void {
  if (typeof window === "undefined") return;

  const safe = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && typeof value !== "object",
    ),
  );

  window.gtag?.("event", name, safe);
}

export function trackWhatsApp(source: string): void {
  trackEvent("whatsapp_click", { source });
}

export function trackPhone(source: string): void {
  trackEvent("phone_click", { source });
}
