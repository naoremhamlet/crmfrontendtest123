import React,{useRef,useEffect,useState,useContext} from "react";

import { Close, AttachFile, HistoryToggleOff } from "@mui/icons-material";

import styles from "./Call.module.css";
import {AuthContext} from '../../context/auth-context'


import axios from'axios'
const API_ROUTE = process.env.REACT_APP_API_ROUTE;


const Call = ({isActive,setIsActive,data}) => {
  const ctx=useContext(AuthContext)


  const [purpose,setPurpose]=useState("Prospecting Call")
  const [disposition,setDisposition]=useState("No answer")
  const [notes,setNotes]=useState("")

  const getCall=()=>{
    axios.get(`${API_ROUTE}/user/getCall?callId=`+data.callId)
    .then(res=>{
      setPurpose(res.data.call.purpose);
      setDisposition(res.data.call.disposition)
      setNotes(res.data.call.notes)
    })
  }

  useEffect(getCall,[])
  const saveCall=()=>{
    console.log({callId:data.callId,notes:notes,purpose:purpose,disposition:disposition})
    axios.post(`${API_ROUTE}/user/saveCall`,{callId:data.callId,notes:notes,purpose:purpose,disposition:disposition},{headers:{Authorization:`Bearer ${ctx.token}`}})
    .then(res=>{alert(res.data.message);getCall();console.log(res)})
  }

  return (
    <div className={styles.backdrop}>
      <div  className={styles.box}>
        <div className={styles.header}>
          <h2>Call with {data.first_name} {data.last_name}</h2>
          <Close  onClick={()=>setIsActive(-1)}/>
        </div>
        <hr />
        <div className={styles.toFrom}>
          <p>Call Purpose</p>
          <select value={purpose||"Prospecting Call"} onChange={e=>{setPurpose(e.target.value)}}>
              <option hidden>Select Purpose..</option>
              <option value="Prospecting Call">Prospecting Call</option>
              <option value="Opportunity Call">Opportunity Call</option>
              <option value="Support Call">Support Call</option>
              <option value="Other Call">Other Call</option>
          </select>
        </div>
        <hr />
        <div className={styles.toFrom}>
          <p>Call Disposition</p>
          <select  value={disposition||"No answer"} onChange={e=>{setDisposition(e.target.value)}}>
            <option hidden>Select Disposition..</option>
            <option vlaue="No answer">No answer</option>
            <option value="Left Voicemail">Left Voicemail</option>
            <option value="Busy">Busy</option>
            <option value="Gatekeeper">Gatekeeper</option>
            <option value="Bad / Wrong Number">Bad / Wrong Number</option>
            <option value="Not in Service">Not in Service</option>
            <option value="Connected - Positive">Connected - Positive</option>
            <option value="Connected - Neutral">Connected - Neutral</option>
            <option value="Connected - Negative">Connected - Negative</option>     
          </select>
        </div>
        <hr />
        <textarea rows="15" placeholder="Note:" value={notes} onChange={e=>{setNotes(e.target.value)}}/>
        <div className={styles.actions}>
            <button className={styles.send} onClick={saveCall}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Call;
