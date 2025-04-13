import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import "./Section2.css";

const listImages = ["image1", "image2", "image3", "image4", "image5", "image6"];

const BookButton = ({ imageName, isHidden }) => {
  if (isHidden) return null;

  return (
    <div className="text-center mt-2 book-btn-s2 mx-1">
      <div className="d-flex justify-content-center align-items-end image-flex-s2">
        <Image
          src={`/images/books/${imageName}.png`}
          alt="Book"
          fluid
          style={{ width: "55px" }}
        />
      </div>
      <div className="circle-flex-s2 mt-2">
        <div className="circle-s2" />
      </div>
    </div>
  );
};

const BookRow = () => {
  const rowRef = useRef(null);
  const [hiddenIndexes, setHiddenIndexes] = useState([]);

  useEffect(() => {
    const checkWrap = () => {
      const row = rowRef.current;
      if (!row) return;

      const children = Array.from(row.children);
      const firstTop = children[0]?.offsetTop || 0;

      const hidden = children
        .map((child, i) => (child.offsetTop > firstTop ? i : null))
        .filter((i) => i !== null);

      setHiddenIndexes(hidden);
    };

    // Check for wrapping initially
    checkWrap();

    // Run check again when the window resizes
    const handleResize = () => {
      window.location.reload();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Row
      ref={rowRef}
      className="d-flex justify-content-center align-items-end flex-wrap collection-book-s2"
    >
      {listImages.map((img, index) => (
        <BookButton key={index} imageName={img} isHidden={hiddenIndexes.includes(index)} />
      ))}
    </Row>
  );
};

const Section2 = () => {
  return (
    <Container
      fluid
      className="my-4 d-flex justify-content-center align-items-end section2-box py-4 "
    >
      <Row className="w-100 gap-2">
        <Col  className="">
          <Row className="d-flex justify-content-center align-items-center" >
            <Form className="d-flex mb-4 justify-content-center align-items-center ali box-s2">
              <Form.Control
                type="text"
                placeholder="Search books" 
                className="me-2 search-bar-s2"
              />
              <Button variant="dark" className="form-btn-s2">Search</Button>
            </Form>
          </Row>
          <BookRow />
        </Col>

        <Col  className="d-none d-md-inline">
          <Row className="d-flex justify-content-center align-items-center" >
            <Form className="d-flex mb-4 justify-content-center align-items-center ali box-s2">
              <Form.Control
                type="text"
                placeholder="Search Authors" 
                className="me-2 search-bar-s2"
              />
              <Button variant="dark" className="form-btn-s2">Search</Button>
            </Form>
          </Row>
          <BookRow />
        </Col>
      </Row>
    </Container>
  );
};

export default Section2;
