import React from "react";
import classImag1 from "../../../../assets/images/Class/classer1.jpg";
import classImage2 from "../../../../assets/images/Class/classer2.jpg";
import classImage3 from "../../../../assets/images/Class/classer3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegCircle } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Courses = () => {
  return (
    <div className="course">
      <FaRegCircle className="icon" />
      <div className="container mx-auto">
        <div className="course-title">
          <h3>Courses</h3>
          <h2>Popular Class</h2>
        </div>
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={false}
            Autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="course-card  ">
                <div className="card">
                  <div className="card-image">
                    <img src={classImage3} alt="" />
                  </div>
                  <div className="course-content">
                    <h4 className="class-price">FREE</h4>
                    <h4>Alphabet Matching Class</h4>
                    <p>
                      The perfect class for your child with the best staff and
                      best teachers.
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="course-card  ">
                <div className="card">
                  <div className="card-image">
                    <img src={classImag1} alt="" />
                  </div>
                  <div className="course-content">
                    <h4 className="class-price">FREE</h4>
                    <h4>Alphabet Matching Class</h4>
                    <p>
                      The perfect class for your child with the best staff and
                      best teachers.
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="course-card  ">
                <div className="card">
                  <div className="card-image">
                    <img src={classImage2} alt="" />
                  </div>
                  <div className="course-content">
                    <h4 className="class-price">FREE</h4>
                    <h4>Alphabet Matching Class</h4>
                    <p>
                      The perfect class for your child with the best staff and
                      best teachers.
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="course-card  ">
                <div className="card">
                  <div className="card-image">
                    <img src={classImage3} alt="" />
                  </div>
                  <div className="course-content">
                    <h4 className="class-price">FREE</h4>
                    <h4>Alphabet Matching Class</h4>
                    <p>
                      The perfect class for your child with the best staff and
                      best teachers.
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="course-card  ">
                <div className="card">
                  <div className="card-image">
                    <img src={classImag1} alt="" />
                  </div>
                  <div className="course-content">
                    <h4 className="class-price">FREE</h4>
                    <h4>Alphabet Matching Class</h4>
                    <p>
                      The perfect class for your child with the best staff and
                      best teachers.
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="course-card  ">
                <div className="card">
                  <div className="card-image">
                    <img src={classImage3} alt="" />
                  </div>
                  <div className="course-content">
                    <h4 className="class-price">FREE</h4>
                    <h4>Alphabet Matching Class</h4>
                    <p>
                      The perfect class for your child with the best staff and
                      best teachers.
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
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Courses;
