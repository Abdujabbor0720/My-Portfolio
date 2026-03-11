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
  liveLink: string;
  liveLabel: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  liveLink,
  liveLabel,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.6)}>
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

            {/* CTA Button */}
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
    liveLink: projectVisuals[i]?.liveLink ?? "#",
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
