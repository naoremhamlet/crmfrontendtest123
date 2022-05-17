import React, { useState } from "react";

import {ArrowDropDown,ArrowDropUp,Edit} from '@mui/icons-material';

import styles from './TeamAcc.module.css';
import TeamMemberModal from "./TeamMemberModal";
import TeamMember from "./TeamMembers";

const TeamAcc = ({data,index,onClick,showOn})=>{


    return (
        <>
        <div className={styles.box}>
        <div onClick={onClick} className={`${styles.question} ${showOn===index ? `${styles.selected}` : ""}`}>
        <h2>{data.name}</h2>
        {showOn===index ? <ArrowDropUp /> : <ArrowDropDown />}
        </div>
        {showOn===index && <div className={styles.answer}>
        <h4>Team Remark:</h4>
        <p>{data.remark}</p>
        <h4>Team Members</h4>
        <div className={styles.members}>
        {data.members.map((member,ind)=>{
            return <TeamMember member={member} ind={ind}/>
        })}
        </div>
        </div>}
    </div>
    </>)
}

export default TeamAcc;