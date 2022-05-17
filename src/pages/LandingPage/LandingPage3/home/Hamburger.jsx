import React from "react";
import "./home.css";
const Hamburger = () => {
  function openNav() {
    console.log("openNav");
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  return (
    <div>
      <div className="d-flex justify-content-end">
        <div id="myNav" className="overlay overlay-link">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            ×
          </a>
          <div className="overlay-content">
            <a className="overlay-link" href="#">
              About
            </a>
            <a className="overlay-link" href="#">
              Services
            </a>
            <a className="overlay-link" href="#">
              Clients
            </a>
            <a className="overlay-link" href="#">
              Contact
            </a>
          </div>
        </div>

        <span
          className="mx-3"
          style={{ fontSize: 30, cursor: "pointer" }}
          onClick={openNav}
        >
          ☰
        </span>
      </div>
    </div>
  );
};

export default Hamburger;
