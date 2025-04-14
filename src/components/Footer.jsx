import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer pt-5 pb-4">
      <Container>
        <Row>
          {/* Column 1 - Logo & Contact */}
          <Col xs={12} md={6} lg={3} className="mb-4">
            <div className="footer-logo mb-3">
              <img src="/images/logo.png" alt="Logo" width="120" />
            </div>
            <p><strong>Address:</strong> 152, Peter's Rd, Royapettah, Chennai,<br />
              Tamil Nadu 600086</p>
            <p><strong>Call us:</strong> +91 94038XXXXX</p>
            <p><strong>Email us:</strong> support@xyz.in</p>
            <div className="footer-social d-flex gap-3 mt-2">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </Col>

          {/* Column 2 - Company */}
          <Col xs={12} md={6} lg={2} className="mb-4">
            <h5>Company</h5>
            <ul className="footer-links">
              <li>About Us</li>
              <li>Publisher Partnership</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
            </ul>
          </Col>

          {/* Column 3 - My Account */}
          <Col xs={12} md={6} lg={2} className="mb-4">
            <h5>My Account</h5>
            <ul className="footer-links">
              <li>My Orders</li>
              <li>My Addresses</li>
              <li>My Personal Info</li>
            </ul>
          </Col>

          {/* Column 4 - Support */}
          <Col xs={12} md={6} lg={2} className="mb-4">
            <h5>Support</h5>
            <ul className="footer-links">
              <li>Terms of Use</li>
              <li>How to Order</li>
              <li>Shipping Policy</li>
              <li>Return Policy</li>
            </ul>
          </Col>

          {/* Column 5 - More Books */}
          <Col xs={12} md={12} lg={3} className="mb-4">
            <h5>More Books</h5>
            <ul className="footer-links">
              <li>Indian Languages</li>
              <li>School Books</li>
              <li>Award Winning Books</li>
              <li>Cartoon Books</li>
              <li>Samba Books</li>
              <li>Quiz Related</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
