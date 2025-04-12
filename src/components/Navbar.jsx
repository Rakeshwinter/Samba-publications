import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";
function CustomNavbar() {
  return (
    <>
      {["sm", "md", "lg", "xl", "xxl"].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3 ">
          <Container fluid>
            <Navbar.Brand
              href="#"
              className="d-flex flex-column align-items-center"
            >
              <img
                src="/images/logo.png"
                className="brand-logo d-inline-block align-top"
                alt="Samba Logo"
              />
              <span className="brand-text">
                Samba Publishing Company Pvt Ltd
              </span>
            </Navbar.Brand>

            {/* Offcanvas Menu */}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end align-items-center flex-grow-1 pe-5">
                  {/* These items go into the menu on small screens */}
                  <Nav.Link href="#action1" className="nav-text">
                    <Button variant="danger" className="custom-btn">
                      Home
                    </Button>
                  </Nav.Link>
                  <NavDropdown
                    title="Category"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="nav-text"
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1" className="nav-text">
                    New Arrivals
                  </Nav.Link>
                  <Nav.Link href="#action1" className="nav-text">
                    Best Selling Books
                  </Nav.Link>
                  <Nav.Link href="#action1" className="nav-text">
                    Deal of The Day
                  </Nav.Link>
                  <Nav.Link href="#action1" className="nav-text">
                    Contact Us
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="d-flex align-items-center gap-3 ">
              <Nav.Link href="#item1" className="nav-text">
                <Button variant="dark" className="custom-cart-btn">
                  <i class="bi bi-bag-heart-fill"></i>
                </Button>
              </Nav.Link>
              <Nav.Link href="#item2" className="nav-text">
                <Button variant="outline-dark" className="custom-like-btn">
                  <i class="bi bi-suit-heart"></i>
                </Button>
              </Nav.Link>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default CustomNavbar;
