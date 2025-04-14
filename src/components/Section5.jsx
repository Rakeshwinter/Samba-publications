import React, { useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Section3.css";
import "./Section5.css";
import BookCard from "./BookCard";
import { bookCategories, bookData1 } from "./book_card_data"; 

function Section5() {
  const scrollRef = useRef(null);
  const [activeBooks, setActiveBooks] = useState(bookData1); 

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
    <Container className="mt-4 section-5">
      <Row className="d-flex justify-content-between align-items-center mb-3">
        <Col xs="auto">
          <h4 className="mb-0">Books to Read</h4>
        </Col>
        <Col xs="auto">
          <Button
            variant="light"
            className="arrow-left-s3 me-2"
            onClick={scrollLeft}
          >
            <i className="bi bi-arrow-left"></i>
          </Button>
          <Button
            variant="danger"
            className="arrow-right-s3"
            onClick={scrollRight}
          >
            <i className="bi bi-arrow-right"></i>
          </Button>
        </Col>
      </Row>

      <Row>
        {/* Vertical Navbar */}
        <Col xs={12} md={5} className="mb-4 mb-md-0">
          <div className="vertical-navbar">
            <div className="nav-buttons">
              {bookCategories.map((category, index) => (
                <Button
                  key={index}
                  variant="outline-dark"
                  className="w-100 mb-2 d-flex justify-content-between"
                  onClick={() => setActiveBooks(category.data)}
                >
                  {category.name} <i className="bi bi-chevron-right"></i>
                </Button>
              ))}
            </div>
            <div className="view-more-link">
              <a href="#" className="text-decoration-none">
                View more &gt;
              </a>
            </div>
          </div>
        </Col>

        {/* Scrollable Book Cards */}
        <Col xs={12} md={7}>
          <div
            className="d-flex flex-nowrap scroll-container-s3"
            ref={scrollRef}
          >
            {activeBooks.map((book, index) => (
              <div key={index} className="me-4">
                <BookCard {...book} />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Section5;
