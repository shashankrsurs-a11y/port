import { Reveal } from "./Reveal";
import { intro, education } from "../data/content";

export function Introduction() {
  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 py-24 md:py-36">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[3fr_2fr] gap-14 md:gap-20">
        <Reveal>
          <p className="eyebrow mb-6">Introduction</p>
          <h2 className="font-display text-4xl md:text-5xl mb-10 leading-[1.05]">
            Two educations.
            <br />
            One instinct.
          </h2>
          <div className="space-y-6">
            {intro.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-stone text-base md:text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="md:pt-24 border-l border-hairline pl-8 md:pl-10">
            <p className="font-display italic text-2xl md:text-3xl text-ivory leading-snug mb-14">
              &ldquo;{intro.pullQuote}&rdquo;
            </p>

            <p className="font-label text-xs uppercase tracking-[0.14em] text-stone mb-5">
              Education
            </p>
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.degree}>
                  <h4 className="font-display text-xl leading-snug">{e.degree}</h4>
                  <p className="font-body text-stone text-sm mt-1">
                    {e.school}, {e.location}
                  </p>
                  <p className="font-body text-stone/70 text-sm">{e.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
