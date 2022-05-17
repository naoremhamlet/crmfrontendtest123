import React,{useState,useContext} from "react";
import styled from "styled-components";
import styles from './Userdropdown.module.css'

import {Settings,CreditScore,Quiz,ExitToApp} from '@mui/icons-material';
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
const Container = styled.div`
  background-color: #FAF9F6;
  display:flex;
  flex-direction:column;
  height: 330px;
  width: 200px;
  position: absolute;
  top: 70px;

  right: 0;
  border: 1px solid black;
  align-items: center;
  justify-content:space-around;
  transition : all ease 2s;
`;
const Items = styled.div`
  cursor: pointer;
  height: 30px;
  width: 160px;
  border: 1px solid black;
  align-items: center;
  font-size: 14px;
  padding: 10px 10px;
  border-radius:15px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  &:hover {
    background-color: #1d3557;
    color: white;
  }

  svg{
    margin-right: 4px;
  }
`;



const Name= styled.div`

  height: 35px;
  width: 160px;
  border: 1px solid black;
  align-items: center;
  font-size: 14px;
  padding: 10px 10px;
  border-radius:15px;
  background-color: #1d3557;
  color: white;
  &:hover {
    color: black;
    background-color: white;
  }
`;

const Userdropdown = () => {
  const ctx = useContext(AuthContext);
  const history = useHistory();
  const [click, setClick] = useState(false);
  

  const onLogoutHandler = ()=>{
    ctx.logout();
  }

  return <ul
          className={click ? `${styles[`dropdown-menu clicked`]}` : `${styles[`dropdown-menu`]}`}
        >
      <Name> {ctx.name}</Name>
      {/* <Items> Why us..?</Items>
    //   <Items> How to use..?</Items> */}
      {/* <Items> T&C</Items>
      <Items> Privacy Policy</Items> */}
      <Items onClick={()=>history.push('/faq')}><Quiz/> FAQ</Items>
      <Items onClick={()=>history.push('/subscribe')}><CreditScore /> Billing</Items>
      <Items onClick={()=>history.push('/updateUserData')}><Settings /> Settings</Items>
      <Items onClick={onLogoutHandler}><ExitToApp/> Logout</Items>
      </ul>

};

export default Userdropdown;
