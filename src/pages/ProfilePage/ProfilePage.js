import React, { useState } from "react";

import {
  LinkedIn,
  Twitter,
  Facebook,
  Link,
  Close,
  Add,
  Download,
} from "@mui/icons-material";

import styles from "./ProfilePage.module.css";
import CompanyResearch from "./CompanyResearch";

const profile = {
    compName: "Hunstman International Private Limited",
    name: "Sarang Shah",
    title: "Project Head",
    email: "sarang_shah@gmail.com",
    website: "huntsman",
    description:
      "Huntsman International(India) Private Limited is a chemicals comopany based out of Lighthall B-WingHirandani Business ParkSaki Vihar Road Andheri",
    headCount: "51-200 Employees",
    revenue: "5-10M",
    location: "",
    insights: ["Google Reseacrh","Local Weather","Local Sports Team"],
    compInsights: ["Google Finance","Google Research","Local Weather","Local Sports Team"]
  };

const ProfilePage = ({hideProfile}) => {
  const [currPanel, setCurrPanel] = useState(0);

  return (
    <div className={styles.modalBackground}>
    <div className={styles.box}>
      <div className={styles.heading}>
        <h1>Contact Details</h1>
        <Close onClick={hideProfile} style={{cursor: "pointer"}}/>
      </div>
      <div className={styles.layout}>
        <div className={styles.left}>
          <div className={styles.pfp}>
            <img src="default.jpg" alt="PFP" />
            <h2>Sarang Shah</h2>
            <h3>Project Head</h3>
            <h2>Hunstman International Private Limited</h2>
            <h3>sarang_shah@gmail.com</h3>
            {/* <div className={styles.links}>
              <LinkedIn />
              <Twitter />
              <Facebook />
            </div> */}
            <div className={styles.links}>
              <button>
                <Add
                  style={{
                    position: "relative",
                    top: "5px",
                    marginRight: "8px",
                  }}
                />
                Import
              </button>
              <button>
                <Download
                  style={{
                    position: "relative",
                    top: "5px",
                    marginRight: "8px",
                  }}
                />
                Download
              </button>
            </div>
          </div>
          <div className={styles.panel}>
            <h2
              onClick={() => {
                setCurrPanel(0);
              }}
              className={`${currPanel === 0 ? `${styles.activePan}` : ""}`}
            >
              Contact Profile
            </h2>
            <h2
              onClick={() => {
                setCurrPanel(1);
              }}
              className={`${currPanel === 1 ? `${styles.activePan}` : ""}`}
            >
              Company Research
            </h2>
            {/* <h2
              onClick={() => {
                setCurrPanel(2);
              }}
              className={`${currPanel === 2 ? `${styles.activePan}` : ""}`}
            >
              Contact Research
            </h2> */}
          </div>
        </div>
       {currPanel===0 && <div className={styles.right}>
          <div className={styles.info}>
            <h1>Contact Profile</h1>
            <h3 style={{ marginTop: "30px" }}>Name</h3>
            <h3 style={{ fontWeight: "normal" }}>{profile.name}</h3>
            <h3 style={{ marginTop: "30px" }}>Title</h3>
            <h3 style={{ fontWeight: "normal" }}>{profile.title}</h3>
            <h3 style={{ marginTop: "30px" }}>Company</h3>
            <h3 style={{ fontWeight: "normal" }}>
              {profile.compName}
            </h3>
            <h3 style={{ marginTop: "30px" }}>Website</h3>
            <h3 style={{ fontWeight: "normal" }}>{profile.website}</h3>
          </div>
          <div className={styles.insights}>
            <h2 style={{ marginBottom: "20px", display:"block" }}>Insights</h2>
            {profile.insights.map(insight => {
                return <div className={styles.inLink}>
              <Link />
              <h4>{insight}</h4>
            </div>
            })}
          </div>
        </div>
       }
       {currPanel===1 && <CompanyResearch  data={profile}/>}
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
