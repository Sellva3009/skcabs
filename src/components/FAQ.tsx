"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/config/services";
import { Section, SectionHeading } from "@/components/Section";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="Questions"
        title="Frequently asked questions"
        description="Answers reflect how this Ertiga rental currently works. If a detail is not listed, ask on WhatsApp before you travel."
      />
      <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-white">
        {faqs.map((item) => {
          const isOpen = openId === item.id;
          const panelId = `faq-panel-${item.id}`;
          const buttonId = `faq-button-${item.id}`;
          return (
            <div key={item.id}>
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-navy"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  {item.question}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold transition ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="px-5 pb-5 text-sm leading-6 text-muted"
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
