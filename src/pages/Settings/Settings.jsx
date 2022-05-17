import React, { useState,useEffect,useContext } from "react";
// import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
import "./Settings.css";
// import SelectCompanies from "./SelectCompanies"
// import { useHistory } from "react-router-dom";
import CreateTeam from "./CreateTeam";
import {AuthContext} from '../../context/auth-context'
import axios from 'axios'
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const API_ROUTE = process.env.REACT_APP_API_ROUTE;

const Settings = () => {

  const ctx= useContext(AuthContext);
  const [teams,setTeams]=useState({});
  const [currTeam,setCurrTeam]=useState({})
  const changeCurrTeam=(e)=>{
    setCurrTeam(teams[e.target.getAttribute('teamid')])
  }
  const getTeams=()=>{
    console.log(teams)
    try{

    axios.get(`${API_ROUTE}/teams/getMyTeams`,{headers:{Authorization:`Bearer ${ctx.token}`}})
    .then(res=>setTeams(res.data.teams))
    }
    catch(err)
    {
      console.log(err)
    }
    
  }
  useEffect(getTeams,[])
  const [showNewTeam,setShowNewTeam]=useState(false);
  // const history = useHistory();
  return (<>
    {showNewTeam && <CreateTeam isActive={showNewTeam} getTeam={getTeams} setIsActive={setShowNewTeam}/>}
    <div className="settingscont">
      <div className="myteam">
        <h2>Manage Your Teams</h2>
        <Button variant="contained" onClick={()=>setShowNewTeam(true)}>Create Team</Button>
      </div>

      <div style={{display:'flex',flexDirection:'row',justifyContent:'start',flexWrap:'wrap',minHeight:'400px'}}>
        <div>
          <h2>Teams List:</h2>
        <div style={{display:'flex',flexDirection:'column',alignItems: 'start' ,maxHeight:'400px',width:'300px',overflowX:'hidden',overflowY:'scroll'}}>
          {
            Object.keys(teams).map((teamId,index)=>{
              return (
                <div key={index} style={{margin:'3px',padding:'5px',backgroundColor:'#95a5a6',width:'100%',display:'flex',alignItems:'center'}}>
                  <h2 style={{width:'200px'}}>{teams[teamId][0].teamName}</h2>
                  <Button teamid={teamId} onClick={changeCurrTeam}>OPEN</Button>
                  
                </div>
              )
            })
          }
        </div>
        </div>
        {
          currTeam.length>0?<div style={{display:'flex',margin:'20px',flexGrow:'2',alignItems:'center',flexDirection:'column'}}>
          <div className='table-header' style={{display:'flex',textTransform:'none',padding:'5px',alignItems:'start',width:'80%'}}><h2>{currTeam[0].teamName}:</h2></div>
          <div  style={{margin:'3px',padding:'2px',display:'flex',alignItems:'start',width:'80%',fontSize:'25px'}}><div>Members:</div></div>
          {
            currTeam.map(t=>{
              return (
                <div className='table-row' style={{margin:'3px',padding:'4px',display:'flex',alignItems:'start',width:'80%',fontSize:'25px'}}><div>{t.member}</div></div>
              )
            })
          }
          </div>:null
        }
        

      </div>
      {/* <div className="settable">
        <h2>Team1</h2>
        <br />
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">
              <input type="checkbox" />
            </div>
            <div className="col col-2">Team Members</div>
            <div className="col col-3">Assign Companies</div>
            <div className="col col-4">Remove</div>
          </li>
          <li className="table-row">
            <div className="col col-1" data-label="Job Id">
              <input type="checkbox" />
            </div>
            <div className="col col-2">
              John Doe
            </div>
            <div className="col col-3" >
            <SelectCompanies/>
            </div>
            <div className="col col-4" >
              <DeleteIcon />
            </div>
          </li>
          <li className="table-row">
            <div className="col col-1" >
              <input type="checkbox" />
            </div>
            <div className="col col-2" >
              Jennifer Smith
            </div>
            <div className="col col-3" >
              
            </div>
            <div className="col col-4">
              <DeleteIcon />
            </div>
          </li>
          <li className="table-row">
            <div className="col col-1" >
              <input type="checkbox" />
            </div>
            <div className="col col-2" >
              John Smith
            </div>
            <div className="col col-3" >
              
            </div>
            <div className="col col-4">
              <DeleteIcon />
            </div>
          </li>
        </ul>
      </div> */}
    </div>
    </>
  );
  

};

export default Settings;
