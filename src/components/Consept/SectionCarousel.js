import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { useParams } from "react-router-dom"; // useParams'ı içe aktarın
import { fetchGetByIdConcept } from "../../api";

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [items, setItems] = useState([]);
  const { id } = useParams();



  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // Veriyi çekmek için bu işlevi kullanabilirsiniz
  const fetchData = async () => {
    try {
      // Yukarıda useParams ile aldığımız "id" parametresini kullanın
      const conceptId = id; // URL'den alınan "id" parametresini kullanır
      const concept = await fetchGetByIdConcept(conceptId);
      console.log("API Verisi:", concept);

      // API'den gelen veriyi Carousel için uygun hale getirin
      const carouselItems = [
        {
          src: `data:image/png;base64,${concept.data.image}`,
        },
        // İhtiyaca göre daha fazla öğe ekleyebilirsiniz
      ];

      // Carousel öğelerini state'e atayın
      setItems(carouselItems);
    } catch (error) {
      console.error("Veri getirme hatası:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Bileşen yüklendiğinde veriyi çekmek için çağırabilirsiniz
  }, [id]); // id değiştiğinde tekrar verileri çekmek için bağımlılığı ekleyin

  return (
    <>
      <div className="section pt-0" id="carousel">
        <Container>
          <Row>
            <Col className="mr-auto" md="4">
              <Card className="page-carousel bg-transparent">
                <div style={{ width: '400px' }}>
                  <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                  >
                    <CarouselIndicators
                      items={items}
                      activeIndex={activeIndex}
                      onClickHandler={goToIndex}
                    />
                    {items.map((item, index) => (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={index}
                      >
                        <img src={item.src} alt="" />
                        <CarouselCaption captionText="Merhaba" captionHeader="" />
                      </CarouselItem>
                    ))}
                  </Carousel>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionCarousel;
