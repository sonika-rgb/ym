import { useState } from "react";
import { motion } from "motion/react";
import { Play, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";

const TRAILER_URL = "https://www.youtube.com/watch?v=qzwvncmhcY4";
const EMBED_URL = "https://www.youtube-nocookie.com/embed/qzwvncmhcY4?autoplay=1&rel=0";

export function Trailer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="trailer" className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
      <Reveal variant="blur-up" className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-crimson/40 bg-crimson/10 px-3.5 py-1 text-[0.65rem] tracking-[0.25em] font-medium text-crimson uppercase">
          <span className="size-1.5 animate-pulse rounded-full bg-crimson" />
          Official Trailer
        </div>
        <p className="eyebrow mt-4">First Look</p>
        <h2 className="mt-4 font-serif text-4xl text-ivory sm:text-5xl md:text-6xl">
          Official Trailer
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-serif text-base text-muted-foreground italic sm:text-lg">
          Watch the official trailer for GREATEST MANIA.
        </p>
      </Reveal>

      <Reveal variant="zoom-in" delay={0.2} className="mt-12 md:mt-16">
        <div className="relative mx-auto aspect-video min-h-[270px] sm:min-h-0 w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-[var(--glow-soft)] group">
          {isPlaying ? (
            <iframe
              src={EMBED_URL}
              title="GREATEST MANIA - Official Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="size-full border-0"
            />
          ) : (
            <div className="relative size-full overflow-hidden">
              {/* Thumbnail backdrop with dark gradient overlay */}
              <img
                src="https://img.youtube.com/vi/fFL2mStp0p0/maxresdefault.jpg"
                alt="Official Trailer Thumbnail"
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
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  aria-label="Official Trailer"
                  className="group/btn relative flex size-14 sm:size-20 items-center justify-center rounded-full border border-crimson/50 bg-crimson/80 text-ivory shadow-[0_0_30px_rgba(200,30,50,0.5)] transition-colors hover:bg-crimson hover:border-crimson"
                >
                  <Play className="ml-0.5 sm:ml-1 size-6 sm:size-8 fill-ivory text-ivory" />
                  <span className="absolute -inset-2 rounded-full border border-crimson/30 animate-ping opacity-30 pointer-events-none" />
                </motion.button>

                <p className="mt-3 sm:mt-6 font-serif text-base sm:text-xl font-medium tracking-wide text-ivory">
                  GREATEST MANIA — Official Trailer
                </p>
                <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-crimson px-3.5 py-1.5 sm:px-5 sm:py-2 text-[0.68rem] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] font-medium text-ivory uppercase shadow-md transition-all hover:bg-crimson/80"
                  >
                    <Play className="size-3 sm:size-3.5 fill-current" />
                    Watch Inline
                  </button>
                  <a
                    href={TRAILER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 sm:px-5 sm:py-2 text-[0.68rem] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] font-medium text-ivory uppercase backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40"
                  >
                    Watch on YouTube
                    <ExternalLink className="size-3 sm:size-3.5" />
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
