import React,{useEffect,useState,useContext}from "react";

import {Close} from '@mui/icons-material';

import styles from './ReminderDialog.module.css'

import axios from 'axios'

import {AuthContext} from '../../context/auth-context';

const API_ROUTE = process.env.REACT_APP_API_ROUTE;



const reminderTemplate={
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false
};

const ReminderDialog = ({isActive,setIsActive,data})=>{

    const ctx=useContext(AuthContext)
    const [reminderDays,setReminderDays]=useState(reminderTemplate);
    const [description,setDescription]=useState("")
    const [time,setTime]=useState("")
    const getAlert=()=>{
        axios.get(`${API_ROUTE}/user/getALert?alertId=`+data.alertId)
        .then(res=>{
            console.log(res.data)
            let dobj={}
            for(let i=0;i<res.data.alert.days.split(",").length;i++){
                dobj[res.data.alert.days.split(",")[i]]=true;

            }
            setReminderDays(dobj);
            setTime(res.data.alert.time)
            setDescription(res.data.alert.description)
        })

    }
    useEffect(getAlert,[])
    const saveAlert=()=>{
        let darray=[]
        Object.keys(reminderDays).forEach(day=>{
            if(reminderDays[day]==true)
            {
                darray.push(day)
            }
        })
        console.log(darray)
        try{
            axios.post(`${API_ROUTE}/user/saveAlert`,{alertId:data.alertId,days:darray,description:description,time:time},{headers:{Authorization:`Bearer ${ctx.token}`}})
        .then(res=>{alert(res.data.message);getAlert()})
        }
        catch(err)
        {
            alert("Unable to save")
        }
        
    }
    console.log(reminderDays)
    const dayHandler=(e)=>{
        const curr=e.target.id;
        setReminderDays(prevDays=>{
            if(curr==="mon"){
                return {...prevDays,mon: !prevDays.mon}
            }else if(curr==="tue"){
                return {...prevDays,tue: !prevDays.tue}
            }else if(curr==="wed"){
                return {...prevDays,wed: !prevDays.wed}
            }else if(curr==="thu"){
                return {...prevDays,thu: !prevDays.thu}
            }else if(curr==="fri"){
                return {...prevDays,fri: !prevDays.fri}
            }else if(curr==="sat"){
                return {...prevDays,sat: !prevDays.sat}
            }else if(curr==="sun"){
                return {...prevDays,sun: !prevDays.sun}
            }
        })

    }
    
    return (
        <div  className={styles.backdrop}>
        <div className={styles.box}>
            <div className={styles.head}>
            <h1>Set Reminder</h1>
            <Close onClick={()=>setIsActive(-1)}/>
            </div>
            <br />
            <p>Reminder Description: </p>
            <input type="text" value={description} onChange={e=>setDescription(e.target.value)}/>
            <hr />
            <p>Reminder time:</p>
            <input type="time" value={time} onChange={e=>setTime(e.target.value)}/>
            <hr />
            <h2>Set Days For Reminder</h2>
            <div className={styles.days}>
                <div id="mon"  className={`${`${styles.day} ${reminderDays.mon ? `${styles.selectedDay}`:""}`}`} onClick={dayHandler}>M</div>
                <div id="tue" className={`${`${styles.day} ${reminderDays.tue ? `${styles.selectedDay}`:""}`}`} onClick={dayHandler}>T</div>
                <div id="wed" className={`${`${styles.day} ${reminderDays.wed ? `${styles.selectedDay}`:""}`}`} onClick={dayHandler}>W</div>
                <div id="thu" className={`${`${styles.day} ${reminderDays.thu ? `${styles.selectedDay}`:""}`}`} onClick={dayHandler}>T</div>
                <div id="fri" className={`${`${styles.day} ${reminderDays.fri ? `${styles.selectedDay}`:""}`}`} onClick={dayHandler}>F</div>
                <div id="sat" className={`${`${styles.day} ${reminderDays.sat ? `${styles.selectedDay}`:""}`}`} onClick={dayHandler}>S</div>
                <div id="sun" className={`${`${styles.day} ${reminderDays.sun ? `${styles.selectedDay}`:""}`}`} onClick={dayHandler}>S</div>
            </div>
            <div className={styles.footer}>
            <button className={styles.cancel}>Cancel</button>
            <button className={styles.send} onClick={saveAlert}>Confirm</button>
            </div>
        </div>
        </div>
    )
}

export default ReminderDialog