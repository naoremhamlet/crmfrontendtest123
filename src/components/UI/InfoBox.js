
import React from "react";

import styles from './InfoBox.module.css';
const InfoBox = ({title,desc,children})=>{
    return <div className={styles.box}>
        <div className={styles.left}>
            {children}
        </div>
        <div className={styles.right}>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    </div>
}

export default InfoBox;