import React from "react";

import {Add,Remove} from '@mui/icons-material';

import styles from './Accordian.module.css';

const Accordian = ({data,index,onClick,showOn})=>{
    return (<div className={styles.box}>
        <div onClick={onClick} className={`${styles.question} ${showOn===index ? `${styles.selected}` : ""}`}>
        <h2>{data.question}</h2>
        {showOn===index ? <Remove /> : <Add />}
        </div>
        {showOn===index && <div className={styles.answer}>
        <p>{data.answer}</p>
        </div>}
    </div>)
}

export default Accordian;