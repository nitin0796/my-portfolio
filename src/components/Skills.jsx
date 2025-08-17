import { SkillsInfo } from "../data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111111]">
          SKILLS
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-[#6B7280] mt-4 text-lg font-semibold">
          An overview of my technical capabilities gained through continuous
          learning and project-based work.
        </p>
      </div>

      <div className="flex flex-wrap lg:px-[10vw] gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-white backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-xl border border-[#F9FAFB] shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#111111] mb-5 text-center">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center gap-2 bg-[#EDE9FE] border border-[#8245EC] rounded-xl p-3 text-center overflow-hidden"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain mb-2"
                  />
                  <span className="text-xs sm:text-sm text-[#111111] break-words text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
