import { motion } from "motion/react";
import { DYNAMIC_BEATS } from "@/data/series";
import { Reveal } from "./Reveal";

export function Dynamic() {
  return (
    <section id="dynamic" className="relative overflow-hidden py-32 md:py-48">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[600px] -translate-y-1/2 opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--crimson) 30%, transparent), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal variant="blur-up">
          <p className="eyebrow">Their dynamic</p>
          <h2 className="mt-6 font-serif text-4xl text-ivory sm:text-5xl">Fake, right?</h2>
        </Reveal>

        <ol className="mt-24 space-y-16">
          {DYNAMIC_BEATS.map((beat, i) => (
            <li key={beat.word}>
              <motion.div
                initial={{ opacity: 0, y: 36, filter: "blur(12px)", scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <p
                  className={`font-serif text-3xl tracking-[0.15em] sm:text-5xl ${
                    i === DYNAMIC_BEATS.length - 1 ? "text-glow text-crimson" : "text-ivory"
                  }`}
                >
                  {beat.word}
                </p>
                <p className="mt-4 text-sm text-muted-foreground italic">{beat.note}</p>
                {i < DYNAMIC_BEATS.length - 1 && (
                  <motion.span
                    aria-hidden
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto mt-16 block h-12 w-px origin-top bg-gradient-to-b from-crimson/80 to-transparent"
                  />
                )}
              </motion.div>
            </li>
          ))}
        </ol>

        <Reveal variant="blur-up" delay={0.2} className="mt-28">
          <p className="mx-auto max-w-xl font-serif text-2xl leading-relaxed text-foreground/90 italic sm:text-3xl">
            Somewhere between pretending and believing, things started becoming real.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
