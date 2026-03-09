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
      "I am a Backend Developer specializing in Node.js and NestJS, with hands-on experience building production-grade APIs and scalable microservice architectures. I design RESTful and GraphQL APIs, architect robust database schemas with PostgreSQL and MongoDB, implement Redis caching strategies, and develop real-time systems using WebSocket and Telegram Web Apps. Passionate about clean architecture, SOLID principles, and turning complex backend challenges into reliable, maintainable production solutions.",
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
    content:
      "The following projects showcase my backend engineering expertise through real-world production systems. Each project demonstrates scalable architecture, database design, API development, and performance optimization.",
    projects: [
      {
        name: "MVP Football",
        description:
          "Modular NestJS REST API for a football league management platform with TypeORM, AWS S3 media handling, RBAC for admin/referee/player roles, and real-time match updates via WebSocket.",
        tags: [
          { name: "nestjs", color: "green-text-gradient" },
          { name: "typeorm", color: "blue-text-gradient" },
          { name: "aws-s3", color: "pink-text-gradient" },
        ],
        sourceCodeLink: "https://github.com/Abdujabbor0720",
      },
      {
        name: "Uyg'un Learning Platform",
        description:
          "Full-featured e-learning backend with comprehensive RBAC (student/instructor/admin), secure video streaming, chunked file uploads, subscription billing, and 50+ documented REST endpoints.",
        tags: [
          { name: "nodejs", color: "green-text-gradient" },
          { name: "postgresql", color: "blue-text-gradient" },
          { name: "redis", color: "pink-text-gradient" },
        ],
        sourceCodeLink: "https://github.com/Abdujabbor0720",
      },
      {
        name: "Eastway Travel",
        description:
          "Booking platform backend for flights, hotels, and tour packages with optimized Prisma queries, multi-currency payment processing, transaction rollback support, and automated email notifications.",
        tags: [
          { name: "nestjs", color: "green-text-gradient" },
          { name: "prisma", color: "blue-text-gradient" },
          { name: "postgresql", color: "pink-text-gradient" },
        ],
        sourceCodeLink: "https://github.com/Abdujabbor0720",
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
