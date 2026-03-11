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
      "Men 1 yildan ortiq amaliy tajribaga ega, Node.js va NestJS ixtisoslashgan Backend Dasturchisiman. Ishlab chiqarishga tayyor API'lar va kengaytiriladigan mikroservis arxitekturalarini qurishda keng tajribaga egaman. RESTful va GraphQL API'larni loyihalayman, PostgreSQL va MongoDB bilan mustahkam ma'lumotlar bazasi sxemalarini arxitektiriman, Redis keshlash strategiyalarini qo'llayman hamda WebSocket va Telegram Web App yordamida real vaqtli tizimlarni ishlab chiqaman. Toza arxitektura, SOLID tamoyillari va murakkab backend muammolarini ishonchli, qo'llab-quvvatlanadigan yechimga aylantirishga ishtiyoqliman.",
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
    liveLabel: "Loyihani ko'rish",
    content:
      "Quyidagi loyihalar men arxitektira qilgan va ishga tushirgan real ishlab chiqarish tizimlaridir. Har biri kengaytiriladigan API dizayni, ma'lumotlar bazasi muhandisligi va yuqori unumdorlik tamoyillarini namoyish etadi.",
    projects: [
      {
        name: "Eastway Travel",
        description:
          "Uzluksiz bron qilish oqimlari, murakkab sayohat filtrlash va past kechikishli ma'lumotlarni olish uchun yaratilgan yuqori unumdor sayohat bron qilish platformasi. Prisma-optimallashtirilgan relyatsion sxemalar va AWS S3 media pipeline asosida arxitektura qilingan.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "NestJS", color: "green-text-gradient" },
          { name: "Prisma", color: "blue-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "AWS S3", color: "green-text-gradient" },
        ],
      },
      {
        name: "Uyg'un O'quv Platformasi",
        description:
          "Korporativ darajadagi Rol Asosidagi Kirish Nazorati (RBAC), xavfsiz video kontent yetkazib berish va batafsil progress kuzatish tizimiga ega keng qamrovli e-ta'lim ekotizimi. Talaba, o'qituvchi va admin rollarida yuqori bir vaqtda ishlash uchun yaratilgan.",
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
          "Toshkent Davlat Tibbiyot Universitetida 5000+ faol foydalanuvchiga xizmat ko'rsatuvchi korporativ Telegram ekotizimi. Real vaqtli admin sinxronizatsiyasi, yangiliklar tarqatish va Next.js asosida qurilgan Telegram Web App frontendi mavjud.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
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
          "Metall qurilish kompaniyasi uchun sanoat miqyosidagi platforma. Og'ir xizmat so'rovlarini qayta ishlash uchun asinxron vazifalar navbati (BullMQ), AWS S3 aktivlarini boshqarish va tuzilgan loyiha portfolio mexanizmi asosida ishlaydi.",
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
          "Sun'iy intellekt asosida mahsulot tavsiyalari, xalqaro to'lov tizimi integratsiyasi va Bunny.net orqali yuqori tezlikli CDN yetkazib berish xususiyatiga ega keyingi avlod hashamatli e-commerce platformasi. Next.js storefront bilan to'liq stack arxitektura.",
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
        name: "Airways System",
        description:
          "Aviakompaniyalar faoliyatini boshqarish va parvoz jarayonlarini nazorat qilish uchun ishlab chiqilgan backend tizim. Loyihada 271 ta REST API endpoint ishlab chiqilgan bo'lib, ular orqali reyslar, yo'nalishlar, samolyotlar, yo'lovchilar, bron qilish jarayonlari va aviatsiya operatsiyalarini boshqarish imkoniyati yaratilgan.",
        tags: [
          { name: "TypeScript", color: "blue-text-gradient" },
          { name: "NestJS", color: "green-text-gradient" },
          { name: "PostgreSQL", color: "pink-text-gradient" },
          { name: "TypeORM", color: "blue-text-gradient" },
          { name: "Redis", color: "pink-text-gradient" },
          { name: "Docker", color: "green-text-gradient" },
        ],
      },
      {
        name: "MVP Football Academy",
        description:
          "App Store va Google Play'da 10,000+ faol foydalanuvchiga ega futbol akademiyasi platformasi. Murabbiy bron qilish, real-vaqt liderlar jadvali, foydalanuvchi statistikasi, AI chatbot integratsiyasi va Firebase push bildirishnomalarini o'z ichiga olgan to'liq backendni noldan yaratdi.",
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
