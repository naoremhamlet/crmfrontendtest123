import React,{useState} from 'react'

import styles from './TeamMemberModal.module.css';

import {
    EmailOutlined,
    CallOutlined,
    AccessAlarm,
    FormatListBulleted,
    DeleteOutline,
    Close
  } from "@mui/icons-material";

import Email from '../../components/QuickActions/Email';
import Call from '../../components/QuickActions/Call';
import Remarks from './Remarks';
import ReminderDialog from './ReminderDialog';
import ProfilePage from '../ProfilePage/ProfilePage';

const Lead = ({lead})=>{

    const [showAction,setShowAction]=useState(-1);
    const [showProfile,setShowProfile]=useState(false);

    return <>
    {showProfile && <ProfilePage hideProfile={()=>setShowProfile(false)} />}
    {showAction===0 && <Email  isActive={showAction} setIsActive={setShowAction} data={[{...lead,isChecked:true}]}/>}
    {showAction===1 && <Call data={lead} isActive={showAction} setIsActive={setShowAction}/>}
    {showAction===2 && <ReminderDialog isActive={showAction} setIsActive={setShowAction}/>}
    {showAction===3 && <Remarks isActive={showAction} setIsActive={setShowAction}/>}
    <div className={styles.lead}>
    <span>
      <p style={{fontWeight:"bold",cursor:"pointer"}}onClick={()=>setShowProfile(true)}>{lead.contactname}</p>
    </span>
    <span>
      <EmailOutlined onClick={()=>setShowAction(0)}/>
      <CallOutlined onClick={()=>setShowAction(1)}/>
      <AccessAlarm onClick={()=>setShowAction(2)}/>
      <FormatListBulleted onClick={()=>setShowAction(3)}/>
      <p>Priority</p>
      <select title="Set Priority">
        <option>Low</option>
        <option selected="selected">Medium</option>
        <option>High</option>
        <option>Urgent</option>
      </select>
      <DeleteOutline style={{color:"red"}}/>
    </span>
  </div>
  </>;
}

export default Lead;