import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "@/data/series";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const shots = GALLERY;

  const step = useCallback(
    (dir: number) => {
      setActive((cur) => (cur === null ? cur : (cur + dir + shots.length) % shots.length));
    },
    [shots.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, step]);

  const current = active === null ? null : shots[active];

  return (
    <section id="bts" className="relative mx-auto max-w-7xl px-6 py-32 md:py-48">
      <Reveal variant="blur-up" className="text-center">
        <p className="eyebrow">BTS gallery</p>
        <h2 className="mt-6 font-serif text-4xl text-ivory sm:text-5xl">
          When the cameras are off
        </h2>
      </Reveal>

      <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {shots.map((shot, i) => (
          <motion.button
            key={shot.src + i}
            type="button"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: Math.min(i * 0.05, 0.4),
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={() => setActive(i)}
            className="grain group relative block w-full overflow-hidden rounded-sm text-left cursor-pointer"
            aria-label={`Open photo: ${shot.caption}`}
          >
            <img
              src={shot.src}
              alt={shot.caption}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
            <div className="absolute bottom-0 inset-x-0 p-4 text-xs text-ivory/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <p className="line-clamp-2">{shot.caption}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl sm:p-10"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 rounded-full p-3 text-ivory transition-colors hover:text-crimson"
            >
              <X className="size-6" />
            </button>

            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-2 rounded-full p-3 text-ivory/70 transition-colors hover:text-crimson sm:left-8"
            >
              <ChevronLeft className="size-7" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-2 rounded-full p-3 text-ivory/70 transition-colors hover:text-crimson sm:right-8"
            >
              <ChevronRight className="size-7" />
            </button>

            <motion.figure
              key={current.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-full max-w-4xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.src}
                alt={current.caption}
                className="max-h-[76svh] w-auto rounded-sm object-contain shadow-[var(--glow-crimson)]"
              />
              <figcaption className="mt-4 text-xs font-light tracking-wide text-ivory/70">
                {current.caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
