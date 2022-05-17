import React from "react";

const RightCards = ({ number, header, subHeader }) => {
  return (
    <div
      className="container d-flex align-items-center mt-5"
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
          style={{
            fontFamily: "poppins,sans-serif",
            fontSize: "1.3rem",
            textAlign: "left",
          }}
        >
          {header}
        </p>
        <p
          className=""
          style={{
            fontFamily: "montserrat,sans-serif",
            fontSize: "1rem",
            textAlign: "left",
          }}
        >
          {subHeader}
        </p>
      </div>

      {/* number completed */}

      {/* text content finished */}
    </div>
  );
};

export default RightCards;
