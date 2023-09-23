
import React from "react";
import IndexNavbar from "components/Navbars/ExamplesNavbar.js";

import SectionTypography from "./SectionTypography.js";
//import SectionExamples from "./SectionExamples.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import "./about.css"


function About() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <div className="about">
      <IndexNavbar />
     
      <SectionTypography/>
      <DemoFooter/>
      
    </div>
  );
}

export default About;
