import { abdul } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";

import { IoLocationOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <>
      <div className=" sm:block xl:flex justify-around mt-[-70px]">
        <div className="flex flex-col  items-center">
          <h1 className={styles.heroHeadText}>
            Let's Work <br /> together
          </h1>

          <div className="flex flex-col md:flex-row gap-10 ">
            <div className="flex flex-col flex-1">
              <h3 className="mt-2 font-bold text-xl text-white">Mail</h3>
              <span className="text-[14px]">
                <a href={`mailto:abduldevelop@gmail.com`}>
                  abduldevelop@gmail.com
                </a>
              </span>
              <h3 className="mt-2 font-bold text-xl text-white">Phone</h3>
              <a href={`tel:+91 9339354656}`} className="text-[14px]">
                +91 9339354656
              </a>
              <p className="flex items-center gap-1 mt-2">
                <IoLocationOutline size={20} />
                <span className="text-[16px]">
                  {" "}
                  Kolkata , West Bengal , India{" "}
                </span>
              </p>
              <p className="text-[14px] text-green-500 ml-1 mt-2">
                1 years of experience
              </p>
            </div>

            <img
              src={abdul}
              alt={"abdul"}
              className="w-[210px] rounded-md flex-1"
            />
          </div>
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
