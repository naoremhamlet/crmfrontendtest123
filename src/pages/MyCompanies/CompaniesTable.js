import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';
import {LinkedIn,Twitter,Download,Search,MoreHoriz, Save} from '@mui/icons-material'
import ProfilePage from '../ProfilePage/ProfilePage';
import styles from './CompaniesTable.module.css';
import CircularProgress from '@mui/material/CircularProgress';
  

let checkCount=0;
const CompaniesTable = ({data,currPage,changePage,setData,setShowProfile,totalPages,loading,setCurrPage}) => {
  const [showMore,setShowMore]=useState(false);

  const handleChange = (event) => {
    const { name,id, checked } = event.target;

      if(name==="allSelect"){
        if(checkCount===data.length){
            checkCount=0;
            setData(prevData=>{
              return prevData.map(data => {return {...data,checked:false}});
            })
        }else{
           checkCount=data.length;
           setData(prevData=>{
              return prevData.map(data => {return {...data,checked:true}});
            })
        }
      }else{
            if(checked)checkCount++;
            else{checkCount--;}
            setData(prevData=>{
              return prevData.map(data=>{
                return data.id===id ? {...data,checked:checked} : data;
              })
            })
      }
  };


    if(loading)
    {
    return (<center><div style={{padding:'5px'}}><CircularProgress/></div></center>)
    }
    else
    {
    return (<div style={{display:'flex',flexDirection:'column'}}>
      <Pagination count={totalPages} onChange={changePage} page={currPage} variant="outlined" shape="rounded" style={{position:'relative',margin:'5px'}} />
      <div className={styles.App}> 
        <table>
          <thead>
          <tr className={styles.headRow}>
          {/* checked={data.filter((item) => item?.checked !== true).length < 1}  */}
            <th><input onChange={handleChange} name="allSelect" type="checkbox"/></th> {/*select all feature */}
            {/* <th>People</th> */}
            {/* <th>Contact Name</th> */}
            {/* <th>Title</th> */}
            <th>Company Name</th>
            <th>Industry</th>
            <th>Contact Details</th>
            <th>Employee HeadCount</th>
            <th>Year Founded</th>
            <th>Revenue</th>
            {/* <th>List</th> */}
            {/* <th>Lead added date</th> */}
            <th>Save</th>
          </tr>
          </thead>
          <tbody>
          {data.map((val, key) => {
            return (
              <>

              <tr key={key}>
                <td><input id={val.id} checked={val.checked || false} onChange={handleChange} name={val.name} type="checkbox"/></td>
                <td onClick={setShowProfile}><strong style={{cursor: "pointer"}}>{val.company_name}</strong></td>
                {/* <td>{val.contactname}</td> */}
                {/* <td>{val.position}</td> */}
                {/* <td>{val.company_name}</td> */}
                <td>{val.industry}</td>
                <td>{val['Mobile 3']}</td>
                {/* <td>{val.details || "-"}</td> */}
                <td>{val.headcount}</td>
                <td>{val.year_founded}</td>
                <td>{val.revenue}</td>
                {/* <td>{val.list || "-"}</td> */}
                {/* <td>{val.leadAddedOn || "-"}</td> */}
                {/* <td><LinkedIn/><Twitter/><Download/></td> */}
                <td className={styles.colored}><button><Save /></button></td>{/*button*/}
                {/* <td><MoreHoriz className={styles.more}/></td> */}
              </tr>
              </>
            )
          })}
          </tbody>
        </table>
      </div>
      {/* <div className={styles.moreBox}>
          <ul>
            <li>View Profile</li>
            <li>Import Contact</li>
            <li>Download Contact(Clean)</li>
            <li>Download Contact(Raw)</li>

          </ul>
      </div> */}
      </div>
      
    );
    }
}

export default CompaniesTable;
