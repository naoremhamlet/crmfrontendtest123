import React, { useState, useEffect,useContext,useCallback } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import {
  SortByAlpha,
  FilterAlt,
  Download,
  Email,
  Delete,
  ViewColumn,
} from "@mui/icons-material";

import styles from "./LeadPage.module.css";
import LeadData from "./LeadData";
import SearchBox from "../../components/UI/SearchBox";
import ExeFilterBox from "./ExeFilterBox";
import EmailComp from "../../components/QuickActions/Email";
import ColumnBox from "./ColumnBox";
import RevenueFilter from "../../components/Filter/RevenueFilter";
import HeadcountFilter from "../../components/Filter/HeadcountFilter";
import MainFilter from "../../components/MainFilter/MainFilter";
import useWindowDimensions from '../../components/useWindowDimensions'
import {AuthContext} from '../../context/auth-context'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MyLeadData from './MyLeadData'
import axios from 'axios'
import Button from "@mui/material/Button";

const API_ROUTE = process.env.REACT_APP_API_ROUTE;


let checkCount = 0;
const companyData = [
  {
    id: Math.random().toString(),
    contactname: "Amandeep Singh",
    position: "General Manager",
    name: "Custom Pharmaids Limited",
    location: "Rupnagar Punjab",
    revenue: "Upto Rs. 50 Lakh",
    headcount: "Upto 10 people",
    foundedOn: 2016,
    isChecked: false,
    industry: "Manufacturing",
  },
  {
    id: Math.random().toString(),
    contactname: "Raman Singh",
    position: "General Manager",
    name: "Reticine Pharmaids Limited",
    location: "Rupnagar Punjab",
    revenue: "Rs. 1 to 2 Crore",
    headcount: "11 to 25 people",
    industry: "IT",
    foundedOn: 2015,
    isChecked: false,
  },
  {
    id: Math.random().toString(),
    contactname: "Jindal Gupta",
    position: "General Manager",
    name: "Reticine Pharmaids Limited",
    location: "Rupnagar Punjab",
    revenue: "Rs. 5 to 10 Crore",
    headcount: "Upto 10 people",
    industry: "Manufacturing",
    foundedOn: 2014,
    isChecked: false,
  },
  {
    id: Math.random().toString(),
    contactname: "Jindal Gupta",
    position: "General Manager",
    name: "Reticine Pharmaids Limited",
    location: "Rupnagar Punjab",
    revenue: "Rs. 5 to 10 Crore",
    headcount: "Upto 10 people",
    industry: "Manufacturing",
    foundedOn: 2014,
    isChecked: false,
  },
  {
    id: Math.random().toString(),
    contactname: "Jindal Gupta",
    position: "General Manager",
    name: "Reticine Pharmaids Limited",
    location: "Rupnagar Punjab",
    revenue: "Rs. 5 to 10 Crore",
    headcount: "Upto 10 people",
    industry: "Manufacturing",
    foundedOn: 2014,
    isChecked: false,
  },
  {
    id: Math.random().toString(),
    contactname: "Jindal Gupta",
    position: "General Manager",
    name: "Reticine Pharmaids Limited",
    location: "Rupnagar Punjab",
    revenue: "Rs. 5 to 10 Crore",
    headcount: "Upto 10 people",
    industry: "Manufacturing",
    foundedOn: 2014,
    isChecked: false,
  },
];

const companyTemplate = {
  name: "",
  revenue: [],
  headcount: [],
};


const columnsTemp = {
  addedOn:false,
  updatedOn:false,
  reminder:false,
  purpose:false,
  contactLocation: false,
  disposition: false
}

