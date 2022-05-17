import React, { useState } from "react";
import { AiFillApple } from "react-icons/ai";
import "./footer.css";
import { FaGooglePlay } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
const Footer = () => {
  const [bg, setBg] = useState("#16DDA1");
  const [bg1, setBg1] = useState("#2271EC");

  return (
    <>
      <footer className="mt-4" id="footer">
        <div
          className="d-flex flex-column align-items-end p-5"
          style={{
            backgroundImage: `url(images/footer-bg.png)`,
            backgroundColor: "#11D49A",
            paddingRight: 100,
          }}
        >
          <div className="row">
            <div className="col-md-6 col-12 ">
              <div className="container text-center">
                <img
                  className="footer-logo"
                  src="images/desktop.png"
                  alt="logo"
                />
              </div>
            </div>
            <div className="col-md-6 col-12 ">
              <div>
                <p className="footer-title" data-aos="fade-up">
                  Subscribe For Newsletter
                </p>
                <p className="footer-subtitle">
                  When, while lovely valley teems with vapour around meand
                  meridian sun strikes the upper impenetrable foliage of my
                  trees thousand unknown plants .{" "}
                </p>
              </div>
              <div className="d-flex container">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="form-control py-3 input-footer"
                  style={{ flex: 1 }}
                />
                <button className="btn btn-primary button-footer rounded-circle text-light">
                  <FiNavigation className="fs-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* first one completed */}
        <div
          style={{ backgroundColor: "#2271EC" }}
          className="d-flex flex-column align-items-center"
        >
          <div>
            <div className="mt-5">
              <h2
                className="text-white footer-text text-center"
                data-aos="zoom-out"
                style={{
                  fontFamily: "poppins",
                  fontWeight: "bold",
                }}
              >
                App is available for free on
              </h2>
            </div>
            <div>
              <h2
                className="text-white footer-text text-center"
                data-aos="zoom-out"
                style={{
                  fontFamily: "poppins",

                  fontWeight: "bold",
                }}
              >
                Google Play &#38; App Store
              </h2>
            </div>
          </div>
          <div>
            <h6
              className="text-white"
              style={{
                fontWeight: "lighter",
                marginTop: 20,
                fontFamily: "montserrat",
                fontSize: 16,
              }}
            >
              We'll help you achieve your marketing &#38; business goals
            </h6>
          </div>
          <div className="d-flex" style={{ marginTop: 40 }}>
            <div>
              <button
                style={{
                  borderRadius: 50,
                  backgroundColor: bg,
                  border: 0,
                  fontSize: "1.3rem",
                }}
                className="py-2 px-5 text-white mx-2 "
                onMouseEnter={() => setBg("#000000")}
                onMouseLeave={() => setBg("#16DDA1")}
              >
                <AiFillApple className="fs-3" />
                App Store
              </button>
            </div>
            <div>
              <button
                style={{
                  borderRadius: 50,
                  backgroundColor: bg1,
                  borderColor: "white",
                  fontSize: "1.3rem",
                }}
                className="py-2 px-5 text-white mx-2"
                onMouseEnter={() => setBg1("#000000")}
                onMouseLeave={() => setBg1("#2271EC")}
              >
                <FaGooglePlay className="fs-3" />
                Google Play
              </button>
            </div>
          </div>
          <div
            className="container d-flex justify-content-evenly mt-3 p-3 text-light"
            style={{ fontFamily: "montserrat,sans-serif" }}
          >
            <a href="#" className="footer-link">
              Twitter
            </a>
            <a href="#" className="footer-link">
              Dribble
            </a>
            <a href="#" className="footer-link">
              Instagram
            </a>
            <a href="#" className="footer-link">
              YouTube
            </a>
            <a href="#" className="footer-link">
              Slack
            </a>
          </div>
          <div
            className="container row mt-3 p-3"
            style={{ fontFamily: "montserrat,sans-serif", color: "#bae3fc" }}
          >
            <div className="col-md-4 col-12 text-center">
              <p>© 2022 Phlox App. All rights reserved.</p>
            </div>
            <div className="col-md-4 col-12 text-center">
              <p>contact@phloxtheme.com</p>
            </div>
            <div className="col-md-4 col-12 text-center">
              <p>(+00) 123 567990</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// footer bottom 2 bg color :#2271EC
