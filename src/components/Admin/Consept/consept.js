import React from 'react';
import { Link } from 'react-router-dom'; // React Router'ı ekleyin
import IndexNavbar from "components/Navbars/AdminNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import "../admin.css";

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
   
      <div className='button'>
        <div className='container justify-content-center d-flex '>
          <div>
            {/* Butonlara Link ekleyin */}
            <Link to="/admin/conseptadd" className="btn btn-primary">Konsept Ekle</Link>
            <Link to="/admin/conseptedit" className="btn btn-secondary">Konseptleri Düzenle</Link>
          </div>
        </div>
      </div>
      
      <DemoFooter />
    </>
  );
}

export default Consept;
