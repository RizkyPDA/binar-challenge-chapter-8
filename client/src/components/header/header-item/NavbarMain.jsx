import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavbarMain() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid="md">
          <Navbar.Brand href="#home">
            Binar Academy: Challenge Chapter 8
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMain;