let xCord=0;
const LeadPage = () => {
  const ctx=useContext(AuthContext);
  const [showFilter, setShowFilter] = useState(false);
  const [executiveFilters,setExecutiveFilters]=useState([])
  const [totalFilters, setTotalFilters] = useState([]);
  const [data, setData] = useState(companyData);
  const [showEmail, setShowEmail] = useState(-1);
  const [showColumn,setShowColumn]=useState(false);
  const [columns,setColumns]=useState(columnsTemp);
  const [showFilterBox,setShowFilterBox]=useState(-1);
  const [menuMode,setMenuMode]=useState(false);
  const { height, width } = useWindowDimensions();
  const [executives,setExecutives]=useState([])
  const [currPage,setCurrPage]=useState(1)
  const[totalPages,setTotalPages]=useState(1)
  const [loading,setLoading]=useState(true)
  const [executiveOptions,setExecutiveOptions]=useState({})
  const [optionsLoading,setOptionsLoading]=useState(true)
  const [myLeads,setMyLeads]=useState([])
  const [panel,setPanel]=useState(0)
  const [leadsTotalPages,setLeadsTotalPages]=useState(1)
  const [myLeadsOptions,setMyLeadsOptions]=useState([])
  const [priority,setPriority]=useState("")
  const[refresh,setRefresh]=useState(1)

  const changePanel=()=>{
    setPriority("")
    setExecutiveFilters([])
    setCurrPage(1)
    setTotalFilters({})
    setPanel(pre=>pre^1)
  }

  const applyFilters=()=>{
    setLoading(true)
    let keys=Object.keys(totalFilters)
    let query='?'
    let arr=[]
    keys.forEach(k=>{
      if(totalFilters[k].length>0)
      {
        arr.push(k)
      }

      
  })
  setExecutiveFilters(arr);
    keys.forEach(k=>{
      query+=`${k}=${encodeURIComponent(totalFilters[k])}&`
    })
    query=query.slice(0,query.length-1)
    console.log(query)
    if(panel==0)
    {

    
    try{
    axios.get(`${API_ROUTE}/user/getMyExecutives/`+currPage+query,{headers:{Authorization:`Bearer ${ctx.token}`}})
  .then (res=>{setExecutives(res.data.executives);console.log("Hello");setLoading(false)})
    }
    catch(err)
    {
    console.log(err)
    }
  }
  else{
    try{
      axios.get(`${API_ROUTE}/teams/getMyLeads/`+currPage+query,{headers:{Authorization:`Bearer ${ctx.token}`}})
    .then (res=>{setMyLeads(res.data.leads);setLeadsTotalPages(res.data.totalpages);console.log("Hello");setLoading(false)})
      }
      catch(err)
      {
      console.log(err)
      }

  }

  }

  const removeExecutiveFilter=(e,filters)=>{
    setExecutiveFilters(pre=>pre.filter(v=>v!=e.target.getAttribute('unique1')))
    setTotalFilters(filters)
    setLoading(true);
    let keys=Object.keys(filters)
    let query='?'
    let arr=[]
  //   keys.forEach(k=>{
  //  ftotalFilters[k].length>0)
  //     {
  //       arr.push(k)
  //     }
      
  // })
  // setExecutiveFilters(arr);
    keys.forEach(k=>{
      query+=`${k}=${encodeURIComponent(filters[k])}&`
    })
    query=query.slice(0,query.length-1)
    console.log(query)
    if(panel==0)
    {

    
    try{
    axios.get(`${API_ROUTE}/user/getMyExecutives/`+currPage+query,{headers:{Authorization:`Bearer ${ctx.token}`}})
  .then (res=>{console.log(res.data);setExecutives(res.data.executives);setLoading(false)})
  // console.log("apply filetets")
    }
    catch(err)
    {
    console.log(err)
    }
  }
  else{
    try{
      axios.get(`${API_ROUTE}/teams/getMyLeads/`+currPage+query,{headers:{Authorization:`Bearer ${ctx.token}`}})
    .then (res=>{setMyLeads(res.data.leads);setLeadsTotalPages(res.data.totalpages);console.log("Hello");setLoading(false)})
      }
      catch(err)
      {
      console.log(err)
      }

  }



  }

  const getExecutives=async ()=>{
    try{

    setLoading(true)
    await axios.get(`${API_ROUTE}/user/getMyExecutives/`+currPage,{headers:{Authorization:`Bearer ${ctx.token}`}})
    .then(res=>{setExecutives(res.data.executives);setTotalPages(res.data.totalpages);setLoading(false)})
    await axios.get(`${API_ROUTE}/teams/getMyLeads/`+currPage,{headers:{Authorization:`Bearer ${ctx.token}`}})
      .then(res=>{setMyLeads(res.data.leads);setLeadsTotalPages(res.data.totalpages);})
  }
  catch(err)
  { alert("Unable to load data.")
    console.log(err)
  }

  }

  useEffect(async ()=>{
    setOptionsLoading(true);
    try{
      await axios.get(`${API_ROUTE}/user/getMyExecutiveOptions`)
      .then(res=>{setExecutiveOptions(res.data.options)})
      await axios.get(`${API_ROUTE}/teams/getMyLeadsOptions`,{headers:{Authorization:`Bearer ${ctx.token}`}})
      .then(res=>{setMyLeadsOptions(res.data.options);console.log(res.data.options);setOptionsLoading(false)})
    }
    catch(err)
    { console.log(err)}
  },[])
  const changePage=(e,value)=>{
    setCurrPage(value)
  }
  useEffect(getExecutives,[currPage,panel,refresh])

  // const getMyLeads=()=>{
  //   try{
      
  //   }
  //   catch(err)
  //   { 
  //     console.log(err)
  //   }
  // }

  // useEffect(getMyLeads,[])


  useEffect(() => {
    //gets data
    //get company data
    let tempData;
    console.log(totalFilters);
    if (totalFilters.revenue && totalFilters.revenue.length > 0) {
      tempData = companyData.filter(
        (data) => totalFilters.revenue.indexOf(data.revenue) > -1
      );
    } else {
      tempData = companyData;
    }

    if (totalFilters.headcount && totalFilters.headcount.length > 0) {
      tempData = tempData.filter(
        (data) => totalFilters.headcount.indexOf(data.headcount) > -1
      );
    }

    if (totalFilters.name) {
      tempData = tempData.filter((data) => {
        return data.contactname.includes(totalFilters.name);
      });
    }

    setData(tempData);
  }, [totalFilters]);

  const seachBarHandler = (name) => {
    setTotalFilters((prevFil) => {
      return { ...prevFil, name: name };
    });
  };

  const handleChange = (event) => {
    const { name, id, checked } = event.target;

    if (name === "allSelect") {
      if (checkCount === data.length) {
        checkCount = 0;
        setData((prevData) => {
          return prevData.map((data) => {
            return { ...data, isChecked: false };
          });
        });
      } else {
        checkCount = data.length;
        setData((prevData) => {
          return prevData.map((data) => {
            return { ...data, isChecked: true };
          });
        });
      }
    } else {
      if (checked) checkCount++;
      else {
        checkCount--;
      }
      setData((prevData) => {
        return prevData.map((data) => {
          return data.id === id ? { ...data, isChecked: checked } : data;
        });
      });
    }
  };

  const filterBoxHandler=(event,ind)=>{
    xCord=event.clientX;
    if(showFilterBox===ind){
      setShowFilterBox(-1);
    }else{
      setShowFilterBox(ind);
    }
  }
  console.log(ctx)

  const priorityFilterHandler = useCallback((e) => {
    setPriority(e.target.value)
    setTotalFilters((prevFilters) => {
      return { ...prevFilters,priority: e.target.value };
    });
  }, [])
  
  return (
    <>
      {showEmail === 0 && (
        <EmailComp
          isActive={showEmail}
          data={data}
          setIsActive={setShowEmail}
        />
      )}
      <div className={styles.page}>

        {showFilter && (
          <ExeFilterBox
            isActive={showFilter}
            setIsActive={setShowFilter}
            setTotalFilters={setTotalFilters}
          />
        )}
          <div className={styles.mobileFilter}>
            <button onClick={()=>menuMode ? setMenuMode(false) : setMenuMode(true)}><FilterAlt /></button>
            {menuMode && <div className={styles.filterMobile}><MainFilter myLeadsOptions={myLeadsOptions} optionsLoading={optionsLoading} removeExecutiveFilter={removeExecutiveFilter} executiveFilters={executiveFilters} applyExecutivesFilters={applyFilters} executivesFilterOptions={panel==0?executiveOptions:myLeadsOptions} panel={0}setTotalFilters={setTotalFilters}/></div>}
          </div>
        <div className={styles.header}>
          <h1>Manage Your Leads.</h1>
          <hr />
          <div className={styles.content}>
          <div className={styles.filterMain}>          <MainFilter myLeadsOptions={myLeadsOptions} optionsLoading={optionsLoading} removeExecutiveFilter={removeExecutiveFilter} executiveFilters={executiveFilters} applyExecutivesFilters={applyFilters} executivesFilterOptions={panel==0?executiveOptions:myLeadsOptions} panel={0} setTotalFilters={setTotalFilters}/></div>
          <div className={styles.right}>
          <div className={styles.options}>
            {/* <button style={{backgroundColor:"#5156be",color:"white"}}onClick={() => setShowFilter((prev) => !prev)}>
            <FilterAlt style={{color:"white"}} />
            </button> */}
            {/* <SearchBox onChange={seachBarHandler} placeholder="Search" /> */}
            <button onClick={() => setShowEmail(0)}>
              {width>768 && "Email"}<Email />
            </button>
            <button>
              {width>768 && "Export"}<Download />
            </button>
            <button
              style={{ borderColor: "red", color: "red", justifySelf: "right" }}
            >
              {width>768 && "Delete Leads"}
              <Delete style={{ color: "red" }} />
            </button>
            <div className={styles.priority}>
            <p>Priority</p>
            <select value={priority} onChange={priorityFilterHandler} title="Set Priority">
              <option>Select Priority..</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Urgent</option>
            </select>
            </div>
            <Button onClick={applyFilters}>Apply </Button>
            <span>
            <button className={styles.column} onClick={()=>setShowColumn(prev=>!prev)} style={{backgroundColor:"#5156be",color:"white"}}><ViewColumn style={{color:"white"}}/></button>
            {showColumn && <ColumnBox isActive={showColumn} setIsActive={setShowColumn} columns={columns} setColumns={setColumns}/>}
            </span>
          </div>
          {/* count={totalPages} page={currPage}  onChange={changePage} */}
          {
          loading?<center><div style={{padding:'5px'}}><CircularProgress/></div></center>:
          <div className={styles.table}>
          {panel==0?<Button  variant="contained" onClick={changePanel}>My Leads</Button>:<Button variant="contained"  onClick={changePanel}>My Saved Executives</Button>}
          <center><Pagination  count={panel==0?totalPages:leadsTotalPages} page={currPage} onChange={changePage} variant="outlined" shape="rounded" style={{position:'relative',margin:'5px'}} /></center>
          <table>
            <thead className={styles.thead}>
              <th>
                <input
                  name="allSelect"
                  checked={
                    data.filter((item) => item?.isChecked !== true).length < 1
                  }
                  onChange={handleChange}
                  type="checkbox"
                />
              </th>{" "}
              {/*select all feature */}
              <th>
                Name <SortByAlpha />
              </th>
              <th>
                Title <SortByAlpha />
              </th>
                <th><div className={styles.tableHead}>Company<span><button onClick={(e)=>filterBoxHandler(e,0)}><FilterAlt/></button>              {showFilterBox===0 && <RevenueFilter xcord={xCord} setTotalFilters={setTotalFilters} isActive={showFilterBox} setIsActive={setShowFilterBox}/>}  </span></div></th>
              <th>Quick Actions</th>
              {/* <th><div className={styles.tableHead}>Industry<span><button onClick={(e)=>filterBoxHandler(e,1)}><FilterAlt/></button>              {showFilterBox===1 && <RevenueFilter xcord={xCord} setTotalFilters={setTotalFilters} isActive={showFilterBox} setIsActive={setShowFilterBox}/>}  </span></div></th>
              <th><div className={styles.tableHead}>Employee Headcount<span><button onClick={(e)=>filterBoxHandler(e,2)}><FilterAlt/></button>{showFilterBox===2 && <HeadcountFilter xcord={xCord} setTotalFilters={setTotalFilters} isActive={showFilterBox} setIsActive={setShowFilterBox}/>}</span></div></th>
              <th><div className={styles.tableHead}>Founded On<span><button onClick={(e)=>filterBoxHandler(e,3)}><FilterAlt/></button>              {showFilterBox===3 && <RevenueFilter xcord={xCord} setTotalFilters={setTotalFilters} isActive={showFilterBox} setIsActive={setShowFilterBox}/>}  </span></div></th>
              <th><div className={styles.tableHead}>Revenue<span><button onClick={(e)=>filterBoxHandler(e,4)}><FilterAlt/></button>              {showFilterBox===4 && <RevenueFilter xcord={xCord} setTotalFilters={setTotalFilters} isActive={showFilterBox} setIsActive={setShowFilterBox}/>}  </span></div></th> */}
              {columns.contactLocation && <th>Contact Location</th>}
              {columns.addedOn && <th>Added on</th>}
              {columns.updatedOn && <th>Updated on</th>}
              {columns.reminder && <th>Reminder</th>}
              {columns.purpose && <th>Purpose</th>}
              {columns.disposition && <th>Disposition</th>}
              {
                panel==0?<th>Add to team</th>:<th>Team Name</th>
              }
              
            </thead>

            <tbody>
              {
              panel==0?executives.map((val) => {
                return (
                  <LeadData setRefresh={setRefresh} columns={columns} key={val.id} handleChange={handleChange} dt={val} />
                );
              }):myLeads.map((val) => {
                return (
                  <MyLeadData columns={columns} key={val.id} handleChange={handleChange} dt={val} />
                );
              })
              }
            </tbody>
          </table>
          </div>

          }
          
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadPage;
