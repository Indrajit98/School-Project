import React from "react";
import { FaRegCircle } from "react-icons/fa6";
import banner from "../../../../assets/images/banner/h1-banner-01.png";
import {TbAbc } from "react-icons/tb";
import { GiBookCover } from "react-icons/gi";





const Banner = () => {
  return (
    <div className="banner">
      <FaRegCircle className="icon" />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="right">
            <div className="image">
              <img src={banner} alt="" />
            </div>
            <span>
              <FaRegCircle className="icons" />
            </span>
          </div>
          <div className="left">
            <div className="left-content">
              <h3>Who we are</h3>
              <h1>The best playschool for your kid</h1>
              <div className="grid grid-cols-2 gap-4">
                <div className=" card">
                    <div className="card-icon">
                        <TbAbc/>
                    </div>
                    <h3>Self-contained gifted programs</h3>
                    <p>By creating a safe, consistent and welcoming environment</p>
                </div>
                <div className=" card">
                    <div className="card-icon">
                        <TbAbc/>
                    </div>
                    <h3>Self-contained gifted programs</h3>
                    <p>By creating a safe, consistent and welcoming environment</p>
                </div>
                <div className=" card">
                    <div className="card-icon">
                        <GiBookCover/>
                    </div>
                    <h3>Self-contained gifted programs</h3>
                    <p>By creating a safe, consistent and welcoming environment</p>
                </div>
                <div className=" card">
                    <div className="card-icon">
                        <TbAbc/>
                    </div>
                    <h3>Self-contained gifted programs</h3>
                    <p>By creating a safe, consistent and welcoming environment</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner