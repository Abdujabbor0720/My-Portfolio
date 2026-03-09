import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="group flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-xl bg-[#1d1836] border border-[#915EFF22] p-3 cursor-default transition-all duration-300 hover:border-[#915EFF] hover:shadow-[0_0_16px_#915EFF44] hover:-translate-y-1"
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-14 w-14 object-contain"
          />
          <span className="text-[10px] text-secondary text-center leading-tight group-hover:text-white transition-colors">
            {technology.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
