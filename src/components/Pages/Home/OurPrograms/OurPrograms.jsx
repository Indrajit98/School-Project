import React from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import image1 from '../../../../assets/images/Program/program1.jpg'
import image2 from '../../../../assets/images/Program/program2.jpg'
import image3 from '../../../../assets/images/Program/program3.jpg'
import image4 from '../../../../assets/images/Program/program4.jpg'

const OurPrograms = () => {
    return (
        <div className='programs-section'>
            <div className="container mx-auto">
                <div className="title">
                    <h3>Curriculum</h3>
                    <h2>programs</h2>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="card" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000">
                        <div className="card-image">
                            <img src={image1} alt="" />
                            <div className='program-time1'>
                                <span>2-3</span>
                                <span>Years</span>
                            </div>
                        </div>

                        <div className="card-content">
                            <h4>Playground</h4>
                            <p>By creating a safe, consistent and welcoming environment</p>
                        </div>
                        <div>
                            <Link><FaCircleArrowRight className='btn-icon' /></Link>
                        </div>
                    </div>

                    <div className="card" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="card-image">
                            <img src={image2} alt="" />
                            <div className='program-time2'>
                                <span>4-6</span>
                                <span>Years</span>
                            </div>
                        </div>

                        <div className="card-content">
                            <h4>Nursery</h4>
                            <p>By creating a safe, consistent and welcoming environment</p>
                        </div>
                        <div>
                            <Link><FaCircleArrowRight className='btn-icon' /></Link>
                        </div>
                    </div>

                    <div className="card" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="card-image">
                            <img src={image3} alt="" />
                            <div className='program-time3'>
                                <span>8-10</span>
                                <span>Years</span>
                            </div>
                        </div>

                        <div className="card-content">
                            <h4>Junior</h4>
                            <p>By creating a safe, consistent and welcoming environment</p>
                        </div>
                        <div>
                            <Link><FaCircleArrowRight className='btn-icon' /></Link>
                        </div>
                    </div>

                    <div className="card" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000">
                        <div className="card-image">
                            <img src={image4} alt="" />
                            <div className='program-time4'>
                                <span>11-15</span>
                                <span>Years</span>
                            </div>
                        </div>

                        <div className="card-content">
                            <h4>Senior</h4>
                            <p>By creating a safe, consistent and welcoming environment</p>
                        </div>
                        <div>
                            <Link><FaCircleArrowRight className='btn-icon' /></Link>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default OurPrograms;