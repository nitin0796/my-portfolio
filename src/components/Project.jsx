import { useState } from "react";
import { projects } from "../data";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    console.log(project);
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#111111]">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-[#6B7280] mt-4 text-lg font-semibold">
          A curated collection of my projects that demonstrate my technical
          expertise, problem-solving ability, and experience working with
          diverse tools and frameworks.
        </p>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-[#E5E7EB] bg-[#F9FAFB] w-full backdrop-blur-md rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-[#A78BFA] hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#111111]">
                {project.title}
              </h3>
              <p className="text-[#6B7280] mb-4 pt-5 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block bg-[#E5DDFF] text-xs font-semibold text-[#8245EC] rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-90 bg-black/40 p-4">
          <div className="bg-[#F9FAFB] rounded-xl shadow-2xl lg:w-full w-[90%] max-w-md overflow-hidden relative">
            <div className="flex justify-end p-2">
              <button
                onClick={handleCloseModal}
                className="text-[#111111] text-2xl font-semibold hover:text-[#A78BFA]"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex justify-center px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#111111] mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-[#6B7280] mb-6 text-sm">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#e5ddff] text-sm font-semibold text-[#8245EC] rounded-full px-3 py-1 "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 justify-center">
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-[#8245EC] hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
