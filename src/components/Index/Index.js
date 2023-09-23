
import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import SectionTypography from "./SectionTypography.js";
import SectionCarousel from"./SectionCarousel.js"
import SectionExamples from "./SectionExamples.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import "./ındex.css"



function Index3() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <SectionTypography/>
      <SectionCarousel/>
      <SectionExamples/>
      <DemoFooter/>
    </>
  );
}

export default Index3;
