import type { TTechnology, TNavLink } from "../types";

import {
  typescript,
  nodejs,
  mongodb,
  docker,
  yoshlarAgentligi,
  eastway,
  uygunlik,
  metalix,
  watchz,
  mvpfootball,
  tarantool,
  uzchess,
  castinggo,
  tv916,
  maqsad,
  mazmunli,
  mymarkaz,
  futuretravel,
  javascript,
  nestjs,
  postgresql,
  redis,
  prisma,
  express,
  restapi,
  websocket,
  jwt,
  mongoose,
  typeorm,
  sequelize,
  graphql,
  cicd,
  telegrambot,
  github,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// Service card accents for the About section.
// Icons are inline SVGs rendered in About.tsx; titles/subtitles come from i18n.
export const serviceAccents = [
  { key: "server", color: "#4ade80" },   // Backend Developer
  { key: "database", color: "#38bdf8" }, // Database Architect
  { key: "gauge", color: "#f472b6" },    // System Optimization
  { key: "telegram", color: "#a78bfa" }, // Telegram WebApp
] as const;

export type ServiceIconKey = (typeof serviceAccents)[number]["key"];

// Full backend tech stack from CV
export const technologies: TTechnology[] = [
  { name: "JavaScript",  icon: javascript },
  { name: "TypeScript",  icon: typescript },
  { name: "Node.js",     icon: nodejs },
  { name: "Express",     icon: express },
  { name: "NestJS",      icon: nestjs },
  { name: "REST API",    icon: restapi },
  { name: "WebSocket",   icon: websocket },
  { name: "JWT",         icon: jwt },
  { name: "PostgreSQL",  icon: postgresql },
  { name: "MongoDB",     icon: mongodb },
  { name: "Mongoose",    icon: mongoose },
  { name: "TypeORM",     icon: typeorm },
  { name: "Prisma",      icon: prisma },
  { name: "Sequelize",   icon: sequelize },
  { name: "GitHub",      icon: github },
  { name: "Docker",      icon: docker },
  { name: "Redis",       icon: redis },
  { name: "GraphQL",     icon: graphql },
  { name: "CI/CD",       icon: cicd },
  { name: "Telegram Bot", icon: telegrambot },
];

// Experience visual data — text content comes from i18n translations.
// Order must match the `jobs` array in every locale file.
// `logo` is optional: when absent the card falls back to the monogram tile.
export const experienceVisuals: {
  monogram: string;
  accent: string;
  current: boolean;
  logo?: string;
}[] = [
  { monogram: "YA", accent: "#38bdf8", current: true, logo: yoshlarAgentligi }, // Youth Affairs Agency
  { monogram: "MP", accent: "#a78bfa", current: true },  // MPMG
  { monogram: "PG", accent: "#4ade80", current: false }, // Proger Group
  { monogram: "TH", accent: "#f472b6", current: false }, // TechHub
];

// Project visual data — text content comes from i18n translations.
// Ordered by prominence; must match the `projects` array in every locale file.
export const projectVisuals = [
  {
    image: uzchess,
    liveLink: "https://uzchesss.uz",
    appStoreLink: "https://apps.apple.com/uz/app/uzchess-shaxmat-akademiya/id6502834977",
    playStoreLink: "https://play.google.com/store/apps/details?id=uz.uzchess.akademiya",
  },
  {
    image: tarantool,
    liveLink: "https://tarantool.games",
  },
  {
    image: mvpfootball,
    appStoreLink: "https://apps.apple.com/us/app/trainball/id6747034373",
    playStoreLink: "https://play.google.com/store/apps/details?id=uz.uzfootball.akademiya",
  },
  {
    image: castinggo,
    liveLink: "https://castinggo.uz",
    appStoreLink: "https://apps.apple.com/uz/app/castinggo/id6756616108",
    playStoreLink: "https://play.google.com/store/apps/details?id=uz.castinggo.app",
  },
  {
    image: tv916,
    appStoreLink: "https://apps.apple.com/uz/app/tv916-movies/id6768674034",
  },
  {
    image: mazmunli,
    liveLink: "https://mazmunli.uz",
    appStoreLink: "https://apps.apple.com/us/app/mazmunli/id6772443443",
  },
  {
    image: maqsad,
    appStoreLink: "https://apps.apple.com/us/app/maqsad-talantlar/id6788289255",
  },
  {
    image: mymarkaz,
    liveLink: "https://mymarkaz.uz",
  },
  {
    image: watchz,
    liveLink: "https://watchz.tech",
  },
  {
    image: metalix,
    liveLink: "https://metalix.uz",
  },
  {
    image: uygunlik,
    liveLink: "https://uygunlik.uz",
  },
  {
    image: eastway,
    liveLink: "https://eastway-travel.com",
  },
  {
    image: futuretravel,
    liveLink: "https://www.future-travel.uz",
  },
];
