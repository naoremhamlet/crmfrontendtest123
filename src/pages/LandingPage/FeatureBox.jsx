import React from 'react'

const FeatureBox = (props) => {
  return (
    <section id="product">
    <div className="a-box">
        <div className="a-b-img">
            <img src={props.image} />
        </div>
        <div className="s-b-text">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
        
    </div>
    </section>
  )
}

export default FeatureBox