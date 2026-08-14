import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { projectVisuals } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../i18n";

/* ---------------------------------------------------------------- icons -- */

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
    <path d="M10.5 18.5h3" strokeLinecap="round" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
  </svg>
);

const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 12.53c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.61-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.75-.78-2.87-.76-1.48.02-2.84.86-3.6 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.25 2.74 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.7.71 2.86.69 1.18-.02 1.93-1.08 2.65-2.14.83-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.32-3.52M14.9 5.2c.6-.74 1.02-1.76.9-2.78-.87.04-1.94.59-2.57 1.32-.56.65-1.06 1.7-.93 2.7.98.08 1.98-.5 2.6-1.24"/>
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76a2 2 0 01-.94-1.76V2a2 2 0 01.94-1.76l.11-.06 12.2 12.2-.11.11L3.18 23.76zm15.01-8.64l-2.42-2.42 2.42-2.42 2.82 1.6a1.62 1.62 0 010 2.65l-2.82 1.59zM4.47 23.07l10.59-10.6-2.37-2.36L4.47 23.07zM4.47.93l8.22 8.22-2.37 2.37L4.47.93z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

/* ----------------------------------------------------------------- card -- */

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  liveLink?: string;
  liveLabel: string;
  mobileBadge: string;
  webBadge: string;
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
  mobileBadge,
  webBadge,
  appStoreLink,
  playStoreLink,
}) => {
  const isMobileApp = Boolean(appStoreLink || playStoreLink);

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
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Platform badge */}
            <span
              className={`absolute left-3 top-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-sm ${
                isMobileApp
                  ? "bg-gradient-to-r from-violet-600 to-indigo-500 ring-1 ring-white/25"
                  : "bg-sky-600/90 ring-1 ring-white/20"
              }`}
            >
              {isMobileApp ? <PhoneIcon /> : <GlobeIcon />}
              {isMobileApp ? mobileBadge : webBadge}
            </span>

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

            {/* CTAs — website first, stores below */}
            <div className="mt-5 flex flex-col gap-2">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 py-2.5 text-[14px] font-semibold text-white shadow-md transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-violet-500/30"
                >
                  <span>{liveLabel}</span>
                  <ExternalIcon />
                </a>
              )}

              {isMobileApp && (
                <div className="flex gap-2">
                  {appStoreLink && (
                    <a
                      href={appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-black py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-white/10"
                    >
                      <AppleIcon />
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
                      <PlayIcon />
                      <span>Google Play</span>
                    </a>
                  )}
                </div>
              )}
            </div>
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
            mobileBadge={t.works.mobileBadge}
            webBadge={t.works.webBadge}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
