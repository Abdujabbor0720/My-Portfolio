export const en = {
  nav: {
    about: "About",
    work: "Work",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Abdujabbor",
    subtitle1: "I build Scalable Backend Architectures",
    subtitle2: "and High-Performance APIs",
    viewProjects: "View Projects",
  },
  about: {
    p: "Introduction",
    h2: "Overview.",
    content:
      "I am a Backend Developer with over 1 year of hands-on experience specializing in Node.js and NestJS, building production-grade APIs and scalable microservice architectures. I design RESTful and GraphQL APIs, architect robust database schemas with PostgreSQL and MongoDB, implement Redis caching strategies, and develop real-time systems using WebSocket and Telegram Web Apps. Passionate about clean architecture, SOLID principles, and turning complex backend challenges into reliable, maintainable production solutions.",
    cards: [
      { title: "Backend Developer", subtitle: "Node.js / NestJS" },
      { title: "Database Architect", subtitle: "PostgreSQL / MongoDB" },
      { title: "System Optimization", subtitle: "API & Query Performance" },
      { title: "Telegram WebApp", subtitle: "TWA Expert" },
    ],
  },
  experience: {
    p: "What I have built",
    h2: "Work Experience.",
    jobs: [
      {
        title: "Backend Developer",
        companyName: "Proger Group",
        date: "Sep 2025 — Present",
        points: [
          "Architected JWT + OTP dual-factor authentication system, significantly enhancing platform security for all production users.",
          "Designed and optimized Prisma ORM schemas for complex relational data models, improving query efficiency by 40%.",
          "Performed deep query optimization and indexing strategies reducing average API response time under peak load.",
          "Built production-grade RESTful APIs integrated with AWS S3 for scalable media and file management.",
        ],
      },
      {
        title: "Backend Developer",
        companyName: "TechHub",
        date: "Jul 2025 — Oct 2025",
        points: [
          "Developed modular NestJS services following clean architecture and SOLID design principles.",
          "Optimized PostgreSQL queries and indexes, reducing database load by 35% on high-traffic endpoints.",
          "Implemented Redis caching strategies for session management and frequently-accessed data layers.",
          "Built real-time features using WebSocket for live notifications and bi-directional data synchronization.",
        ],
      },
    ],
  },
  works: {
    p: "My work",
    h2: "Projects.",
    liveLabel: "View Project",
    content:
      "The following projects are production systems I architected and shipped. Each one demonstrates scalable API design, database engineering, and performance-first thinking.",
    projects: [
      {
        name: "Eastway Travel",
        description:
          "High-performance travel booking platform engineered for seamless booking flows, complex trip filtering, and low-latency data retrieval at scale. Architected with Prisma-optimized relational schemas and AWS S3 media pipelines.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "NestJS", color: "green-text-gradient" },
          { name: "Prisma", color: "blue-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "AWS S3", color: "green-text-gradient" },
        ],
      },
      {
        name: "Uyg'un Learning Platform",
        description:
          "Comprehensive e-learning ecosystem with enterprise-grade Role-Based Access Control (RBAC), secure video content delivery, and granular progress tracking. Built for high concurrency across student, instructor, and admin roles.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "Express.js", color: "green-text-gradient" },
          { name: "MongoDB", color: "pink-text-gradient" },
          { name: "Mongoose", color: "blue-text-gradient" },
        ],
      },
      {
        name: "Metalix",
        description:
          "Industrial-scale platform for a metal construction company. Powered by an asynchronous task queue (BullMQ) for heavy service-inquiry processing, AWS S3 asset management, and a structured project portfolio engine.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "NestJS", color: "green-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "TypeORM", color: "blue-text-gradient" },
          { name: "Redis", color: "pink-text-gradient" },
          { name: "BullMQ", color: "pink-text-gradient" },
          { name: "AWS S3", color: "green-text-gradient" },
        ],
      },
      {
        name: "Watchz",
        description:
          "Next-gen luxury e-commerce platform with AI-driven product recommendations, international payment gateway integration, and high-speed CDN delivery via Bunny.net. Full-stack architecture with a Next.js storefront.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "NestJS", color: "green-text-gradient" },
          { name: "TypeORM", color: "blue-text-gradient" },
          { name: "Bunny.net CDN", color: "pink-text-gradient" },
          { name: "Payment Systems", color: "pink-text-gradient" },
          { name: "AI Integration", color: "green-text-gradient" },
          { name: "Next.js", color: "blue-text-gradient" },
        ],
      },
      {
        name: "Tarantool Games",
        description:
          "Official web platform for TaranTool Games, the studio building the first AAA historical action-RPG from Central Asia. Powers the Steam wishlist funnel, investor and partnership inquiries, team and roadmap content management, and a cinematic media pipeline tuned for heavy trailer traffic.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "NestJS", color: "green-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "TypeORM", color: "blue-text-gradient" },
          { name: "Redis", color: "pink-text-gradient" },
          { name: "AWS S3", color: "green-text-gradient" },
          { name: "Next.js", color: "blue-text-gradient" },
        ],
      },
      {
        name: "MVP Football Academy",
        description:
          "Football academy platform with 10,000+ active users on App Store and Google Play. Built the entire backend from scratch including coach booking, real-time leaderboards, user statistics, AI chatbot integration, and Firebase push notifications.",
        tags: [
          { name: "NestJS", color: "green-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "TypeORM", color: "blue-text-gradient" },
          { name: "Docker", color: "green-text-gradient" },
          { name: "JWT", color: "blue-text-gradient" },
          { name: "RBAC", color: "pink-text-gradient" },
          { name: "Firebase FCM", color: "blue-text-gradient" },
          { name: "AI Chatbot", color: "green-text-gradient" },
          { name: "Payment Systems", color: "pink-text-gradient" },
        ],
      },
      {
        name: "UzChess",
        description:
          "Online chess platform with real-time multiplayer over WebSocket across Bullet, Blitz, Rapid and Chess960 formats. Includes arena tournaments, a rating engine, a puzzle system, engine-backed game analysis, video courses with mentors, and push notification delivery.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "NestJS", color: "green-text-gradient" },
          { name: "WebSocket", color: "pink-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "TypeORM", color: "blue-text-gradient" },
          { name: "Redis", color: "pink-text-gradient" },
          { name: "Docker", color: "green-text-gradient" },
          { name: "Firebase FCM", color: "blue-text-gradient" },
        ],
      },
      {
        name: "CastingGo",
        description:
          "Media-talent marketplace connecting brands and casting agencies with actors, models, videographers and content creators. Built the casting publication flow, verified talent profiles with photo and video portfolios, category and profession search, and a PRO subscription layer with local payment gateways.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "NestJS", color: "green-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "TypeORM", color: "blue-text-gradient" },
          { name: "AWS S3", color: "green-text-gradient" },
          { name: "Payment Systems", color: "pink-text-gradient" },
          { name: "RBAC", color: "blue-text-gradient" },
        ],
      },
      {
        name: "916TV",
        description:
          "OTT streaming service for films, series and short-form video. Backend covers multi-quality HLS transcoding pipelines, a creator studio for publishing films and episodes, watch history with a personal library, and CDN-backed delivery tuned for mobile networks.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "NestJS", color: "green-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "TypeORM", color: "blue-text-gradient" },
          { name: "Redis", color: "pink-text-gradient" },
          { name: "HLS Streaming", color: "green-text-gradient" },
          { name: "AWS S3", color: "green-text-gradient" },
          { name: "CDN", color: "pink-text-gradient" },
        ],
      },
      {
        name: "Maqsad",
        description:
          "Social platform for Uzbekistan's talent community, connecting vocalists, dancers, actors and other creators. Built talent discovery by region and category, a photo, video and short-form feed with YouTube embeds, direct messaging between creators, activity-driven leaderboard rankings, and push notifications across Uzbek, Russian and English.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "NestJS", color: "green-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "TypeORM", color: "blue-text-gradient" },
          { name: "WebSocket", color: "pink-text-gradient" },
          { name: "AWS S3", color: "green-text-gradient" },
          { name: "Redis", color: "pink-text-gradient" },
          { name: "Firebase FCM", color: "blue-text-gradient" },
        ],
      },
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    socialsTitle: "Connect with me",
    form: {
      name: { span: "Your Name", placeholder: "What's your name?" },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: { span: "Your Message", placeholder: "What do you want to say?" },
    },
    send: "Send Message",
    sending: "Sending...",
    success: "Thank you! I will get back to you as soon as possible.",
    error: "Something went wrong. Please try again.",
  },
};

export type Translations = typeof en;
