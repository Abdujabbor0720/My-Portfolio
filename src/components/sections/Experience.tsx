import { motion } from "framer-motion";

import { experienceVisuals } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../i18n";

/* ---------------------------------------------------------------- icons -- */

const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <rect x="3" y="7.5" width="18" height="12.5" rx="2.5" />
    <path d="M8.5 7.5V5.8A1.8 1.8 0 0 1 10.3 4h3.4a1.8 1.8 0 0 1 1.8 1.8v1.7" strokeLinejoin="round" />
    <path d="M3 12.5h18" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" strokeLinecap="round" />
  </svg>
);

/* ------------------------------------------------------------------ job -- */

interface JobCardProps {
  index: number;
  title: string;
  companyName: string;
  date: string;
  location: string;
  type: string;
  points: string[];
  stack: string[];
  currentLabel: string;
}

const JobCard: React.FC<JobCardProps> = ({
  index,
  title,
  companyName,
  date,
  location,
  type,
  points,
  stack,
  currentLabel,
}) => {
  const visual = experienceVisuals[index];
  const accent = visual?.accent ?? "#915EFF";

  return (
    // Self-contained viewport trigger: the parent section only fires once, so a
    // card that remounts (e.g. on a language switch) must animate itself back in.
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeIn("up", "spring", index * 0.12, 0.6)}
      className="relative"
    >
      {/* Timeline node */}
      <span
        className="absolute -left-[42px] top-8 hidden h-3.5 w-3.5 rounded-full ring-4 ring-[#050816] sm:block"
        style={{ backgroundColor: accent }}
        aria-hidden="true"
      />

      <article className="rounded-2xl border border-white/10 bg-[#171331] p-6 transition-colors duration-300 hover:border-white/20 sm:p-7">
        {/* Header */}
        <div className="flex flex-wrap items-start gap-4">
          {/* Company mark: real logo when available, monogram otherwise */}
          <div
            className="flex h-[68px] w-[68px] flex-shrink-0 items-center justify-center rounded-2xl border text-[19px] font-black tracking-tight"
            style={{
              borderColor: `${accent}40`,
              backgroundColor: visual?.logo
                ? visual.logoBg ?? "#ffffff0f"
                : `${accent}14`,
              color: accent,
            }}
          >
            {visual?.logo ? (
              <img
                src={visual.logo}
                alt={companyName}
                className="h-[54px] w-[54px] object-contain"
                loading="lazy"
              />
            ) : (
              visual?.monogram
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3 className="text-[20px] font-bold leading-tight text-white sm:text-[22px]">
                {title}
              </h3>
              {visual?.current && (
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-400 ring-1 ring-emerald-500/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {currentLabel}
                </span>
              )}
            </div>
            <p
              className="mt-1 text-[15px] font-semibold"
              style={{ color: accent }}
            >
              {companyName}
            </p>
          </div>
        </div>

        {/* Meta row */}
        <div className="text-secondary mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-white/5 py-3 text-[13px]">
          <span className="flex items-center gap-1.5">
            <CalendarIcon />
            {date}
          </span>
          <span className="flex items-center gap-1.5">
            <PinIcon />
            {location}
          </span>
          <span className="flex items-center gap-1.5">
            <BriefcaseIcon />
            {type}
          </span>
        </div>

        {/* Highlights */}
        <ul className="mt-5 space-y-3">
          {points.map((point, i) => (
            <li
              key={`point-${i}`}
              className="text-white-100 flex gap-3 text-[14px] leading-[24px]"
            >
              <span
                className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ backgroundColor: accent }}
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Stack */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-[#c3bcdf] ring-1 ring-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    </motion.div>
  );
};

const Experience = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header useMotion={true} p={t.experience.p} h2={t.experience.h2} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {t.experience.content}
      </motion.p>

      <div className="relative mt-14 flex flex-col gap-6 sm:pl-[52px]">
        {/* Timeline rail */}
        <span
          className="absolute bottom-6 left-[6px] top-6 hidden w-px bg-gradient-to-b from-[#38bdf8] via-[#915EFF66] to-transparent sm:block"
          aria-hidden="true"
        />

        {t.experience.jobs.map((job, index) => (
          // Keyed by position, not by name: translated company names would change
          // the key on every language switch and needlessly remount the card.
          <JobCard
            key={`job-${index}`}
            index={index}
            currentLabel={t.experience.current}
            {...job}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
