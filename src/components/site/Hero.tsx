import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Play, ExternalLink } from "lucide-react";
import { CHARACTERS, SERIES } from "@/data/series";

const TRAILER_URL = "https://youtu.be/fFL2mStp0p0?si=PveqIMx2BPQ7BvdP";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const lift = useTransform(scrollYProgress, [0, 1], [0, -90]);

  const [left, right] = CHARACTERS;

  return (
    <section
      id="home"
      ref={ref}
      className="grain relative flex min-h-[100svh] flex-col items-center justify-between px-6 pt-28 pb-8 text-center overflow-hidden"
    >
      {/* portraits facing away from each other */}
      <div className="absolute inset-0 grid grid-cols-2">
        {[left, right].map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.4, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full overflow-hidden"
          >
            <img
              src={c.image}
              alt={`${c.name} portrait`}
              width={912}
              height={1200}
              className="size-full object-cover object-top opacity-55"
            />
          </motion.div>
        ))}
      </div>

      {/* cinematic grading + red seam */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,var(--background)_78%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/80" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scaleY: 0.4 }}
        animate={{ opacity: [0.5, 0.9, 0.5], scaleY: 1 }}
        transition={{
          opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          scaleY: { duration: 2.4, ease: [0.16, 1, 0.3, 1] },
        }}
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-crimson to-transparent blur-[2px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 w-40 -translate-x-1/2 opacity-60 blur-3xl"
        style={{
          background:
            "linear-gradient(180deg, transparent, color-mix(in oklab, var(--crimson) 42%, transparent), transparent)",
        }}
      />

      {/* Top spacing element */}
      <div className="h-4" />

      {/* Center main title content */}
      <motion.div
        style={{ opacity: fade, y: lift }}
        className="relative z-10 my-auto mx-auto max-w-3xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.8em" }}
          animate={{ opacity: 1, letterSpacing: "0.42em" }}
          transition={{ duration: 1.8, delay: 0.4 }}
          className="eyebrow"
        >
          They said it was fake
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-glow mt-6 font-serif text-5xl leading-[0.95] tracking-tight text-ivory sm:text-7xl md:text-8xl"
        >
          {SERIES.title}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="hairline mx-auto mt-6 h-px w-48 sm:w-56"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.35 }}
          className="mt-6 font-serif text-lg italic text-muted-foreground sm:text-2xl"
        >
          {SERIES.tagline}
        </motion.p>

        {/* Watch Trailer Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={TRAILER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-crimson/60 bg-crimson/90 px-7 py-3 text-xs tracking-[0.25em] font-medium text-ivory uppercase shadow-[0_0_25px_rgba(200,30,50,0.4)] backdrop-blur-md transition-all duration-300 hover:bg-crimson hover:shadow-[0_0_35px_rgba(200,30,50,0.7)] hover:scale-105 active:scale-95"
          >
            <Play className="size-4 fill-ivory text-ivory transition-transform duration-300 group-hover:scale-110" />
            Watch Pilot Trailer
            <ExternalLink className="size-3.5 opacity-80" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.9 }}
          className="mt-8 text-[0.7rem] tracking-[0.3em] text-ash uppercase"
        >
          {SERIES.whisper}
        </motion.p>
      </motion.div>

      {/* Bottom scroll down indicator in flow - no overlap */}
      <motion.a
        href="#trailer"
        style={{ opacity: fade }}
        className="relative z-10 mt-6 inline-flex flex-col items-center text-center group"
        aria-label="Scroll to discover"
      >
        <span className="eyebrow block text-[0.6rem] transition-colors group-hover:text-crimson">
          Scroll to discover
        </span>
        <motion.span
          animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mt-2 block h-8 w-px bg-gradient-to-b from-crimson to-transparent"
        />
      </motion.a>
    </section>
  );
}
