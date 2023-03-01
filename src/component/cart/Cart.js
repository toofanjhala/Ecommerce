import { Button } from "react-bootstrap";
import React, {useContext } from "react";
import { TotalAmount } from "./TotalAmount";
import Cardcontext from "../../store/context";



function Cart(props) {

const ctx=useContext(Cardcontext)


 function cartItemRemoveHandler(deleteid)
  {
    ctx.removeItem(deleteid)
  }

  // console.log(ctx.items)

  const sum = ctx.items.reduce(function (acc, obj) { return acc + obj.price; }, 0);
  const cartitems = ctx.items.map((item) => {
    

    return (
      <tr key={item._id}
      >
        <td>{item.quantity} {item.title}</td>
        <td><img src={item.image} alt="red" style={{ width: "100px", heigth: "100px" }}></img></td>
        <td>${item.price}</td>
        <td><Button variant="danger" onClick={cartItemRemoveHandler.bind(null, item._id)}>Remove item</Button></td>
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

