import { business, navigation } from "@/config/business";
import { serviceAreas } from "@/config/services";
import { PrimaryWhatsAppCta } from "@/components/WhatsAppButton";
import { BrandLogo } from "@/components/BrandLogo";
import { InstagramIcon } from "@/components/InstagramIcon";

async function getCopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCopyrightYear();

  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <BrandLogo variant="footer" />
          <p className="mt-3 text-sm leading-6 text-white/70">{business.description}</p>
          <div className="mt-5">
            <PrimaryWhatsAppCta source="footer">Book on WhatsApp</PrimaryWhatsAppCta>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-soft">
            Navigation
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-soft">
            Service areas
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {serviceAreas.map((area) => (
              <li key={area.id}>
                {area.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-soft">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={`tel:${business.phoneTel}`} className="hover:text-white">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </li>
            <li>{business.hoursDisplay}</li>
            <li>
              <a href="/privacy" className="hover:text-white">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {year} {business.name}. Chauffeur-driven Ertiga rentals in Tamil Nadu.
      </div>
    </footer>
  );
}
