import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import About from "components/About/about";
import Index3 from "components/Index/Index";
import Consepts from "components/Consepts/consepts";
import Consept from "components/Consept/consept";
import Communication from "components/Communication/communication"


// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/about" element={<About />} />
      <Route path="/ındex3" element={<Index3 />} />
      <Route path="/consepts" element={<Consepts />} />
      <Route path="/consept" element={<Consept />} />
      <Route path="/communication" element={<Communication />} />
      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter>
);
