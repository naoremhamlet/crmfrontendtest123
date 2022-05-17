import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import SubscriptionCard from "./SubscriptionCard";

import styles from "./SubscriptionPage.module.css";

const packages = [
  {
    id: 0,
    name: "Free",
    mPrice: 0,
    yPrice: 0,
    credits: "50",
    features: [
      "Basic Sequence Automation (2 Sequence Limit)",
      "Basic Filters",
      "LinkedIn Extension",
      "Send 250 Emails/day",
      "Gmail Extension",
      "Email Open, Click, Reply & Meeting Tracking",
      "HubSpot & Salesforce Integration (Pull Only)",
    ],
  },
  {
    id: 1,
    name: "Basic",
    mPrice: 49,
    yPrice: 39,
    credits: "200",
    features: [
      "No Sequence Limit",
      "Uncapped Sending Limits with Sendgrid",
      "Advanced Filters",
      "Advanced Reports & Dashboards (Pre-Built)",
      "Integration with All Email Providers",
      "Custom Fields",
      "Opportunities",
      "Rules Engine Process Builder",
      "Advanced Salesforce & HubSpot Integration (Bi-Directional)",
    ],
  },
  {
    id: 2,
    name: "Professional",
    mPrice: 99,
    yPrice: 79,
    credits: "Unlimited",
    features: [
      "A/B Testing",
      "Manual Tasks",
      "Dialer",
      "Call Recordings",
      "Custom Stages",
    ],
  },
];

const SubscriptionPage = () => {
  const history=useHistory();  const ctx = useContext(AuthContext);
  const [isMonthly,setIsMonthly]=useState(true);
  const [selectedPlan, setSelectedPlan] = useState(0);

  return (
    <div className={styles.body}>
      <h1>Upgrade Your Plan</h1>
      <div className={styles.selector}>
        <h3 onClick={()=>setIsMonthly(true)} className={isMonthly? styles.selected : ""}>Monthly Plan</h3>
        <h3 onClick={()=>setIsMonthly(false)} className={!isMonthly? styles.selected : ""}>Yearly Plan</h3>
      </div>
      <div className={styles.selectPlan}>
        <h2>Select Your Plan</h2>
        <p>Available Credits: <span style={{fontWeight: "bold"}} className={styles.checkPrice}>50</span></p>
      </div>
        <hr className={styles.selectHr}/>
      <div className={styles.cards}>
        { packages.map((pack) => (
          <SubscriptionCard
            onClick={() => {
              setSelectedPlan(pack.id);
            }}
            monthMode={isMonthly}
            selected={selectedPlan}
            key={pack.id}
            data={pack}
          />
        ))}
      </div>
      <div className={styles.checkout}>
       {ctx.isLoggedIn? (<><div className={styles.left}>
        <h3>Summary</h3>
        <h1>{packages[selectedPlan].name} Plan</h1>
        </div>
        <div className={styles.right}>
            {isMonthly && <h2><span><h1 className={styles.checkPrice}>${packages[selectedPlan].mPrice}</h1></span> /month</h2>}
            {!isMonthly && <h2><span><h1 className={styles.checkPrice}>${packages[selectedPlan].yPrice*12}</h1></span> /year</h2>}
            <button disabled={packages[selectedPlan].mPrice===0}>Upgrade</button>
        </div></>)
       :
       (<div  className={styles.loginFirst} style={{display:"flex",flexDirection:"row",alignItems:"center"}}><h1 style={{marginLeft:"100px"}}>You need to login first to continue</h1><button style={{marginLeft:"100px",padding:"20px 30px",borderRadius:"10px",color:"white",backgroundColor:"#5156be",fontSize:"2rem",cursor:"pointer"}} onClick={()=>history.push('/login')}>Login / Signup</button></div>)}
      </div>
    </div>
  );
};

export default SubscriptionPage;
