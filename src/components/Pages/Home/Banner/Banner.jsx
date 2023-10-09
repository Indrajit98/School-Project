import React from "react";
import { FaRegCircle } from "react-icons/fa6";
import banner from "../../../../assets/images/banner/h1-banner-01.png";
import { TbAbc } from "react-icons/tb";
import { GiBookCover } from "react-icons/gi";
import { GiExpense } from "react-icons/gi";
import { IoLibraryOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="banner">
      <FaRegCircle className="icon" />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="left">
            <div className="image">
              <img src={banner} alt="" />
            </div>
            <span>
              <FaRegCircle className="icons" />
            </span>
          </div>
          <div className="right">
            <div className="right-content">
              <h3>Who we are</h3>
              <h2>The best playschool for your kid</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className=" card" data-aos="zoom-in-right">
                  <div className="card-icon1">
                    <TbAbc />
                  </div>
                  <h5>Self-contained gifted programs</h5>
                  <p>
                    By creating a safe, consistent and welcoming environment
                  </p>
                </div>

                <div className=" card" data-aos="zoom-in-left">
                  <div className="card-icon2">
                    <GiExpense />
                  </div>
                  <h5>Self-contained gifted programs</h5>
                  <p>
                    By creating a safe, consistent and welcoming environment
                  </p>
                </div>
                <div className=" card" data-aos="zoom-in-right">
                  <div className="card-icon3">
                    <GiBookCover />
                  </div>
                  <h5>Self-contained gifted programs</h5>
                  <p>
                    By creating a safe, consistent and welcoming environment
                  </p>
                </div>
                <div className=" card" data-aos="zoom-in-left">
                  <div className="card-icon4">
                    <IoLibraryOutline />
                  </div>
                  <h5>Self-contained gifted programs</h5>
                  <p>
                    By creating a safe, consistent and welcoming environment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
