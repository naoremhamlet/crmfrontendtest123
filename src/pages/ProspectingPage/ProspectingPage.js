import React, { useEffect, useState ,useContext} from "react";
import {
  BadgeOutlined,
  BusinessOutlined,
  ScreenSearchDesktopOutlined,
  FilterAltOutlined,
  ViewColumn,
  FilterAlt
} from "@mui/icons-material";
import Pagination from '@mui/material/Pagination';

import SearchBox from "../../components/UI/SearchBox";
import CompFilterBox from "./CompFilterBox";
import CompaniesTable from "./CompaniesTable";
import styles from "./ProspectingPage.module.css";
import ExeFilterBox from "./ExeFilterBox";
import ExecutiveTable from "./ExecutiveTable";
import Modal from '../../components/UI/Modal';
import ProfilePage from "../ProfilePage/ProfilePage";
import axios from 'axios'
import { useLocation } from "react-router-dom";
import MainFilter from "../../components/MainFilter/MainFilter";
import ColumnBox from "./ColumnBox";
import useWindowDimensions from "../../components/useWindowDimensions";
import { AuthContext } from "../../context/auth-context";

const API_ROUTE = process.env.REACT_APP_API_ROUTE;



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
  company_name:[],
  revenue: [],
  headcount: [],
  industry:[],
  category:[],
  subcategory:[],
  country:[],
  state:[],
  city:[],
  pincode:[],
  nature_of_buissness:[],
  year_founded:[],
  sector:[],

};


const columnsTemp = {
  addedOn:false,
  updatedOn:false,
  reminder:false,
  purpose:false,
  contactLocation: false,
  disposition: false
}

const ExecutiveFilterTemplate={
  title:"",
  compnay_name:"",
  industry:""
}

