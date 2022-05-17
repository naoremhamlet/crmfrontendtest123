import React from "react";
// import { FaPenNib, BsClockFill, IoHomeOutline } from "react-icons/all";
const LeftCards = ({ number, header, subHeader }) => {
  // const []
  return (
    <div
      className="container d-flex  align-items-center mt-5 left-container"
      data-aos="fade-up"
    >
      <div>
        <div
          className="logo-container"
          style={{
            fontFamily: "montserrat,sans-serif",
            fontSize: "2.5rem",
            borderRadius: "50%",
            fontWeight: "bold",
            border: "1px solid #2372EC",
            width: "78px",
            height: "75px",
            textAlign: "center",
            paddingTop: "0.1rem",
          }}
        >
          {number}
        </div>
      </div>
      <div className="mx-4">
        <p
          className="left-text"
          style={{
            fontFamily: "poppins,sans-serif",
            fontSize: "1.3rem",
          }}
        >
          {header}
        </p>
        <p
          className="left-text"
          style={{
            fontFamily: "montserrat,sans-serif",
            fontSize: "1rem",
          }}
        >
          {subHeader}
        </p>
      </div>
    </div>
  );
};

export default LeftCards;
