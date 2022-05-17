
import { Search } from "@material-ui/icons";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SendIcon from '@mui/icons-material/Send';
import VillaIcon from '@mui/icons-material/Villa';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {MonetizationOn} from '@mui/icons-material';
import React from "react";
import { NavLink } from "react-router-dom";

import styles from  "./Navbar.module.css";
import Userdropdown from "./Userdropdown";

const Navbar = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <div className={styles.Left}>
          <img src="logoTitlePng.png" alt="logo" width="120" height="30"/>
          <NavLink to="/">
          <div  className={styles.Icon}><GridViewOutlinedIcon/></div>
          <div className={styles.MenuItem}>Dashboard</div>
          </NavLink>
          <NavLink to="/prospecting">
          <div  className={styles.Icon}><VillaIcon/></div>
          <div className={styles.MenuItem}>Prospecting</div>
          </NavLink>
          <NavLink to="/mycompanies">
          <div  className={styles.Icon}><BusinessCenterIcon/></div>
          <div className={styles.MenuItem}>My Companies</div>
          </NavLink>
          <NavLink to="/sendProposal">
          <div  className={styles.Icon}><SendIcon/></div>
          <div className={styles.MenuItem}>Send Proposal</div>
          </NavLink>
        </div>
        <div className={styles.Right}>
        <NavLink to="/subscribe">
        <div className={styles.credits}>
        <MonetizationOn/>
        <p>50</p>
        </div>
        </NavLink>
        <div className={styles.SearchContainer}>
            <input type="text" placeholder="Search..."/> 
            <Search style={{ color: "gray", fontSize: 14 }} />
        </div>
        <div  className={styles.Icon}><AccountCircleIcon/></div>
        {/* <Userdropdown /> */}
        </div>
      </div>
    </div>
  );
};



export default Navbar;