import { Reveal } from "./Reveal";
import { films } from "../data/content";

export function Films() {
  return (
    <section id="work" className="relative">
      <div className="px-6 md:px-16 lg:px-24 pt-24 md:pt-36 pb-12">
        <Reveal>
          <p className="eyebrow mb-4">Film Work</p>
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.05]">
            Work that had to earn every rupee it spent.
          </h2>
        </Reveal>
      </div>

      <div className="divide-y divide-hairline border-t border-hairline">
        {films.map((f, i) => (
          <Reveal key={f.title}>
            <article className="px-6 md:px-16 lg:px-24 py-16 md:py-20 grid md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-center">
              <div
                className="aspect-[2.39/1] md:aspect-[2.39/1] w-full border border-hairline flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(160deg, #17161a, #0b0b0c)" }}
              >
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-stone/50 absolute top-3 left-3">
                  Scene {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display italic text-lg text-stone/60">
                  {f.title}
                </span>
              </div>

              <div>
                <p className="font-label text-xs uppercase tracking-[0.14em] text-gold mb-3">
                  {f.role}
                </p>
                <h3 className="font-display text-3xl md:text-4xl mb-4">{f.title}</h3>
                <p className="font-body italic text-stone/90 text-lg leading-relaxed max-w-xl mb-6">
                  {f.logline}
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  {f.facts.map((fact) => (
                    <div key={fact.label}>
                      <p className="font-label text-[10px] uppercase tracking-[0.14em] text-stone/60">
                        {fact.label}
                      </p>
                      <p className="font-body text-ivory">{fact.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
