import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import Cart from './Cart';





function CustomModal(props) {




  return (
    <div
      className="modal show"
      style={{ display: 'block', marginLeft: "64rem", marginTop: "5rem", position: "fixed", height: "auto", width: "30%", }}
    >
      <Modal.Dialog >
        <Modal.Header closeButton onClick={props.hide}>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price </th>
              </tr>
            </thead>
            <tbody>
              <Cart />
            </tbody>
          </Table>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.hide}>Close</Button>
          <Button variant="warning" onClick={props.order}>Order Placed</Button>
        </Modal.Footer>


      </Modal.Dialog>


    </div>


  );
}
export default CustomModal;

