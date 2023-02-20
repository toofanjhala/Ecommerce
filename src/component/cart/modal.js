import React from 'react';
import { Modal, Button,Table } from 'react-bootstrap';
import Cart from './Cart';




function CustomModal(props) {

 
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: "fixed",  height: "100%", width: "100%" , overflow:"scroll" }}
    >
      <Modal.Dialog >
        <Modal.Header closeButton onClick={props.hide}>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Item</th>
                <th>Price</th>
                <th>Remove item </th>
              </tr>
            </thead>
            <tbody>
            <Cart item={props.item}/>
            </tbody>

          
            </Table>

          
            </Modal.Body>
         <Modal.Footer>
              <Button variant="danger" onClick={props.hide}>Close</Button>
              <Button variant="warning">Order Placed</Button>
            </Modal.Footer>
         
       
      </Modal.Dialog>


    </div>


  );
}
export default CustomModal;

