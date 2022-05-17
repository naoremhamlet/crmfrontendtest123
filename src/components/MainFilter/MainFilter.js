import React, { useState, useEffect,useCallback } from "react";
import Pagination from '@mui/material/Pagination';
import styles from "./MainFilter.module.css";
import {Button,CircularProgress} from '@mui/material'
import SelectBox from "../UI/SelectBox";
import { ArrowDownward, ArrowUpward, ClearOutlined } from "@mui/icons-material";
import { AlertTitle } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {companiesNames,pincodes} from './companyNames'
import axios from "axios";

const titles = [
  { name: "Accountant", checked: false },
  { name: "Propritor", checked: false },
  { name: "Partner", checked: false },
  { name: "Owner", checked: false },
  { name: "Manager", checked: false },
  { name: "Managing Director", checked: false },
];


const filterTemplate = {
  company_name:[],
  revenue: [],
  headcount: [],
  industry:[],
  category:[],
  subcategory:[],
  country:[],
  state:[],
  pincode:[],
  city:[],
  nature_of_buissness:[],
  year_founded:[],
  sector:[],
};

const MainFilter = ({ executivesFilterOptions,optionsLoading,removeExecutiveFilter,executiveFilters, removeCompanyFilter,companyFilters,companyFilterOptions,setTotalFilters,applyCompanyFilters,applyExecutivesFilters,panel}) => {
  const [filters, setFilters] = useState({});
  const [showFilter, setShowFilter] = useState(-1);
  const [headcount, setHeadcount] = useState();
  const [title, setTitle] = useState();

  useEffect(()=>{
    setShowFilter(-1)
    setFilters({})

  },[panel,executivesFilterOptions])
  const removeCFilter=(e)=>{
    console.log(e.target.getAttribute('unique'))
    let old=filters
    let newfilters={...old,[e.target.getAttribute('unique')]:[]}
    setFilters(newfilters)
    removeCompanyFilter(e,newfilters)
  }
  const removeEFilter=(e)=>{
    console.log(e.target.getAttribute('unique1'))
    let old=filters
    let newfilters={...old,[e.target.getAttribute('unique1')]:[]}
    setFilters(newfilters)
    removeExecutiveFilter(e,newfilters)
  }

  useEffect(() => {
    setTotalFilters((prevFilters) => {

      // return { ...filters, name: prevFilters.name };
      return { ...filters};

    });
  }, [filters]);

  const removeFilter=useCallback((id)=>{
    setFilters((prevFilters)=>{
      return {...prevFilters,[id]:""}
    })
  })

  const headCountFilter = useCallback((filter) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, headcount: filter };
    });
  }, []);

  const revenueFilter = useCallback((filter) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, revenue: filter };
    });
  }, []);

  const companyFilter = useCallback((filter) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, company_name: filter };
    });
  }, []);

  const titleFilter = useCallback((filter) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, title: filter };
    });
  }, []);

  const industryFilter = useCallback((filter) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, industry: filter };
    });
  }, []);

  const categoryFilter = useCallback((filter) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, category: filter };
    });
  }, []);

  const countryFilter = useCallback((filter) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, country: filter };
    });
  }, []);

  const cityFilter = useCallback((filter) => {
    setFilters((prevFilters) => {
      return { ...prevFilters,city: filter };
    });
  }, []);

  const subcategoryFilter = useCallback((filter) => {
    setFilters((prevFilters) => {
      return { ...prevFilters,subcategory: filter };
    });
  }, []);
  const stateFilter = useCallback((filter) => {
    setFilters((prevFilters) => {
      return { ...prevFilters,state: filter };
    });
  }, []);

  const pincodeFilter = useCallback((filter) => {
    setFilters((prevFilters) => {
      return { ...prevFilters,pincode: filter };
    });
  }, [])

  const natureofbuissnessFilter = useCallback((filter) => {
    setFilters((prevFilters) => {
      return { ...prevFilters,nature_of_buissness: filter };
    });
  }, [])

  const yearFilter = useCallback((filter) => {
    setFilters((prevFilters) => {
      return { ...prevFilters,year_founded: filter };
    });
  }, [])

  const sectorFilter = useCallback((filter) => {
    setFilters((prevFilters) => {
      return { ...prevFilters,sector: filter };
    });
  }, [])



  const filterShowHandler=(ind)=>{

      // let query = `title=${title}&headcount=${headcount}`;

      // axios.get(`${process.env.REACT_APP_API_ROUTE}/${1}?fiter=${query}`)
      if(ind===showFilter){
          setShowFilter(-1);
      }else{
          setShowFilter(ind);
      }
  }

  if(optionsLoading)
  {
    return (<center><CircularProgress style={{padding:'0px'}}/></center>);
  }
  else if(panel==0)
  { 
    return (<div className={styles.column}>
      <div>
      <Button variant="contained" style={{marginLeft:'4px'}} onClick={applyExecutivesFilters}>APPLY FILTERS:</Button>
        <div style={{padding: '10px 0', margin: '5px 0'}}>
          {panel==0 && executiveFilters?.map(k=>
            <div style={{display:'flex',flexWrap:'wrap',margin:'2px',flexDirection:'row', fontSize: 'small', alignItems: 'center'}}>{k}
            <div></div>
            <ClearOutlined unique1={k} onClick={removeEFilter} style={{width:15, margin: 5}}/>
            {/* <Button unique={k} onClick={removeCFilter}>Remove</Button> */}
            </div>)}
        </div>
        <h3 style={{paddingLeft: "10px", position: 'sticky', top: 0}}>Filters</h3>
      </div>
      <div className={`${styles.acc} ${showFilter===0 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(0)}>
          <p><AlertTitle />Title</p>
          {showFilter===0 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===0 && <div className={styles.answer}>
          <SelectBox filterHandler={titleFilter} options={executivesFilterOptions.title} heading="Title" />
        </div>}
      </div>
      <div className={`${styles.acc} ${showFilter===1 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(1)}>
          <p>Companies</p>
          {showFilter===1 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===1 && <div className={styles.answer}>
          <SelectBox  filterHandler={companyFilter} options={executivesFilterOptions.company_name} heading="Companies" />
        </div>}
      </div>
      </div>)
  }
  else
  {
  return (
    <div className={styles.column}>
      <div>
      <Button variant="contained" style={{marginLeft:'4px'}} onClick={applyCompanyFilters}>APPLY FILTERS:</Button>
        <div style={{padding: '10px 0', margin: '5px 0'}}>
          {panel==1 && companyFilters?.map(k=>
            <div style={{display:'flex',flexWrap:'wrap',margin:'2px',flexDirection:'row', fontSize: 'small', alignItems: 'center'}}>{k}
            <div></div>
            <ClearOutlined unique={k} onClick={removeCFilter} style={{width:15, margin: 5}}/>
            {/* <Button unique={k} onClick={removeCFilter}>Remove</Button> */}
            </div>)}
        </div>
        <h3 style={{paddingLeft: "10px", position: 'sticky', top: 0}}>Filters</h3>
      </div>
     {/* <hr /> */}
      {/* <div className={`${styles.acc} ${showFilter===0 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(0)}>
          <p><AlertTitle />Title</p>
          {showFilter===0 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===0 && <div className={styles.answer}>
          <SelectBox options={titles} heading="Title" />
        </div>}
      </div> */}
      <div className={`${styles.acc} ${showFilter===1 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(1)}>
          <p>Companies</p>
          {showFilter===1 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===1 && <div className={styles.answer}>
          <SelectBox  filterHandler={companyFilter} options={companyFilterOptions.company_name} heading="Companies" />
        </div>}
      </div>
      <div className={`${styles.acc} ${showFilter===2 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(2)}>
          <p>Industry</p>
          {showFilter===2 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===2&& <div className={styles.answer}>
          <SelectBox filterHandler={industryFilter} options={companyFilterOptions.industry} heading="Industry" />
        </div>}
      </div>
      <div className={`${styles.acc} ${showFilter===3 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(3)}>
          <p>Category</p>
          {showFilter===3 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===3 && <div className={styles.answer}>
          <SelectBox filterHandler={categoryFilter} options={companyFilterOptions.category} heading="Category" />
        </div>}
      </div>
      <div className={`${styles.acc} ${showFilter===4 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(4)}>
          <p>Subcategory</p>
          {showFilter===4 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===4 && <div className={styles.answer}>
          <SelectBox filterHandler={subcategoryFilter} options={companyFilterOptions.subcategory} heading="Subacategory" />
        </div>}
      </div>
      {/* <div className={`${styles.acc} ${showFilter===5 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(5)}>
          <p>Products</p>
          {showFilter===5 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===5 && <div className={styles.answer}>
          <SelectBox options={titles} heading="Products" />
        </div>}
      </div> */}
      <div className={`${styles.acc} ${showFilter===6 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(6)}>
          <p>Country</p>
          {showFilter===6? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===6 && <div className={styles.answer}>
          <SelectBox filterHandler={countryFilter} options={companyFilterOptions.country} heading="Country" />
        </div>}
      </div>
      <div className={`${styles.acc} ${showFilter===7 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(7)}>
          <p>State</p>
          {showFilter===7 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===7 && <div className={styles.answer}>
          <SelectBox filterHandler={stateFilter} options={companyFilterOptions.state} heading="State" />
        </div>}
      </div>
      <div className={`${styles.acc} ${showFilter===8 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(8)}>
          <p>City</p>
          {showFilter===8 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===8 && <div className={styles.answer}>
          <SelectBox filterHandler={cityFilter} options={companyFilterOptions.city} heading="City" />
        </div>}
      </div>
      <div className={`${styles.acc} ${showFilter===9 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(9)}>
          <p>Pincode</p>
          {showFilter===9 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===9 && <div className={styles.answer}>
          <SelectBox filterHandler={pincodeFilter} options={companyFilterOptions.pincode} heading="Pincode" />
        </div>}
      </div>
      <div className={`${styles.acc} ${showFilter===10 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(10)}>
          <p>Nature of Business</p>
          {showFilter===10 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===10 && <div className={styles.answer}>
          <SelectBox filterHandler={natureofbuissnessFilter} options={companyFilterOptions.nature_of_buissness} heading="Nature of business" />
        </div>}
      </div>
      <div className={`${styles.acc} ${showFilter===11 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(11)}>
          <p>Revenue</p>
          {showFilter===11 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===11 && <div className={styles.answer}>
          <SelectBox  filterHandler={revenueFilter} options={companyFilterOptions.revenue} heading="Revenue" />
        </div>}
      </div>
      <div className={`${styles.acc} ${showFilter===12 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(12)}>
          <p>Employee Headcount</p>
          {showFilter===12 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===12 && <div className={styles.answer}>
          <SelectBox  filterHandler={headCountFilter} options={companyFilterOptions.headcount} heading="Employee Headcount" />
        </div>}
      </div>
      <div className={`${styles.acc} ${showFilter===13 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(13)}>
          <p>Year</p>
          {showFilter===5 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===13 && <div className={styles.answer}>
          <SelectBox filterHandler={yearFilter} options={companyFilterOptions.year_founded} heading="Year" />
        </div>}
      </div>
      <div className={`${styles.acc} ${showFilter===14 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(14)}>
          <p>Sector</p>
          {showFilter===14 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===14 && <div className={styles.answer}>
          <SelectBox filterHandler={sectorFilter} options={companyFilterOptions.sector} heading="Sector" />
        </div>}
      </div>
      {/* <div className={`${styles.acc} ${showFilter===15 ? `${styles.selected}`:""}`}>
        <div className={styles.question} onClick={()=>filterShowHandler(15)}>
          <p>Level of company</p>
          {showFilter===15 ? <ArrowUpward/> :<ArrowDownward />}
        </div>
        {showFilter===15 && <div className={styles.answer}>
          <SelectBox options={titles} heading="Level of Company" />
        </div>}
      </div> */}
    </div>
  );
}
};

export default MainFilter;
