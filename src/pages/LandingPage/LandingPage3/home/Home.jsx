import React from "react";
import Navbar from "./Navbar";
// import Marquee from "react-fast-marquee";
import { AiOutlineShopping, AiTwotoneHome } from "react-icons/ai";
import { FiMapPin, FiGift } from "react-icons/fi";
import { BiLocationPlus } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Features from "../features/Features";
import Services from "../services/Services";
import Process from "../process/Process";
// import Testimonials from "../testimonials/Testimonials";
import Blogs from "../blog/Blogs";
import Partners from "../partner/Partner";
import Footer from "../footer/Footer";
import Hamburger from "./Hamburger";
import { AiFillGooglePlusSquare } from "react-icons/ai";
import "./s.css";
import "./home.css";
const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      
      <div className="container-fluid  text-center"></div>
      <div
        className="container-fluid home-shadow"
        // to change background color use class home-shadow (home.css)
        style={{
          borderBottom: "0.2px solid #fff",
          borderRadius: "0% 0% 44% 44% / 10% 10% 59% 59%  ",
          maxHeight: "900px",
          zIndex: "5",
          overflow: "hidden",
        }}
      >
        {" "}
        <ParallaxProvider>
          <div
            className="text-center  container"
            style={{ position: "relative" }}
          >
            <Parallax
              speed={-10}
              style={{
                position: "absolute",
                zIndex: "15",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src="images/mobile.png"
                style={{
                  position: "absolute",
                  zIndex: "10",
                  maxWidth: "500px",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                }}
                className="pt-5 img-fluid home-img"
                alt="logo"
              />
            </Parallax>

            {/* img div  */}
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ position: "relative" }}
            >
              <div id="container-rotate">
                <div class="item ">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
                <div class="item">
                  <AiFillGooglePlusSquare />
                </div>
              </div>
              <div className="rotate-circle-1"></div>
              <div className="rotate-circle-2"></div>
              <div className="rotate-circle-3"></div>
              <div className="rotate-circle-4"></div>
            </div>

            {/* rotate */}
          </div>
        </ParallaxProvider>
      </div>

      {/* image finsished */}

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <Features />
      </div>
      <br />
      <br />
      <div>
        <Services />
      </div>
      <br />
      <br />
      <div>
        <Process />
      </div>
      <br />
      <br />
      <div>
        <Partners />
      </div>
      <br />
      <br />
      <div>
        <Blogs />
      </div>
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
