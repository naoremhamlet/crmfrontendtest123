import React, { useEffect, useState ,useContext} from "react";
import {
  FilterAltOutlined,
  MonetizationOn,
  Upload,
  Download,
  List
} from "@mui/icons-material";
import SearchBox from "../../components/UI/SearchBox";
import CompFilterBox from "./CompFilterBox";
import CompaniesTable from "./CompaniesTable";
import styles from "./MyCompanies.module.css";
import ProfilePage from "../ProfilePage/ProfilePage";
import axios from 'axios'
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
const MyCompanies = () => {
  const ctx=useContext(AuthContext);
  const [showProfile,setShowProfile]=useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState(companyData);
  const [totalFilters, setTotalFilters] = useState(companyTemplate);
  const [showFilterBox,setShowFilterBox]=useState(-1);
  const [columns,setColumns]=useState(columnsTemp);
  const [currPage,setCurrPage]=useState(1)
  const [companies,setCompanies]=useState([])
  const [totalPages,setTotalPages]=useState(1);
  const [loading,setLoading]= useState(true)
  const [companyFilters,setCompanyFilters]=useState([])
  const [filterOptions,setFilterOptions]=useState({
    pincode:[],
    headcount:[],
    revenue:[],
    category:[],
    subcategory:[],
    industry:[],
    company_name:[],
    sector:[],
    country:[],
    city:[],
    state:[],
    year_founded:[],
    nature_of_buissness:[],

})

  const filterBoxHandler=(event,ind)=>{
    xCord=event.clientX;
    if(showFilterBox===ind){
      setShowFilterBox(-1);
    }else{
      setShowFilterBox(ind);
    }
  }

  const getCompanies=()=>{
    setLoading(true);
    console.log(ctx)
    try{
    axios.get(`${API_ROUTE}/user/getMyCompanies/`+currPage,{headers:{Authorization:`Bearer ${ctx.token}`}})
    .then(res=>{setTotalPages(res.data.totalpages);setCompanies(res.data.companies);setLoading(false)})
      }
      catch(err)
      {
        console.log(err)
        alert("Unable to load ")
      }
  }

  useEffect(getCompanies,[currPage])


  const removeCompanyFilter= (e,filters)=>{

    setCompanyFilters(pre=>pre.filter(v=>v!=e.target.getAttribute('unique')))
    console.log("new")
    console.log(filters);
    setTotalFilters(filters)
    setLoading(true);
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
    axios.get(`${API_ROUTE}/user/getMyCompanies/`+currPage+query,{headers:{Authorization:`Bearer ${ctx.token}`}})
  .then (res=>{setCompanies(res.data.companies);setLoading(false)})
  // console.log("apply filetets")
    }
    catch(err)
    {
    console.log(err)
    }

    
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
setCompanyFilters(arr)
    keys.forEach(k=>{
      query+=`${k}=${encodeURIComponent(totalFilters[k])}&`
    })
    query=query.slice(0,query.length-1)
    console.log(query)
    try{
    axios.get(`${API_ROUTE}/user/getMyCompanies/`+currPage+query,{headers:{Authorization:`Bearer ${ctx.token}`}})
  .then (res=>{setCompanies(res.data.companies);console.log("Hello");setLoading(false)})
    }
    catch(err)
    {
    console.log(err)
    }

  }

  useEffect(()=>{
    try{
      axios.get(`${API_ROUTE}/user/getMyCompanyOptions`)
      .then(res=>setFilterOptions(res.data.options))
    }
    catch(err)
    {
      console.log(err)
      alert('Some error has occured')
    }
  },[])



 



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
          return data.name.includes(totalFilters.name);
      });
    }

    setData(tempData);
  }, [totalFilters]);


  const seachBarHandler = (name) => {
    setTotalFilters((prevFil) => {
      return { ...prevFil, name: name };
    });
  };

  const changePage=(e,value)=>{
    setCurrPage(value);
    console.log(value)
  }

  return (
    <>
    {showProfile && <ProfilePage hideProfile={()=>setShowProfile(false)}/>}
    <div className={styles.body}>
      <div className={styles.heading}>
        <h1>My Companies</h1>
      </div>
      <div className={styles.links}>
        <hr />
        <div className={styles.filterSection}>
          <div className={styles.left}>
            <SearchBox
              placeholder="&#xF002; Search"
              onChange={seachBarHandler}
            />
            <div className={styles.filterBox}>
              <button
                className={`${showFilter ? styles.activeFil : ""}`}
                onClick={() => {
                  setShowFilter((prev) => !prev);
                }}
              >
                <FilterAltOutlined />
              </button>
              {showFilter && (
                <CompFilterBox
                applyFilters={applyFilters} 
                removeCompanyFilter={removeCompanyFilter}
                companyFilters={companyFilters}
                  filterOptions={filterOptions}
                  isActive={showFilter}
                  setIsActive={setShowFilter}
                  setTotalFilters={setTotalFilters}
                />
              )}

            </div>
            <h4 style={{fontWeight:"normal", marginLeft: "20px"}}>Available Credits:<span style={{position: "relative",top: "5px",color:"#5156be",margin:"0"}}><MonetizationOn style={{margin:"0"}}/></span>50</h4>
          </div>
          <div className={styles.right}>
            <button><Upload/></button>
            <button><Download/></button>
            <button><List/></button>
            <button className={styles.findAll}>Save All</button>
          </div>
        </div> 
              
                  
        <CompaniesTable  currPage={currPage} loading={loading} totalPages={totalPages} changePage={changePage} setCurrPage={setCurrPage}  setTotalFilters={setTotalFilters} columns={columns} setShowProfile={setShowProfile} data={companies} setData={setData} />
      </div>
    </div>
    </>
  );
};

export default MyCompanies;
