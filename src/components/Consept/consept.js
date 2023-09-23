import React from "react";
import IndexNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionCarousel from "./SectionCarousel";
import Table from "./table";
import "./consepts.css";

function Consept() {
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
      <div className="container">
        <div className="d-flex flex-wrap">
          <div className="flex-grow-1">
            <SectionCarousel />
          </div>
          <div className="flex-grow-1 mb-5">
            <Table />
          </div>
        </div>
      </div>
      <div className="footer" style={{ position: "absolute", bottom:0, width: "100%" }}>
        <DemoFooter />
      </div>
    </>
  );
}

export default Consept;
