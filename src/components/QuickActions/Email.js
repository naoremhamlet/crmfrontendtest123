import React,{useEffect,useRef,useState,useContext} from "react";

import { Close, AttachFile, HistoryToggleOff } from "@mui/icons-material";

import styles from "./Email.module.css";

import {AuthContext} from '../../context/auth-context'

import axios from 'axios'

const API_ROUTE = process.env.REACT_APP_API_ROUTE;


const Email = ({isActive,setIsActive,data}) => {
  const ctx=useContext(AuthContext)
  const [subject,setSubject]=useState("")
  const [message,setMessage]=useState("")
  const [toEmail,setToEmail]=useState("")
  const getMessage=async()=>{
    await axios.get(`${API_ROUTE}/user/getMessage?messageId=`+data.messageId,{headers:{Authorization:`Bearer ${ctx.token}`}}).then(res=>{
      setSubject(res.data.message[0].subject)
      setMessage(res.data.message[0].message)
      setToEmail(res.data.message[0].to_email)
      console.log(res)
    })

  }
  useEffect(getMessage,[])

  

  const saveAsDraft=()=>{
    // console.log({messageId:data.messageId,subject:subject,message:message,to_email:toEmail})
    axios.post(`${API_ROUTE}/user/saveMessage`,{messageId:data.messageId,subject:subject,message:message,to_email:toEmail},{headers:{Authorization:`Bearer ${ctx.token}`}})
    .then(async (res)=>{alert(res.data.message);await getMessage();setIsActive(false)})
    
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.box}>
        <div className={styles.header}>
          <h2>Drafted Email</h2>
          <Close  onClick={()=>setIsActive(-1)}/>
        </div>
        <hr />
        <div className={styles.toFrom}>
          <p>From</p>
          <p>You {ctx.userId}</p>
        </div>
        <hr />
        <div className={styles.toFrom}>
          <p>To</p>
          <input type="text" value={toEmail} onChange={e=>{setToEmail(e.target.value)}}/>
          <div style={{ marginLeft: "37px" }}>
            {/* {data.map((val,id)=>{
              if(val.isChecked){
                return <p key={id}>{val.contactname}</p>
              }
            })} */}
          </div>
          {/* <p >{emails.map((email,id)=> return)}</p> */}
        </div>
        <hr />
        <div className={styles.toFrom}>
          <p>Subject</p>
          <input type="text" value={subject} onChange={e=>{setSubject(e.target.value)}}/>
        </div>
        <hr />
        <textarea rows="15" value={message} onChange={e=>setMessage(e.target.value)} />
        <div className={styles.actions}>
          <AttachFile style={{ cursor: "pointer" }} />
          <span>
            <button className={styles.altSend}>
              <HistoryToggleOff
                style={{ position: "relative", top: "8px", marginRight: "5px" }}
              />
              Set delivery schedule
            </button>
            <button className={styles.send} onClick={saveAsDraft}>Save</button>
            <button className={styles.send}>Send Now</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Email;
