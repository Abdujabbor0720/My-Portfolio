import type { Translations } from "./en";

export const ru: Translations = {
  nav: {
    about: "Обо мне",
    work: "Опыт",
    contact: "Контакты",
  },
  hero: {
    greeting: "Привет, я",
    name: "Абдужаббор",
    subtitle1: "Я создаю масштабируемые Backend-архитектуры",
    subtitle2: "и высокопроизводительные API",
    viewProjects: "Смотреть проекты",
    viewExperience: "Где я работал",
  },
  about: {
    p: "Введение",
    h2: "Обзор.",
    content:
      "Я бэкенд-разработчик с более чем 1 годом практического опыта, специализирующийся на Node.js и NestJS. Создаю production-grade API и масштабируемые микросервисные архитектуры. Проектирую RESTful и GraphQL API, разрабатываю надёжные схемы баз данных на PostgreSQL и MongoDB, реализую стратегии кэширования Redis и создаю real-time системы с использованием WebSocket и Telegram Web App. Увлечён чистой архитектурой, принципами SOLID и превращением сложных бэкенд-задач в надёжные, поддерживаемые продуктовые решения.",
    cards: [
      { title: "Backend-разработчик", subtitle: "Node.js / NestJS" },
      { title: "Архитектор баз данных", subtitle: "PostgreSQL / MongoDB" },
      { title: "Оптимизация систем", subtitle: "Производительность API и запросов" },
      { title: "Telegram WebApp", subtitle: "Эксперт TWA" },
    ],
  },
  experience: {
    p: "Где я работал",
    h2: "Опыт работы.",
    current: "Сейчас",
    content:
      "Команды и организации, для которых я построил production-бэкенды — от государственной молодёжной платформы с сотнями тысяч пользователей до медиа-, образовательных и коммерческих продуктов.",
    jobs: [
      {
        title: "Software Engineer",
        companyName: "Агентство по делам молодёжи — Yoshlar ishlari agentligi",
        date: "Март 2026 — по настоящее время",
        location: "Ташкент, Узбекистан",
        type: "Полная занятость",
        points: [
          "Разрабатываю бэкенд-сервисы для UzChess — первой цифровой шахматной платформы Центральной Азии и флагманской инициативы Агентства по делам молодёжи: более 930 000 зарегистрированных пользователей, 2,7 млн+ сыгранных партий и 55 000+ выданных сертификатов.",
          "Построил real-time мультиплеер на WebSocket для форматов Bullet, Blitz, Rapid и Chess960, а также рейтинговый движок и систему арена-турниров.",
          "Спроектировал API доставки контента, обслуживающие более 1 000 000 шахматных задач, видеокурсы гроссмейстеров и интерактивные уроки в национальном масштабе.",
          "Проектирую высоконагруженные NestJS-сервисы для государственных цифровых продуктов для молодёжи с моделями данных PostgreSQL и MongoDB, оптимизированными под конкурентный трафик.",
        ],
        stack: [
          "Node.js",
          "NestJS",
          "TypeScript",
          "JavaScript",
          "PostgreSQL",
          "MongoDB",
          "REST API",
          "WebSocket",
          "Next.js",
        ],
      },
      {
        title: "Разработчик серверной части",
        companyName: "MPMG — Media and Project Management Group",
        date: "Март 2026 — по настоящее время",
        location: "Ташкент, Узбекистан",
        type: "Работа в офисе · Полная занятость",
        points: [
          "Создаю бэкенд-системы для медиапродуктов группы — OTT-стриминг, кастинг-маркетплейс, платформа мероприятий и социальная сеть талантов.",
          "Реализовал конвейеры HLS-транскодирования в нескольких качествах и доставку через CDN для 916TV, настроенные под условия мобильных сетей.",
          "Разработал процессы загрузки медиа, модерации и управления активами на AWS S3, обеспечивающие верифицированные портфолио талантов в CastingGo и Maqsad.",
          "Интегрировал локальные платёжные шлюзы, уровни подписок и доставку push-уведомлений через Firebase по всему портфелю продуктов.",
        ],
        stack: [
          "NestJS",
          "TypeScript",
          "PostgreSQL",
          "TypeORM",
          "Redis",
          "AWS S3",
          "HLS Streaming",
          "Firebase FCM",
        ],
      },
      {
        title: "Backend-разработчик",
        companyName: "Proger Group",
        date: "Сентябрь 2025 — Июнь 2026",
        location: "Ташкент, Узбекистан",
        type: "Полная занятость",
        points: [
          "Спроектировал систему двухфакторной аутентификации JWT + OTP, значительно повысив безопасность платформы для всех production-пользователей.",
          "Разработал и оптимизировал схемы Prisma ORM для сложных реляционных моделей данных, повысив эффективность запросов на 40%.",
          "Провёл глубокую оптимизацию запросов и стратегии индексирования, сократив среднее время отклика API при пиковых нагрузках.",
          "Создал production-grade RESTful API с интеграцией AWS S3 для масштабируемого управления медиа и файлами.",
        ],
        stack: [
          "NestJS",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "JWT",
          "AWS S3",
          "REST API",
        ],
      },
      {
        title: "Backend-разработчик",
        companyName: "TechHub",
        date: "Июль 2025 — Октябрь 2025",
        location: "Ташкент, Узбекистан",
        type: "Полная занятость",
        points: [
          "Разработал модульные NestJS-сервисы, следуя принципам чистой архитектуры и SOLID.",
          "Оптимизировал запросы и индексы PostgreSQL, снизив нагрузку на базу данных на 35% на высоконагруженных эндпоинтах.",
          "Реализовал стратегии кэширования Redis для управления сессиями и часто запрашиваемых слоёв данных.",
          "Создал real-time функции на WebSocket для живых уведомлений и двусторонней синхронизации данных.",
        ],
        stack: [
          "NestJS",
          "TypeScript",
          "PostgreSQL",
          "Redis",
          "WebSocket",
          "Docker",
        ],
      },
    ],
  },
  works: {
    p: "Мои работы",
    h2: "Проекты.",
    liveLabel: "Перейти на сайт",
    mobileBadge: "Мобильное приложение",
    webBadge: "Веб-платформа",
    content:
      "Следующие проекты — это production-системы, которые я спроектировал и запустил. Каждая из них демонстрирует масштабируемый дизайн API, инженерию баз данных и подход, ориентированный на производительность.",
    projects: [
      {
        name: "UzChess",
        description:
          "Первая цифровая шахматная платформа Центральной Азии — более 930 000 зарегистрированных пользователей и 2,7 млн+ сыгранных партий. Real-time мультиплеер на WebSocket в форматах Bullet, Blitz, Rapid и Chess960, арена-турниры, рейтинговый движок, более 1 млн задач, анализ партий движком и видеокурсы гроссмейстеров.",
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
        name: "Tarantool Games",
        description:
          "Официальная веб-платформа TaranTool Games — студии, создающей первую AAA историческую action-RPG из Центральной Азии. Обеспечивает воронку Steam wishlist, запросы инвесторов и партнёров, управление контентом команды и роадмапа, а также кинематографичный медиа-конвейер, рассчитанный на высокий трафик трейлеров.",
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
        name: "TrainBall",
        description:
          "Платформа футбольной академии с более чем 10 000 активных пользователей в App Store и Google Play. С нуля построил весь бэкенд, включая бронирование тренеров, real-time таблицы лидеров, статистику пользователей, интеграцию AI-чатбота и push-уведомления через Firebase.",
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
        name: "CastingGo",
        description:
          "Медиа-маркетплейс талантов, соединяющий бренды и кастинг-агентства с актёрами, моделями, видеографами и контент-мейкерами. Реализованы публикация кастингов, верифицированные профили талантов с фото- и видеопортфолио, поиск по категориям и профессиям, а также PRO-подписка с локальными платёжными шлюзами.",
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
          "OTT-сервис стриминга фильмов, сериалов и коротких видео. Бэкенд охватывает конвейеры HLS-транскодирования в нескольких качествах, студию создателя для публикации фильмов и эпизодов, историю просмотров с личной библиотекой и доставку через CDN, настроенную под мобильные сети.",
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
        name: "Mazmunli",
        description:
          "Платформа поиска мероприятий и продажи билетов на мастер-классы, митапы, лекции и концерты. Бэкенд обеспечивает просмотр по категориям и организаторам, рекомендации по интересам, фильтрацию по региону, дате и цене, корзину и оформление билетов, избранное и push-уведомления на узбекском, русском и английском.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "NestJS", color: "green-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "TypeORM", color: "blue-text-gradient" },
          { name: "Redis", color: "pink-text-gradient" },
          { name: "AWS S3", color: "green-text-gradient" },
          { name: "Payment Systems", color: "pink-text-gradient" },
          { name: "Firebase FCM", color: "blue-text-gradient" },
        ],
      },
      {
        name: "Maqsad",
        description:
          "Социальная платформа для сообщества талантов Узбекистана, объединяющая вокалистов, танцоров, актёров и других творческих людей. Реализованы поиск талантов по региону и категории, лента фото, видео и коротких роликов с встраиванием YouTube, личные сообщения между авторами, рейтинговые таблицы на основе активности и push-уведомления на узбекском, русском и английском.",
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
      {
        name: "MYMarkaz",
        description:
          "Стартап-платформа, превращающая идеи школьников, студентов и молодых креаторов в реальный бизнес-продукт — Telegram-боты, веб-сайты, SaaS-сервисы, онлайн-магазины и EdTech-проекты. Бэкенд обеспечивает публикацию стартапов, доску проблем сообщества с голосованием, формирование команд и групп, поиск и рейтинг на основе активности.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "NestJS", color: "green-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "TypeORM", color: "blue-text-gradient" },
          { name: "Redis", color: "pink-text-gradient" },
          { name: "RBAC", color: "blue-text-gradient" },
          { name: "REST API", color: "green-text-gradient" },
        ],
      },
      {
        name: "Watchz",
        description:
          "E-commerce платформа нового поколения для люксовых товаров с AI-рекомендациями, интеграцией международных платёжных шлюзов и высокоскоростной доставкой контента через Bunny.net CDN. Full-stack архитектура с витриной на Next.js.",
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
        name: "Metalix",
        description:
          "Платформа промышленного масштаба для компании по металлоконструкциям. Работает на асинхронной очереди задач (BullMQ) для обработки тяжёлых сервисных заявок, управлении активами AWS S3 и структурированном движке портфолио проектов.",
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
        name: "Uyg'un — Образовательная платформа",
        description:
          "Комплексная экосистема электронного обучения с ролевым контролем доступа (RBAC) корпоративного уровня, безопасной доставкой видеоконтента и детальным отслеживанием прогресса. Построена для высокой конкурентности между ролями студента, преподавателя и администратора.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "Express.js", color: "green-text-gradient" },
          { name: "MongoDB", color: "pink-text-gradient" },
          { name: "Mongoose", color: "blue-text-gradient" },
        ],
      },
      {
        name: "Eastway Travel",
        description:
          "Высокопроизводительная платформа бронирования путешествий, созданная для бесшовных сценариев бронирования, сложной фильтрации туров и получения данных с низкой задержкой в масштабе. Спроектирована на оптимизированных реляционных схемах Prisma и медиа-конвейерах AWS S3.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "NestJS", color: "green-text-gradient" },
          { name: "Prisma", color: "blue-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "AWS S3", color: "green-text-gradient" },
        ],
      },
      {
        name: "Future Travel",
        description:
          "Платформа ташкентского туристического агентства, занимающегося международными турами и визовой поддержкой. Бэкенд охватывает каталог туров по Турции, Дубаю, Таиланду и Мальдивам, а также городам Великого шёлкового пути, скидочные кампании «hot deals», поток заявок на консультацию с ответом за 15 минут, отзывы клиентов и двуязычный русско-узбекский слой контента.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "NestJS", color: "green-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "TypeORM", color: "blue-text-gradient" },
          { name: "AWS S3", color: "green-text-gradient" },
          { name: "REST API", color: "pink-text-gradient" },
        ],
      },
    ],
  },
  contact: {
    p: "Свяжитесь со мной",
    h2: "Контакты.",
    socialsTitle: "Связаться со мной",
    form: {
      name: { span: "Ваше имя", placeholder: "Как вас зовут?" },
      email: { span: "Ваш Email", placeholder: "Какой у вас email?" },
      message: { span: "Ваше сообщение", placeholder: "Что вы хотите сказать?" },
    },
    send: "Отправить сообщение",
    sending: "Отправка...",
    success: "Спасибо! Я свяжусь с вами в ближайшее время.",
    error: "Что-то пошло не так. Пожалуйста, попробуйте снова.",
  },
};
