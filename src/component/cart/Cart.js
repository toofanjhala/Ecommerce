import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import Cardcontext from "../../store/context";
import { TotalAmount } from "./TotalAmount";

function Cart(props) {

  let ctx = useContext(Cardcontext)
  let dataarray = ctx.items

  function cartItemRemoveHandler(id) {
    ctx.removeItem(id)
  }

  const sum = dataarray.reduce(function (acc, obj) { return acc + obj.price; }, 0);
  const cartitems = dataarray.map((item) => {

    return (
      <tr key={item.id}
      >
        <td>{item.quantity} {item.title}</td>
        <td><img src={item.image} alt="red" style={{ width: "100px", heigth: "100px" }}></img></td>
        <td>${item.price}</td>
        <td><Button variant="danger" onClick={cartItemRemoveHandler.bind(null, item.id)}>Remove item</Button></td>
      </tr>
    )
  })


  return (
    <React.Fragment>
      {cartitems}
      <TotalAmount sum={sum} />
    </React.Fragment>
  )
}

export default Cart

