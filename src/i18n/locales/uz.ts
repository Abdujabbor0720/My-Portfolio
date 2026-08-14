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
        name: "Tarantool Games",
        description:
          "Markaziy Osiyodagi birinchi AAA tarixiy action-RPG o'yinini yaratayotgan studiya — TaranTool Games uchun rasmiy veb-platforma. Steam wishlist oqimi, investor va hamkorlik so'rovlari, jamoa hamda roadmap kontentini boshqarish va treyler trafigiga moslangan media pipeline bilan ishlaydi.",
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
      {
        name: "UzChess",
        description:
          "WebSocket orqali real vaqtda ko'p o'yinchili shaxmat platformasi — Bullet, Blitz, Rapid va Chess960 formatlari. Arena turnirlari, reyting mexanizmi, boshqotirma tizimi, dvigatel asosidagi o'yin tahlili, mentorlar bilan video kurslar va push bildirishnomalar mavjud.",
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
          "Brendlar va kasting agentliklarini aktyorlar, modellar, videograflar hamda kontent yaratuvchilar bilan bog'lovchi media-talent marketplace. Kasting e'lonlari oqimi, foto va video portfoliolarga ega tasdiqlangan talant profillari, kategoriya va kasb bo'yicha qidiruv hamda mahalliy to'lov tizimlari bilan PRO obuna qatlami ishlab chiqilgan.",
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
          "Filmlar, seriallar va qisqa videolar uchun OTT striming xizmati. Backend ko'p sifatli HLS transkodlash pipeline'lari, film va epizodlarni joylash uchun kreator studiyasi, ko'rish tarixi bilan shaxsiy kutubxona hamda mobil tarmoqlarga moslangan CDN yetkazib berishni qamrab oladi.",
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
          "O'zbekiston iste'dodlari jamiyati uchun ijtimoiy platforma — vokalchilar, raqqoslar, aktyorlar va boshqa ijodkorlarni birlashtiradi. Viloyat va yo'nalish bo'yicha iste'dod qidiruvi, YouTube havolalari bilan foto, video va qisqa kontent lentasi, ijodkorlar o'rtasida bevosita yozishmalar, faollikka asoslangan reyting jadvali hamda o'zbek, rus va ingliz tillarida push bildirishnomalar ishlab chiqilgan.",
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
