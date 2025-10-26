import { useState, useEffect } from "react";
import { SkillsInfo } from "../data";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % SkillsInfo.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setActiveCategory((prev) =>
      prev === 0 ? SkillsInfo.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setActiveCategory((prev) => (prev + 1) % SkillsInfo.length);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 lg:px-20 font-sans bg-gradient-to-b from-purple-50/30 to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">
            SKILLS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            An overview of my technical capabilities gained through continuous
            learning and project-based work.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {SkillsInfo.map((category, index) => (
            <button
              key={category.title}
              onClick={() => {
                setActiveCategory(index);
                setIsAutoPlaying(false);
              }}
              className={`px-4 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                activeCategory === index
                  ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300 hover:shadow-md"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 lg:-left-3 md:left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white hover:bg-purple-50 text-purple-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous category"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 lg:-right-3 md:right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white hover:bg-purple-50 text-purple-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next category"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-200">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                {SkillsInfo[activeCategory].title}
              </h3>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {SkillsInfo[activeCategory].skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center gap-3 bg-purple-50 hover:bg-gradient-to-br hover:from-purple-100 hover:to-pink-50 rounded-xl p-5 transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer border-2 border-transparent hover:border-purple-300"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
                    }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="relative w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:rotate-12"
                      />
                    </div>
                    <span className="text-xs md:text-sm font-bold text-gray-800 text-center leading-tight group-hover:text-purple-600 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {SkillsInfo.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCategory(index);
                  setIsAutoPlaying(false);
                }}
                className={`transition-all duration-300 rounded-full ${
                  activeCategory === index
                    ? "w-8 h-2 bg-gradient-to-r from-purple-500 to-purple-600"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to ${SkillsInfo[index].title}`}
              />
            ))}
          </div>

          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Skills;
