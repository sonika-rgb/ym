/**
 * All placeholder content lives here — edit this file to swap in real
 * names, descriptions, images and links. Nothing here is official.
 */

export const SERIES = {
  title: "YOU MANIAC",
  tagline: "Two red flags. One fake relationship.",
  whisper: "They were supposed to pretend.",
};

export type Character = {
  id: string;
  name: string;
  actor: string;
  archetype: string;
  image: string;
  personality: string;
  redFlags: string[];
  strengths: string[];
  loveStyle: string;
};

export const CHARACTERS: [Character, Character] = [
  {
    id: "one",
    name: "Dean",
    actor: "William Jakrapatr Kaewpanpong",
    archetype: "The playboy",
    image: "/assets/images/actors/dean.png",
    personality:
      "Charming, restless, impossible to pin down. He collects attention the way other people collect playlists and treats commitment like a typo he keeps meaning to delete.",
    redFlags: [
      "Flirts without meaning it",
      "Ghosts before things get real",
      "Keeps a roster of almosts",
    ],
    strengths: [
      "Effortlessly charismatic",
      "Reads a room instantly",
      "Never runs out of things to say",
    ],
    loveStyle: "All in, until he isn't.",
  },
  {
    id: "two",
    name: "Moth",
    actor: "Est Supha Sangaworawong",
    archetype: "The reserved one",
    image: "/assets/images/actors/moth.png",
    personality:
      "Controlled, quiet, allergic to noise. He guards his space like a secret, doesn't commit to anyone, and has a finger hovering over the block button.",
    redFlags: [
      "Shuts down instead of explains",
      "Blocks people before they can leave",
      "Treats feelings like a liability",
    ],
    strengths: [
      "Fiercely self-contained",
      "Unshakeable under pressure",
      "Loyal to the very few he lets in",
    ],
    loveStyle: "Small acts of care he'll never name.",
  },
];

export const DYNAMIC_BEATS = [
  { word: "OPPOSITES", note: "Nothing in common but the lie." },
  { word: "FAKE DATING", note: "A deal signed with a smile." },
  { word: "TENSION", note: "Rehearsed touches that hold too long." },
  { word: "JEALOUSY", note: "An unscripted reaction." },
  { word: "DENIAL", note: "It's only for the story." },
  { word: "FEELINGS", note: "No one calls cut." },
];

export type Actor = {
  id: string;
  name: string;
  playing: string;
  image: string;
  intro: string;
  socials: { label: string; handle?: string; href: string }[];
};

export const ACTORS: Actor[] = [
  {
    id: "actor-one",
    name: "William Jakrapatr Kaewpanpong",
    playing: "Dean",
    image: "/assets/images/actors/dean.png",
    intro:
      "William Jakrapatr Kaewpanpong is a Thai-American singer, actor, guitarist, pianist — and the main powerhouse vocalist of LYKN under GMMTV. Most people first noticed him in ThamePo: Heart That Skips a Beat, where he completely blew up with his emotional acting, insane live vocals, and effortless chemistry with Est Supha Sangaworawong.",
    socials: [
      { label: "Instagram", handle: "@williamjkp", href: "https://www.instagram.com/williamjkp" },
      { label: "X (Twitter)", handle: "@Williamjkp1", href: "https://x.com/Williamjkp1" },
    ],
  },
  {
    id: "actor-two",
    name: "Est Supha Sangaworawong",
    playing: "Moth",
    image: "/assets/images/actors/moth.png",
    intro:
      "Est Supha Sangaworawong is a Thai actor and former national swimmer who went from breaking records in the pool to breaking hearts on-screen. Born in Bangkok in 2001, he's signed under GMMTV and is best known for playing Po in ThamePo: Heart That Skips a Beat and Tew in High School Frenemy.",
    socials: [
      { label: "Instagram", handle: "@est_rvp", href: "https://www.instagram.com/est_rvp" },
      { label: "X (Twitter)", handle: "@EstRvp", href: "https://x.com/EstRvp" },
    ],
  },
];

export type Shot = {
  src: string;
  caption: string;
  category: "on set" | "together" | "off set";
  span?: "tall" | "wide";
};

/** Uploaded BTS photos. Swap `src` values to change the gallery. */
export const GALLERY: Shot[] = [
  {
    src: "/assets/images/bts/bts1.png",
    caption: "Peace sign on location — William & Est between takes.",
    category: "off set",
  },
  {
    src: "/assets/images/bts/bts2.png",
    caption: "Hallway break — William in leather jacket, Est in white knit.",
    category: "together",
  },
  {
    src: "/assets/images/bts/bts3.png",
    caption: "The bar counter scene — holding hands before rolling.",
    category: "on set",
  },
  {
    src: "/assets/images/bts/bts4.png",
    caption: "Celebratory flowers after wrapping a long shoot.",
    category: "together",
  },
  {
    src: "/assets/images/bts/bts17.png",
    caption: "Full cast squad hanging out by the doorway.",
    category: "off set",
  },
  {
    src: "/assets/images/bts/bts5.png",
    caption: "Kitchen scene rehearsal — cat apron & back hug.",
    category: "on set",
  },
  {
    src: "/assets/images/bts/bts6.png",
    caption: "Intimate sofa scene under warm ambient lighting.",
    category: "on set",
  },
  {
    src: "/assets/images/bts/bts7.png",
    caption: "Quiet embrace between takes in the green room.",
    category: "together",
  },
  {
    src: "/assets/images/bts/bts8.png",
    caption: "Playful selfie — William peace sign over a sleeping Est.",
    category: "off set",
  },
  {
    src: "/assets/images/bts/bts9.png",
    caption: "Late-night script review on the couch.",
    category: "together",
  },
  {
    src: "/assets/images/bts/bts10.png",
    caption: "Cinematic side-lighting test before Episode 3.",
    category: "on set",
  },
  {
    src: "/assets/images/bts/bts11.png",
    caption: "Leaning on each other after wrap.",
    category: "off set",
  },
  {
    src: "/assets/images/bts/bts12.png",
    caption: "Casual moments on set between scenes.",
    category: "off set",
  },
  {
    src: "/assets/images/bts/bts13.png",
    caption: "Soft lighting test for intimate character moments.",
    category: "on set",
  },
  {
    src: "/assets/images/bts/bts14.png",
    caption: "Rehearsing posture and eye contact.",
    category: "on set",
  },
  {
    src: "/assets/images/bts/bts15.png",
    caption: "Behind the monitor checking playback.",
    category: "together",
  },
  {
    src: "/assets/images/bts/bts16.png",
    caption: "The whole crew together after wrapping the location shot.",
    category: "off set",
  },
];

export const LITTLE_THINGS = [
  {
    label: "Favourite interaction",
    detail: "Placeholder — the one they both keep bringing up in interviews.",
  },
  { label: "Funniest moment", detail: "Placeholder — a ruined take nobody could recover from." },
  { label: "Most chaotic moment", detail: "Placeholder — the day the schedule stopped mattering." },
  { label: "Softest moment", detail: "Placeholder — a small gesture caught by accident." },
  {
    label: "Suspiciously couple-like",
    detail: "Placeholder — the clip the fandom will never let go of.",
  },
];
