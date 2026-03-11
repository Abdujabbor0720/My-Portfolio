import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { herobg, profilePhoto } from "../../assets";
import { useLanguage } from "../../i18n";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative mx-auto h-screen w-full overflow-hidden bg-[#050816]">
      {/* Hero background image */}
      <img
        src={herobg}
        alt="hero background"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
        loading="eager"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/40 via-transparent to-[#050816]/80" />

      {/* Hero content */}
      <div
        className={`pointer-events-none absolute inset-0 top-[70px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-center justify-between gap-5`}
      >
        {/* Left: accent line + text */}
        <div className="flex flex-row items-start gap-5 flex-1">
          {/* Decorative accent line */}
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
            <div className="violet-gradient h-40 w-1 sm:h-80" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              {t.hero.greeting}{" "}
              <span className="text-[#915EFF]">{t.hero.name}</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              {t.hero.subtitle1}
              <br className="hidden sm:block" />
              {t.hero.subtitle2}
            </p>

            {/* Tech-stack badge strip */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-[13px] font-medium border border-[#915EFF55] text-[#915EFF] bg-[#915EFF11]"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* CTA button */}
            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pointer-events-auto mt-8 inline-flex items-center gap-3 rounded-full bg-[#915EFF] px-7 py-3 font-bold text-white shadow-lg shadow-[#915EFF44] hover:bg-[#7c4ed4] hover:shadow-[#915EFF66] transition-all duration-300 group"
            >
              <span>{t.hero.viewProjects}</span>
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Right: profile photo */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pointer-events-none hidden lg:flex flex-shrink-0 items-center justify-center"
        >
          <div className="relative">
            {/* Background glow blob */}
            <div className="absolute -inset-6 rounded-[40px] bg-[#915EFF] opacity-[0.12] blur-3xl" />
            {/* Gradient border wrapper */}
            <div className="relative rounded-[28px] p-[2px]"
              style={{ background: "linear-gradient(160deg, #915EFF 0%, #915EFF44 50%, #915EFF11 100%)" }}
            >
              {/* Inner card */}
              <div className="overflow-hidden rounded-[26px] bg-[#0d0b1e]">
                <img
                  src={profilePhoto}
                  alt="Abdujabbor Sharobiddinov"
                  className="h-[380px] w-[270px] object-cover"
                  style={{ objectPosition: "center 8%" }}
                  loading="eager"
                />
                {/* Bottom fade into background */}
                <div className="absolute bottom-0 left-0 right-0 h-20 rounded-b-[26px]"
                  style={{ background: "linear-gradient(to top, #050816 0%, transparent 100%)" }}
                />
              </div>
            </div>
            {/* Top-right accent dot */}
            <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-[#915EFF] shadow-lg shadow-[#915EFF88]" />
            {/* Bottom-left accent dot */}
            <div className="absolute -bottom-2 -left-2 h-3 w-3 rounded-full border-2 border-[#915EFF] bg-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="xs:bottom-10 pointer-events-none absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about" className="pointer-events-auto">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
