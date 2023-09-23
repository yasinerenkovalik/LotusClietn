import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

function SectionExamples() {
  return (
    <>
      <div className="section" style={{ backgroundColor: "#F9EAF7" }}> {/* Arka plan rengini koyu gri (#333) olarak ayarlıyoruz */}
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="4">
              <a href="examples/landing.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/landing-page.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/landing-page"
                target="_blank"
              >
                Landing Page
              </Button>
            </Col>
            <Col className="text-center" md="4">
              <a href="examples/profile.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/profile-page.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/profile-page"
                target="_blank"
              >
                Profile Page
              </Button>
            </Col>
            <Col className="text-center" md="4">
              <a href="examples/profile.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/profile-page.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/profile-page"
                target="_blank"
              >
                Profile Page
              </Button>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamples;
