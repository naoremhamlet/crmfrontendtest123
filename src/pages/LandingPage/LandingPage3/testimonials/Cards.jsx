import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Card } from "react-bootstrap";
const Cards = () => {
  return (
    <Card className="px-5 py-3">
      <div className="text-center">
        <Card.Img
          variant="top"
          src="images/1.jpg"
          style={{ borderRadius: "50%", height: "150px", width: "150px" }}
        />
      </div>
      <Card.Body className="text-center mt-5 border border-dark">
        <Card.Title
          style={{ fontFamily: "poppins,sans-serif", fontSize: "1.5rem" }}
        >
          {" "}
          Bruce Hardy
        </Card.Title>
        <p style={{ fontFamily: "montserrat,sans-serif", fontSize: "0.9rem" }}>
          paypal inc.
        </p>
        <Card.Text
          className="mt-4"
          style={{ fontFamily: "montserrat,sans-serif", fontSize: "1rem" }}
        >
          When, while lovely valley teems with vapour around meand meridian sun
          strikes the upper impenetrable
        </Card.Text>
        <div>
          <AiFillStar className="mr-2 text-primary" />
          <AiFillStar className="mr-2 text-primary" />
          <AiFillStar className="mr-2 text-primary" />
          <AiOutlineStar className="mr-2 text-primary" />
          <AiOutlineStar className="mr-2 text-primary" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
