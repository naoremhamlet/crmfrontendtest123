import React from "react";
import "./navbar.css";
import MediaQuery from "react-responsive";
import Hamburger from "./Hamburger";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div
        className="container-fluid d-flex justify-content-between"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <div className="container left-div pt-5">
          <button
            className="btn px-4 py-2 text-light font-weight-bold align-bottom"
            style={{ backgroundColor: "#0F21AD", borderRadius: "2rem" }}
          >
            Download
          </button>
          <Link to='/login'>
          <button
            className="btn"
            style={{ fontFamily: "Montserrat,sans-serif" }}
            
          >
            Log In
          </button>
          </Link>
          <Link to='/signup'>
          <button
            className="btn"
            style={{ fontFamily: "Montserrat,sans-serif" }}
            
          >
            Sign Up
          </button>
          </Link>
        </div>
        {/* first completed */}
        <div
          className="container  text-center"
          // style={{ width: "fit-content" }}
        >
          <div>
            <img
              src="images/mainlogo.png"
              className="img-fluid nav-logo"
              style={{ maxHeight: "6rem" }}
              alt=""
            />
          </div>
        </div>
        {/* second completed */}
        <div className="container ">
          <div className="container  pt-5" style={{ height: "100%" }}>
            <MediaQuery maxDeviceWidth={745}>
              <Hamburger />
            </MediaQuery>
            <MediaQuery minDeviceWidth={746}>
              <ul
                className="d-flex justify-content-evenly nav-list"
                style={{ listStyleType: "none", height: "100%" }}
              >
                <li className="">
                  <a href="#services" className="text-dark nav-link ">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-dark nav-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-dark nav-link">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#blogs" className="text-dark nav-link">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark nav-link">
                    Download
                  </a>
                </li>
              </ul>
            </MediaQuery>
          </div>
          {/* third completed*/}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
