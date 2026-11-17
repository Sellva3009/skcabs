import type { ServiceArea } from "@/types";

type ServiceAreaCardProps = {
  area: ServiceArea;
};

export function ServiceAreaCard({ area }: ServiceAreaCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
        {area.city}, {area.state}
      </p>
      <h3 className="mt-2 font-serif text-2xl font-semibold text-navy">{area.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{area.summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-navy">
        {area.highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-auto pt-4 text-xs uppercase tracking-wider text-muted">
        Nearby: {area.nearby.join(" · ")}
      </p>
    </article>
  );
}
