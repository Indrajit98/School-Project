import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import sliderImage1 from "../../../assets/images/slider/sliderImage1.png";
import sliderImage2 from "../../../assets/images/slider/sliderImage2.png";
import sliderImage3 from "../../../assets/images/slider/sliderImage3.png";
import { FaCircleArrowRight } from "react-icons/fa6";

const Sliders = () => {
  return (
    <div className="container mx-auto  ">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="grid md:grid-cols-2 items-center gap-4">
            <div className="slider-content" >
              <h1>let your child</h1>
              <h2>Embark on a new journey </h2>
              <div className="btn" data-aos="zoom-in" >
                find out more <FaCircleArrowRight className="ml-3" />{" "}
              </div>
            </div>
            <div className="slider-image">
              <img src={sliderImage1} alt="img" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid md:grid-cols-2 items-center gap-4">
            <div className="slider-content" >
              <h1>let your child</h1>
              <h2>Fun & engaging learning </h2>
              <div className="btn" data-aos="zoom-in">
                find out more <FaCircleArrowRight className="ml-3" />{" "}
              </div>
            </div>
            <div className="slider-image">
              <img src={sliderImage2} alt="img" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid md:grid-cols-2 items-center gap-4">
            <div className="slider-content" >
              <h1>let your child</h1>
              <h2>Creative kid’s world </h2>
              <div className="btn" data-aos="zoom-in">
                find out more <FaCircleArrowRight className="ml-3" />{" "}
              </div>
            </div>
            <div className="slider-image">
              <img src={sliderImage3} alt="img" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sliders;
