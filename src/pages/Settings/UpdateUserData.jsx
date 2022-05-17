import React,{useEffect,useState,useContext} from 'react'
// import InputBox from '../../components/UI/InputBox'
import {Button} from '@mui/material'
import {AuthContext} from '../../context/auth-context'
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'
import './UpdateUserData.css'

const API_ROUTE = process.env.REACT_APP_API_ROUTE;

const UpdateUserData = () => {
    const ctx=useContext(AuthContext)
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState(ctx.userId)
    const [phone,setPhone]=useState("")
    const [location,setLocation]=useState("")
    const [dob,setDOB]=useState("")

    const [loading,setLoading]=useState(true)


    const updateUser=(e)=>{
        e.preventDefault();
        if(phone.length===10||phone.length===0)
        {

        
        axios.post(`${API_ROUTE}/user/updateUser`,{username:username,phone:phone,dob:dob,location:location},{headers:{Authorization:`Bearer ${ctx.token}`}})
        .then(res=>{
            alert(res.data.message)
        })
        }
        else{
            alert("There has to be 10 digits in phone number ")
        }
    }

    useEffect(()=>{
        axios.get(`${API_ROUTE}/user/getUserData`,{headers:{Authorization:`Bearer ${ctx.token}`}})
        .then(res=>{
            if(res.data.ans)
            {   
            setUsername(res.data.user.username);
            setLocation(res.data.user.location)
            setPhone(res.data.user.phone);
            setDOB(res.data.user.dob)
            }
            setLoading(false)
        })
    },[])
    if(loading)
    {
        return (<center><div style={{padding:'5px',height:'400px'}}><CircularProgress/></div></center>)
    }
    else{

    
  return (
    <div style={{padding:'10px',margin:'5px',width:'400px',border:'0.5px solid black',borderRadius:'5px'}} >
        
            <h3>UPDATE YOUR DATA:</h3>
        <form >
            {/* <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}> */}
            <label>Email</label>
            <input className='inputBox' disabled value={email} type='text'/>
            {/* </div> */}
            
            {/* <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}> */}
            <label>username</label>
            <input className='inputBox' value={username} onChange={e=>setUsername(e.target.value)} type='text'/>
            {/* </div>             */}
            {/* <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}> */}
            <label>Phone</label>
            <input className='inputBox' value={phone} onChange={e=>setPhone(e.target.value)} type="number" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
            {/* </div>    */}
            {/* <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}> */}
            <label>Location</label>
            <input className='inputBox' value={location} onChange={e=>setLocation(e.target.value)} type='text'/>

            <label>Date of Birth:</label>
            <input className='inputBox' value={dob && dob.split("T")[0]} onChange={e=>setDOB(e.target.value)} type='date'/>
           
            {/* </div> */}
            <Button type='submit' onClick={updateUser} variant='contained'>Update </Button>

        </form>
        
    </div>
  )
  }
}


export default UpdateUserData