import { education } from "../data";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#111111]">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-[#6B7280] mt-4 text-lg font-semibold">
          Here is an overview of my academic background, reflecting my journey
          of learning and development.
        </p>
      </div>

      <div className="relative">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl 
          bg-[#F9FAFB] backdrop-blur-md shadow-xl  
          transform transition-transform duration-300 hover:scale-105 
          ${
            index % 2 === 0
              ? "sm:ml-36 border-l-8 border-[#A78BFA]"
              : "sm:mr-36 border-r-8 border-[#A78BFA]"
          } ml-8`}
            >
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#111111]">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-400">
                      {edu.school}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-[#6B7280]">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
