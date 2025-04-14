import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./Section7.css";

function Section7() {
  return (
    <div className="section7 d-flex justify-content-end align-items-start">
      <div className="position-absolute s7-image-flex">
        <img src="/images/bigimg.png" alt="Illustration" className="s7-image" />
      </div>

      <div className="section7-content">
        <h1 className="text-center">Why Shop with Us?</h1>
        <p className="text-center mt-2">
          At Samba Publication, we are committed to providing high-quality
          educational and cultural books at affordable prices. Based in Chennai,
          we specialize in a wide range of books, including academic textbooks,
          competitive exam guides, literature, arts, and cultural heritage
          publications.
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <Button variant="light" className="read-more-btn">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Section7;
