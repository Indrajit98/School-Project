import React from "react";
import { Link } from "react-router-dom";
import { FaRegCircle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


import teacher1 from "../../../../assets/images/teacher/teacher1.png";
import teacher2 from "../../../../assets/images/teacher/teacher2.png";
import teacher3 from "../../../../assets/images/teacher/teacher3.png";
import teacher4 from "../../../../assets/images/teacher/teacher4.png";


const Teacher = () => {
  return (
    <div className="teacher-section">
      <div className="container mx-auto">
        <div className="title">
          <h3>Meet our staffs</h3>
          <h2>Excellent teacher</h2>
        </div>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-5">

          <div className="teacher-info">
            <div className="card1">
              <div className="teacher-social">
                <FaRegCircle className="icon" />
                <ul>
                  <li> <Link><FaFacebook /></Link> </li>
                  <li> <Link><FaSquareTwitter /></Link> </li>
                  <li> <Link><FaYoutube /></Link> </li>
                  <li> <Link><FaLinkedin /></Link> </li>
                </ul>
              </div>
              <div className="image">
                <img src={teacher4} alt="" />
              </div>
            </div>
            <h4>Indrajit Chandra</h4>
            <p>Math Teacher</p>
          </div>
          <div className="teacher-info">
            <div className="card2">
              <div className="teacher-social">
                <FaRegCircle className="icon" />
                <ul>
                  <li> <Link><FaFacebook /></Link> </li>
                  <li> <Link><FaSquareTwitter /></Link> </li>
                  <li> <Link><FaYoutube /></Link> </li>
                  <li> <Link><FaLinkedin /></Link> </li>
                </ul>
              </div>
              <div className="image">
                <img src={teacher2} alt="" />
              </div>
            </div>
            <h4>Sormi Chanda</h4>
            <p>Music Teacher</p>
          </div>
          <div className="teacher-info">
            <div className="card3">
              <div className="teacher-social">
                <FaRegCircle className="icon" />
                <ul>
                  <li> <Link><FaFacebook /></Link> </li>
                  <li> <Link><FaSquareTwitter /></Link> </li>
                  <li> <Link><FaYoutube /></Link> </li>
                  <li> <Link><FaLinkedin /></Link> </li>
                </ul>
              </div>
              <div className="image">
                <img src={teacher3} alt="" />
              </div>
            </div>
            <h4>Joydip Paul</h4>
            <p>Art Teacher</p>
          </div>
          <div className="teacher-info">
            <div className="card4">
              <div className="teacher-social">
                <FaRegCircle className="icon" />
                <ul>
                  <li> <Link><FaFacebook /></Link> </li>
                  <li> <Link><FaSquareTwitter /></Link> </li>
                  <li> <Link><FaYoutube /></Link> </li>
                  <li> <Link><FaLinkedin /></Link> </li>
                </ul>
              </div>
              <div className="image">
                <img src={teacher1} alt="" />
              </div>
            </div>
            <h4>Nipa Nath</h4>
            <p>English Teacher</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
