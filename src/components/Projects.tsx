import { useState } from "react";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/data";
import { Link } from "react-router-dom";
import { github } from "../assets";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Handle project click and open the modal
  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Close modal handler
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null); // Reset the selected project when modal is closed
  };

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>
      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. These projects reflect my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-7">
        {projects.length > 0 ? (
          projects
            .slice()
            .reverse()
            .map((project) =>
              project.enabled ? (
                <div
                  key={project._id}
                  className="p-5 rounded-2xl sm:w-[360px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] cursor-pointer"
                >
                  <div className="relative w-full h-[230px]">
                    <img
                      src={project.image}
                      alt="project_image"
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </div>
                  <div>
                    <div className="mt-5 flex justify-between">
                      <h3 className="text-white font-bold text-[24px]">
                        {project.title}
                        <span
                          onClick={() => handleProjectClick(project)} // Open modal when project clicked
                          className="text-[12px] ml-2 text-blue-600 "
                        >
                          Read more...
                        </span>
                      </h3>
                      <div className="flex items-center">
                        <div className="bg-[#000000] w-10 h-10 rounded-full flex justify-center items-center ml-5 cursor-pointer">
                          <Link to={project.githuburl} target="_blank">
                            <img
                              src={github}
                              alt="source code"
                              className="w-1/2 h-1/2 object-contain m-auto"
                            />
                          </Link>
                        </div>
                        <div className="bg-[#000000] w-10 h-10 rounded-full flex justify-center items-center ml-5 cursor-pointer text-red-500 text-[12px] font-bold  ">
                          <Link to={project.liveurl} target="_blank">
                            Live
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            )
        ) : (
          <p>No projects found.</p>
        )}
      </div>

      {/* Show modal if a project is selected and the modal is active */}
      {showModal && selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default SectionWrapper(Projects, "projects");
