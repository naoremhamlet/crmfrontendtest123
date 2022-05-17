import React, { useState } from "react";
import Teams from "./Teams";
import styles from './LeadPage.module.css';


const LeadManagement = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Manage Your Teams</h1>
        <hr />
        <Teams />
      </div>
    </div>
  );
};

export default LeadManagement;
