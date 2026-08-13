import { motion } from "motion/react";
import { Reveal } from "./Reveal";

export function Finale() {
  return (
    <section className="grain relative overflow-hidden py-40 md:py-56">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, color-mix(in oklab, var(--crimson) 26%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <Reveal variant="fade-down">
          <p className="eyebrow">Red flag x Red flag</p>
        </Reveal>

        <Reveal variant="blur-up" delay={0.15}>
          <h2 className="mt-10 font-serif text-3xl leading-tight text-ivory sm:text-5xl">
            GREATEST MANIA
          </h2>
        </Reveal>

        <Reveal variant="zoom-in" delay={0.3} className="mt-20">
          <div className="relative mx-auto flex h-16 w-56 items-center justify-center">
            <motion.span
              animate={{ x: [-70, -8, -70] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute size-2.5 rounded-full bg-crimson shadow-[var(--glow-crimson)]"
            />
            <motion.span
              animate={{ x: [70, 8, 70] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute size-2.5 rounded-full bg-ember shadow-[var(--glow-crimson)]"
            />
            <motion.span
              animate={{ opacity: [0, 0.5, 0], scale: [0.6, 1.4, 0.6] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="size-14 rounded-full bg-crimson/40 blur-xl"
            />
          </div>
        </Reveal>

        <Reveal variant="blur-up" delay={0.4}>
          <p className="text-glow mt-16 text-sm tracking-[0.55em] text-ivory uppercase">
            Coming soon
          </p>
        </Reveal>
      </div>

      <footer className="relative mt-32 px-6 text-center">
        <Reveal variant="fade-up" delay={0.2}>
          <div className="hairline mx-auto h-px w-40" />
          <p className="mt-8 text-sm tracking-[0.25em] text-ash">Made with ❤️❤️</p>
        </Reveal>
      </footer>
    </section>
  );
}
