import { motion } from "framer-motion";
import { profile } from "../data/content";

const word = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(176,141,87,0.08), transparent 60%)",
        }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="eyebrow mb-6"
      >
        Content Development &middot; Production &middot; Direction
      </motion.p>

      <motion.h1
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="font-display text-[13vw] sm:text-[9vw] md:text-[7.5vw] leading-[0.95] tracking-tight text-ivory"
      >
        {profile.name.split(" ").map((w, i) => (
          <motion.span key={i} variants={word} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="inline-block mr-[0.25em]">
            {w}
          </motion.span>
        ))}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-8 md:mt-10 max-w-2xl"
      >
        <p className="font-display italic text-2xl md:text-3xl text-ivory/90">
          &ldquo;{profile.tagline}&rdquo;
        </p>
        <p className="font-kannada text-xl md:text-2xl text-stone mt-2">
          {profile.taglineKannada}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-10 md:mt-14"
      >
        <hr className="rule w-24 mb-6" style={{ background: "var(--color-gold)" }} />
        <p className="font-body text-stone text-base md:text-lg">
          Filmmaker. Producer. Strategist.
        </p>
        <p className="font-label text-xs uppercase tracking-[0.14em] text-stone/80 mt-2">
          {profile.locations.join(" · ")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-6 md:left-16 lg:left-24 flex items-center gap-3"
      >
        <span className="block w-px h-10 bg-gold/70 animate-pulse" />
        <span className="font-label text-[11px] uppercase tracking-[0.18em] text-stone">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
