import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "./Card";
import subjects from "./card_data";
import "./Section3.css";

function Section3() {
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
    <Container>
      <Row className="d-flex justify-content-between align-items-center mb-3">
        <Col xs="auto">
          <h4 className="mb-0">Shop by Category</h4>
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
        <Col
          className="d-flex flex-nowrap scroll-container-s3"
          ref={scrollRef}
        >
          {subjects.map((subject, index) => (
            <Card
              key={index}
              icon={subject.icon}
              title={subject.title}
              items={subject.items}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Section3;
