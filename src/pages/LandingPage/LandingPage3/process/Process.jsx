import React from "react";
import LeftCards from "./LeftCards";
import RightCards from "./RightCards";
import "./process.css";
// import {
//   FaPenNib,
//   BsClockFill,
//   IoHomeOutline,
//   TiGlobeOutline,
//   GoMail,
//   BsHeart,
// } from "react-icons/all";
import {IoHomeOutline} from 'react-icons/io5'
import {BsClockFill, BsHeart} from 'react-icons/bs'
import { FaPenNib } from "react-icons/fa";
import {TiGlobeOutline} from 'react-icons/ti'
import {GoMail} from 'react-icons/go'

const Process = () => {
  return (
    <div id="process" style={{ overflow: "hidden" }} className="mt-5 pt-5">
      <div
        className="container-fluid mt-5"
        style={{
          borderTop: "1px solid black",
          borderRadius: "50% 50% 0 0",
          backgroundColor: "#F8F8F8",
          boxShadow: "inset 10px 10px 27px 9px rgba(0,0,0,0.22);",
        }}
      >
        <div className="container container-text text-center mt-5">
          <p className="process-title pt-5">The 3-step process</p>
          <p className="process-description">
            The business cerrent account that is your accounting software.
          </p>
          <p className="process-description">
            A simple way to run your bussines.
          </p>
        </div>
        {/* information completed */}
        <br></br>
        <br></br>
        <div className="mt-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12 p-0 ">
              {/* another instance of image */}
              <div className=" col-12 d-md-none ">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <img
                    src="images/1desktop.png"
                    alt="phone"
                    style={{ maxHeight: "10rem" }}
                    className="img-fluid m-0 p-0"
                  />
                </div>
              </div>
              <LeftCards
                number={<FaPenNib />}
                header="Market analysis"
                subHeader="The business cerrent account that is your accounting "
              />
              <LeftCards
                number={<BsClockFill />}
                header="Financial advice"
                subHeader="The business cerrent account that is your accounting "
              />
              <LeftCards
                number={<IoHomeOutline />}
                header="Innovative solution"
                subHeader="The business cerrent account that is your accounting "
              />
            </div>

            <div className="col-md-6 p-0 col-12 d-none d-md-flex  align-items-center justify-content-center">
              <div className="d-flex align-items-center justify-content-center h-100">
                <img
                  src="images/1desktop.png"
                  alt="phone"
                  style={{ maxHeight: "20rem" }}
                  className="img-fluid "
                />
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-12  p-0">
              <RightCards
                number={<TiGlobeOutline />}
                header="Optimal choice"
                subHeader="The business cerrent account that is your accounting "
              />
              <RightCards
                number={<GoMail />}
                header="Business strategy"
                subHeader="The business cerrent account that is your accounting "
              />
              <RightCards
                number={<BsHeart />}
                header="Marketing outline"
                subHeader="The business cerrent account that is your accounting "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
