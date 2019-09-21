import React from 'react';
import { Modal, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { accounting } from 'accounting';

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
          <h4>Total Cost:
            {accounting.formatMoney(props.totalCost)}
          </h4>
          <h4>Order Summary :</h4>
          <br/>
            <ListGroup>
              {/* Iterates through items ordered and displays then as List Items */}
              {props.items.map((item, key) => {
                return(
                  <ListGroup.Item>{props.items[key]}</ListGroup.Item>
                );
              })}
            </ListGroup>
            {/* Display error if order does not contain a bike */}
            {props.containsBike === false ?
              <p>Error! Your purchase must include a bike.</p>
              : null
            }
        </Modal.Body>
        <Modal.Footer>
          <Link to="/success">
            {/* Removes Submit button and prevents redirect to sucess page if order doesn't contain a bike */}
            {props.containsBike === true ?
              <Button variant="secondary" onClick={props.handleClose}>
                Submit Order
              </Button>
              : null
            }
          </Link>
          <Button variant="primary" onClick={props.handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CheckoutModal;
