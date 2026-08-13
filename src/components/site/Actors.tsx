import { motion } from "motion/react";
import { Instagram, Twitter, ExternalLink } from "lucide-react";
import { ACTORS, type Actor } from "@/data/series";
import { Reveal } from "./Reveal";

function ActorPanel({ a, reverse }: { a: Actor; reverse: boolean }) {
  return (
    <div
      className={`grid items-center gap-12 md:grid-cols-2 md:gap-20 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Reveal variant={reverse ? "fade-left" : "fade-right"}>
        <div className="grain group relative overflow-hidden rounded-sm">
          <img
            src={a.image}
            alt={a.name}
            loading="lazy"
            width={912}
            height={1200}
            className="aspect-[4/5] w-full object-cover object-top grayscale transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:grayscale-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6">
            <p className="eyebrow text-[0.55rem] opacity-70 transition-opacity duration-700 group-hover:opacity-0">
              {a.playing}
            </p>
            <p className="font-serif text-2xl text-ivory opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              {a.name}
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal variant={reverse ? "fade-right" : "fade-left"} delay={0.15}>
        <p className="eyebrow text-[0.6rem]">As {a.playing}</p>
        <h3 className="mt-4 font-serif text-4xl text-ivory sm:text-5xl">{a.name}</h3>
        <div className="hairline mt-6 h-px w-24" />
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{a.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {a.socials.map((s) => {
            const isIg = s.label.toLowerCase().includes("instagram");
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel group/link flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.7rem] tracking-[0.15em] uppercase text-ivory/90 transition-all duration-300 hover:border-crimson/50 hover:text-crimson hover:shadow-[0_0_15px_rgba(200,30,50,0.2)]"
              >
                {isIg ? (
                  <Instagram className="h-3.5 w-3.5 text-crimson transition-transform duration-300 group-hover/link:scale-110" />
                ) : (
                  <Twitter className="h-3.5 w-3.5 text-crimson transition-transform duration-300 group-hover/link:scale-110" />
                )}
                <span>
                  {s.label}{" "}
                  {s.handle ? (
                    <span className="opacity-70 font-mono text-[0.65rem] lowercase font-normal ml-1">
                      ({s.handle})
                    </span>
                  ) : null}
                </span>
                <ExternalLink className="h-3 w-3 opacity-40 transition-opacity group-hover/link:opacity-100" />
              </a>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}

export function Actors() {
  return (
    <section id="actors" className="relative mx-auto max-w-6xl px-6 py-32 md:py-48">
      <Reveal variant="blur-up" className="text-center">
        <p className="eyebrow">Behind the characters</p>
        <h2 className="mt-6 font-serif text-4xl text-ivory sm:text-5xl">The people playing them</h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground italic">
          Character fades. Actor steps forward.
        </p>
      </Reveal>

      <div className="mt-24 space-y-28 md:space-y-40">
        {ACTORS.map((a, i) => (
          <ActorPanel key={a.id} a={a} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
