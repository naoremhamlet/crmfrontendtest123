import React from "react";

import {Link} from '@mui/icons-material'
import styles from "./ProfilePage.module.css";




const CompanyResearch = ({data})=>{
    return  <div className={styles.right}>
    <div className={styles.info}>
    <h1>Company Research</h1>
    <h3 style={{marginTop: "30px"}}>Company Name</h3>
    <h3 style={{fontWeight : "normal"}}>{data.compName}</h3>
    <h3 style={{marginTop: "30px"}}>Description</h3>
    <h3 style={{fontWeight : "normal"}}>{data.description}</h3>
    <h3 style={{marginTop: "30px"}}>Website</h3>
    <h3 style={{fontWeight : "normal"}}>{data.website}</h3>
    <h3 style={{marginTop: "30px"}}>Company Size</h3>
    <h3 style={{fontWeight : "normal"}}>{data.headCount}</h3>    
    <h3 style={{marginTop: "30px"}}>Revenue</h3>
    <h3 style={{fontWeight : "normal"}}>{data.revenue}</h3>    
    <h3 style={{marginTop: "30px"}}>Location</h3>
    <h3 style={{fontWeight : "normal"}}>{data.location}</h3>    
    </div>
    <div className={styles.insights}>
        <h2 style={{marginBottom : "20px"}}>Insights</h2>
        {data.compInsights.map(insight => {
                return <div className={styles.inLink}>
              <Link />
              <h4>{insight}</h4>
            </div>
        })}
    </div> 
</div>
}

export default CompanyResearch;