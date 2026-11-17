import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
};

export function Section({
  id,
  children,
  className = "",
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={`scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Tag>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: HeadingProps) {
  return (
    <header className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p>
      ) : null}
    </header>
  );
}
