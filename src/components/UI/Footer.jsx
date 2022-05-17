import React from "react";
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from "./Footer.module.css"
import { useHistory } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

  
const Footer = () => {
  const history=useHistory();
  return (
    <div className={styles.Box} style={{backgroundColor:'#5156be',color:'white'}}>
      <div className={styles.Container}>
        <div className={styles.Row}>
        <div className={styles.Column}>
            <div className={styles.Heading}>Our Mission</div>
            <div className={styles.FooterLink}onClick={()=>history.push('/terms')}>Aim</div>
            <div className={styles.FooterLink}onClick={()=>history.push('/whyus')}>Why Us?</div>
            <div className={styles.FooterLink}href="#">How to Use?</div>
          </div>
          <div className={styles.Column}>
          <div className={styles.Heading}>Our Services</div>
            <div className={styles.FooterLink}onClick={()=>history.push('/subscribe')}>Subscription</div>
            <div className={styles.FooterLink}onClick={()=>history.push('/whyus')}>Billing</div>
            <div className={styles.FooterLink}href="#">Credit System</div>
            </div>
          <div className={styles.Column}>
          <div className={styles.Heading}>Our Policies</div>
            <div className={styles.FooterLink}onClick={()=>history.push('/terms')}>Terms & Conditions</div>
            <div className={styles.FooterLink}onClick={()=>history.push('/privacy')}>Privacy Policy</div>
            <div className={styles.FooterLink}onClick={()=>history.push('/faq')}>FAQ</div>
          </div>
          <div className={styles.Column}>
          <div className={styles.Heading}>Our Handles</div>
            <div className={styles.FooterLink}href="#">
              <FacebookIcon/> Facebook
            </div>
            <div className={styles.FooterLink} href="#">
              {/* <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  <InstagramIcon/>
                </span>
              </i> */}
                  <InstagramIcon/> Instagram

            </div>
            <div className={styles.FooterLink} href="#">
              {/* <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  <TwitterIcon/>
                </span>
              </i> */}
                  <TwitterIcon/> Twitter

            </div>
            </div>
          <div className={styles.Column}>
          <div className={styles.Heading}>Contact Us:</div>
            <div className={styles.FooterLink}onClick={()=>history.push('#')}><MailIcon/>{" "}DataAlley@gmail.com</div>
            <div className={styles.FooterLink} onClick={()=>history.push('#')}><PhoneIcon/>{" "}1234567890</div>
            {/* <div className={styles.FooterLink}onClick={()=>history.push('/faq')}>FAQ</div> */}
          </div>
          </div>
        </div>
    </div>
  );
};
export default Footer;