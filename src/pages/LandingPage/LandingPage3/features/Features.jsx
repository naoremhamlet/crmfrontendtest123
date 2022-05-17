import React from "react";
import "./features.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaLaptopCode } from "react-icons/fa";
const Features = () => {
  return (
    <div
      className="mt-5"
      style={{ width: "100vw", minHeight: "100vh" }}
      id="features"
    >
      <Container fluid className="d-flex justify-content-center ">
        <div
          className="container d-flex flex-column justify-content-center align-items-center"
          data-aos="zoom-out"
          style={{ width: "fit-content" }}
        >
          <p className="feature-title">The Effective Features</p>

          <p className="feature-description">
            The business cerrent account that is your accounting software.
            <p className="feature-description text-center">
              A simple way to run business.
            </p>
          </p>
        </div>
      </Container>
      <br></br>
      <br></br>
      <br></br>

      {/* title completed */}
      <Container fluid className=" mt-5">
        <Row>
          <Col md={3} sm={6} xs={12} className="px-5">
            <Container
              className="py-2 feature-hover "
              style={{ borderRadius: "30px" }}
            >
              <div className="text-center mt-5">
                <img
                  src="images/icon 1.png"
                  className="img-fluid"
                  style={{ height: "6rem", width: "6rem" }}
                />
              </div>
              <div className="text-center mt-5 px-2">
                <p className="feature-icon-title">Easy & Safe Payment </p>
                <p className="feature-icon-description">
                  Duis aute irure dolor in dosis amet reprehenderit in.
                </p>
              </div>
            </Container>
          </Col>
          <Col md={3} sm={6} xs={12} className=" px-5">
            <Container
              className="py-2 feature-hover "
              style={{ borderRadius: "30px" }}
            >
              <div className="text-center mt-5">
                <img
                  src="images/icon 2.png"
                  className="img-fluid"
                  style={{ height: "6rem", width: "6rem" }}
                />
              </div>
              <div className="text-center mt-5 px-3">
                <p className="feature-icon-title">All the world support </p>
                <p className="feature-icon-description">
                  Duis aute irure dolor in dosis amet reprehenderit in.
                </p>
              </div>
            </Container>
          </Col>
          <Col md={3} sm={6} xs={12} className=" px-5">
            <Container
              className=" py-2 feature-hover "
              style={{ borderRadius: "30px" }}
            >
              <div className="text-center mt-5">
                <img
                  src="images/icon 3.png"
                  className=" img-fluid "
                  style={{ height: "6rem", width: "6.2rem" }}
                />
              </div>
              <div className="text-center mt-5 px-3">
                <p className="feature-icon-title">Unlimited Bandwidth </p>
                <p className="feature-icon-description">
                  Duis aute irure dolor in dosis amet reprehenderit in.
                </p>
              </div>
            </Container>
          </Col>
          <Col md={3} sm={6} xs={12} className=" px-5">
            <Container
              className=" py-2 feature-hover"
              style={{ borderRadius: "30px" }}
            >
              <div className="text-center mt-5">
                <img
                  src="images/icon 4.png"
                  className="img-fluid"
                  style={{ height: "6rem", width: "6rem" }}
                />
              </div>
              <div className="text-center mt-5 px-2">
                <p className="feature-icon-title">Multiple WP Websites </p>
                <p className="feature-icon-description">
                  Duis aute irure dolor in dosis amet reprehenderit in.
                </p>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
