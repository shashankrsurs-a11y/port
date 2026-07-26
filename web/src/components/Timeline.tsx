import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { timeline } from "../data/content";

export function Timeline() {
  return (
    <Section id="timeline" eyebrow="Timeline" title="The how, in sequence." alt>
      <div className="relative pl-10 md:pl-12">
        <div className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-hairline" />

        <div className="space-y-14">
          {timeline.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <div className="relative grid md:grid-cols-[1fr_2fr] gap-2 md:gap-16">
                <span className="absolute -left-9 md:-left-11 top-1.5 w-2.5 h-2.5 rounded-full bg-gold" />
                <div>
                  <p className="font-label text-xs uppercase tracking-[0.14em] text-gold mb-1">
                    {t.year} &middot; {t.duration}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl">{t.title}</h3>
                </div>
                <p className="font-body text-stone leading-relaxed max-w-xl">{t.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
