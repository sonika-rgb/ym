import { createFileRoute } from "@tanstack/react-router";
import { FloatingNav } from "@/components/site/FloatingNav";
import { CursorGlow } from "@/components/site/CursorGlow";
import { Hero } from "@/components/site/Hero";
import { Trailer } from "@/components/site/Trailer";
import { Characters } from "@/components/site/Characters";
import { Dynamic } from "@/components/site/Dynamic";
import { Actors } from "@/components/site/Actors";
import { Gallery } from "@/components/site/Gallery";
import { Finale } from "@/components/site/Finale";

const TITLE = "RED FLAGS — Fan Site for the Upcoming BL Series";
const DESCRIPTION =
  "A fan-made microsite for the upcoming BL series: two red flags, one fake relationship. Characters, actors and behind-the-scenes moments.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <CursorGlow />
      <FloatingNav />
      <div className="relative z-10">
        <Hero />
        <Trailer />
        <Characters />
        <Dynamic />
        <Actors />
        <Gallery />
        <Finale />
      </div>
    </main>
  );
}
