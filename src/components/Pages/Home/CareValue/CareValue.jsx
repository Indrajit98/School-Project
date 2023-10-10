import React from "react";
import { FaRegCircle } from "react-icons/fa6";

const CareValue = () => {
  return (
    <div className="care-section">
      <FaRegCircle className="icon1" />
      <FaRegCircle className="icon2" />
      <FaRegCircle className="icon3" />
      <div className="container mx-auto py-100">
        <div className="grid grid-cols-12">
          <div className="left lg:col-span-5 col-span-12 ">
            <h3>Our care value</h3>
            <h2>We’re redefining early child care education</h2>
          </div>
          <div className="right lg:col-span-7 col-span-12 grid md:grid-cols-2">
            <div className=" card" data-aos="zoom-in-right">
              <div className="card-icon1">
                <span>01</span>
              </div>
              <div className="card-content">
                <h5>Active learning</h5>
                <p>
                  Childrens love this class room as it has many toys and
                  educational games.
                </p>
              </div>
            </div>
            <div className=" card" data-aos="zoom-in-left">
              <div className="card-icon2">
                <span>02</span>
              </div>
              <div className="card-content">
                <h5>SFully equiped​</h5>
                <p>By creating a safe, consistent and welcoming environment</p>
              </div>
            </div>
            <div className=" card" data-aos="zoom-in-right">
              <div className="card-icon3">
                <span>03</span>
              </div>
              <div className="card-content">
                <h5>Expert teachers​</h5>
                <p>By creating a safe, consistent and welcoming environment</p>
              </div>
            </div>
            <div className=" card" data-aos="zoom-in-left">
              <div className="card-icon4">
                <span>04</span>
              </div>
              <div className="card-content">
                <h5>Safe enviroment​</h5>
                <p>By creating a safe, consistent and welcoming environment</p>
              </div>
            </div>
            <div className=" card" data-aos="zoom-in-right">
              <div className="card-icon5">
                <span>05</span>
              </div>
              <div className="card-content">
                <h5>Garden center</h5>
                <p>By creating a safe, consistent and welcoming environment</p>
              </div>
            </div>
            <div className=" card" data-aos="zoom-in-left">
              <div className="card-icon6">
                <span>06</span>
              </div>
              <div className="card-content">
                <h5>Funny and happy</h5>
                <p>By creating a safe, consistent and welcoming environment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareValue;
