import React,{useState,useCallback,useRef,useEffect} from "react";

import styles from './RevenueFilter.module.css';
import SelectBox from "../UI/SelectBox";

const employeeHeadCount = [
    { name: "Upto 10 people", checked: false },
  { name: "11 to 25 people", checked: false },
  { name: "26 to 50 people", checked: false },
  {name:"51 to 100 people",checked:false},
  { name: "101 to 500 people", checked: false },
];
const filterTemplate = {
    name : "",
    revenue: [],
    headcount: [],
}


const HeadcountFilter = ({xcord,isActive,setIsActive,setTotalFilters})=>{
    const [filters,setFilters]=useState(filterTemplate);
    
    xcord=xcord-50;
    const headCountFilter=useCallback((filter)=>{
        setFilters(prevFilters => {return {...prevFilters,headcount:filter}});
    },[]);

    useEffect(()=>{
        setTotalFilters(prevFilters => {return {...filters,name:prevFilters.name}});
    },[filters])

    const ref=useRef();
    useEffect(()=>{
        const checkIfClickedOutside = e =>{
            if(isActive===1 && ref.current && !ref.current.contains(e.target)){
                setIsActive(-1);
            }
        }
    
        document.addEventListener("mousedown",checkIfClickedOutside);
    
        return ()=>{
            document.removeEventListener("mousedown",checkIfClickedOutside);
        }
    },[isActive])

    return <div ref={ref} style={{left:xcord}} className={styles.box}>
        <SelectBox hideName={isActive!==-1} filterHandler={headCountFilter} options={employeeHeadCount} heading="Revenue"/>
    </div>
}

export default HeadcountFilter;