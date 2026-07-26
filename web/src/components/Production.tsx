import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { production } from "../data/content";

export function Production() {
  return (
    <Section id="production" eyebrow="Production" title="Before the sets, the spreadsheets." alt>
      <div className="grid md:grid-cols-3 gap-10 md:gap-8">
        {production.map((p, i) => (
          <Reveal key={p.org} delay={i * 0.1}>
            <div className="border-t border-gold pt-6 h-full flex flex-col">
              <p className="font-label text-xs uppercase tracking-[0.14em] text-stone mb-1">
                {p.duration}
              </p>
              <h3 className="font-display text-2xl mb-1">{p.org}</h3>
              <p className="font-body text-stone/90 mb-5">{p.role}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {p.items.map((item) => (
                  <li key={item} className="font-body text-sm text-stone flex gap-2">
                    <span className="text-gold">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="font-display italic text-lg text-ivory leading-snug border-t border-hairline pt-4">
                {p.stat}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
