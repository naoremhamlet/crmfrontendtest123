import React from "react";

const Card = ({ number, header, subHeader }) => {
  return (
    <div
      className="container d-flex  align-items-center mt-4"
      data-aos="fade-up"
    >
      <div>
        <div
          className="px-4 py-3 number-card"
          style={{
            fontFamily: "montserrat,sans-serif",
            fontSize: "1.5rem",
            borderRadius: "50%",
            fontWeight: "bold",
            border: "1px solid #2372EC",
          }}
        >
          {number}
        </div>
      </div>
      <div className="mx-5">
        <p style={{ fontFamily: "poppins,sans-serif", fontSize: "1.5rem" }}>
          {header}
        </p>
        <p
          className="w-75"
          style={{ fontFamily: "montserrat,sans-serif", fontSize: "1rem" }}
        >
          {subHeader}
        </p>
      </div>
    </div>
  );
};

export default Card;
