import React from "react";
import { Done,MonetizationOn } from "@material-ui/icons";
import styles from "./SubscriptionCard.module.css";



const SubscriptionCard = ({data,selected,onClick,monthMode}) => {
  return (
    <div onClick={()=>onClick()} className={`${styles.card}  ${selected===data.id ? `${styles.cardSel}` : ""}`}>
      {selected === data.id && <span className={styles.selected}>SELECTED</span>}
      <h2>{data.name}</h2>
      <h1>${`${monthMode? `${data.mPrice}` : `${data.yPrice}`}`}</h1>
      {data.mPrice !== 0 &&<p>Per User, per monthly</p>}
      {data.mPrice !== 0 && <p>Billed {monthMode ? "monthly" : "annually"}</p> }
      <hr />
      <h5>
        <span>
          <strong><MonetizationOn/>{data.credits} Credits</strong>
        </span>
        /Month
      </h5>
      <hr />
      <div className={styles.features}>
        <h5>Everything {`${data.mPrice!==0 ? "extra" : ""}`} in {data.name}:</h5>
        <ul>
          {data.features.map((ft,index)=>{
             return( <li key={index}>
                  <Done />
                  <p>{ft}</p>
              </li>)
          })}
        </ul>
      </div>

    </div>
  );
};

export default SubscriptionCard;
