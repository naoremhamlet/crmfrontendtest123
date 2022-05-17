import React, { useRef,useEffect } from "react";

import styles from './ColumnBox.module.css'

const ColumnBox = ({isActive,setIsActive,setColumns,columns})=>{
   const ref=useRef();
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

   const changeHandler=(e)=>{
      const {id,checked}=e.target;
      if(id==="addedOn"){
         setColumns(prev=> {return {...prev,addedOn:checked}})
      }else if(id==="updatedOn"){
         setColumns(prev=> {return {...prev,updatedOn:checked}})
      }else if(id==="reminder"){
         setColumns(prev=> {return {...prev,reminder:checked}})
      }else if(id==="purpose"){
         setColumns(prev=>{return {...prev,purpose:checked}})
      }else if(id==="disposition"){
         setColumns(prev=>{return {...prev,disposition:checked}})
      }else if(id==="contactLocation"){
         setColumns(prev=>{return {...prev,contactLocation:checked}})
      }
   }

   return <div ref={ref} className={styles.box}>
      <div className={styles.option}>
         <input onChange={changeHandler}  type="checkbox" id="contactLocation" value="contactLocation" checked={columns.contactLocation} />
         <label htmlFor="contactLocation">Contact Location</label>
         </div>
         
      {/* <div className={styles.option}>
         <input  onChange={changeHandler} type="checkbox" id="addedOn" value="addedOn" checked={columns.addedOn}/>
         <label htmlFor="addedOn">Added on</label>
      </div>
      <div className={styles.option}>
         <input  onChange={changeHandler} type="checkbox" id="updatedOn" value="updatedOn" checked={columns.updatedOn}/>
         <label htmlFor="updatedOn">Updated on</label>
         </div>
         <div className={styles.option}>
         <input onChange={changeHandler}  type="checkbox" id="purpose" value="purpose" checked={columns.purpose} />
         <label htmlFor="purpose">Call Purpose</label>
         </div>
         <div className={styles.option}>
         <input onChange={changeHandler}  type="checkbox" id="disposition" value="disposition" checked={columns.disposition} />
         <label htmlFor="disposition">Call Disposition</label>
         </div>
         <div className={styles.option}>
         <input onChange={changeHandler}  type="checkbox" id="reminder" value="reminder" checked={columns.reminder} />
         <label htmlFor="reminder">Reminder</label>
         </div> */}
   </div>   
}

export default ColumnBox;