const ProspectingPage = () => {
  const location = useLocation();
const ctx=useContext(AuthContext);

  const [isCompanyLoading,setCompanyLoading]=useState(true);
  const [isExecutiveLoading,setExecutiveLoading]=useState(true);
  const [CompanytotalPages,setCompanyTotalPages]=useState(0)
  const [ExecutiveTotalPages,setExecutiveTotalPages]=useState(0)
  const [showProfile,setShowProfile]=useState(false);
  // const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState(companyData);
  const [totalFilters, setTotalFilters] = useState({});
  const [modalState,setModalState]=useState(false);
  const [showColumn,setShowColumn]=useState(false);
  const [columns,setColumns]=useState(columnsTemp);
  const [menuMode,setMenuMode]=useState(false);
  const {height,width}=useWindowDimensions();
  
  const queryParams = new URLSearchParams(location.search);
  let showPanel=0;
  if(queryParams.get('panel')){
    console.log(queryParams.get('panel'));
    showPanel = queryParams.get('panel');
  }
  const [saveData,setSaveData]=useState({})
  const [currPanel, setCurrPanel] = useState(+showPanel);
  const [companyList,setCompanyList]=useState([])
  const [displaycompanyList,setDisplayCompanyList]=useState([])
  const [executiveList,setExecutiveList]=useState([])
  const [CompanycurrPage,setCompanyCurrPage]=useState(1);
  const [ExecutivescurrPage,setExecutivesCurrPage]=useState(1);
  const [companyFilterOptions,setCompanyFilterOptions]=useState(companyTemplate)
  const [executivesFilterOptions,setExecutivesFilterOptions]=useState({})
  const [companyFilters,setCompanyFilters]=useState([])
  const [executiveFilters,setExecutiveFilters]=useState([])
  const [optionsLoading,setOptionsLoading]=useState(true);

  useEffect(()=>{
    setTotalFilters({})
    setCompanyCurrPage(1);
    setCompanyFilters([])
    setExecutiveFilters([])
    setCompanyLoading(true)
     axios.get(`${API_ROUTE}/getcompanies/1`)
     .then(res=>
      {
        setCompanyTotalPages(res.data.totalpages);
        setCompanyList(res.data.companies);
        setDisplayCompanyList(res.data.companies)
      
      setCompanyLoading(false);
     })
  },[currPanel])

  useEffect(async()=>{
    setOptionsLoading(true)
    try{
      await axios.get(`${API_ROUTE}/executives/getOptions`)
    .then(res=>setExecutivesFilterOptions(res.data.options))
    await axios.get(`${API_ROUTE}/getOptions`)
      .then(res=>setCompanyFilterOptions(res.data.options))
      setOptionsLoading(false)
    }
    catch(err)
    {
      alert("Unable to load")
    }
    
  },[])

  useEffect(()=>{
    setTotalFilters({})
    setExecutiveLoading(true);
    setExecutivesCurrPage(1);
    setExecutiveFilters([])
    setCompanyFilters([])
    try{    
    axios.get(`${API_ROUTE}/executives/getExecutives/1`)
    .then(res=>
      {
        setExecutiveList(res.data.executives);
        setExecutiveTotalPages(res.data.totalpages);
        setExecutiveLoading(false)
       
      
      }
      )
      }
      catch(err)
      {
        alert("Unable to load executives.")
      }
  },[currPanel])

  const saveDataHandler=()=>{
    if(saveData.name=="executives")
    {
      axios.post(`${API_ROUTE}/user/saveExecutive`,{email:ctx.userId,...saveData})
      .then(res=>{
        alert(res.data.message)
      }).catch(()=>{alert("Unable to add executive.")})

    }
    else{
      axios.post(`${API_ROUTE}/user/saveCompany`,{email:ctx.userId,...saveData})
      .then(res=>{
          alert(res.data.message)
        
      }).catch(()=>{alert("Unable to add executive.")})


    }
    setModalState(false);
  }

  const removeExecutiveFilter=(e,filters)=>{
    setExecutiveFilters(pre=>pre.filter(v=>v!=e.target.getAttribute('unique1')))
    setTotalFilters(filters)
    setExecutiveLoading(true);
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
    try{
    axios.get(`${API_ROUTE}/executives/getExecutives/`+ExecutivescurrPage+query)
  .then (res=>{console.log(res.data);setExecutiveList(res.data.executives);setExecutiveLoading(false)})
  // console.log("apply filetets")
    }
    catch(err)
    {
    console.log(err)
    }



  }
  const removeCompanyFilter= (e,filters)=>{

    setCompanyFilters(pre=>pre.filter(v=>v!=e.target.getAttribute('unique')))
    console.log("new")
    console.log(filters);
    setTotalFilters(filters)
    setCompanyLoading(true);
    let keys=Object.keys(filters)
    let query='?'
    let arr=[]
    console.log(filters)
    // keys.forEach(k=>{
    //     if(filters[k].length>0)
    //     {
    //       arr.push(k)
    //     }
        
    // })
    // setCompanyFilters(arr);
    keys.forEach(k=>{

      query+=`${k}=${encodeURIComponent(filters[k])}&`
    })
    query=query.slice(0,query.length-1)
    console.log(query)
    try{
    axios.get(`${API_ROUTE}/getcompanies/`+CompanycurrPage+query)
  .then (res=>{console.log(res.data);setCompanyList(res.data.companies);setDisplayCompanyList(res.data.companies);setCompanyLoading(false)})
  // console.log("apply filetets")
    }
    catch(err)
    {
    console.log(err)
    }

    
  }
  const applyCompanyFilters=(e)=>{
      setCompanyLoading(true);
      let keys=Object.keys(totalFilters)
      let query='?'
      let arr=[]
      console.log(totalFilters)
      keys.forEach(k=>{
          if(totalFilters[k].length>0)
          {
            arr.push(k)
          }
          
      })
      setCompanyFilters(arr);
      keys.forEach(k=>{

        query+=`${k}=${encodeURIComponent(totalFilters[k])}&`
      })
      query=query.slice(0,query.length-1)
      console.log(query)
      try{
      axios.get(`${API_ROUTE}/getcompanies/`+CompanycurrPage+query)
    .then (res=>{console.log(res.data);setCompanyList(res.data.companies);setDisplayCompanyList(res.data.companies);setCompanyLoading(false)})
    // console.log("apply filetets")
      }
      catch(err)
      {
      console.log(err)
      }
  }

  const applyExecutivesFilters=(e)=>{
    setExecutiveLoading(true);
    let keys=Object.keys(totalFilters)
    let query='?'
    let arr2=[]
    keys.forEach(k=>{
      if(totalFilters[k].length>0)
      {
        arr2.push(k)
      }
      
  })
  setExecutiveFilters(arr2);
    keys.forEach(k=>{
      query+=`${k}=${encodeURIComponent(totalFilters[k])}&`
    })
    query=query.slice(0,query.length-1)
    console.log(query)
    try{
    axios.get(`${API_ROUTE}/executives/getExecutives/`+ExecutivescurrPage+query)
  .then (res=>{console.log(res.data);setExecutiveList(res.data.executives);setExecutiveLoading(false)})
  // console.log("apply filetets")
    }
    catch(err)
    {
    console.log(err)
    }
}


  //For search related field see following useeffect 


  // useEffect(() => {
  //   //gets data
  //   //get company data
  //   let tempData;
  //   console.log("useeffect called again")

    

  //   console.log(totalFilters);
  //   if (totalFilters.revenue && totalFilters.revenue.length > 0) {
  //     tempData = companyList.filter(

  //       (companyList) => {console.log(totalFilters.revenue.indexOf(companyList.Revenue) > -1);return totalFilters.revenue.indexOf(companyList.Revenue) > -1}
  //     );
  //   } else {
  //     tempData = companyList;
  //   }


  //   if (totalFilters.headcount && totalFilters.headcount.length > 0) {
  //     tempData = tempData.filter(
  //       (companyList) => totalFilters.headcount.indexOf(companyList['Employee headcount']) > -1
  //     );
  //   }
  //   if (totalFilters.category && totalFilters.category.length > 0) {
  //     tempData = tempData.filter(
  //       (companyList) => totalFilters.category.indexOf(companyList.Category) > -1
  //     );
  //   }

  //   if (totalFilters.country && totalFilters.country.length > 0) {
  //     tempData = tempData.filter(
  //       (companyList) => totalFilters.country.indexOf(companyList.Country) > -1
  //     );
  //   }
  //   if (totalFilters.city && totalFilters.city.length > 0) {
  //     tempData = tempData.filter(
  //       (companyList) => totalFilters.city.indexOf(companyList.City) > -1
  //     );
  //   }
  //   if (totalFilters.subcategory && totalFilters.subcategory.length > 0) {
  //     tempData = tempData.filter(
  //       (companyList) => totalFilters.subcategory.indexOf(companyList.Subcategory) > -1
  //     );
  //   }
  //   if (totalFilters.year_founded && totalFilters.year_founded.length > 0) {
  //     tempData = tempData.filter(
  //       (companyList) => totalFilters.year_founded.indexOf(companyList['Year_founded founded']) > -1
  //     );
  //   }
  //   if (totalFilters.city && totalFilters.city.length > 0) {
  //     tempData = tempData.filter(
  //       (companyList) => totalFilters.city.indexOf(companyList.City) > -1
  //     );
  //   }

  //   if (totalFilters.company && totalFilters.company.length > 0) {
  //     tempData = tempData.filter(
  //       (companyList) => totalFilters.city.indexOf(companyList['Company Name']) > -1
  //     );
  //   }

  //   if (totalFilters.name) {
  //     tempData = tempData.filter((data) => {
  //       if (currPanel === 0) {
  //         return data.contactname.includes(totalFilters.name);
  //       } else {
  //         return data.name.includes(totalFilters.name);
  //       }
  //     });
  //   }

  //   setDisplayCompanyList(tempData);
  // }, [totalFilters, currPanel]);

  const panelChangeHandler = (event) => {
    setTotalFilters({});
    setExecutiveFilters([])
    setCompanyFilters([])
    setCurrPanel(+event.target.id);
  };
  const changeExecutivePage=(e,value)=>{
    setExecutiveLoading(true)
    setExecutivesCurrPage(value)
    axios.get(`${API_ROUTE}/executives/getExecutives/`+value)
       .then(res=>{setExecutiveList(res.data.executives);setExecutiveLoading(false);
       })
    
  }
const changeCompanyPage=(e,value)=>{
  setCompanyLoading(true)
  setCompanyCurrPage(value);
  axios.get(`${API_ROUTE}/getcompanies/`+value)
     .then(res=>{console.log(res.data.companies[0]);setCompanyList(res.data.companies);setDisplayCompanyList(res.data.companies);
      setCompanyLoading(false)})
  
}
  const seachBarHandler = (name) => {
    setTotalFilters((prevFil) => {
      return { ...prevFil, name: name };
    });
  };

  return (<>
    {modalState && <Modal setOpenModal={setModalState}afterModalFunction={saveDataHandler}/>}
    {showProfile && <ProfilePage hideProfile={()=>setShowProfile(false)} />}
    <div className={styles.body}>
    <div className={styles.mobileFilter}>
            <button onClick={()=>menuMode ? setMenuMode(false) : setMenuMode(true)}><FilterAlt /></button>
            {menuMode && <div className={styles.filterMobile}><MainFilter optionsLoading={optionsLoading} removeExecutiveFilter={removeExecutiveFilter} executiveFilters={executiveFilters} removeCompanyFilter={removeCompanyFilter} totalFilters={totalFilters} executivesFilterOptions={executivesFilterOptions} applyExecutivesFilters={applyExecutivesFilters} panel={currPanel} companyFilters={companyFilters} companyFilterOptions={companyFilterOptions} applyCompanyFilters={applyCompanyFilters} setTotalFilters={setTotalFilters}/></div>}
          </div>
      <div className={styles.heading}>
        { currPanel===0 && <h1>Find Executives</h1>}
        { currPanel===1 && <h1>Find Companies</h1>}
        {/* { currPanel===2 && <h1>Advanced Search</h1>} */}
      </div>
      <div className={styles.links}>
        <span className={`${currPanel === 0 && `${styles.activeLink}`}`}>
          {width>768 && <BadgeOutlined />}
          <h6 id={0} onClick={panelChangeHandler}>
            Executive
          </h6>
        </span>
        <span className={`${currPanel === 1 && `${styles.activeLink}`}`}>
          {width>768 && <BusinessOutlined />}
          <h6 id={1} onClick={panelChangeHandler}>
            Companies
          </h6>
        </span>
        {/* <span className={`${currPanel === 2 && `${styles.activeLink}`}`}>
          {width>768 && <ScreenSearchDesktopOutlined />}
          <h6 id={2} onClick={panelChangeHandler}>
            Advanced Search
          </h6>
        </span> */}
        <hr />
        <div className={styles.content}>
        <div className={styles.filterMain}>
          <MainFilter optionsLoading={optionsLoading} removeExecutiveFilter={removeExecutiveFilter} executiveFilters={executiveFilters} removeCompanyFilter={removeCompanyFilter} totalFilters={totalFilters} executivesFilterOptions={executivesFilterOptions} applyExecutivesFilters={applyExecutivesFilters} panel={currPanel} companyFilterOptions={companyFilterOptions} applyCompanyFilters={applyCompanyFilters} companyFilters={companyFilters} setTotalFilters={setTotalFilters}/>
        </div>
        <div className={styles.rightSec}>
        <div className={styles.filterSection}>
          <div className={styles.left}>
            {/* <SearchBox
              resetOn ={currPanel}
              placeholder="&#xF002; Search"
              onChange={seachBarHandler}
            /> */}

            <div className={styles.filterBox}>
              {/* <button
                className={`${showFilter ? styles.activeFil : ""}`}
                onClick={() => {
                  setShowFilter((prev) => !prev);
                }}
              >
                <FilterAltOutlined />
              </button> */}
              {/* {showFilter && currPanel === 0 && (
                <ExeFilterBox
                  isActive={showFilter}
                  setIsActive={setShowFilter}
                  setTotalFilters={setTotalFilters}
                />
              )}
              {showFilter && currPanel === 1 && (
                <CompFilterBox
                  isActive={showFilter}
                  setIsActive={setShowFilter}
                  setTotalFilters={setTotalFilters}
                />
              )}
              {showFilter && currPanel === 2 && (
                <CompFilterBox
                  isActive={showFilter}
                  setIsActive={setShowFilter}
                  setTotalFilters={setTotalFilters}
                />
              )} */}
            </div>
          </div>
          <div className={styles.right}><button className={styles.column} onClick={()=>setShowColumn(prev=>!prev)} style={{backgroundColor:"#5156be",color:"white"}}><ViewColumn style={{color:"white"}}/></button>
            {showColumn && <ColumnBox isActive={showColumn} setIsActive={setShowColumn} columns={columns} setColumns={setColumns}/>}</div>
        </div>

        <div className={styles.table}>
        {currPanel === 0 && <ExecutiveTable setSaveData={setSaveData} setTotalFilters={setTotalFilters} changePage={changeExecutivePage} totalPages={ExecutiveTotalPages} currPage={ExecutivescurrPage} loading={isExecutiveLoading}columns={columns} showProfile={setShowProfile} openModal={setModalState} data={executiveList} setData={setData}/>}
        {currPanel === 1 && <CompaniesTable setSaveData={setSaveData} currPage={CompanycurrPage} changePage={changeCompanyPage} loading={isCompanyLoading}  setTotalFilters={setTotalFilters} totalPages={CompanytotalPages} columns={columns} showProfile={setShowProfile} openModal={setModalState} data={displaycompanyList} setData={setData} />}
        {/* {currPanel === 2 && <CompaniesTable setTotalFilters={setTotalFilters} columns={columns} setShowProfile={setShowProfile} openModal={setModalState} data={displaycompanyList} setData={setData} />} */}
        </div>
      </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default ProspectingPage;
