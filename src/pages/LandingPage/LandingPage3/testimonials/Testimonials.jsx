import React from "react";
import Cards from "./Cards";

const Testimonials = () => {
  return (
    <div>
      <div className="container-fluid mt-3">
        <div fluid className="d-flex justify-content-center ">
          <div
            className="container border border-dark d-flex flex-column justify-content-center align-items-center"
            style={{ width: "fit-content" }}
          >
            <p className="feature-title">Testimonials</p>

            <p className="feature-description">
              The business cerrent account that is your accounting software.
              <p className="feature-description text-center">
                A simple way to run business.
              </p>
            </p>
          </div>
        </div>
        {/* title text part completed */}
        <div className="row mt-5">
          <div className="col-md-4 border border-dark">
            <Cards />
          </div>
          <div className="col-md-4 border border-dark">
            <Cards />
          </div>
          <div className="col-md-4 border border-dark">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
