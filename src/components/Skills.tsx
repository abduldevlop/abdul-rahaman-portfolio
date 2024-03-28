import { useEffect, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import axios from "axios";
import { Tskills } from "../types";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        setSkills(response.data.user.skills);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="flex flex-wrap gap-10
     items-center justify-center "
    >
      {skills
        .slice()
        .reverse()
        .map(
          (skill: Tskills) =>
            skill.enabled && (
              <div className="w-1/2 md:w-1/4" key={skill._id}>
                <div className="flex items-center justify-between gap-5">
                  <img
                    src={skill.image.url}
                    alt={skill.name}
                    className="w-[70px] h-[70px] rounded-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2"
                  />
                  <div className="w-[90%]">
                    <h2 className="text-white text-[20px] mb-2">
                      {skill.name}
                    </h2>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-blue-500"
                        style={{
                          width: `${skill.percentage}%`,
                        }}
                      />
                    </div>

                    <p className="text-gray-400 mt-2 text-[14px]">
                      {skill.percentage}%
                    </p>
                  </div>
                </div>
              </div>
            )
        )}
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
