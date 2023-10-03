import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom"; // react-router-dom ekledik
import { fetchGetAllConcept } from "../../api";
import "./consepts.css";

function SectionExamples() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchGetAllConcept();
        console.log(response);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Veri getirme hatası:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="section">
      <Container>
        <Row className="example-page">
          {data.map((item, index) => (
            <Col key={index} className="text-center" md="4">
              <>
                <img
                  alt={item.name}
                  className="img-rounded img-responsive"
                  src={`data:image/png;base64,${item.image}`}
                  style={{ width: "300px", height: "200px" }}
                />
                {/* Buton yerine Link kullanıyoruz */}
                <Link
                  to={`/consept/${item.id}`} // item.id'yi URL parametresi olarak iletiyoruz
                >
                  <Button
                    className="btn-outline-neutral btn-round"
                    color="default"
                    target="_blank"
                  >
                    {item.name}
                  </Button>
                </Link>
              </>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default SectionExamples;
