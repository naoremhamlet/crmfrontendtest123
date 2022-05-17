import React from "react";

import styles from "./TeamMemberModal.module.css";
import {
  Close
} from "@mui/icons-material";

// import LeadData from "./LeadData";
import Lead from "./Lead";

const TeamMemberModal = ({ data, setIsActive }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.box}>
        <div className={styles.head}>
          <h1>Assigned Leads:</h1>
          <Close onClick={() => setIsActive(-1)} />
          </div>
          <p>Report: {data.report}</p>
          <div className={styles.leads}>
            {data.leads.map((dt,ind) => {
                return <Lead lead={dt} key={ind}/>
            })}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;
