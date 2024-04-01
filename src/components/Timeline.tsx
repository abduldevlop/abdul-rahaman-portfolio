import { useEffect, useState } from "react";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import axios from "axios";
import { JobExperience } from "../types";

const Timeline = ({ experience }: { experience: JobExperience }) => {
  return (
    <div className="bg-[#1d1836] text-[#fff] p-5 rounded-xl mt-5">
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {experience.jobTitle}
        </h3>
        <div className="mb-2">
          <span className="text-[12px] text-gray-400">
            {experience.startDate.substring(0, 10)} to
          </span>

          <span className="text-[12px] text-gray-400 ml-2">
            {experience.endDate.substring(0, 10)}
          </span>
        </div>
        <p
          className="text-[14px] xl:text-[16px] font-semibold flex items-center"
          style={{ margin: 0 }}
        >
          {experience.company_name} ,
          <span className="text-[12px] text-green-500 ml-2">
            {experience.jobLocation}
          </span>
        </p>
        <h1 className="text-[14px] mt-2 text-gray-600">
          {experience.summary ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
        </h1>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.bulletPoints.map((point: any, index: any) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        const { timeline } = response.data.user;
        setEducation(
          timeline.filter((exp: any) => exp.enabled && exp.forEducation)
        );
        setExperience(
          timeline.filter((exp: any) => exp.enabled && !exp.forEducation)
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="">
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
        <div className="xl:flex  items-center gap-20  ">
          <div className="flex flex-col mt-10 xl:mt-[-140px]">
            <h3 className="text-2xl font-bold text-center ">Education</h3>
            {education
              .slice()
              .reverse()
              .map((edu: JobExperience) => (
                <Timeline key={edu._id} experience={edu} />
              ))}
          </div>

          <div className="flex flex-col mt-10">
            <h3 className="text-2xl font-bold text-center ">Experience</h3>
            {experience
              .slice()
              .reverse()
              .map((exp: JobExperience) => (
                <Timeline key={exp._id} experience={exp} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
