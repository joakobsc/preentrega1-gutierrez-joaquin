import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Car for Sale</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Autos</Nav.Link>
            <Nav.Link href="#">Suvs</Nav.Link>
            <Nav.Link href="#">Pick Ups</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
