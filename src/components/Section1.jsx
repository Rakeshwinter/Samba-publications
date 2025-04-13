import React from "react";
import { Container, Row, Col, Carousel, Form, Button } from "react-bootstrap";
import CusCarousel from "./CusCarousel";
import CustomForm from "./CustomForm";
import "./Section1.css";
function Section1() {
  return (
    <Container fluid className="w-100 p-4 m-0">
      <Row>
        <Col xl={8}>
          <CusCarousel />
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center p-2 d-none d-sm-inline">
          <div className="mb-4 text-end w-100 form-link">
            <a href="#">
              <span>Login as</span>
              <span style={{ color: "#F35F24" }}>Customer?</span>{" "}
            </a>
          </div>
          <CustomForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Section1;
