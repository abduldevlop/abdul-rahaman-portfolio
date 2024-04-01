import { useEffect, useState } from "react";
import axios from "axios";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import ProjectModal from "./ProjectModal";
import { Tproject } from "../types";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const [filters, setFilters] = useState({
    react: false,
    next: false,
    tailwind: false,
    mern: false,
  });

  const handleFilterChange = (event: any) => {
    const { name, checked } = event.target;
    setFilters({
      ...filters,
      [name]: checked,
    });
  };
  const filteredProjects = projects.filter((project: Tproject) => {
    if (
      filters.react &&
      !project.techStack.some((tech) => tech.includes("Reactjs"))
    ) {
      return false;
    }
    if (
      filters.next &&
      !project.techStack.some((tech) => tech.includes("Nextjs"))
    ) {
      return false;
    }
    if (
      filters.tailwind &&
      !project.techStack.some((tech) => tech.includes("TailwindCSS"))
    ) {
      return false;
    }
    if (
      filters.mern &&
      !project.techStack.some((tech) => tech.includes("Mern"))
    ) {
      return false;
    }
    return true;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        setProjects(response.data.user.projects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
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
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
      <div className="mt-10 flex gap-5 text-[14px] flex-wrap ">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="react"
            checked={filters.react}
            onChange={handleFilterChange}
            className="form-checkbox text-primary border-primary"
          />
          <span className="ml-2">React.js</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="next"
            checked={filters.next}
            onChange={handleFilterChange}
            className="form-checkbox text-primary border-primary"
          />
          <span className="ml-2">Next.js</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="tailwind"
            checked={filters.tailwind}
            onChange={handleFilterChange}
            className="form-checkbox text-primary border-primary"
          />
          <span className="ml-2">Tailwind CSS</span>
        </label>

        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="mern"
            checked={filters.mern}
            onChange={handleFilterChange}
            className="form-checkbox text-primary border-primary"
          />
          <span className="ml-2">MERN</span>
        </label>
      </div>
      <div className="mt-5 flex flex-wrap gap-7">
        {filteredProjects.length > 0 ? (
          filteredProjects
            .slice()
            .reverse()
            .map((project: Tproject) =>
              project.enabled ? (
                <div
                  key={project._id}
                  className="p-5 rounded-2xl sm:w-[360px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative w-full h-[230px] ">
                    <img
                      src={project.image.url}
                      alt="project_image"
                      className="w-full h-full object-cover rounded-2xl "
                    />
                  </div>
                  <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ) : null
            )
        ) : (
          <p>No projects found.</p>
        )}
      </div>

      {showModal && selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default SectionWrapper(Projects, "projects");
