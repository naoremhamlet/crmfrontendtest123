import React from "react";
import Blogcard from "./Blogcard";
const Blogs = () => {
  return (
    <div className="mt-4" style={{ overflow: "hidden" }} id="blogs">
      <div fluid className="d-flex justify-content-center">
        <div
          className="container d-flex flex-column justify-content-center align-items-center"
          data-aos="zoom-out"
          style={{ width: "fit-content" }}
        >
          <p className="blog-title">Latest From The Blog</p>

          <p className="blog-description">
            The business cerrent account that is your accounting software.
            <p className="blog-description text-center">
              A simple way to run business.
            </p>
          </p>
        </div>
      </div>
      <br></br>
      <br></br>

      {/* text completed */}
      <div className="row mt-1  ">
        <div className="col-md-4  col-12 ">
          <Blogcard
            date="May 29,2019"
            title="Join Swedish Popstars Icona Pop on Gotland"
            para="When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenet...."
          />
        </div>
        <div className="col-md-4 col-12 ">
          {" "}
          <Blogcard
            date="May 29,2019"
            title="Nothing Compares to Swedish Summer"
            para="When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenet...."
          />
        </div>
        <div className="col-md-4 col-12 ">
          {" "}
          <Blogcard
            date="May 29,2019"
            title="Model Shares Her Packing List for Summer"
            para="When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenet...."
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
