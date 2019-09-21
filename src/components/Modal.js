import React from 'react';
import { Modal, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const CheckoutModal = (props) => {
  return (
    <>
      <Button variant="primary" onClick={props.handleShow}>
        Checkout
      </Button>

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Total Cost: ${props.totalCost}</h4>
          <h4>Order Summary :</h4>
          <br/>
            {props.items}
            <ListGroup>
              <ListGroup.Item>{props.items}</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Submit Order
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CheckoutModal;
