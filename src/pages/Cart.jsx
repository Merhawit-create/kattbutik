import { useState } from "react";
import { Button, Modal, Form, ListGroup } from "react-bootstrap";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, clearCart } = useCart();
  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShow(false);
    clearCart();
    alert("Tack! Din order är skickad.");
  }

  return (
    <section>
      <h1>Kundvagn</h1>

      {cartItems.length === 0 ? (
        <p>Kundvagnen är tom.</p>
      ) : (
        <>
          <ListGroup className="mb-4">
            {cartItems.map((cat, index) => (
              <ListGroup.Item key={`${cat.id}-${index}`}>
                {cat.name} - {cat.origin}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Button onClick={() => setShow(true)}>Skicka order</Button>
        </>
      )}

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Orderformulär</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Namn</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>E-postadress</Form.Label>
              <Form.Control required type="email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Leveransadress</Form.Label>
              <Form.Control required as="textarea" rows={3} />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Avbryt
            </Button>
            <Button type="submit" variant="success">
              Skicka order
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </section>
  );
}

export default Cart;