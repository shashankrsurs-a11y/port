import { useEffect, useState } from "react";
import { profile } from "../data/content";

const LINKS = [
  { href: "#work", label: "Film Work" },
  { href: "#production", label: "Production" },
  { href: "#slate", label: "Slate" },
  { href: "#recognition", label: "Recognition" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        solid ? "bg-ink/90 backdrop-blur-sm border-b border-hairline" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-16 lg:px-24 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="font-label text-sm tracking-[0.2em] text-ivory">
          R.S.U.
        </a>
        <ul className="hidden md:flex gap-8 font-label text-xs uppercase tracking-[0.14em] text-stone">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline hover:text-ivory transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              download
              className="link-underline hover:text-ivory transition-colors text-gold"
            >
              Résumé
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
