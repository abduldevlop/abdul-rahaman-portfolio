import { IoMdClose } from "react-icons/io";
import { github } from "../assets";
import { Link } from "react-router-dom";
import { Tproject } from "../types";

interface ProjectModalProps {
  project: Tproject;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center mt-20 items-center xl:mt-20">
      <div className="bg-white p-5 md:p-10 rounded-lg max-w-md relative mx-5">
        <button className="absolute top-1 right-2 text-black" onClick={onClose}>
          <IoMdClose size={30} />
        </button>
        <div className="relative w-full h-[230px] cursor-pointer">
          <img
            src={project.image.url}
            alt="project_image"
            className="w-full h-full object-cover rounded- mt-5"
          />
          <div className="absolute inset-0 flex justify-end m-2 card-img_hover">
            <div className="bg-[#0c0c1d] w-10 h-10 rounded-full flex justify-center items-center ml-5 cursor-pointer">
              <Link to={project.githuburl}>
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain m-auto"
                />
              </Link>
            </div>
            <div className="bg-[#0c0c1d] w-10 h-10 rounded-full flex justify-center items-center ml-5 cursor-pointer text-red-500 text-[12px] font-bold  ">
              <Link to={project.liveurl}>Live</Link>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-black font-bold text-[24px]">{project.title}</h3>
          <p className="mt-2 text-black text-[14px]">{project.description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech: any, index: any) => (
            <p key={index} className={`text-[14px] text-black`}>
              #{tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
