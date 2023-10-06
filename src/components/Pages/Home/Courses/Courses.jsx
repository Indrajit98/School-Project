import React from "react";
import classImage from "../../../../assets/images/Class/classer1.jpg";

const Courses = () => {
  return (
    <div className="course">
      <div className="container mx-auto">
        <div className="course-title">
          <h3>Courses</h3>
          <h2>Popular Class</h2>
        </div>
        <div className="course-card grid grid-cols-3">
          <div className="card">
            <div className="card-image">
              <img src={classImage} alt="" />
            </div>
            <div className="course-content">
              <h4 className="class-price">FREE</h4>
              <h4>Alphabet Matching Class</h4>
              <p>
                The perfect class for your child with the best staff and best
                teachers.
              </p>
              <div className="class-meta-list">
                <ul>
                  <li>
                    <span className="meta-title">Age</span>
                    <span className="value">3-5 year</span>
                  </li>
                  <li>
                    <span className="meta-title">Time</span>
                    <span className="value">8-10</span>
                  </li>
                  <li>
                    <span className="meta-title">Capacity</span>
                    <span className="value">20 kids</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="btn">Join with Class</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
