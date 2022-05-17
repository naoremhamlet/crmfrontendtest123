import React ,{useState}from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import DownloadIcon from '@mui/icons-material/Download';
import { FilterAlt } from '@mui/icons-material';
import SaveIcon from '@mui/icons-material/Save';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './CompaniesTable.module.css';
import Pagination from '@mui/material/Pagination';
import RevenueFilter from '../../components/Filter/RevenueFilter';

let checkCount=0;
let xCord=0;
const ExecutiveTable = ({data,setData,setSaveData,openModal,showProfile,columns,setTotalFilters,currPage,changePage,totalPages,loading}) => {

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
  {
    return (<center><CircularProgress style={{padding:'0'}}/></center>)
  }
  else{
    console.log(currPage)
    return (
      <><Pagination count={totalPages} page={currPage} onChange={changePage} variant="outlined" shape="rounded" style={{position:'relative',margin:'5px'}} />
      <div className={styles.App}>
        <table>
          <thead>
          <tr className={styles.headRow}>
          {/* name="allSelect" checked={data.filter((item) => item?.checked !== true).length < 1}  */}
            <th><input onChange={handleChange} type="checkbox"/></th> {/*select all feature */}
            <th>People Name</th>
            <th><div className={styles.tableHead}>Title</div></th>
            {/* <span><button onClick={(e)=>filterBoxHandler(e,0)}><FilterAlt/></button>            {showFilterBox===0 && <RevenueFilter xcord={xCord} setTotalFilters={setTotalFilters} isActive={showFilterBox} setIsActive={setShowFilterBox}/>}</span> */}
            <th><div className={styles.tableHead}>Company Name</div></th>
            {/* <span><button onClick={(e)=>filterBoxHandler(e,1)}><FilterAlt/></button>            {showFilterBox===1 && <RevenueFilter xcord={xCord} setTotalFilters={setTotalFilters} isActive={showFilterBox} setIsActive={setShowFilterBox}/>}</span> */}
            {/* <th><div className={styles.tableHead}>Industry<span><button onClick={(e)=>filterBoxHandler(e,2)}><FilterAlt/></button>            {showFilterBox===2 && <RevenueFilter xcord={xCord} setTotalFilters={setTotalFilters} isActive={showFilterBox} setIsActive={setShowFilterBox}/>}</span></div></th> */}

            {columns.contactLocation && <th>Contact Location</th>}
            <th>Contact Details</th>
            <th>Lists</th>
            <th>Save Contact</th>

          </tr>
          </thead>
          <tbody>
          {data.map((val, key) => {
            return (
              <>
              <tr key={key}>
                <td><input id={val.id} checked={val.checked || false} onChange={handleChange} name={val.contactname} type="checkbox"/></td>
                <td><strong style={{cursor:"pointer"}} onClick={()=>showProfile(true)}>{val.first_name+ " "+val.last_name}</strong></td>
                <td>{val.title}</td>
                <td>{val.company_name}</td>
                {/* <td>{val.industry}</td> */}
                {/* {columns.contactLocation && <td>{val.location}</td>} */}
                <td><p>Mobile - {val.user_mobile}</p><p>Email-{val.p_email}</p></td>
                <td>{val.list || "-"}</td>
                <td className={styles.colored} id={val.p_id} onClick={()=>{setSaveData({name:"executives",executiveid:val.p_id});openModal(true);}}><SaveIcon/></td>{/*button*/}
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

export default ExecutiveTable;
