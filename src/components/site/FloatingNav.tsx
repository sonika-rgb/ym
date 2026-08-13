import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Play } from "lucide-react";
import { SERIES } from "@/data/series";

const TRAILER_URL = "https://youtu.be/fFL2mStp0p0?si=PveqIMx2BPQ7BvdP";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Characters", href: "#characters" },
  { label: "Dynamic", href: "#dynamic" },
  { label: "Actors", href: "#actors" },
  { label: "BTS", href: "#bts" },
];

export function FloatingNav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav
        aria-label="Primary"
        className={`flex w-full max-w-4xl lg:max-w-5xl items-center justify-between rounded-full px-5 sm:px-6 py-2.5 sm:py-3 transition-all duration-700 ${
          solid
            ? "glass-panel shadow-[var(--glow-soft)]"
            : "border border-transparent bg-background/40 backdrop-blur-md"
        }`}
      >
        <a
          href="#home"
          className="font-serif text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.35em] text-ivory transition-colors hover:text-crimson whitespace-nowrap shrink-0"
        >
          {SERIES.title}
        </a>

        <ul className="hidden items-center gap-5 lg:gap-7 md:flex shrink-0">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="eyebrow relative transition-colors duration-500 hover:text-ivory after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-crimson after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100 whitespace-nowrap"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={TRAILER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-crimson/60 bg-crimson px-3.5 py-1.5 text-[0.65rem] tracking-[0.2em] font-medium text-ivory uppercase shadow-md transition-all hover:bg-crimson/90 hover:scale-105 whitespace-nowrap shrink-0"
            >
              <Play className="size-3 fill-ivory text-ivory" />
              Trailer
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-ivory transition-colors hover:text-crimson md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel absolute inset-x-4 top-20 rounded-2xl p-6 md:hidden"
          >
            <ul className="flex flex-col gap-5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-2xl text-ivory"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={TRAILER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-crimson/60 bg-crimson px-5 py-3 text-xs tracking-[0.2em] font-medium text-ivory uppercase shadow-md"
                >
                  <Play className="size-4 fill-ivory text-ivory" />
                  Watch Pilot Trailer
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
