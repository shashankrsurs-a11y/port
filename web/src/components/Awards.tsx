import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { awards, research } from "../data/content";

const ROMAN = ["I", "II", "III", "IV", "V", "VI"];

export function Awards() {
  return (
    <Section id="recognition" eyebrow="Recognition" title="Third-party proof.">
      <div className="space-y-0 mb-16">
        {awards.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06}>
            <div className="flex items-baseline gap-6 py-5 border-b border-hairline">
              <span className="font-display italic text-2xl text-gold w-10 shrink-0">
                {ROMAN[i]}
              </span>
              <div>
                <h3 className="font-body text-lg md:text-xl text-ivory">{a.title}</h3>
                {a.detail && <p className="font-body text-stone">{a.detail}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <blockquote className="max-w-2xl mx-auto text-center py-10">
          <hr className="rule w-16 mx-auto mb-8" style={{ background: "var(--color-gold)" }} />
          <p className="font-display italic text-2xl md:text-3xl text-ivory leading-snug">
            &ldquo;Recognized for its long-take execution by the editor of Laapataa Ladies.&rdquo;
          </p>
        </blockquote>
      </Reveal>

      <div className="mt-24 pt-16 border-t border-hairline">
        <Reveal>
          <p className="eyebrow mb-4">Research &amp; Publications</p>
          <h3 className="font-display text-3xl md:text-4xl mb-12">Further reading.</h3>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {research.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="border-l border-hairline pl-5">
                <p className="font-label text-[10px] uppercase tracking-[0.14em] text-stone mb-2">
                  {r.type}
                </p>
                <h4 className="font-display text-xl leading-snug mb-3">{r.title}</h4>
                <span className="font-label text-xs uppercase tracking-[0.12em] text-gold link-underline cursor-pointer">
                  Read
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
