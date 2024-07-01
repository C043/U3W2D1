import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const MyNav = () => (
  <Navbar expand="lg" className="bg-info">
    <Container>
      <Navbar.Brand href="#home">My Book Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
