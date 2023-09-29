import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaX } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import logo from "../../../assets/images/logo/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 

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
        <div className="number">
          <p>Have a any question ?</p>
          <span>+880-1760272507</span>
        </div>

        {/* moble menu  */}

        <div className="mobile-menu" onClick={toggleMenu}>
          {isOpen ? <>
            <div className="mobile-XMark">
              <FaXmark /> 
            </div>
            <div className="mobile-content">
            <ul>
              <li className="active">
                <Link>Home</Link>
              </li>
              <li>
                <Link>Curriculum</Link>
              </li>
              <li>
                <Link>Classes</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Page</Link>
              </li>
              <li>
                <Link>login</Link>
              </li>
            </ul>
          </div>
          </>: 
            <div className="hamburger">
                <FaAlignJustify />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
