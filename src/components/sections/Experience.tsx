import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experienceVisuals } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../i18n";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header useMotion={true} p={t.experience.p} h2={t.experience.h2} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {t.experience.jobs.map((job, index) => {
            const visual = experienceVisuals[index];
            return (
              <VerticalTimelineElement
                key={`${job.companyName}-${index}`}
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #232631",
                }}
                date={job.date}
                iconStyle={{ background: visual?.iconBg ?? "#1d1836" }}
                icon={
                  <div className="flex h-full w-full items-center justify-center">
                    <img
                      src={visual?.icon}
                      alt={job.companyName}
                      className="h-[60%] w-[60%] object-contain"
                    />
                  </div>
                }
              >
                <div>
                  <h3 className="text-[24px] font-bold text-white">
                    {job.title}
                  </h3>
                  <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                  >
                    {job.companyName}
                  </p>
                </div>

                <ul className="ml-5 mt-5 list-disc space-y-2">
                  {job.points.map((point, i) => (
                    <li
                      key={`point-${i}`}
                      className="text-white-100 pl-1 text-[14px] tracking-wider"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
