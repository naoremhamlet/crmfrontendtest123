import React,{useState,useCallback,useRef,useEffect} from "react";

import styles from './RevenueFilter.module.css';
import SelectBox from "../UI/SelectBox";

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


const RevenueFilter = ({xcord,isActive,setIsActive,setTotalFilters})=>{
    xcord=xcord-50;
    const [filters,setFilters]=useState(filterTemplate);
    
    const revenueFilter=useCallback((filter)=>{
        setFilters(prevFilters => {return {...prevFilters,revenue: filter}});
    },[]);

    useEffect(()=>{
        setTotalFilters(prevFilters => {return {...filters,name:prevFilters.name}});
    },[filters])

    const ref=useRef();
    useEffect(()=>{
        const checkIfClickedOutside = e =>{
            if(isActive===0 && ref.current && !ref.current.contains(e.target)){
                setIsActive(-1);
            }
        }
    
        document.addEventListener("mousedown",checkIfClickedOutside);
    
        return ()=>{
            document.removeEventListener("mousedown",checkIfClickedOutside);
        }
    },[isActive])

    return <div ref={ref} style={{left:xcord}} className={styles.box}>
        <SelectBox hideName={isActive!==-1} filterHandler={revenueFilter} options={revenue} heading="Revenue"/>
    </div>
}

export default RevenueFilter;