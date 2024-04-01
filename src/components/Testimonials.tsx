import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import axios from "axios";
import { Ttestimonial } from "../types";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [testimonials, setTestimonials] = useState<Ttestimonial[]>([]);
  const [autoSlideInterval, setAutoSlideInterval] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        setTestimonials(response.data.user.testimonials);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
      );
    }, 1000); // Change the interval time as needed (1 second in this case)
    setAutoSlideInterval(interval);

    return () => clearInterval(interval);
  }, [testimonials]);

  const handleClick = (direction: "prev" | "next") => {
    if (autoSlideInterval) clearInterval(autoSlideInterval); // Stop auto sliding when manual navigation is used
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <>
      {testimonials.map(
        (testimonial: Ttestimonial, index: number) =>
          testimonial.enabled && (
            <div
              key={testimonial._id}
              className={`${index === currentIndex ? "" : "hidden"} w-full`}
            >
              <div className="flex items-center justify-center">
                <div className=" w-[300px] md:w-[650px] h-fit shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex flex-col p-3 md:p-8  rounded-lg bg-[#1d1836] transition duration-300 ease-in-out  ">
                  <img
                    className=" w-12 h-12 md:w-20 md:h-20 rounded-full object-cover"
                    src={testimonial.image.url}
                    alt={testimonial.name}
                  />
                  <div className="flex-1 h-full p-1 md:px-8 text-left flex flex-col justify-between items-start mt-5">
                    <p className="text-[14px] md:text-[18px] leading-8 text-white">
                      {testimonial.review}
                    </p>
                    <div>
                      <h4 className="font-semibold text-[12px] md:text-[16px]  text-green-500 mt-8">
                        {testimonial.position}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      )}

      <div className="flex flex-row mt-4 justify-center">
        <div
          className="w-12 h-12 rounded-full bg-white m-4 transition duration-300 ease-in-out flex items-center justify-center cursor-pointer"
          onClick={() => handleClick("prev")}
        >
          <HiChevronLeft className="w-6 h-6 text-black" />
        </div>

        <div
          className="w-12 h-12 rounded-full bg-white m-4 transition duration-300 ease-in-out flex items-center justify-center cursor-pointer"
          onClick={() => handleClick("next")}
        >
          <HiChevronRight className="w-6 h-6 text-black" />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
