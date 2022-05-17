import React, { useEffect, useRef } from 'react';

import styles from './SearchBox.module.css'
const SearchBox=({placeholder,onChange,resetOn})=>{;
    const ref=useRef();

    useEffect(()=>{
        ref.current.value='';
    },[resetOn])

    return <input  ref={ref} onChange={(e)=>onChange(e.target.value)} className={styles.searchBar} type="text" placeholder={placeholder}/>
}

export default SearchBox;