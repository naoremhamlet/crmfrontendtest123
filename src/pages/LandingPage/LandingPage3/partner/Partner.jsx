import React from "react";
import "./patner.css";

const Partner = () => {
  return (
    <div
      className="mt-4"
      style={{
        backgroundImage: "url(images/assert-2.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="container-fluid border border-dark p-5">
        <div className="row ">
          <div className="col-md-5 col-sm-12 col-12 py-5" style={{}}>
            <div>
              <p
                className="text-light"
                data-aos="zoom-up"
                style={{
                  fontFamily: "poppins,sans-serif",
                  fontWeight: "bold",
                  fontSize: "2.2rem",
                }}
              >
                We’ve established partnership with partners all over the globe.
              </p>
              <p
                style={{
                  fontFamily: "montserrat,sans-serif",
                  fontSize: "1rem",
                  color: "#fff",
                }}
              >
                When, while lovely valley teems with vapour around meand
                meridian sun strikes the upper impenetrable foliage of my trees
                thousand unknown plants.
              </p>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 col-12 p-5" style={{}}>
            <div className="row d-flex align-items-center justify-content-evenly">
              <div
                className="col-md-4 col-sm-4 col-12 p-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="images/clienty-6.png"
                  alt="clienty-6"
                  className="img-fluid brand-logo"
                />
              </div>
              <div className="col-md-4 col-sm-4 col-12 p-5">
                <img
                  src="images/clienty-4.png"
                  alt="clienty-6"
                  className="img-fluid  brand-logo"
                />
              </div>
              <div className="col-md-4 col-sm-4 col-12  p-5">
                <img
                  src="images/clienty-5.png"
                  alt="clienty-6"
                  className="img-fluid  brand-logo"
                />
              </div>
            </div>
            {/* first row closed */}
            <div className="row">
              <div className="col-md-4 col-sm-4 col-12 p-5">
                <img
                  src="images/clienty-3.png"
                  alt="clienty-6"
                  className="img-fluid  brand-logo"
                />
              </div>
              <div className="col-md-4 col-sm-4 col-12 p-5">
                <img
                  src="images/clienty-1.png"
                  alt="clienty-6"
                  className="img-fluid  brand-logo"
                />
              </div>
              <div className="col-md-4 col-sm-4 col-12 p-5">
                <img
                  s
                  src="images/clienty-2.png"
                  alt="clienty-6"
                  className="img-fluid  brand-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
