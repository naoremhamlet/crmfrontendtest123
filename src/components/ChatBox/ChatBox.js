import React, { useState ,useContext} from "react";

import { Close,Send} from "@mui/icons-material";
import styles from "./ChatBox.module.css";
import {AuthContext} from '../../context/auth-context'
import axios from 'axios'

const API_ROUTE = process.env.REACT_APP_API_ROUTE;

const ChatBox = () => {
  const [showBox, setShowBox] = useState(false);
  const [message,setMessage]=useState("");
  const ctx=useContext(AuthContext);

  const saveChat=()=>{

      axios.post(`${API_ROUTE}/user/saveChat`,{chat:message},{headers:{Authorization:`Bearer ${ctx.token}`}})
      .then(res=>{alert(res.data.message);setMessage("");setShowBox(false)})
    
   
  }

  return (
    <>
      <div
        className={styles.bubble}
        style={{zIndex:'5'}}
        onClick={() => {
          setShowBox((prev) => !prev);
        }}
      >
        
        {!showBox && <img src="icon.jpeg" alt="icon" />}
        {showBox && <Close style={{ color: "white", transform: "scale(2)" }} />}
      </div>
      {showBox && (
        <div className={styles.box}>
          <div className={styles.header}>
            <h2>Chat with us</h2>
          </div>
          <div className={styles.send}>
              <input type="text" value={message} onChange={e=>setMessage(e.target.value)} placeholder="Send Message"/>
              <Send onClick={saveChat} />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
