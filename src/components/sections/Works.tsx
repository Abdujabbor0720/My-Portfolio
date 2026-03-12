import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { projectVisuals } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../i18n";

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  liveLink?: string;
  liveLabel: string;
  appStoreLink?: string;
  playStoreLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  liveLink,
  liveLabel,
  appStoreLink,
  playStoreLink,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
    >
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        glareColor="#6366f133"
        glareMaxOpacity={0.25}
        className="h-full"
      >
        <div className="bg-tertiary flex h-full w-full flex-col overflow-hidden rounded-2xl sm:w-[340px]">
          {/* Image */}
          <div className="relative h-[200px] w-full flex-shrink-0 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            {/* Live badge */}
            <span className="absolute right-3 top-3 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
              LIVE
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-[20px] font-bold text-white">{name}</h3>

            <p className="text-secondary mt-2 flex-1 text-[13px] leading-[22px]">
              {description}
            </p>

            {/* Tech Stack Tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`rounded-md bg-white/5 px-2 py-1 text-[11px] font-medium ${tag.color}`}
                >
                  {tag.name}
                </span>
              ))}
            </div>

            {/* CTA Button(s) */}
            {appStoreLink || playStoreLink ? (
              <div className="mt-5 flex gap-2">
                {appStoreLink && (
                  <a
                    href={appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-black py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-white/10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 814 1000" fill="currentColor">
                      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 405.8 15.6 266.2 15.6 132.8c0-76 26.4-148.2 75.2-199.8C146.4-118.6 226.6-156 302 -156c61.6 0 110 39.5 148.4 39.5 36.9 0 94.7-42.8 164-42.8zm-35.8-186.9c34.9-41.5 59.8-99.3 59.8-157.1 0-8.3-.6-16.6-2-24.3-56.8 2.2-124.8 37.8-165.9 85.2-31.6 36.9-61.6 94.7-61.6 153.2 0 9 1.4 18 2 20.7 3.8.6 9.7 1.4 15.5 1.4 51.5 0 115.7-33.7 152.2-79.1z"/>
                    </svg>
                    <span>App Store</span>
                  </a>
                )}
                {playStoreLink && (
                  <a
                    href={playStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#01875f] py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:opacity-90"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.18 23.76a2 2 0 01-.94-1.76V2a2 2 0 01.94-1.76l.11-.06 12.2 12.2-.11.11L3.18 23.76zm15.01-8.64l-2.42-2.42 2.42-2.42 2.82 1.6a1.62 1.62 0 010 2.65l-2.82 1.59zM4.47 23.07l10.59-10.6-2.37-2.36L4.47 23.07zM4.47.93l8.22 8.22-2.37 2.37L4.47.93z"/>
                    </svg>
                    <span>Google Play</span>
                  </a>
                )}
              </div>
            ) : (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 py-2.5 text-[14px] font-semibold text-white shadow-md transition-all duration-200 hover:opacity-90 hover:shadow-violet-500/30 hover:shadow-lg"
              >
                <span>{liveLabel}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { t } = useLanguage();

  const projects = t.works.projects.map((proj, i) => ({
    ...proj,
    image: projectVisuals[i]?.image ?? "",
    liveLink: projectVisuals[i]?.liveLink,
    appStoreLink: projectVisuals[i]?.appStoreLink,
    playStoreLink: projectVisuals[i]?.playStoreLink,
  }));

  return (
    <>
      <Header useMotion={true} p={t.works.p} h2={t.works.h2} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {t.works.content}
        </motion.p>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-6 sm:justify-start">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            liveLabel={t.works.liveLabel}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
