import React,{useState} from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import DownloadIcon from '@mui/icons-material/Download';
import SaveIcon from '@mui/icons-material/Save';
import Pagination from '@mui/material/Pagination';

import styles from './CompaniesTable.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import { Search,FilterAlt } from '@mui/icons-material';
  
import RevenueFilter from '../../components/Filter/RevenueFilter';

let checkCount=0;
let xCord=0;
const CompaniesTable = ({data,setData,openModal,showProfile,columns,setSaveData,currPage,setTotalFilters,totalPages,changePage,loading}) => {

  const [showFilterBox,setShowFilterBox]=useState(-1);
  const filterBoxHandler=(event,ind)=>{
    xCord=event.clientX;
    if(showFilterBox===ind){
      setShowFilterBox(-1);
    }else{
      setShowFilterBox(ind);
    }
  }


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
  { console.log("loading")
    return (<center><CircularProgress style={{padding:'0'}}/></center>)
  }
  else{
    console.log(loading)

    return (
      
      <>
      <Pagination count={totalPages} page={currPage}  onChange={changePage} variant="outlined" shape="rounded" style={{position:'relative'}} />

      <div className={styles.App}>

      
        <table>
          <thead>
          {/* checked={data.filter((item) => item?.checked !== true).length < 1}  */}
            <th><input onChange={handleChange} name="allSelect" type="checkbox"/></th> {/*select all feature */}
            <th><div className={styles.tableHead}>Company Name</div></th>
            {/* <span><button onClick={(e)=>filterBoxHandler(e,0)}><FilterAlt/></button>            {showFilterBox===0 && <RevenueFilter xcord={xCord} setTotalFilters={setTotalFilters} isActive={showFilterBox} setIsActive={setShowFilterBox}/>}</span> */}

            <th><div className={styles.tableHead}>Key Executive</div></th>
            {/* <span><button onClick={(e)=>filterBoxHandler(e,1)}><FilterAlt/></button>            {showFilterBox===1 && <RevenueFilter xcord={xCord} setTotalFilters={setTotalFilters} isActive={showFilterBox} setIsActive={setShowFilterBox}/>}</span> */}
            <th><div className={styles.tableHead}>Industry</div></th>
            {/* <span><button onClick={(e)=>filterBoxHandler(e,2)}><FilterAlt/></button>            {showFilterBox===2 && <RevenueFilter xcord={xCord} setTotalFilters={setTotalFilters} isActive={showFilterBox} setIsActive={setShowFilterBox}/>}</span> */}
            <th><div className={styles.tableHead}>Employee Headcount</div></th>
            {/* <span><button onClick={(e)=>filterBoxHandler(e,3)}><FilterAlt/></button>            {showFilterBox===3 && <RevenueFilter xcord={xCord} setTotalFilters={setTotalFilters} isActive={showFilterBox} setIsActive={setShowFilterBox}/>}</span>  */}
            <th><div className={styles.tableHead}>Year Founded</div></th>
            {/* <span><button onClick={(e)=>filterBoxHandler(e,4)}><FilterAlt/></button>            {showFilterBox===4 && <RevenueFilter xcord={xCord} setTotalFilters={setTotalFilters} isActive={showFilterBox} setIsActive={setShowFilterBox}/>}</span> */}
            <th><div className={styles.tableHead}>Revenue</div></th>
            {/* <span><button onClick={(e)=>filterBoxHandler(e,5)}><FilterAlt/></button>            {showFilterBox===5 && <RevenueFilter xcord={xCord} setTotalFilters={setTotalFilters} isActive={showFilterBox} setIsActive={setShowFilterBox}/>}</span> */}
            {columns.contactLocation && <th>Location</th>}
            <th>Search Contact</th>
          </thead>
          <tbody>
          {data.map((val, key) => {
            return (
              <>
              <tr key={key}>
                <td><input id={val.c_id} checked={val.checked || false} onChange={handleChange} name={val.name} type="checkbox"/></td>
                <td><strong style={{cursor:"pointer"}} onClick={()=>showProfile(true)}>{val.company_name}</strong></td>
                <td>{val['Mobile 3']}</td>
                <td>{val.industry}</td>
                <td>{val['headcount']}</td>
                <td>{val['year_founded']}</td>
                <td>{val.revenue}</td>
                {columns.contactLocation && <td>{val.city+","+val.country}</td>}
                {/* <td className={styles.colored} ><Search onClick={openModal}/></td>button */}
                <td className={styles.colored} id={val.p_id} onClick={()=>{setSaveData({name:"companies",companyid:val.c_id});openModal(true);}}><SaveIcon/></td>
              </tr>
              </>
            )
          })}
          </tbody>
         
        </table>

      </div>
     </>

    
    );
        }
}

export default CompaniesTable;
