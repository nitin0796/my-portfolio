import { education } from "../data";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-12 lg:px-20 font-sans bg-gradient-to-b from-purple-50/30 to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">
            EDUCATION
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Here is an overview of my academic background, reflecting my journey
            of learning and development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-300 via-purple-400 to-purple-300 hidden md:block"></div>

          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="relative mb-16 last:mb-0"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
              }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>

              {/* Content Card */}
              <div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:justify-start md:text-left"
                    : "md:justify-end md:text-right"
                }`}
              >
                <div
                  className={`w-full md:w-[calc(50%-3rem)] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  {/* Card Header with Gradient */}
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-xl overflow-hidden shadow-lg flex-shrink-0 p-2">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 text-white">
                      <h3 className="text-xl md:text-2xl font-bold mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-100 text-sm md:text-base font-medium">
                        {edu.school}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-purple-600 font-semibold mb-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm md:text-base">{edu.date}</span>
                    </div>

                    <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                      {edu.desc}
                    </p>

                    {/* Optional: Grade or Achievement Badge */}
                    {edu.grade && (
                      <div className="mt-4 inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold border border-purple-200">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {edu.grade}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Connector Line for Mobile */}
              <div className="md:hidden w-1 h-8 bg-gradient-to-b from-purple-400 to-purple-300 mx-auto mt-8"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
