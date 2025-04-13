import React from "react";

import { Container, Row, Col, Carousel, Form, Button } from "react-bootstrap";
function CusCarousel() {
  return (
    <Carousel
      controls={true}
      indicators={false}
      data-bs-theme="dark"
      className="custom-carousel"
    >
      <Carousel.Item>
        <div className="text-center d-flex align-items-center justify-content-center carousel-div">
          <img
            className="carousel-image"
            src="/images/book1 1.png"
            alt="First slide"
          />
          <Container fluid className="w-100 p-0 m-0">
            <Row className=" w-100 title-row">
              <Col>
                <h1>
                  Mirror of <br /> the World
                </h1>
                <p className="text-end">Book-6</p>
              </Col>
            </Row>
            <Row className=" w-100 button-row">
              <Col>
                <Button variant="light" className="more-btn">More</Button>
              </Col>
              <Col>
                <Button variant="danger" className="shop-btn">
                  <span className="me-2">Home</span>
                  <i class="bi bi-bag-heart-fill"></i>
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CusCarousel;
