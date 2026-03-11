import type { TTechnology, TNavLink } from "../types";

import {
  typescript,
  nodejs,
  mongodb,
  docker,
  backend,
  web,
  creator,
  mobile,
  airways,
  eastway,
  uygunlik,
  tdtubot,
  metalix,
  watchz,
  mvpfootball,
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

// Service card icons for the About section (titles/subtitles come from i18n)
export const serviceIcons = [
  { icon: backend },  // Backend Developer
  { icon: web },      // Database Architect
  { icon: creator },  // System Optimization
  { icon: mobile },   // Telegram WebApp
];

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

// Experience visual data — text content comes from i18n translations
export const experienceVisuals = [
  {
    icon: backend,
    iconBg: "#0d2117",
  },
  {
    icon: web,
    iconBg: "#131026",
  },
];

// Project visual data — text content comes from i18n translations
export const projectVisuals = [
  {
    image: eastway,
    liveLink: "https://eastway-travel.com",
  },
  {
    image: uygunlik,
    liveLink: "https://uygunlik.uz",
  },
  {
    image: tdtubot,
    liveLink: "https://t.me/TDTU_help_bot",
  },
  {
    image: metalix,
    liveLink: "https://metalix.uz",
  },
  {
    image: watchz,
    liveLink: "https://watchz.tech",
  },
  {
    image: airways,
    liveLink: "https://github.com/Abdujabbor0720/Airways_System",
  },
  {
    image: mvpfootball,
    appStoreLink: "https://apps.apple.com/us/app/trainball/id6747034373",
    playStoreLink: "https://play.google.com/store/apps/details?id=uz.uzfootball.akademiya",
  },
];
