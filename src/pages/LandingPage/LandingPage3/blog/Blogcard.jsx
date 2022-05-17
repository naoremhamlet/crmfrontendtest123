import React from "react";
import { HiArrowRight } from "react-icons/hi";
import "./blog.css";
const Blogcard = ({ date, title, para }) => {
  return (
    <div>
      <div
        className="container mx-4 py-4 blog-bg"
        style={{ width: "fit-content", borderRadius: "50px" }}
      >
        <p
          className="mt-5"
          style={{ fontFamily: "montserrat,sans-serif", fontSize: "1rem" }}
        >
          {date}
        </p>
        <p
          className="w-75 mt-5"
          style={{
            fontFamily: "poppins,sans-serif",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          {title}
        </p>
        <p
          className="w-75 mt-5 blog-para"
          style={{ fontFamily: "montserrat,sans-serif", fontSize: "1rem" }}
        >
          {para}
        </p>
        <p
          className="mt-5 blog-para2"
          style={{ fontFamily: "montserrat,sans-serif", fontSize: "1rem" }}
        >
          Read More{" "}
          <snap>
            <HiArrowRight />
          </snap>
        </p>
      </div>
    </div>
  );
};

export default Blogcard;
