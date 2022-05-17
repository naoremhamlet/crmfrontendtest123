import React from 'react'

import {useHistory} from 'react-router-dom';


const About = (props) => {

  const history= useHistory();
  return (
    <div id="about">
        <div className="about-image">
            <img src={props.image} alt='' />
        </div>
        <div className="about-text">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            {props.button && <button onClick={()=>history.push(props.buttonTo)}>{props.button}</button>}
        </div>

    </div>
  )
}

export default About