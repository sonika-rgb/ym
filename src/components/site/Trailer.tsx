import { useState } from "react";
import { motion } from "motion/react";
import { Play, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";

const TRAILER_URL = "https://youtu.be/fFL2mStp0p0?si=PveqIMx2BPQ7BvdP";
const EMBED_URL = "https://www.youtube-nocookie.com/embed/fFL2mStp0p0?autoplay=1&rel=0";

export function Trailer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="trailer" className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
      <Reveal variant="blur-up" className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-crimson/40 bg-crimson/10 px-3.5 py-1 text-[0.65rem] tracking-[0.25em] font-medium text-crimson uppercase">
          <span className="size-1.5 animate-pulse rounded-full bg-crimson" />
          Official Teaser
        </div>
        <p className="eyebrow mt-4">First Look</p>
        <h2 className="mt-4 font-serif text-4xl text-ivory sm:text-5xl md:text-6xl">
          Pilot Trailer
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-serif text-base text-muted-foreground italic sm:text-lg">
          Watch the official pilot trailer for GREATEST MANIA.
        </p>
      </Reveal>

      <Reveal variant="zoom-in" delay={0.2} className="mt-12 md:mt-16">
        <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-[var(--glow-soft)] group">
          {isPlaying ? (
            <iframe
              src={EMBED_URL}
              title="GREATEST MANIA - Official Pilot Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="size-full border-0"
            />
          ) : (
            <div className="relative size-full overflow-hidden">
              {/* Thumbnail backdrop with dark gradient overlay */}
              <img
                src="https://img.youtube.com/vi/fFL2mStp0p0/maxresdefault.jpg"
                alt="GREATEST MANIA Pilot Trailer Thumbnail"
                referrerPolicy="no-referrer"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to hqdefault if maxresdefault isn't available
                  e.currentTarget.src = "https://img.youtube.com/vi/fFL2mStp0p0/hqdefault.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play Pilot Trailer"
                  className="group/btn relative flex size-20 items-center justify-center rounded-full border border-crimson/50 bg-crimson/80 text-ivory shadow-[0_0_30px_rgba(200,30,50,0.5)] transition-colors hover:bg-crimson hover:border-crimson"
                >
                  <Play className="ml-1 size-8 fill-ivory text-ivory" />
                  <span className="absolute -inset-2 rounded-full border border-crimson/30 animate-ping opacity-30 pointer-events-none" />
                </motion.button>

                <p className="mt-6 font-serif text-xl font-medium tracking-wide text-ivory">
                  GREATEST MANIA — Official Pilot Trailer
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-crimson px-5 py-2 text-xs tracking-[0.2em] font-medium text-ivory uppercase shadow-md transition-all hover:bg-crimson/80"
                  >
                    <Play className="size-3.5 fill-current" />
                    Watch Inline
                  </button>
                  <a
                    href={TRAILER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs tracking-[0.2em] font-medium text-ivory uppercase backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40"
                  >
                    Watch on YouTube
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Direct YouTube link underneath */}
        <div className="mt-6 text-center">
          <a
            href={TRAILER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-ash uppercase transition-colors hover:text-crimson"
          >
            Open trailer directly on YouTube <ExternalLink className="size-3" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
