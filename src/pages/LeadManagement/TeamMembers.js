import React,{useState} from 'react'

import TeamMemberModal from './TeamMemberModal';
import {Edit} from '@mui/icons-material';
const TeamMember = ({member,ind})=>{

    const [showDetail,setShowDetail]=useState(-1);
    return <>
    {showDetail!==-1 && <TeamMemberModal data={member} setIsActive={setShowDetail}/>}
    <span>
    <p>{member.name}</p>
    <span>
    <small style={{marginRight:"10px",color:"#5156be"}}>5 leads</small>
    <Edit onClick={()=>setShowDetail(ind)}/>
    </span>
    </span>
    </>
}
export default TeamMember