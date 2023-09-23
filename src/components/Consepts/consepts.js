
import React from "react";
import IndexNavbar from "components/Navbars/ExamplesNavbar.js";

//import SectionExamples from "./SectionExamples.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionExamples from "./SectionExamples";
import "./consepts.css"

function Consepts() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <div className="">
      <IndexNavbar />
      <SectionExamples/>
     
   
      <DemoFooter/>
      
    </div>
  );
}

export default Consepts;
