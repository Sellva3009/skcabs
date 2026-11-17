"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { galleryImages } from "@/config/business";
import { Section, SectionHeading } from "@/components/Section";
import type { GalleryImage } from "@/types";

export function VehicleGallery() {
  const [active, setActive] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <Section id="vehicle">
      <SectionHeading
        eyebrow="Our vehicle"
        title="Explore Our Ertiga"
        description="Photographs of the actual petrol Maruti Suzuki Ertiga used for chauffeur-driven rentals. Tap any image to enlarge."
      />
      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <li
            key={image.src}
            className={index === 0 ? "col-span-2 lg:col-span-2 lg:row-span-2" : ""}
          >
            <button
              type="button"
              onClick={() => setActive(image)}
              className="group relative block h-full w-full overflow-hidden rounded-2xl bg-sand text-left"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading={index === 0 ? "eager" : "lazy"}
                sizes={
                  index === 0
                    ? "(max-width: 1024px) 100vw, 66vw"
                    : "(max-width: 640px) 50vw, 33vw"
                }
                className={`w-full object-cover transition duration-300 group-hover:scale-[1.03] ${
                  index === 0 ? "aspect-[16/10] h-full" : "aspect-[4/3]"
                }`}
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/70 to-transparent px-3 py-3 text-sm font-medium text-white">
                {image.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-navy"
            onClick={() => setActive(null)}
            aria-label="Close image"
          >
            <X className="h-5 w-5" />
          </button>
          <figure
            className="max-h-[90vh] max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              className="max-h-[80vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white">
              {active.caption}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </Section>
  );
}
