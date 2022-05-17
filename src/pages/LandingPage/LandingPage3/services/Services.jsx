import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./service.css";
import Stats from "./Stats";
import Card from "./Card";
const Services = () => {
  return (
    <Container fluid className="mt-4" id="services">
      <Row>
        <Col className="" xs={12} md={6}>
          <Container>
            <img
              src="images/desktop.png"
              alt="service"
              className="img-fluid service-img"
            />
          </Container>
        </Col>
        <Col className="" xs={12} md={6}>
          <div>
            <p className="service-title p-3" data-aos="fade-up">
              Manage Your time Make things More Oragnised
            </p>
          </div>
          {/* header completed */}
          <div>
            <p className="service-description p-3" data-aos="fade-up">
              When, while lovely valley teems with vapour around meand meridian
              sun strikes the upper impenetrable foliage of my trees, and but a
              thousand unknown plants .are noticed by when I hear the buzz .{" "}
            </p>
          </div>
          {/* description completed */}
          {/* <div> */}
          <div>
            <Row className="">
              <Col md={12} sm={6} xs={12} className="p-0">
                <Card
                  number="01"
                  header="Get your own time"
                  subHeader="The business cerrent account that is your accounting"
                ></Card>
              </Col>
              <Col md={12} sm={6} xs={12} className="p-0">
                <Card
                  number="02"
                  header="Easy User Interface"
                  subHeader="The business cerrent account that is your accounting"
                ></Card>
              </Col>
            </Row>
          </div>
          {/* both cards done */}
          <div className="mt-3">
            <Stats></Stats>
          </div>
          {/* </div> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
