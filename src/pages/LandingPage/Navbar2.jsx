import React,{useState} from 'react'


import {NavLink,useHistory} from 'react-router-dom';
import MenuMobile2 from '../../components/UI/NavbarMobile/MenuMobile2';
import './Landing.css'

const Navbar2 = () => {
  const history= useHistory();
  const[nav,setnav]=useState(false);
  const [menuMode,setMenuMode]=useState(false);

  const changeBackground=()=>{
    if(window.scrollY>=50){
      setnav(true);
    }
    else{
      setnav(false);
    }

  }
  window.addEventListener('scroll',changeBackground);
  
  const navigateAway=()=>{
    setMenuMode(false);
  }

  return (<>
    <nav className={nav?'nav active':'nav'}>
        <a href="#" className="logo">
            <img onClick={()=>{history.push('/')}} src="logoTitlePng.png" />
        </a>
        <input type="text" className="menu-btn" id="menu-btn"/>
        <label className="menu-icon" for="menu-btn">
            <span className="nav-icon" onClick={()=> menuMode? setMenuMode(false) : setMenuMode(true)}></span>
        </label>
        <ul className="menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><a href="#product">Product</a></li>
            <li><NavLink to="/subscribe">Pricing</NavLink></li>
            <li><NavLink to="/faq">About us</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
        </ul>
    </nav>
    {menuMode && <MenuMobile2 navigateAway={navigateAway}/>}
    </>
  )
}

export default Navbar2