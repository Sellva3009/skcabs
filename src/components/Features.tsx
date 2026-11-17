import {
  ArrowRight,
  CalendarCheck,
  Car,
  Headphones,
  MapPin,
  Plane,
  Receipt,
  Route,
  UserRound,
  Users,
} from "lucide-react";
import { features } from "@/config/services";
import { Section, SectionHeading } from "@/components/Section";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  car: Car,
  user: UserRound,
  users: Users,
  "map-pin": MapPin,
  route: Route,
  "arrow-right": ArrowRight,
  plane: Plane,
  receipt: Receipt,
  calendar: CalendarCheck,
  headset: Headphones,
};

export function Features() {
  return (
    <Section id="services" className="bg-white">
      <SectionHeading
        eyebrow="Why choose us"
        title="Practical travel, without extra claims"
        description="These are the services we actually offer with this chauffeur-driven Ertiga."
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = icons[feature.icon] ?? Car;
          return (
            <li
              key={feature.id}
              className="rounded-2xl border border-line bg-paper p-5 transition hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-sm"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold-soft">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-navy">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.description}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
