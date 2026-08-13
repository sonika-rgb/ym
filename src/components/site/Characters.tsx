import { motion } from "motion/react";
import { CHARACTERS, type Character } from "@/data/series";
import { Reveal } from "./Reveal";

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="eyebrow text-[0.6rem]">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-crimson" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CharacterCard({ c, flip }: { c: Character; flip: boolean }) {
  return (
    <motion.article
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group glass-panel grain relative overflow-hidden rounded-sm"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={c.image}
          alt={`${c.name}, played by ${c.actor}`}
          loading="lazy"
          width={912}
          height={1200}
          className={`size-full object-cover object-top transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${
            flip ? "-scale-x-100 group-hover:-scale-x-105" : ""
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />
        <div
          className={`absolute bottom-0 w-full p-7 ${flip ? "text-right" : ""}`}
          style={{ textAlign: flip ? "right" : "left" }}
        >
          <h3 className="font-serif text-4xl text-ivory">{c.name}</h3>
          <p className="mt-1 text-xs tracking-[0.25em] text-crimson uppercase">{c.actor}</p>
        </div>
      </div>

      <div className={`p-7 ${flip ? "md:text-right" : ""}`}>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/40 bg-crimson/10 px-3 py-1 text-[0.65rem] tracking-[0.2em] font-medium text-crimson uppercase">
          <span className="size-1.5 animate-pulse rounded-full bg-crimson" />
          Coming Soon
        </div>

        <p className="font-serif text-lg leading-relaxed text-foreground/85 italic">
          {c.personality}
        </p>

        <div
          className={`grid gap-7 transition-all duration-700 md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 ${
            flip ? "md:justify-items-end" : ""
          }`}
        >
          <div className="mt-7 space-y-7 overflow-hidden text-left">
            <DetailList title="Biggest red flags" items={c.redFlags} />
            <DetailList title="Strengths" items={c.strengths} />
            <div>
              <p className="eyebrow text-[0.6rem]">Relationship style</p>
              <p className="mt-3 text-sm text-muted-foreground">{c.loveStyle}</p>
            </div>
          </div>
        </div>

        <p className="eyebrow mt-6 hidden text-[0.55rem] opacity-60 md:block md:group-hover:hidden">
          Hover to read the file
        </p>
      </div>
    </motion.article>
  );
}

export function Characters() {
  return (
    <section id="characters" className="relative mx-auto max-w-7xl px-6 py-32 md:py-48">
      <Reveal variant="blur-up" className="text-center">
        <p className="eyebrow">Meet the red flags</p>
        <h2 className="mt-6 font-serif text-4xl text-ivory sm:text-5xl">Two warnings, ignored</h2>
      </Reveal>

      <div className="mt-20 grid gap-10 md:grid-cols-2 md:gap-16">
        <Reveal variant="fade-right" delay={0.1}>
          <CharacterCard c={CHARACTERS[0]} flip={false} />
        </Reveal>
        <Reveal variant="fade-left" delay={0.25}>
          <CharacterCard c={CHARACTERS[1]} flip />
        </Reveal>
      </div>

      <Reveal variant="zoom-in" delay={0.1} className="mt-28 text-center">
        <p className="font-serif text-3xl leading-tight text-ivory sm:text-5xl">
          COMPLETE OPPOSITES.
          <span className="mt-2 block text-crimson">TERRIBLE IDEA.</span>
        </p>
      </Reveal>
    </section>
  );
}
