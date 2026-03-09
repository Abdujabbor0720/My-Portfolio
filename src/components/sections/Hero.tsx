import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas, StarsCanvas } from "../canvas";
import { useLanguage } from "../../i18n";
import { ErrorBoundary } from "../layout/ErrorBoundary";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative mx-auto h-screen w-full overflow-hidden bg-[#050816]">
      {/* Animated star field background */}
      <StarsCanvas />

      {/* 3D Computer model — isolated so a WebGL crash can't blank the page */}
      <div className="absolute inset-0">
        <ErrorBoundary fallback={<div className="h-full w-full" />}>
          <ComputersCanvas />
        </ErrorBoundary>
      </div>

      {/* Hero text — pointer-events-none so mouse events pass through to the canvas for rotation */}
      <div
        className={`pointer-events-none absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
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

          {/* CTA button — pointer-events-auto so it stays clickable */}
          <motion.a
            href="#work"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pointer-events-auto mt-8 inline-flex items-center gap-3 rounded-full bg-[#915EFF] px-7 py-3 font-bold text-white shadow-lg shadow-[#915EFF44] hover:bg-[#7c4ed4] hover:shadow-[#915EFF66] transition-all duration-300 group"
          >
            <span>{t.hero.viewProjects}</span>
            {/* Arrow icon */}
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
