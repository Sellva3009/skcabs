import { testimonials } from "@/config/services";
import { Section, SectionHeading } from "@/components/Section";
import { PrimaryWhatsAppCta } from "@/components/WhatsAppButton";

export function Testimonials() {
  const hasReviews = testimonials.length > 0;

  return (
    <Section id="reviews" className="bg-white">
      <SectionHeading
        eyebrow="Customer reviews"
        title="What Our Customers Say"
        description="Only genuine, permissioned reviews are published here."
      />

      {hasReviews ? (
        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-line bg-paper p-6"
            >
              {item.rating ? (
                <p className="text-sm font-semibold text-gold" aria-label={`${item.rating} out of 5`}>
                  {"★".repeat(item.rating)}
                  <span className="text-line">{"★".repeat(5 - item.rating)}</span>
                </p>
              ) : null}
              <blockquote className="mt-3 text-sm leading-6 text-navy">
                “{item.quote}”
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-navy">{item.name}</p>
              {item.location ? (
                <p className="text-xs text-muted">{item.location}</p>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-10 rounded-[1.75rem] border border-dashed border-gold/40 bg-paper px-6 py-14 text-center">
          <p className="font-serif text-2xl text-navy sm:text-3xl">
            Your journey matters to us. Be among our first customers and share
            your travel experience.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-muted">
            After your trip, you can send a short note on WhatsApp. With your
            permission, we will add it to this section.
          </p>
          <div className="mt-8">
            <PrimaryWhatsAppCta source="reviews-empty">
              Book your first trip
            </PrimaryWhatsAppCta>
          </div>
        </div>
      )}
    </Section>
  );
}
