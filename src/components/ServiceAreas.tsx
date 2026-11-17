import { serviceAreas } from "@/config/services";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceAreaCard } from "@/components/ServiceAreaCard";

export function ServiceAreas() {
  return (
    <Section id="areas">
      <SectionHeading
        eyebrow="Service areas"
        title="Areas We Serve"
        description="The same chauffeur-driven Ertiga covers these four Tamil Nadu cities. Content here is written for each place and can later move to dedicated SEO pages."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {serviceAreas.map((area) => (
          <ServiceAreaCard key={area.id} area={area} />
        ))}
      </div>
    </Section>
  );
}
