import type { Translations } from "./en";

export const ru: Translations = {
  nav: {
    about: "Обо мне",
    work: "Опыт",
    contact: "Контакты",
  },
  hero: {
    greeting: "Привет, я",
    name: "Abdujabbor",
    subtitle1: "Создаю масштабируемые бэкенд-архитектуры",
    subtitle2: "и высокопроизводительные API",
    viewProjects: "Смотреть проекты",
  },
  about: {
    p: "Введение",
    h2: "Обзор.",
    content:
      "Я бэкенд-разработчик, специализирующийся на Node.js и NestJS, с практическим опытом создания production-grade API и масштабируемых микросервисных архитектур. Проектирую RESTful и GraphQL API, разрабатываю надёжные схемы баз данных на PostgreSQL и MongoDB, реализую стратегии кэширования Redis и создаю real-time системы с использованием WebSocket и Telegram Web App. Увлечён чистой архитектурой, принципами SOLID и превращением сложных бэкенд-задач в надёжные, поддерживаемые продуктовые решения.",
    cards: [
      { title: "Бэкенд-разработчик", subtitle: "Node.js / NestJS" },
      { title: "Архитектор баз данных", subtitle: "PostgreSQL / MongoDB" },
      { title: "Оптимизация систем", subtitle: "Производительность API" },
      { title: "Telegram WebApp", subtitle: "TWA Эксперт" },
    ],
  },
  experience: {
    p: "Что я создал",
    h2: "Опыт работы.",
    jobs: [
      {
        title: "Бэкенд-разработчик",
        companyName: "Proger Group",
        date: "Сен 2025 — Настоящее время",
        points: [
          "Спроектировал систему двухфакторной аутентификации JWT + OTP, значительно повысив безопасность платформы для всех пользователей.",
          "Разработал и оптимизировал схемы Prisma ORM для сложных реляционных моделей данных, повысив эффективность запросов на 40%.",
          "Выполнил глубокую оптимизацию запросов и стратегии индексирования, сократив среднее время ответа API при пиковой нагрузке.",
          "Построил production-ready RESTful API с интеграцией AWS S3 для масштабируемого управления медиа и файлами.",
        ],
      },
      {
        title: "Бэкенд-разработчик",
        companyName: "TechHub",
        date: "Июл 2025 — Окт 2025",
        points: [
          "Разработал модульные NestJS-сервисы, следуя принципам чистой архитектуры и SOLID.",
          "Оптимизировал запросы и индексы PostgreSQL, снизив нагрузку на базу данных на 35% на высоконагруженных эндпоинтах.",
          "Реализовал стратегии кэширования Redis для управления сессиями и часто запрашиваемых данных.",
          "Создал функции реального времени с WebSocket для живых уведомлений и двунаправленной синхронизации данных.",
        ],
      },
    ],
  },
  works: {
    p: "Мои работы",
    h2: "Проекты.",
    liveLabel: "Открыть проект",
    content:
      "Следующие проекты — это production-системы, которые я спроектировал и запустил. Каждый из них демонстрирует масштабируемое API-проектирование, инженерию баз данных и приоритет производительности.",
    projects: [
      {
        name: "Eastway Travel",
        description:
          "Высокопроизводительная платформа бронирования путешествий, оптимизированная для бесперебойных booking-потоков, сложной фильтрации туров и низколатентного получения данных. Архитектура построена на Prisma-оптимизированных реляционных схемах и AWS S3 media pipelines.",
        tags: [
          { name: "NestJS", color: "green-text-gradient" },
          { name: "Prisma", color: "blue-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "AWS S3", color: "green-text-gradient" },
        ],
      },
      {
        name: "Uyg'un Learning Platform",
        description:
          "Комплексная e-learning экосистема с корпоративной системой контроля доступа (RBAC), защищённой доставкой видеоконтента и детальным отслеживанием прогресса. Рассчитана на высокую конкурентность для ролей студента, преподавателя и администратора.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "Express.js", color: "green-text-gradient" },
          { name: "MongoDB", color: "pink-text-gradient" },
          { name: "Mongoose", color: "blue-text-gradient" },
        ],
      },
      {
        name: "TDTU Help Bot",
        description:
          "Корпоративная Telegram-экосистема для 5000+ активных пользователей Ташкентского государственного медицинского университета. Включает синхронизацию администратора в реальном времени, рассылку новостей и фронтенд на Next.js в виде Telegram Web App.",
        tags: [
          { name: "NestJS", color: "green-text-gradient" },
          { name: "TypeORM", color: "blue-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "Next.js", color: "green-text-gradient" },
          { name: "TWA SDK", color: "blue-text-gradient" },
        ],
      },
      {
        name: "Metalix",
        description:
          "Промышленная платформа для компании металлоконструкций. Работает на асинхронной очереди задач (BullMQ) для обработки тяжёлых запросов, управления активами через AWS S3 и структурированного портфолио проектов.",
        tags: [
          { name: "NestJS", color: "green-text-gradient" },
          { name: "TypeORM", color: "blue-text-gradient" },
          { name: "BullMQ", color: "pink-text-gradient" },
          { name: "AWS S3", color: "green-text-gradient" },
        ],
      },
      {
        name: "Watchz",
        description:
          "E-commerce платформа нового поколения для люксовых часов с AI-рекомендациями товаров, интеграцией международных платёжных шлюзов и высокоскоростной CDN-доставкой через Bunny.net. Полностековая архитектура с Next.js фронтендом.",
        tags: [
          { name: "NestJS", color: "green-text-gradient" },
          { name: "TypeORM", color: "blue-text-gradient" },
          { name: "Bunny.net CDN", color: "pink-text-gradient" },
          { name: "AI Integration", color: "green-text-gradient" },
          { name: "Next.js", color: "blue-text-gradient" },
        ],
      },
    ],
  },
  contact: {
    p: "Связаться",
    h2: "Контакты.",
    socialsTitle: "Найдите меня здесь",
    form: {
      name: { span: "Ваше имя", placeholder: "Как вас зовут?" },
      email: { span: "Ваш Email", placeholder: "Ваш адрес email?" },
      message: { span: "Ваше сообщение", placeholder: "Что вы хотите сказать?" },
    },
    send: "Отправить",
    sending: "Отправка...",
    success: "Спасибо! Я свяжусь с вами как можно скорее.",
    error: "Что-то пошло не так. Пожалуйста, попробуйте снова.",
  },
};
