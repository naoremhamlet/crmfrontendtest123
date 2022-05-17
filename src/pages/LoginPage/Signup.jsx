import React,{useContext,useState} from "react";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./Login.module.css";
import { NavLink,useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import axios from 'axios'
const API_ROUTE = process.env.REACT_APP_API_ROUTE;

const Home = () => {

  const ctx= useContext(AuthContext);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const history=useHistory()

  const signUpHandler=(e)=>{
    e.preventDefault();

    if(name!==""&& email!=="",password!=="")
    {
      const user ={
        name: name,
        email: email,
        password: password
      };
      try
      { 
        axios.post(`${API_ROUTE}/user/register`,{name:name,email:email,password:password})
      .then(
            res=>{
              if(res.data.ans)
              { 
                alert(res.data.message)
                setName('');
                setEmail('');
                setPassword('');
                console.log(res.data);
                // ctx.login(res.data.user.email,res.data.user.name,res.data.user.accessToken,false);
          ctx.login(res.data.user.email,res.data.user.name,res.data.user.accessToken,false);

                history.push('/login')
                
              }
              else{
                console.log(res)
                alert(res.data.message)
              }
            }
      )
      }
      catch(err)
      {
        alert("Unable to register please try again!!!!!!!1")
  
      }

    }
    else{
      alert("Please fill details")
    }

    
    
    
  }



  return (
    <div className={styles.body}>
    <div className={styles[`box-form`]}>
      <div className={styles.left}>
        <div className={styles.overlay}>
          <img src="logoTrans.png" alt="logo"/>
          <br/><br/><br/><br/><br/><br/><br/>
          <span>
            <p>SignUp with social media</p>
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
        <div className={styles.signup}>Get Started with Data Alley</div>
        <p>
          Already have an account? <NavLink to="/login">Log in</NavLink>
        </p>
        <div className={styles.inputs}>
          <input required value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Full Name" />
          <br />
          <input required value={email} onChange={(e)=>setEmail(e.target.value)}  type="text" placeholder="Work Email" />
          <br />
          <input required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
        </div> <br />
        <button onClick={signUpHandler}>Try It Now</button>
      </div>
    </div>
    </div>
  );
};

export default Home;
