import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { serviceAccents, type ServiceIconKey } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../i18n";

/* ---------------------------------------------------------------- icons -- */
/* Line icons, 1.6px stroke on a 24px grid — one visual family across cards. */

const ServerIcon = () => (
  <>
    <rect x="3" y="3.5" width="18" height="6" rx="2" />
    <rect x="3" y="14.5" width="18" height="6" rx="2" />
    <path d="M7 6.5h.01M7 17.5h.01" strokeLinecap="round" />
    <path d="M15.5 6.5h3M15.5 17.5h3" strokeLinecap="round" />
  </>
);

const DatabaseIcon = () => (
  <>
    <ellipse cx="12" cy="5.5" rx="8" ry="3" />
    <path d="M4 5.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    <path d="M4 11.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
  </>
);

const GaugeIcon = () => (
  <>
    <path d="M3.5 17.5a9 9 0 1 1 17 0" />
    <path d="M12 17.5l4.2-5.6" strokeLinecap="round" />
    <circle cx="12" cy="17.5" r="1.6" />
    <path d="M12 4v1.8M4.9 7.4l1.3 1.3M19.1 7.4l-1.3 1.3" strokeLinecap="round" />
  </>
);

const TelegramIcon = () => (
  <>
    <path d="M21.2 4.3 2.9 11.2c-.9.35-.86 1.65.06 1.94l4.7 1.47 1.77 5.1c.27.79 1.3.97 1.83.32l2.4-2.94 4.6 3.38c.62.46 1.5.12 1.66-.63l3.1-14.4c.17-.79-.6-1.44-1.32-1.16Z" />
    <path d="m7.66 14.6 10.5-7.6-7.3 8.3-.32 4.1" strokeLinejoin="round" />
  </>
);

const ICONS: Record<ServiceIconKey, () => JSX.Element> = {
  server: ServerIcon,
  database: DatabaseIcon,
  gauge: GaugeIcon,
  telegram: TelegramIcon,
};

/* ----------------------------------------------------------------- card -- */

interface IServiceCard {
  index: number;
  title: string;
  subtitle: string;
  iconKey: ServiceIconKey;
  accent: string;
}

const ServiceCard: React.FC<IServiceCard> = ({
  index,
  title,
  subtitle,
  iconKey,
  accent,
}) => {
  const Icon = ICONS[iconKey];

  return (
    <Tilt
      glareEnable
      tiltEnable
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareColor="#aaa6c3"
      glareMaxOpacity={0.12}
      className="w-[240px]"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn("up", "spring", index * 0.2, 0.6)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[240px] flex-col items-center justify-center gap-5 rounded-[20px] px-6 py-8">
          {/* Icon tile */}
          <div
            className="flex h-[62px] w-[62px] items-center justify-center rounded-2xl border"
            style={{
              borderColor: `${accent}40`,
              backgroundColor: `${accent}14`,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8"
              fill="none"
              stroke={accent}
              strokeWidth={1.6}
              aria-hidden="true"
            >
              <Icon />
            </svg>
          </div>

          {/* Fixed-height title block keeps icons aligned when a title wraps */}
          <div className="text-center">
            <div className="flex min-h-[52px] items-center justify-center">
              <h3 className="text-[18px] font-bold leading-snug text-white">
                {title}
              </h3>
            </div>
            <p className="mt-1 text-[13px] font-medium text-[#915EFF]">
              {subtitle}
            </p>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header useMotion={true} p={t.about.p} h2={t.about.h2} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {t.about.content}
      </motion.p>

      <div className="mt-16 flex flex-wrap justify-center gap-6 sm:justify-start">
        {t.about.cards.map((card, index) => {
          const accent = serviceAccents[index];
          return (
            <ServiceCard
              key={index}
              index={index}
              title={card.title}
              subtitle={card.subtitle}
              iconKey={accent.key}
              accent={accent.color}
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
