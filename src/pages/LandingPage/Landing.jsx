import React from "react";
import Header2 from "./Header2";
import Feature from "./Feature";
import About from "./About";



const Landing = () => {
  return (
    <div className="Landing">
      <Header2 />
      <Feature />
      <About
        image="Frame 19.png"
        title="Find your ideal customer with laser precision"
        button="Sign up for free"
        buttonTo="/signup"
        description="Build precise lists of contacts and companies using Data Alley’s advanced filtering across 200+ customizable attributes."
      />
      <About
        image="download.png"
        title="Automatically enrich your CRM with the most accurate data"
        // button="Browse Companies"
        // buttonTo="/prospecting"
        description="Power your CRM with 200+ firmographic and demographic fields for scoring, routing, research, analytics, and more."
      />
    </div>
  );
};

export default Landing;
