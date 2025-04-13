import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Section3.css";
import BookCard from "./BookCard";
import bookData from "./book_card_data";

function Section4() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <Container className="mt-4">
      <Row className="d-flex justify-content-between align-items-center mb-3">
        <Col xs="auto">
          <h4 className="mb-0">New Arrivals</h4>
        </Col>
        <Col xs="auto">
          <Button variant="light" className="arrow-left-s3 me-2" onClick={scrollLeft}>
            <i className="bi bi-arrow-left"></i>
          </Button>
          <Button variant="danger" className="arrow-right-s3" onClick={scrollRight}>
            <i className="bi bi-arrow-right"></i>
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex flex-nowrap scroll-container-s3" ref={scrollRef}>
          {bookData.map((book, index) => (
            <div key={index} className="me-4">
              <BookCard {...book} />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Section4;
