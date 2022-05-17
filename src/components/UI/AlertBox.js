import React,{useEffect,useRef,useContext,useState} from "react";
import axios from 'axios'
import styles from './AlertBox.module.css'
import {AuthContext} from '../../context/auth-context'

const API_ROUTE = process.env.REACT_APP_API_ROUTE;


const AlertBox =({isActive,setIsActive})=>{
    const ctx=useContext(AuthContext)
    const [myExecutivesAlerts,setMyExecutivesAlerts]=useState([])
    useEffect(()=>{
        axios.get(`${API_ROUTE}/user/getMyExecutivesAlerts`,{headers:{Authorization:`Bearer ${ctx.token}`}})
        .then(res=>{
            console.log(res)
            try{
                if(res.data.alerts)
                {
                setMyExecutivesAlerts(res.data.alerts)
                }
            }
            catch(err)
            {
                alert("Could not load alerts!!")
            }
            
        })

    },[])

    const ref=useRef();
    useEffect(()=>{
        const checkIfClickedOutside = e =>{
            if(isActive && ref.current && !ref.current.contains(e.target)){
                setIsActive(false);
            }
        }
    
        document.addEventListener("mousedown",checkIfClickedOutside);
    
        return ()=>{
            document.removeEventListener("mousedown",checkIfClickedOutside);
        }
    },[isActive])
    


    return <div ref={ref} className={styles.box}>
        <div><b>My Executive Alerts:</b></div><hr/>
        {myExecutivesAlerts.map(alerts=>{

            return(
                <>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div><b>Alert Time:</b> {alerts.time}</div>
                    <div><b>Alert Description:</b> {alerts.description}</div>
                </div>
                <hr/>
                </>
            )
        })}
    </div>
}

export default AlertBox;