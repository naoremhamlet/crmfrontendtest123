import React,{useState,useContext} from "react";


import {Link,useHistory} from 'react-router-dom';
import styles from "./MenuMobile.module.css"
import { AuthContext } from "../../../context/auth-context";

const MenuMobile2=({navigateAway})=> {
    const history = useHistory();
    const [click, setClick] = useState(false);
    const ctx= useContext(AuthContext);
    const logInHandler=()=>{
      navigateAway();
      history.push('/login');
    }

    return (
      <>
        <ul
           style={{top: "65px"}} className={click ? `${styles[`dropdown-menu clicked`]}` : `${styles[`dropdown-menu`]}`}
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
          <li><Link onClick={navigateAway} to="#product">Products</Link></li>
          <li><Link onClick={navigateAway} to="/subscribe">Subscribe</Link></li>
          <li><Link onClick={navigateAway} to="/faq">About us</Link></li>
          <hr/>
          {/* <li><Link onClick={navigateAway} to="/leads">Your Leads</Link></li>
          <li><Link onClick={navigateAway} to="/leads">Your Teams</Link></li>
          <li><Link onClick={navigateAway} to="/proposal">Send Proposal</Link></li> */}
          <li className={styles.logout}><button onClick={logInHandler}>Login</button></li>
        </ul>
      </>
    );
  }
  
  export default MenuMobile2;