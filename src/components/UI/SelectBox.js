import React, { useEffect, useState,useRef} from "react";
import {Search} from '@mui/icons-material'
import styles from "./SelectBox.module.css";



const SelectBox = ({ options,heading,filterHandler,hideName }) => {
  const [isActive, setIsActive] = useState(false);
  const [items, setItems] = useState(options);
  const [filters,setFilters]=useState([]);
  const ref = useRef();

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
  },[isActive])


  useEffect(()=>{
    if(filterHandler){
    filterHandler(filters);
    }
  },[filters,filterHandler])


  const handleChange = (event) => {
    const { name, checked } = event.target;

    if (name === "allSelect") {
        const size = filters.length;
        setFilters([]);
        if(size!==options.length){
        const tempFil = options.map(option => option.name);
        setFilters(tempFil);
        }

      setItems((prevItems) => {
        return prevItems.map((item) => {
          return { ...item, checked: checked };
        });
      })

      options = options.map((item)=>{
        return {...item,checked:true};
      });
    } else {

      setFilters(prevFilters=>{
        if(checked){
          return [...prevFilters,name];
        }else{
          return prevFilters.filter(filter=> filter!==name);
        }
      });

      setItems((prevItems) => {
        return prevItems.map((item) =>
          item.name === name ? { ...item, checked: checked } : item
        );
      });

      options = options.map((item)=>{
         return item.name === name ? {...item,checked: checked}: item
      })
    }
  };


  const searchHandler=(event)=>{
    const name = event.target.value;
    console.log(event.target.value);
    setItems((prevItems)=>{
        return options.filter((item)=>{return  item.name.includes(name)})
    })
  }

  return (
    <div className={styles.selectBox} ref={ref}>
      {!hideName && <><h3>{heading}</h3>
      <div
        className={styles.selectBtn}
        onClick={() => {
          setIsActive((prevState) => !prevState);
        }}
        onBlur={()=>{setIsActive(false)}}
      >
        Select
      </div></>}
      {(isActive || hideName) && (
        <div className={styles.selectMenu}>
          <div className={styles.searchBox}>
          <input type="text" placeholder="Search" onChange={searchHandler} />
          <Search />
          </div>
          <div className={styles.selectOpt}>
            <input
              name="allSelect"
              id="allSelect"
              type="checkbox"
              onChange={handleChange}
              checked={
                items.filter((item) => item?.checked !== true).length < 1
              }
            />
            <label htmlFor="allSelect">Select All</label>
          </div>
          {items.map((item) => (
            <div key={Math.random().toString()} className={styles.selectOpt}>
              <input
                id={item.name}
                type="checkbox"
                name={item.name}
                checked={item.checked || false}
                onChange={handleChange}
              />
              <label htmlFor={item.name}>{item.name}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectBox;
