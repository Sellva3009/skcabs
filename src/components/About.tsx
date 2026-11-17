import { Section, SectionHeading } from "@/components/Section";

const points = [
  "Comfortable 7-seater travel in an air-conditioned petrol Ertiga.",
  "Family-friendly journeys without splitting passengers across two cars.",
  "Local city trips and outstation highway travel from the same vehicle.",
  "Airport pickup and drop, including Hosur to Bengaluru Airport enquiries.",
  "Wedding and function transportation by prior booking.",
  "Transparent fare quotations before you confirm.",
  "Advance booking so we can check the calendar for your date.",
];

export function About() {
  return (
    <Section id="about" className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="About our service"
          title="Your Trusted Ertiga Rental Service"
        />
        <div className="space-y-5 text-base leading-7 text-muted">
          <p>
            Hosur Ertiga Travels offers a chauffeur-driven petrol Maruti Suzuki
            Ertiga for individuals, families and small groups travelling across
            Hosur, Krishnagiri, Dharmapuri and Salem.
          </p>
          <p>
            The vehicle is suited to everyday local movement as well as longer
            outstation rides. You speak with us directly on WhatsApp or phone,
            share pickup details, and receive a fare quotation based on hours,
            kilometres and trip type.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="rounded-2xl border border-line bg-paper px-4 py-3 text-sm text-navy"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
