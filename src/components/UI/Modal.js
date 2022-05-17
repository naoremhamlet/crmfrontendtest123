import React from "react";
import "./Modal.css";

const API_ROUTE = process.env.REACT_APP_API_ROUTE;

function Modal({ setOpenModal,afterModalFunction }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Please Agree to our Terms of Services</h1>
        </div>
        <div className="body">
          <p>I will comply to Data Alley's and is ready to save our lead and team within the database</p>
        </div>
        <div className="footer">
          <button onClick={()=>afterModalFunction()}>I will comply</button>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            I Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;