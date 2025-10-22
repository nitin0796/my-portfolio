import { useState } from "react";
import { projects } from "../data";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-20 font-sans relative bg-gradient-to-b from-white to-purple-50/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">
            PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A curated collection of my projects that demonstrate my technical
            expertise, problem-solving ability, and experience working with
            diverse tools and frameworks.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="group relative border border-[#E5E7EB] bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* View Details Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-white/90 backdrop-blur-sm text-purple-600 font-bold px-6 py-3 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    View Details
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 min-h-[2rem]">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block bg-gradient-to-r from-purple-50 to-pink-50 text-xs font-semibold text-purple-600 rounded-full px-3 py-1.5 border border-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-block bg-gray-100 text-xs font-semibold text-gray-600 rounded-full px-3 py-1.5 border border-gray-300">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 border-b border-gray-100">
              <h3 className="text-xl font-bold text-[#111111]">
                {selectedProject.title}
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 text-3xl font-light leading-none transition-colors duration-200"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-cover"
                />
              </div>

              <p className="text-[#6B7280] text-base leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#111111] mb-3 uppercase tracking-wide">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-purple-50 text-sm font-medium text-purple-600 rounded-full px-4 py-2 border border-purple-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl text-sm font-semibold text-center transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl text-sm font-semibold text-center transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
