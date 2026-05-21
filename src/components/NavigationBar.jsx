import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function NavigationBar() {
  const { cartItems } = useCart();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Kattbutiken</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Start</Nav.Link>
            <Nav.Link as={Link} to="/cats">Katter</Nav.Link>
            <Nav.Link as={Link} to="/about">Ägare</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Kundvagn <Badge bg="warning">{cartItems.length}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;