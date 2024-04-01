import { useEffect, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { Tservices } from "../types";
import axios from "axios";
import { styles } from "../styles";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        setServices(response.data.user.services);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="services">
      <p className={styles.sectionSubText}>Services that we provide</p>
      <h2 className={styles.sectionHeadText}>Services</h2>
      <div className="mt-5 flex flex-wrap gap-10 justify-center">
        {services.map((service: Tservices) =>
          service.enabled ? (
            <div
              key={service._id}
              className="rounded-[20px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex justify-evenly items-center min-h-[280px] flex-col w-[300px] xs:w-[250px] overflow-hidden cursor-pointer relative"
            >
              <img
                src={service.image.url}
                alt="icon"
                className="w-full h-full "
              />

              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex   opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div className="px-4 flex items-center justify-center flex-col relative">
                  <h3 className="font-semibold text-white text-[24px] text-left mb-2 w-full ">
                    {service.name}
                  </h3>
                  <p className="text-[14px] text-white text-left  w-full">
                    {service.desc}
                  </p>
                  <p className="text-[24px] font-bold text-green-500 absolute left-5 bottom-5">
                    {service.charge}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p>No service </p>
          )
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Services, "Services");
