import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import axios from "axios";
import { useState, useEffect } from "react"; // Importing useEffect hook
import { Tabout } from "../types";

const About = () => {
  const [about, setAbout] = useState<Tabout | null>(null); // Initialize 'about' state as null
  const [profile, setProfile] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        setAbout(response.data.user.about);
        setProfile(response.data.user.about.avatar.url);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="about">
      {about && ( // Check if 'about' is not null
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className={styles.sectionSubText}>About me</p>
            <h2 className={styles.sectionHeadText}>{about.name}</h2>

            <h4 className="mt-4 text-[20px] max-w-3xl leading-[30px]">
              {about.title}
            </h4>
            <h3 className="mt-2 text-[14px] max-w-3xl leading-[30px] text-gray-400">
              {about.quote}
            </h3>
            <p className="mt-4 text-[17px] max-w-3xl leading-[30px]">
              {about.subTitle}
            </p>
          </div>
          <div>
            <img src={profile} alt="profile" className="w-[210px] rounded-md" />
          </div>
        </div>
      )}

      <p className="mt-4 text-[14px] max-w-3xl leading-[30px]">
        {about ? about.description : "Loading..."}{" "}
      </p>
    </div>
  );
};

export default SectionWrapper(About, "about");
