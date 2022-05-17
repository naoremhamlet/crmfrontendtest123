import React from "react";
import BusinessIcon from "@material-ui/icons/Business";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import SendIcon from "@material-ui/icons/Send";
import "../Sendproposal.css";
import Logo from "../imgs/logo.png";
import Button from "@mui/material/Button";

const sendproposal = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <BusinessIcon />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                4671 Sugar Camp Road
                <br />
                Mennisota,Canada
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <EmailIcon />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>test@gmail.com</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <PhoneIcon />
            </div>
            <div className="text">
              <h3>Phone No.</h3>
              <p>9090909090</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <from>
            <h2>Send Proposal</h2>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Company Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Phone No</span>
            </div>
            <div className="inputBox">
              <input type="file" id="myFile" name="filename" />
            </div>
            <Button variant="contained" endIcon={<SendIcon/>}>
              Send
            </Button>
          </from>
        </div>
      </div>
    </div>
  );
};

export default sendproposal;
