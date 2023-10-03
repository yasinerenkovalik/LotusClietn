import React from "react";
import IndexNavbar from "components/Navbars/AdminNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import "./admin.css"

function AdminIndex() {
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
     
        <DemoFooter />
     
    </>
  );
}

export default AdminIndex;
