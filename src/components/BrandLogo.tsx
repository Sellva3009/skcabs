import Image from "next/image";
import { business } from "@/config/business";

type BrandLogoProps = {
  variant?: "header" | "footer";
};

export function BrandLogo({ variant = "header" }: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <span className="inline-flex min-w-0 items-center gap-3">
      <Image
        src="/brand/sk-cabs-mark.svg"
        alt=""
        width={48}
        height={48}
        priority={!isFooter}
        aria-hidden="true"
        className="h-11 w-11 shrink-0 sm:h-12 sm:w-12"
      />
      <span className="min-w-0">
        <span
          className={`block truncate font-serif text-lg font-bold leading-tight tracking-tight sm:text-xl ${
            isFooter ? "text-white" : "text-navy"
          }`}
        >
          {business.name}
        </span>
        {isFooter ? (
          <span className="mt-0.5 block truncate text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-soft sm:text-[11px]">
            Chauffeur-driven travel
          </span>
        ) : null}
      </span>
    </span>
  );
}
