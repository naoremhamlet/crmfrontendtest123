import React, { useState } from "react";

import styles from './InputBox.module.css';

const InputBox =({heading,placeholder})=>{
    const [input,setInput]=useState('');

    return <div className={styles.inputBox}>
        <h3>{heading}</h3>
        <input value={input} placeholder={placeholder} onChange={(e)=>{setInput(e.target.value)}}/>
    </div>
}

export default InputBox;