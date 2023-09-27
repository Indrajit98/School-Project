import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import logo from '../../../assets/images/logo/logo.png';

const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu">
                    <ul>
                        <li className="active">
                            <Link>Home</Link>
                            <span className="sub-arrow" ><FaAngleDown/></span>
                        </li>
                        <li>
                            <Link>Curriculum</Link>
                            <span className="sub-arrow" ><FaAngleDown/></span>
                        </li>
                        <li>
                            <Link>Classes</Link>
                            <span className="sub-arrow" ><FaAngleDown/></span>
                        </li>
                        <li>
                            <Link>About Us</Link>
                            <span className="sub-arrow" ><FaAngleDown/></span>
                        </li>
                        <li>
                            <Link>Blog</Link>
                            <span className="sub-arrow" ><FaAngleDown/></span>
                        </li>
                        <li>
                            <Link>Page</Link>
                            <span className="sub-arrow" ><FaAngleDown/></span>
                        </li>
                        <li>
                            <Link>login</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>Have a any question ?</p>
                    <span className="number">+880-1760272507</span>
                </div>
            </div>
            
          
        </div>
    );
};

export default Navbar;
