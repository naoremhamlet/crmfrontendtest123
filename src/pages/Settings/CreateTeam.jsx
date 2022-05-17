import React,{useEffect,useRef,useContext,useState} from "react";
import "./createteam.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import {AuthContext} from '../../context/auth-context'
import axios from "axios";

const API_ROUTE = process.env.REACT_APP_API_ROUTE;


const CreateTeam = ({isActive,setIsActive,getTeam}) => {

  const ctx=useContext(AuthContext);

  
  const ref=useRef();
  const [teamName,setTeamName]=useState("")
  const [member1,setMember1]=useState("")
  const [member2,setMember2]=useState("")
  const [member3,setMember3]=useState("")
  const [member4,setMember4]=useState("")

  const createTeam=async (e)=>{
    console.log(e)
    e.preventDefault();
    try{
    await axios.post(`${API_ROUTE}/teams/createMyTeam`,{teamName:teamName,members:member1+","+member2+","+member3+","+member4},{headers:{Authorization:`Bearer ${ctx.token}`}})
    .then(res=>{
      if(res.data.ans===false)
      {
        alert("Unable to create team, make sure you enter atleast one member")
      }
      else{
        alert(res.data.message)
        getTeam();
      }
    })
    }
    catch(err)
    {
      alert("Cannot create team")
      console.log(err);
    }
    
    setIsActive(false);
    
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

  return (
    <div className="modalBackground">
      
    <div ref={ref} className="boxs">
    <form  onSubmit={createTeam}>
      <div className="inputs">
        <div class="form-group">
          <input class="form-field" onChange={(e)=>setTeamName(e.target.value)} required type="name" placeholder="Team Name" />
        </div>
        <h3>Members</h3>
        <br/>
        <ol>
          <li>
            <div class="form-group">
              <input value={member1} type='email' onChange={e=>setMember1(e.target.value)} class="form-field"  placeholder="Member 1" />
              <DeleteIcon  onClick={()=>setMember1("")}/>
            </div>
          </li>
          <li>
            <div class="form-group">
              <input value={member2} onChange={e=>setMember2(e.target.value)} class="form-field" type="email" placeholder="Member 2" />
              <DeleteIcon onClick={()=>setMember2("")} />
            </div>
          </li>
          <li>
            <div class="form-group">
              <input value={member3}  onChange={e=>setMember3(e.target.value)} class="form-field" type="email" placeholder="Member 3" />
              <DeleteIcon onClick={()=>setMember3("")} />
            </div>
          </li>
          <li>
            <div class="form-group">
              <input value={member4}  onChange={e=>setMember4(e.target.value)} class="form-field" type="email" placeholder="Member 4" />
              <DeleteIcon  onClick={()=>setMember4("")} />
            </div>
          </li>
        </ol>
        <Button  type="submit" variant="contained" color="success">
          Team Up!
        </Button>
      </div>
      </form>
    </div>
    
    </div>
  );
};

export default CreateTeam;
