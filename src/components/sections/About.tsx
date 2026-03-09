import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { serviceIcons } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../i18n";

interface IServiceCard {
  index: number;
  title: string;
  subtitle: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, subtitle, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-8 py-5">
          <img
            src={icon}
            alt={title}
            className="h-16 w-16 object-contain"
          />
          <div className="text-center">
            <h3 className="text-[20px] font-bold text-white">{title}</h3>
            <p className="mt-1 text-[14px] text-[#915EFF] font-medium">{subtitle}</p>
          </div>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

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

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {t.about.cards.map((card, index) => (
          <ServiceCard
            key={card.title}
            index={index}
            title={card.title}
            subtitle={card.subtitle}
            icon={serviceIcons[index]?.icon ?? ""}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
