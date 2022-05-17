import { Apartment, Group, Groups, Leaderboard, People, SavedSearch } from "@mui/icons-material";
import React from "react";
import InfoBox from "./InfoBox";

import { Link } from "react-router-dom";

import styles from './NavbarSearchBox.module.css';

const NavbarEngageBox = ()=>{
    return <div className={styles.box}>
        <div className={styles.row1}><Link to="/leads"><InfoBox title="Leads" desc="Check on the leads you have saved and assign them to your team"><Leaderboard /></InfoBox></Link><Link to="/settings"><InfoBox title="Team" desc="Manage your team and assign them tasks." ><Groups /></InfoBox></Link></div>
        {/* <div className={styles.row2}><Link to="/mycompanies"><SavedSearch /><h3>My Companies</h3></Link></div> */}
    </div>
}

export default NavbarEngageBox;