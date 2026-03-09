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
    content:
      "Следующие проекты демонстрируют мою экспертизу в бэкенд-разработке через реальные производственные системы. Каждый проект показывает масштабируемую архитектуру, проектирование баз данных, разработку API и оптимизацию производительности.",
    projects: [
      {
        name: "MVP Football",
        description:
          "Модульный NestJS REST API для платформы управления футбольной лигой с TypeORM, обработкой медиа через AWS S3, RBAC для ролей admin/referee/player и обновлениями матча в реальном времени через WebSocket.",
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
          "Полнофункциональный бэкенд e-learning с комплексным RBAC (студент/преподаватель/admin), безопасным стримингом видео, загрузкой файлов по частям, биллингом подписок и 50+ задокументированными REST-эндпоинтами.",
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
          "Бэкенд платформы бронирования для авиабилетов, отелей и туров с оптимизированными Prisma-запросами, мультивалютной обработкой платежей, поддержкой отката транзакций и автоматическими email-уведомлениями.",
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
