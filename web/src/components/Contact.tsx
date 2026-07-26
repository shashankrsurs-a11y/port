import { Reveal } from "./Reveal";
import { profile } from "../data/content";

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 lg:px-24 py-32 md:py-48 text-center">
      <Reveal>
        <p className="eyebrow mb-6">Contact</p>
        <h2 className="font-display text-5xl md:text-7xl leading-[1.05] mb-10">
          Let&rsquo;s build the
          <br />
          next story.
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="link-underline font-body text-xl md:text-2xl text-ivory block"
        >
          {profile.email}
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s/g, "")}`}
          className="link-underline font-body text-lg text-stone mt-3 inline-block"
        >
          {profile.phone}
        </a>

        <p className="font-label text-xs uppercase tracking-[0.14em] text-stone mt-8">
          Open to {profile.locations.join(" · ")}
        </p>

        <a
          href={profile.resumeUrl}
          download
          className="font-label text-xs uppercase tracking-[0.14em] text-gold link-underline mt-10 inline-block"
        >
          Download Résumé →
        </a>
      </Reveal>
    </section>
  );
}
