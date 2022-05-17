import { Add, Remove } from "@mui/icons-material";
import React, { useRef, useState,useEffect,useContext } from "react"
import {Button} from '@mui/material'
import axios from 'axios'
import {AuthContext} from '../../context/auth-context'
import styles from "./AddToTeam.module.css";

// const teams = [
//   { name: "Team 1 ", members: [{ name: "Sahil" }, { name: "Rajat" }] },
//   {
//     name: "Team 2 ",
//     members: [{ name: "Saket" }, { name: "Mayank" }, { name: "Brain" }],
//   },
// ];

const API_ROUTE = process.env.REACT_APP_API_ROUTE;


const AddToTeam = ({isActive,executiveid,setIsActive,priority,data}) => {
  const ctx=useContext(AuthContext)
  const [teams,setTeams]=useState({})
  const [click, setClick] = useState(false);
  const [showTeam, setShowTeam] = useState(-1);
  const handleClick = () => setClick(!click);
  const ref=useRef();
  console.log(executiveid)
  useEffect(()=>{
    try{

    axios.get(`${API_ROUTE}/teams/getMyTeams`,{headers:{Authorization:`Bearer ${ctx.token}`}})
    .then(res=>setTeams(res.data.teams))
    }
    catch(err)
    {
      console.log(err)
      alert("Can not load teams please try agin after some time.")
    }
    
  },[])
    
  const Assign=(e)=>{
    try{
      axios.post(`${API_ROUTE}/teams/assignExecutive`,{executiveid:executiveid,teamid:e.target.id,priority:priority,callId:data.callId,messageId:data.messageId,alertId:data.alertId},{headers:{Authorization:`Bearer ${ctx.token}`}})
      .then(res=>{
        console.log(res.data)
        alert(res.data.message)
      })
    }
    catch(err)
    {
      console.log(err)
      alert("Can not assign please try again")
    }

  }

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

    const clickHandler=(index)=>{
        if(index===showTeam){
            setShowTeam(-1);
        }else{
            setShowTeam(index);
        }
    }


  return (
    <ul 
      ref={ref}
      className={
        click
          ? `${styles[`dropdown-menu clicked`]}`
          : `${styles[`dropdown-menu`]}`
      }
      
    >
      {Object.keys(teams).map((team, ind) => {
        return (
          <li key={ind}>
            <div className={styles.team} >
              <p>{teams[team][0].teamName}</p>
              {showTeam===ind ? <Remove onClick={()=>clickHandler(ind)}/> : <Add onClick={()=>clickHandler(ind)} />}
              <Button  style={{margin:'2px'}}id={team} onClick={Assign}>ASSIGN</Button>
            </div>
            {showTeam===ind && teams[team].map((person)=>{
                return <div className={styles.pName}>{person.member}</div>
            })}
          </li>
        );
      })}
    </ul>
  );
};

export default AddToTeam;
