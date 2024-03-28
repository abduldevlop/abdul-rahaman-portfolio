import { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import axios from "axios";
import { JobExperience } from "../types";

const Timeline = ({ experience }: { experience: JobExperience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {experience.jobTitle}
        </h3>
        <div className="mb-2">
          <span className="text-[12px] text-gray-400">
            {experience.startDate.substring(0, 10)} -
          </span>

          <span className="text-[12px] text-gray-400 ml-2">
            {experience.endDate.substring(0, 10)}
          </span>
        </div>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
          <span className="text-[12px] text-green-500 ml-2">
            {experience.jobLocation}
          </span>
        </p>
        <h1 className="text-[16px] mt-2 text-gray-500">{experience.summary}</h1>
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
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [timeLines, setTimeLines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        setTimeLines(response.data.user.timeline);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="mb-10">
        <motion.div variants={textVariant(1)}>
          <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Work Experience.
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {timeLines.map(
              (experience: JobExperience) =>
                experience.enabled &&
                !experience.forEducation && (
                  <Timeline key={experience._id} experience={experience} />
                )
            )}
          </VerticalTimeline>
        </div>
      </div>

      <div>
        <motion.div variants={textVariant(1)}>
          <p className={`${styles.sectionSubText} text-center`}>
            What I have done for education
          </p>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {timeLines.map(
              (experience: JobExperience) =>
                experience.enabled &&
                experience.forEducation && (
                  <Timeline key={experience._id} experience={experience} />
                )
            )}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
