import React,{useState} from 'react'
import TeamAcc from './TeamAcc';

import styles from './Teams.module.css';

const teams = [
  {
      name:"Team 1",
      remark: "CRM call requests on ecommerce clients",
      members: [{
          name:"Sahil",
          report: "50 calls/day",
          leads: [
            {
              id: Math.random().toString(),
              contactname: "Amandeep Singh",
              position : "General Manager",
              name: "Custom Pharmaids Limited",
              location: "Rupnagar Punjab",
              revenue: "Upto Rs. 50 Lakh",
              headcount: "Upto 10 people",
          
              isChecked: false,
            },
            {
              id: Math.random().toString(),
              contactname: "Raman Singh",
              position : "General Manager",
              name: "Reticine Pharmaids Limited",
              location: "Rupnagar Punjab",
              revenue: "Rs. 1 to 2 Crore",
              headcount: "11 to 25 people",
              isChecked: false,
            },
            {
              id: Math.random().toString(),
              contactname: "Jindal Gupta",
              position : "General Manager",
              name: "Reticine Pharmaids Limited",
              location: "Rupnagar Punjab",
              revenue: "Rs. 5 to 10 Crore",
              headcount: "Upto 10 people",
              isChecked: false,
            },
          ]
      },{
        name:"Rajat",
        report: "50 calls/day",
        leads:[],
    }]
  },
  {
    name:"Team 2",
    remark: "Make care of business analysts",
    members: [{
        name:"Saket",
        report: "50 calls/day",
        leads: [
          {
            id: Math.random().toString(),
            contactname: "Amandeep Singh",
            position : "General Manager",
            name: "Custom Pharmaids Limited",
            location: "Rupnagar Punjab",
            revenue: "Upto Rs. 50 Lakh",
            headcount: "Upto 10 people",
        
            isChecked: false,
          },
          {
            id: Math.random().toString(),
            contactname: "Raman Singh",
            position : "General Manager",
            name: "Reticine Pharmaids Limited",
            location: "Rupnagar Punjab",
            revenue: "Rs. 1 to 2 Crore",
            headcount: "11 to 25 people",
            isChecked: false,
          },
          {
            id: Math.random().toString(),
            contactname: "Jindal Gupta",
            position : "General Manager",
            name: "Reticine Pharmaids Limited",
            location: "Rupnagar Punjab",
            revenue: "Rs. 5 to 10 Crore",
            headcount: "Upto 10 people",
            isChecked: false,
          },
        ]
    },{
      name:"Mayank",
      report: "50 calls/day",
      leads:[],
  },
  {
    name:"Brian",
    report: "50 calls/day",
    leads:[],
}]
}   
]


const Teams = ()=>{

    const [selected,setSelected]=useState(-1);
  
    const toggle= index =>{
        if(selected===index){
            setSelected(-1);
        }else{
            setSelected(index);
        }
    }


    return <div className={styles.page}>
        {teams.map((team, ind) => {
          return <TeamAcc data={team} key={ind} index={ind} onClick={()=>toggle(ind)} showOn={selected}/>;
        })}
    </div>
}

export default Teams;