import React from 'react';
import { FaAngleDown, FaFacebook, FaLinkedin, FaSquareTwitter,FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="container mx-auto">
                <div className="menu">
                    <ul>
                        <li className="active">
                            <Link>Home</Link>
                            <span className="sub-arrow">
                                <FaAngleDown />
                            </span>
                        </li>
                        <li>
                            <Link>Curriculum</Link>
                            <span className="sub-arrow">
                                <FaAngleDown />
                            </span>
                        </li>
                        <li>
                            <Link>Classes</Link>
                            <span className="sub-arrow">
                                <FaAngleDown />
                            </span>
                        </li>
                        <li>
                            <Link>About Us</Link>
                            <span className="sub-arrow">
                                <FaAngleDown />
                            </span>
                        </li>
                        <li>
                            <Link>Blog</Link>
                            <span className="sub-arrow">
                                <FaAngleDown />
                            </span>
                        </li>
                        <li>
                            <Link>Page</Link>
                            <span className="sub-arrow">
                                <FaAngleDown />
                            </span>
                        </li>
                        <li>
                            <Link>login</Link>
                        </li>
                    </ul>
                </div>
                <div className="menu social-icon">
                    <ul>
                        <li> <Link><FaFacebook /></Link> </li>
                        <li> <Link><FaSquareTwitter /></Link> </li>
                        <li> <Link><FaYoutube /></Link> </li>
                        <li> <Link><FaLinkedin /></Link> </li>
                    </ul>
                </div>
                <p>© 2023 Your Company, Inc. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;