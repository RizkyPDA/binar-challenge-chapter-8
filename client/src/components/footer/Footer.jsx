import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Navbar bg="light" sticky="bottom">
        <Container>
          <p href="#home">Copyright &copy; 2022</p>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
