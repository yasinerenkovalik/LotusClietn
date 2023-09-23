import React from "react";
import IndexNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import WhatsApp from "./whatsupp";
import ContactInfo from "./contactinfo";
import "./communication.css"

function Communication() {
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
      <div className="contact">
      <ContactInfo/>
      </div>
      <WhatsApp/>
        <DemoFooter />
     
    </>
  );
}

export default Communication;
