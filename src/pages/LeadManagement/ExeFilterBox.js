import React, { useState,useRef ,useEffect,useCallback} from "react";
import InputBox from "../../components/UI/InputBox";
import SelectBox from "../../components/UI/SelectBox";

import styles from './ExeFilterBox.module.css'
const titles = [
  { name: "Accountant", checked: false },
  { name: "Propritor", checked: false },
  { name: "Partner", checked: false },
  { name: "Owner", checked: false },
  { name: "Manager", checked: false },
  { name: "Managing Director", checked: false },
];

const companies = [
  { name: "Parex Pharmaceuticals Private Limited", checked: false },
  { name: "Devyani Pharmaceuticals", checked: false },
  { name: "Zestica Pharma", checked: false },
  { name: "Ess Jee PharmaceuticalsAccountant", checked: false },
  { name: "Medcure Pharma", checked: false },
];


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


const filterTemplate = {
  name : "",
  revenue: [],
  headcount: [],
}

const ExeFilterBox = ({isActive,setIsActive,setTotalFilters}) => {
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
  },[setTotalFilters,filters])

  const headCountFilter=useCallback((filter)=>{
      setFilters(prevFilters => {return {...prevFilters,headcount:filter}});
  },[]);

  const revenueFilter=useCallback((filter)=>{
      setFilters(prevFilters => {return {...prevFilters,revenue: filter}});
  },[]);


  return (
    <div ref={ref} className={styles.filterBox}>
      <SelectBox options={titles} heading="Title" />
      <SelectBox options={companies} heading="Companies" />
      <SelectBox filterHandler={headCountFilter} options={employeeHeadCount} heading="Headcount" />
      <SelectBox filterHandler={revenueFilter} options={revenue} heading="Revenue" />
      <InputBox heading="Keyword" placeholder="Enter Keywords"/>
      {/* <InputBox heading="Contact Name" placeholder="Enter Names"/> */}
    </div>
  );
};

export default ExeFilterBox;
