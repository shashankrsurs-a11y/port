import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
  alt = false,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative px-6 md:px-16 lg:px-24 py-24 md:py-36 ${
        alt ? "bg-charcoal" : ""
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="font-display text-4xl md:text-6xl mb-14 md:mb-20 max-w-3xl leading-[1.05]">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
