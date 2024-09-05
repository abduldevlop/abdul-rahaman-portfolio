import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";

import { abdul } from "../assets";

const About = () => {
  return (
    <div id="about">
      <div className="mt-2 flex items-center justify-between">
        <div>
          <p className={styles.sectionSubText}>About me</p>
          <h2 className={styles.sectionHeadText}>Abdul Rahaman</h2>

          <h4 className="mt-4 text-[20px] max-w-3xl leading-[30px]">
            Full Stack Developer / MERN
          </h4>
          <h3 className="mt-2 text-[14px] max-w-3xl leading-[30px] text-gray-400">
            In the world of code, a full stack developer is the architect
          </h3>
        </div>
        <div>
          <img src={abdul} alt="profile" className="w-[210px] rounded-md" />
        </div>
      </div>

      <p className="mt-4 text-[14px] max-w-3xl leading-[30px]">
        I am a versatile Full Stack Developer specializing in the MERN stack
        (MongoDB, Express.js, React, Node.js), bringing a comprehensive skill
        set to both front-end and back-end development. With a passion for
        creating dynamic, user-centric applications, I leverage my expertise in
        modern technologies and frameworks to deliver robust and scalable
        solutions.
      </p>
    </div>
  );
};

export default SectionWrapper(About, "about");
