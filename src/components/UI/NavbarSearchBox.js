import { Apartment, People, SavedSearch } from "@mui/icons-material";
import React from "react";
import InfoBox from "./InfoBox";

import { Link } from "react-router-dom";

import styles from './NavbarSearchBox.module.css';

const NavbarSearchBox = ()=>{
    return <div className={styles.box}>
        <div className={styles.row1}><Link to="/prospecting?panel=0"><InfoBox title="Executives" desc="Search for hyper-targeted lists of people using filters"><People /></InfoBox></Link><Link to="/prospecting?panel=1"><InfoBox title="Companies" desc="Search for targeted lists of companies using filters." ><Apartment /></InfoBox></Link></div>
        <div className={styles.row2}><Link to="/mycompanies"><SavedSearch /><h3>My Companies</h3></Link></div>
    </div>
}

export default NavbarSearchBox;