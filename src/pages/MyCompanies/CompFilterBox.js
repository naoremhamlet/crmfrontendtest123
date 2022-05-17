import React,{useCallback, useEffect,useRef,useState} from "react";
import SelectBox from "../../components/UI/SelectBox";
import styles from './CompFilterBox.module.css'
import {Button} from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const industry = [{ name: "Agriculture & Farming", checked: false }];

const employeeHeadCount = [
    { name: "Upto 10 people", checked: false },
  { name: "11 to 25 people", checked: false },
  { name: "26 to 50 people", checked: false },
  {name:"51 to 100 people",checked:false},
  { name: "101 to 500 people", checked: false },
];


const revenue = [
    { name: "Upto Rs. 50 Lakh", checked: false },
    { name: "Rs. 1 to 2 Crore", checked: false },
    { name: "Rs. 2 to 5 Crore", checked: false },
    { name: "Rs. 5 to 10 Crore", checked: false },
]

const nature = [
    {name : "Exporter and Manufacturer",checked:false},
    {name : "Wholesale Trader",checked:false},
    {name : "Manufacturer",checked:false},
    {name : "Exporter",checked:false},
]

const filterTemplate = {
    name : "",
    revenue: [],
    headcount: [],
}

const CompFilterBox = ({isActive,setIsActive,setTotalFilters,filterOptions,applyFilters,removeCompanyFilter,companyFilters})=>{
    const removeCFilter=(e)=>{
        console.log(e.target.getAttribute('unique'))
        let old=filters
        let newfilters={...old,[e.target.getAttribute('unique')]:[]}
        setFilters(newfilters)
        removeCompanyFilter(e,newfilters)
      }

    const [filters,setFilters]=useState(filterTemplate);

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
    },[isActive,setIsActive])

    useEffect(()=>{
        setTotalFilters(prevFilters => {return {...filters,name:prevFilters.name}});
    },[filters])
  
    const headCountFilter=useCallback((filter)=>{
        setFilters(prevFilters => {return {...prevFilters,headcount:filter}});
    },[]);

    const industryFilter=useCallback((filter)=>{
        setFilters(prevFilters => {return {...prevFilters,industry:filter}});
    },[]);

    const revenueFilter=useCallback((filter)=>{
        setFilters(prevFilters => {return {...prevFilters,revenue: filter}});
    },[]);

    const yearFilter=useCallback((filter)=>{
        setFilters(prevFilters => {return {...prevFilters,year:filter}});
    },[]);
    return <div ref={ref} className={styles.filterBox} >
        <Button variant="contained" onClick={applyFilters} style={{marginLeft:'4px',backgroundColor:'#5156be',color:'white'}}>APPLY FILTERS:</Button>
        {companyFilters?.map(k=>
        <div style={{border:'1px solid black',display:'flex',flexWrap:'wrap',margin:'2px',justifyContent:'space-between',flexDirection:'row'}}>{k}
        <div></div><Button unique={k} onClick={removeCFilter}>Remove</Button></div>)}
        <SelectBox options={filterOptions.industry} handler={industryFilter} heading="Industry"/>
        <SelectBox filterHandler={headCountFilter} options={filterOptions.headcount} heading="Employee Headcount"/>
        <SelectBox filterHandler={revenueFilter} options={filterOptions.revenue} heading="Revenue"/>
        {/* <SelectBox options={nature} heading="Nature of Business"/> */}
        <SelectBox filterHandler={yearFilter} options={filterOptions.year_founded} heading="Year" />
    </div>
}

export default CompFilterBox