import React, { useState,useContext,useEffect } from "react";
import Email from '../../components/QuickActions/Email';
import Call from '../../components/QuickActions/Call';
import ReminderDialog from './ReminderDialog';
import Remarks from './Remarks';
import styles from './LeadData.module.css';
import {EmailOutlined,CallOutlined,AccessAlarm,FormatListBulleted,GroupAddOutlined, GroupsOutlined, Delete} from '@mui/icons-material';
import AddToTeam from "./AddToTeam";
import ProfilePage from '../ProfilePage/ProfilePage';
import {AuthContext} from '../../context/auth-context';
import axios from 'axios'

const API_ROUTE = process.env.REACT_APP_API_ROUTE;


const MyLeadData = ({dt,handleChange,columns}) => {
    const ctx=useContext(AuthContext);
    const [showAction,setShowAction]=useState(-1);
    const [showAddToTeam,setShowAddToTeam]=useState(false);
    const [showProfile,setShowProfile]=useState(false);
    const [priority,setPriority]=useState(dt.priority)
    const changePriority = (e)=>{
      setPriority(e.target.value)
      try{
      axios.post(`${API_ROUTE}/teams/changeAssigneePriority`,{priority:e.target.value,executiveid:dt.p_id,teamid:dt.teamID},{headers:{Authorization:`Bearer ${ctx.token}`}})
      .then(res=>{
        if(res.data.ans==false)
        { console.log(res.data.err)
          alert(res.data.message)
        }
      })
      }
      catch(err)
      {
        console.log(err)
      }
    }

  return(
      <>
    {showProfile && <ProfilePage hideProfile={()=>setShowProfile(false)}/>}
    {showAction===0 && <Email isActive={showAction} setIsActive={setShowAction} data={dt}/>}
    {showAction===1 && <Call data={dt} isActive={showAction} setIsActive={setShowAction}/>}
    {showAction===2 && <ReminderDialog data={dt} isActive={showAction} setIsActive={setShowAction}/>}
    {/* {showAction===3 && <Remarks isActive={showAction} setIsActive={setShowAction}/>} */}
      <tr key={dt.p_id} className={styles.row}>
      <input id={dt.p_id} checked={dt.isChecked || false} onChange={handleChange} name={dt.first_name+" "+dt.last_name} type="checkbox"/>
      <td className={styles.name} onClick={()=>setShowProfile(true)}>{dt.first_name+" "+dt.last_name}</td>
      <td>{dt.title}</td>
      <td>{dt.company_name}</td>
      <td className={styles.actions}>
        <button onClick={()=>setShowAction(0)}><EmailOutlined /></button>
        <button onClick={()=>setShowAction(1)}><CallOutlined /></button>
        <button onClick={()=>setShowAction(2)}><AccessAlarm /></button>
        {/* <button onClick={()=>setShowAction(3)}><FormatListBulleted /></button> */}
        <button style={{color:"red",marginLeft:"7px",alignSelf:"center"}}><Delete /></button>
        <div className={styles.priority}>
        <p>Priority</p>
        {dt.assignee==ctx.userId?<select title="Set Priority" value={priority||"Medium"}  onChange={changePriority} >
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High' >High</option>
          <option value='Urgent'>Urgent</option>
        </select>:<select title="Set Priority" disabled value={priority||"Medium"}  onChange={changePriority} >
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High' >High</option>
          <option value='Urgent'>Urgent</option>
        </select>}
        
        </div>
      </td>
      <td>{dt.teamName}</td>
      {/* {
        dt.assignee==ctx.userId?<><td><button onClick={()=>setShowAddToTeam(true)}><GroupsOutlined /></button></td>
        {showAddToTeam && <AddToTeam  executiveid={dt.p_id} isActive={showAddToTeam} setIsActive={setShowAddToTeam}/>}</>
        :null
      } */}
      {/* <td>{dt.industry}</td>
      <td>{dt.headcount}</td>
      <td>{dt.foundedOn}</td>
      <td>{dt.revenue}</td> */}
      {/* {columns.contactLocation && <td>{dt.contactLocation || '-'}</td>}
      {columns.addedOn && <td>{dt.addedOn || "-"}</td>}
      {columns.updatedOn && <td>{dt.updatedOn || "-"}</td>}
      {columns.reminder && <td>{dt.reminder || "-"}</td>}
      {columns.purpose && <td>{dt.purpose || "-"}</td>}
      {columns.disposition && <td>{dt.disposition || "-"}</td>} */}
      {/* <td><button onClick={()=>setShowAddToTeam(true)}><GroupsOutlined /></button></td>
      {showAddToTeam && <AddToTeam  executiveid={dt.p_id} isActive={showAddToTeam} setIsActive={setShowAddToTeam}/>} */}
    </tr>
    </>
    )
};

export default MyLeadData;
