
import React from "react";


import { Container } from "reactstrap";

import "./header.css"

function IndexHeader() {
  return (
    <>
      <div
        className="page-header "
        style={{
          backgroundImage:
            "url(" + require("assets/img/samantha-gades-x40Q9jrEVT0-unsplash.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Lotus Organizasyon</h1>
             
            
            </div>
         
          </Container>
        </div>
    
       
   
      </div>
    </>
  );
}

export default IndexHeader;
