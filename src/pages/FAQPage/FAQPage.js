import React, { useState } from "react";
import { ArrowCircleUp, AddCard, CurrencyRupee } from "@mui/icons-material";

import styles from "./FAQPage.module.css";
import Accordian from "./Accordian";

const faqs = [
  {
    question:
      "How frequently does the company data gets updated and new companies get added?",
    answer:
      "We use to update the database in every 4 months and we use to add the new companies every week.",
  },
  {
    question: "What is the information’s available on dashboard? ",
    answer:
      "In dashboard you can see the statistics like how many companies you have viewed, companies added to your account, deleted companies and the no of leads you have created till now.",
  },
  {
    question:
      "Is this mandatory to add lead source and product for sending company profile &amp; proposal to the companies?",
    answer:
      "Yes, its mandatory to add lead source &amp; product name to send company profile &amp; proposal to the companies.",
  },
  {
    question: "From where I can add lead source name and product name?",
    answer:
      "Click on the settings tab in menu, from there you will get the link to add lead source &amp; product.",
  },
  {
    question:
      "Which file format is supported to upload for company profile proposal?                                            ",
    answer:
      "Only .pdf &amp; .doc or .docx (Word) file are supported. So, upload the proposal or company profile in PDF or word Format only.",
  },
  {
    question:
      "How many proposals I can add in my account?                                            ",
    answer:
      "You can upload unlimited proposals &amp; profiles into your account.",
  },
  {
    question:
      "How to move companies in my account?                                            ",
    answer:
      "Click on Find Companies Link from the menu and you will be redirected to the advance search page where you can use the search filters to find the company’s as per your requirement.",
  },
  {
    question:
      "How to send company profile proposal to the companies which I have moved into my account?                                            ",
    answer:
      " Add Companies to your account -> Click on Companies Management option on menu ->  Click on “Create Lead &amp; Send Proposal” button -> Complete Create Lead form ->  Choose the company from Manage Leads Page &amp; click Send Company Profile &amp; Proposal button again and you will be redirected to final step ->  Choose Proposal &amp; Profile, Write the email subject and body content and click on the Send button",
  },
  {
    question:
      "How many companies I can move in my account from where I can see the left count?",
    answer:
      "You can move the companies as per the package you have chosen. On the left section you can see how many companies still you can add into your account.",
  },
  {
    question: "How to download companies database in excel?",
    answer:
      "Click on Companies Management in the menu and click on Download Companies Excel,Once you click on the link, the excel file will be downloaded to your system.",
  },
  {
    question: "Does the companies contain the key executive information?",
    answer:
      "Where we have mentioned Key Executive Available in that case you will get the mobile and email id of that company as we have mentioned the same in every front of the company in the listing.",
  },
];

const FAQPage = () => {
  
  const [selected,setSelected]=useState(-1);
  
  const toggle= index =>{
      if(selected===index){
          setSelected(-1);
      }else{
          setSelected(index);
      }
  }
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <div className={styles.firstRow}>
        <div>
          <ArrowCircleUp />
          <h1>How to purchase package?</h1>
          <h2 style={{ fontWeight: "normal" }}>
            Click on Upgrade your Package link on the left side and you can
            select the package as per your requirement.
          </h2>
        </div>
        <div>
          <CurrencyRupee />
          <h1>How to make payments?</h1>
          <h2 style={{ fontWeight: "normal" }}>
            Select the package from https://www.corecorporates.com/pricing.php
            and click on Buy Package.
          </h2>
        </div>
      </div>
      <div className={styles.secondRow}>
        <AddCard />
        <h1>Is my credit card safe?</h1>
        <h2 style={{ fontWeight: "normal" }}>
          Yes, The Core Corporates system does not retain your credit card
          information.
        </h2>
      </div>
      <div className={styles.more}>
      <h1>More Questions</h1>
      <hr/>
      </div>
      <div className={styles.faqSection}>
        {faqs.map((acc, ind) => {
          return <Accordian data={acc} key={ind} index={ind} onClick={()=>toggle(ind)} showOn={selected}/>;
        })}
      </div>
    </div>
  );
};

export default FAQPage;
