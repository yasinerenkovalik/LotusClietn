import React from "react";
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer bg-dark text-light"> {/* 'bg-dark' sınıfı ile koyu renk */}
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                >
                  Creative Tim
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com/?ref=pkr-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © 2023
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
