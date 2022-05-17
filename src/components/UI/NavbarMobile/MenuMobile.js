import React,{useState,useContext} from "react";


import {Link} from 'react-router-dom';
import styles from "./MenuMobile.module.css"
import { AuthContext } from "../../../context/auth-context";

const MenuMobile=({navigateAway})=> {
    const [click, setClick] = useState(false);
    const ctx= useContext(AuthContext);
    const logOutHandler=()=>{
      navigateAway();
      ctx.logout();
    }
    return (
      <>
        <ul
          className={click ? `${styles[`dropdown-menu clicked`]}` : `${styles[`dropdown-menu`]}`}
        >
          {/* {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })} */}
          <li><Link onClick={navigateAway} to="/">Home</Link></li>
          <li><Link onClick={navigateAway} to="/prospecting?panel=0">Executives</Link></li>
          <li><Link onClick={navigateAway} to="/prospecting?panel=1">Companies</Link></li>
          <li><Link onClick={navigateAway} to="/mycompanies">My Companies</Link></li>
          <hr/>
          <li><Link onClick={navigateAway} to="/leads">Your Leads</Link></li>
          <li><Link onClick={navigateAway} to="/teams">Your Teams</Link></li>
          <li><Link onClick={navigateAway} to="/proposal">Send Proposal</Link></li>
          <li className={styles.logout}><button onClick={logOutHandler}>Logout</button></li>
        </ul>
      </>
    );
  }
  
  export default MenuMobile;