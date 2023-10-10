import React from "react";
import Wave from "react-wavify";
import Sliders from "../../Shared/Slider/Sliders";
import Banner from "./Banner/Banner";
import Courses from "./Courses/Courses";
import CareValue from "./CareValue/CareValue";
import Teacher from "./Teacher/Teacher";

const Home = () => {
  return (
    <div className="home">
      <div className="background-wavify">
        <Wave
          className="wave1"
          fill="#8D8BCB"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 20,
            amplitude: 40,
            speed: 0.5,
            points: 3,
          }}
        />
        <Wave
          className="wave2"
          fill="#605EA6"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 35,
            amplitude: 40,
            speed: 0.5,
            points: 3,
          }}
        />
        <Wave
          className="wave3"
          fill="#2E2C74"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 60,
            amplitude: 40,
            speed: 0.5,
            points: 3,
          }}
        />
        <Wave
          className="wave4"
          fill="#23215B"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 80,
            amplitude: 40,
            speed: 0.5,
            points: 3,
          }}
        />
        <div></div>
      </div>
      <div className="slider">
        <Sliders></Sliders>
      </div>
      <Banner />
      <Courses />
      <CareValue/>
      <Teacher/>
    </div>
  );
};

export default Home;
