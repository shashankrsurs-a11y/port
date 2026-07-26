import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { slate, coverage, slateAudit } from "../data/content";

export function Slate() {
  return (
    <Section id="slate" eyebrow="Development Slate" title="What's next isn't hypothetical.">
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {slate.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <div className="bg-charcoal border border-hairline p-8 h-full flex flex-col justify-between rounded-sm">
              <div>
                <p className="font-label text-xs uppercase tracking-[0.14em] text-stone mb-4">
                  {s.type}
                </p>
                <h3 className="font-display text-4xl mb-6">{s.title}</h3>
              </div>
              <span className="inline-block w-fit font-label text-[11px] uppercase tracking-[0.14em] text-gold border border-gold/60 rounded-full px-3 py-1">
                {s.status}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {coverage.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <div className="border border-hairline p-6 flex items-center justify-between rounded-sm">
              <div>
                <p className="font-label text-[10px] uppercase tracking-[0.14em] text-stone mb-1">
                  {c.type}
                </p>
                <h4 className="font-body text-lg text-ivory">{c.title}</h4>
              </div>
              <span className="font-label text-xs uppercase tracking-[0.12em] text-stone/70 link-underline whitespace-nowrap">
                Request Sample
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="border-l-2 border-gold pl-8 py-2">
          <p className="font-label text-xs uppercase tracking-[0.14em] text-gold mb-2">
            Featured Analysis
          </p>
          <h3 className="font-display text-3xl mb-3">{slateAudit.title}</h3>
          <p className="font-body text-stone max-w-2xl leading-relaxed">
            {slateAudit.description}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
