import type { Translations } from "./en";

export const uz: Translations = {
  nav: {
    about: "Haqida",
    work: "Tajriba",
    contact: "Aloqa",
  },
  hero: {
    greeting: "Salom, men",
    name: "Abdujabbor",
    subtitle1: "Men kengaytiriladigan Backend Arxitekturalarini",
    subtitle2: "va Yuqori Unumdor API'larni quraman",
    viewProjects: "Loyihalarga o'tish",
  },
  about: {
    p: "Kirish",
    h2: "Umumiy ko'rinish.",
    content:
      "Men Node.js va NestJS ixtisoslashgan Backend Dasturchisiman. Ishlab chiqarishga tayyor API'lar va kengaytiriladigan mikroservis arxitekturalarini qurishda amaliy tajribaga egaman. RESTful va GraphQL API'larni loyihayman, PostgreSQL va MongoDB bilan mustahkam ma'lumotlar bazasi sxemalarini arxitektiraman, Redis keshlash strategiyalarini qo'llaman hamda WebSocket va Telegram Web App yordamida real vaqtli tizimlarni ishlab chiqaman. Toza arxitektura, SOLID tamoyillari va murakkab backend muammolarini ishonchli, qo'llab-quvvatlanadigan yechimga aylantirishga ishtiyoqliman.",
    cards: [
      { title: "Backend Dasturchi", subtitle: "Node.js / NestJS" },
      { title: "Ma'lumotlar Bazasi Arxitektori", subtitle: "PostgreSQL / MongoDB" },
      { title: "Tizim Optimizatsiyasi", subtitle: "API va So'rov Ishlashi" },
      { title: "Telegram WebApp", subtitle: "TWA Mutaxassisi" },
    ],
  },
  experience: {
    p: "Men nima qurdim",
    h2: "Ish Tajribasi.",
    jobs: [
      {
        title: "Backend Dasturchi",
        companyName: "Proger Group",
        date: "2025-yil Sentabr — Hozirgi vaqt",
        points: [
          "JWT + OTP ikki faktorli autentifikatsiya tizimini arxitektirladim, barcha ishlab chiqarish foydalanuvchilari uchun xavfsizlikni sezilarli darajada oshirdim.",
          "Murakkab relyatsion ma'lumotlar modellari uchun Prisma ORM sxemalarini loyihalashtirdim va optimallashtirdim, so'rov samaradorligini 40% oshirdim.",
          "Cho'qqi yuklamalarda o'rtacha API javob vaqtini qisqartiruvchi chuqur so'rov optimallashtirish va indekslash strategiyalarini amalga oshirdim.",
          "AWS S3 bilan integratsiyalashgan kengaytiriladigan media va fayl boshqaruvi uchun ishlab chiqarishga tayyor RESTful API'larni yaratdim.",
        ],
      },
      {
        title: "Backend Dasturchi",
        companyName: "TechHub",
        date: "2025-yil Iyul — 2025-yil Oktabr",
        points: [
          "Toza arxitektura va SOLID dizayn tamoyillariga rioya qilgan holda modulli NestJS xizmatlarini ishlab chiqdim.",
          "PostgreSQL so'rovlari va indekslarini optimallashtirdim, yuqori trafik nuqtalarida ma'lumotlar bazasi yukini 35% kamaytirdim.",
          "Sessiyalarni boshqarish va tez-tez kiriladigan ma'lumotlar uchun Redis keshlash strategiyalarini qo'lladim.",
          "Jonli bildirishnomalar va ikki tomonlama ma'lumotlar sinxronizatsiyasi uchun WebSocket yordamida real vaqtli xususiyatlarni yaratdim.",
        ],
      },
    ],
  },
  works: {
    p: "Mening ishlarim",
    h2: "Loyihalar.",
    content:
      "Quyidagi loyihalar haqiqiy ishlab chiqarish tizimlari orqali backend muhandislik tajribamni ko'rsatadi. Har bir loyiha kengaytiriladigan arxitektura, ma'lumotlar bazasi dizayni, API ishlanmasi va ishlash optimallashtirish ko'nikmalarini namoyish etadi.",
    projects: [
      {
        name: "MVP Football",
        description:
          "TypeORM, AWS S3 media ishlov berish, admin/hakim/o'yinchi rollari uchun RBAC va WebSocket orqali real vaqtli o'yin yangilanishlarini o'z ichiga olgan futbol ligasi boshqaruvi platformasi uchun modulli NestJS REST API.",
        tags: [
          { name: "nestjs", color: "green-text-gradient" },
          { name: "typeorm", color: "blue-text-gradient" },
          { name: "aws-s3", color: "pink-text-gradient" },
        ],
        sourceCodeLink: "https://github.com/Abdujabbor0720",
      },
      {
        name: "Uyg'un O'quv Platformasi",
        description:
          "Keng qamrovli RBAC (talaba/o'qituvchi/admin), xavfsiz video oqim, qismlarga bo'lingan fayl yuklash, obuna to'lovi va 50+ hujjatlashtirilgan REST endpointlari bilan to'liq funksional e-ta'lim backend.",
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
          "Optimallashtirilgan Prisma so'rovlari, ko'p valyutali to'lovlarni qayta ishlash, tranzaksiyani qaytarish qo'llab-quvvatlash va avtomatlashtirilgan elektron pochta xabarnomalarini o'z ichiga olgan parvozlar, mehmonxonalar va tur paketlari uchun bron qilish platformasi backend.",
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
    p: "Bog'laning",
    h2: "Aloqa.",
    socialsTitle: "Men bilan bog'laning",
    form: {
      name: { span: "Ismingiz", placeholder: "Ismingiz nima?" },
      email: { span: "Elektron pochtangiz", placeholder: "Elektron pochtangiz qanday?" },
      message: { span: "Xabaringiz", placeholder: "Nima demoqchisiz?" },
    },
    send: "Xabar Yuborish",
    sending: "Yuborilmoqda...",
    success: "Rahmat! Men sizga imkon qadar tezroq javob beraman.",
    error: "Nimadir noto'g'ri ketdi. Iltimos, qayta urinib ko'ring.",
  },
};
