import { profile } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-hairline px-6 md:px-16 lg:px-24 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-kannada text-stone/80">{profile.taglineKannada}</p>
      <p className="font-label text-xs uppercase tracking-[0.14em] text-stone/60">
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
