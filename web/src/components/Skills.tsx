import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { skills, languages } from "../data/content";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="The range, at a glance." alt>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} delay={i * 0.1}>
            <p className="font-label text-xs uppercase tracking-[0.14em] text-gold mb-5">
              {group}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-3">
              {items.map((item, j) => (
                <span
                  key={item}
                  className="font-display text-ivory leading-snug"
                  style={{ fontSize: j === 0 ? "1.6rem" : "1.15rem", opacity: j === 0 ? 1 : 0.8 }}
                >
                  {item}
                  {j < items.length - 1 ? <span className="text-stone/40 mx-1">/</span> : null}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-16 pt-10 border-t border-hairline">
        <p className="font-label text-xs uppercase tracking-[0.14em] text-stone mb-4">
          Languages
        </p>
        <p className="font-body text-lg text-ivory">{languages.join(" · ")}</p>
      </Reveal>
    </Section>
  );
}
