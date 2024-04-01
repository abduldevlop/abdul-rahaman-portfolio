import { useEffect, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import axios from "axios";
import { Tabout } from "../types";
import { IoLocationOutline } from "react-icons/io5";
const Contact = () => {
  const [about, setAbout] = useState<Tabout | null>(null);
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
    <>
      <div className=" sm:block xl:flex justify-around mt-[-70px]">
        <div className="flex flex-col  items-center">
          <h1 className={styles.heroHeadText}>
            Let's Work <br /> together
          </h1>
          {about && (
            <div className="flex flex-col md:flex-row gap-10 ">
              <div className="flex flex-col flex-1">
                <h3 className="mt-2 font-bold text-xl text-white">Mail</h3>
                <span className="text-[14px]">
                  <a href={`mailto:${about.contactEmail}`}>
                    {about.contactEmail}
                  </a>
                </span>
                <h3 className="mt-2 font-bold text-xl text-white">Phone</h3>
                <a href={`tel:${about.phoneNumber}`} className="text-[14px]">
                  {about.phoneNumber}
                </a>
                <p className="flex items-center gap-1 mt-2">
                  <IoLocationOutline size={20} />
                  <span className="text-[16px]">{about.address}</span>
                </p>
                <p className="text-[14px] text-green-500 ml-1 mt-2">
                  {about.exp_year} years of experience
                </p>
              </div>

              <img
                src={profile}
                alt={about.name}
                className="w-[210px] rounded-md flex-1"
              />
            </div>
          )}
        </div>
        <div className="flex flex-row mt-10 ">
          <form className="mx-auto">
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className=" sm:w-[200px] w-full  py-3 px-4 xl:w-[350px] bg-transparent  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl outline-none border-none "
            />
            <br />
            <input
              type="text"
              required
              name="email"
              placeholder="Email"
              className="sm:w-[200px] w-full  py-3 px-4 xl:w-[350px] my-5 bg-transparent  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl outline-none border-none "
            />
            <br />

            <textarea
              rows={8}
              required
              name="message"
              placeholder="Message"
              className="sm:w-[200px] w-full  py-3 px-4 xl:w-[350px] my-5 bg-transparent  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl outline-none border-none "
            />

            <br />
            <button
              type="submit"
              className="py-3 px-4 w-[250px] xl:w-[350px] bg-transparent  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl outline-none border-none  "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
