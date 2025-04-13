import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

function CustomForm() {
  return (
    <div className="w-100 form-div" >
      <h4 className="mb-3 text-start form-title">Student Login</h4>
      <Form>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"/>
        </Form.Group>
        
        <Button  variant="secondary" size="lg" type="submit" className="w-100 form-btn">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default CustomForm;
