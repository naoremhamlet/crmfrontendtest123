import React from "react";

import {Close,Add} from '@mui/icons-material';

import styles from './Remarks.module.css'


const remarks = [{message: "Report her about the chief system", date: "12/05/22"},{message: "Report her about the chief system", date: "12/05/22"},{message: "Report her about the chief system", date: "12/05/22"},]

const Remarks = ({isActive,setIsActive})=>{



    return (
        <div  className={styles.backdrop}>
        <div  className={styles.box}>
            <div className={styles.head}>
            <h2>Remarks</h2>
            <Close  onClick={()=>setIsActive(-1)}/>
            </div>
            <div className={styles.name}>
            <h1>Joyce Jing</h1>
            <h4>ZW HR Counselling</h4>
            </div>
            <hr />
            <div className={styles.remarks}>
                <Add />
                {remarks.map((remark,ind)=>{
                    return <div key={ind} className={styles.remark}>
                        <p><em>{remark.message}</em></p>
                        <small>{remark.date}</small>
                    </div>
                })}
            </div>
            <div className={styles.footer}>
            <button className={styles.cancel}>Close</button>
            </div>
        </div>
        </div>
    )
}

export default Remarks;