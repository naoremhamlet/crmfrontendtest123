import React from 'react'
import Navbar2 from './Navbar2'
import './Landing.css'
import { NavLink } from 'react-router-dom'

const Header2 = () => {
  return (
      <div id="main">
          <Navbar2/>
          <div className="name">
              <h1>Crush your sales numbers every quarter..</h1>
              <br/>
              <p className="details">Use our data of over 220 millon contacts and 30 millon companies to find and engage your future customers at right time with right message.</p>
              <br/>
              <NavLink to="/signup" className="cv-btn">Get Started</NavLink>
          </div>

      </div>
    
  )
}

export default Header2