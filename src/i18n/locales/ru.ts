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
      "Я бэкенд-разработчик с более чем 1 годом практического опыта, специализирующийся на Node.js и NestJS. Создаю production-grade API и масштабируемые микросервисные архитектуры. Проектирую RESTful и GraphQL API, разрабатываю надёжные схемы баз данных на PostgreSQL и MongoDB, реализую стратегии кэширования Redis и создаю real-time системы с использованием WebSocket и Telegram Web App. Увлечён чистой архитектурой, принципами SOLID и превращением сложных бэкенд-задач в надёжные, поддерживаемые продуктовые решения.",
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
          "Комплексная e-learning экосистема с корпоративной системой контроля доступа (RBAC), защищённой доставкой видеоконтента и детальным отслеживанием прогресса. Рассчитана на высокую конкурентность для ролей студента, преподавателя и администратора.",
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
          "Промышленная платформа для компании металлоконструкций. Работает на асинхронной очереди задач (BullMQ) для обработки тяжёлых запросов, управления активами через AWS S3 и структурированного портфолио проектов.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "NestJS", color: "green-text-gradient" },
          { name: "Redis", color: "pink-text-gradient" },
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
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "NestJS", color: "green-text-gradient" },
          { name: "TypeORM", color: "blue-text-gradient" },
          { name: "Bunny.net CDN", color: "pink-text-gradient" },
          { name: "AI Integration", color: "green-text-gradient" },
          { name: "Payment Systems", color: "pink-text-gradient" },
          { name: "Next.js", color: "blue-text-gradient" },
        ],
      },
      {
        name: "Tarantool Games",
        description:
          "Официальная веб-платформа TaranTool Games — студии, разрабатывающей первую AAA историческую action-RPG из Центральной Азии. Обеспечивает воронку Steam wishlist, обработку запросов инвесторов и партнёров, управление контентом команды и roadmap, а также media pipeline, рассчитанный на тяжёлый трафик трейлеров.",
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
          "Платформа футбольной академии с 10 000+ активными пользователями в App Store и Google Play. Backend построен с нуля: бронирование тренеров, рейтинги в реальном времени, статистика пользователей, интеграция AI-чатбота и Firebase push-уведомления.",
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
          "Шахматная платформа с мультиплеером в реальном времени через WebSocket в форматах Bullet, Blitz, Rapid и Chess960. Включает арена-турниры, рейтинговый движок, систему задач, анализ партий на базе движка, видеокурсы с менторами и доставку push-уведомлений.",
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
          "Media-talent маркетплейс, связывающий бренды и кастинг-агентства с актёрами, моделями, видеографами и контент-мейкерами. Реализованы публикация кастингов, верифицированные профили талантов с фото- и видеопортфолио, поиск по категориям и профессиям, а также слой PRO-подписки с локальными платёжными шлюзами.",
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
          "OTT стриминговый сервис для фильмов, сериалов и коротких видео. Backend включает пайплайны HLS-транскодинга в нескольких качествах, студию автора для публикации фильмов и эпизодов, историю просмотров с личной библиотекой и CDN-доставку, оптимизированную под мобильные сети.",
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
          "Социальная платформа для сообщества талантов Узбекистана, объединяющая вокалистов, танцоров, актёров и других креаторов. Реализованы поиск талантов по регионам и направлениям, лента фото, видео и коротких форматов с YouTube-встраиванием, прямые сообщения между креаторами, рейтинговая таблица на основе активности и push-уведомления на узбекском, русском и английском.",
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
