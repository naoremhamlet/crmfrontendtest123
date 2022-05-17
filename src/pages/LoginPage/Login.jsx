import React, { useState,useContext ,useRef} from "react";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./Login.module.css";
import axios from 'axios'
import {NavLink} from 'react-router-dom';
import { AuthContext } from "../../context/auth-context";

const API_ROUTE = process.env.REACT_APP_API_ROUTE;


const Home = () => {
  const ctx= useContext(AuthContext);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const rememberme=useRef(null)


  const loginHandler=(e)=>{
    e.preventDefault()
    if(email!=""&& password!="")
    {
      const user ={
        email: email,
        password: password
      };
      console.log(user)
      try{
      axios.post(`${API_ROUTE}/user/login`,{email:email,password:password})
      .then(res=>{
        console.log(res)
        if(res.data.ans)
        { 
          alert(res.data.message)
          setEmail('');
          setPassword('');

          console.log(res.data)
          ctx.login(res.data.user.email,res.data.user.name,res.data.accessToken,rememberme.current.checked);
        }
        else{
          alert(res.data.message)
        }
      })
      }
      catch(err)
      { 
        alert("Unable to process request tey again!!!!!!")
      }
      
    }
    else{
      alert("Please fill all details")
    }
    
    
  }

  return (
    <div className={styles.body}>
    <div className={styles[`box-form`]}>
      <div className={styles.left}>
        <div className={styles.overlay}>
          <h1><img src="logoTrans.png" alt="logo" /></h1>
          <br/><br/><br/><br/>
          <span>
            <p>Login with social media</p>
            <a href="#">
              <GoogleIcon />
            </a>
            <a href="#">
              <LinkedInIcon />
            </a>
          </span>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.signup}>Welcome Back ! </div>
        <p>
          Don't have an account? <NavLink to="/signup">Sign Up</NavLink> It takes
          less than a minute
        </p>
        <div className={styles.inputs}>
          <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="Work Email" />
          <br />
          <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
        </div>

        <br/>
        <div className={styles[`remember-me--forget-password`]}>
          <label>
            <input  ref={rememberme} type="checkbox" name="item"/>
            <span className={styles[`text-checkbox`]}>Keep me signed up</span>
          </label>
          <p>Forgot password?</p>
        </div>

        <br />
        <button onClick={loginHandler}>Login</button>
      </div>
    </div>
    </div>
  );
};

export default Home;
