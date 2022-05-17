import React from 'react'
import './Dashboard.css'


export const FeatureBox = (props) => {
    return (
      <div className="a-box">
          <div className="a-b-img">
              <img src={props.image} />
          </div>
          <div className="s-b-text">
              <h3>{props.title}</h3>
              <p>{props.description}</p>
          </div>
          
      </div>
    )
  }

const Dashboard = () => {
    return (
        <div id="features">
            {/* <h1>Welcome to Data Alley</h1> */}
            <br/>
            <div className="a-container">
                <FeatureBox image="dashboard1.svg" title="Data Alley Database" description="Filter our database of 200M+ contacts and 12M+ companies to find the perfect targets."/>
                <FeatureBox image="dashboard2.svg" title="Engagement Automation" description="Automate emails and make phone calls to prospects with Sequences."/>
                <FeatureBox image="dashboard3.svg" title="Find Companies and People" description="Set up automated tasks, calls, and emails for a better reach"/>
            </div>
    
        </div>
      )
}

export default Dashboard