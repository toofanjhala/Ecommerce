
import React from "react";
import { TotalAmount } from "./TotalAmount";
import {MdRemoveCircle}  from "react-icons/md";
import {MdAddCircle} from "react-icons/md";
import { useSelector,useDispatch } from "react-redux";
import { ItemActions } from "../../store/itemsSlice";



function Cart(props) {

const itemsarray=useSelector((state)=>state.Item.items)
const dispatch=useDispatch()
// const ctx=useContext(Cardcontext)


 function cartItemRemoveHandler(deleteid)
  {
    dispatch(ItemActions.removeItemFromCart(deleteid))
    // ctx.removeItem(deleteid)
  }

  function Additems(id ,price){
    dispatch(ItemActions.addItemToCart({
      id,
      price
    }))

  }

  // console.log(ctx.items)

  const sum = itemsarray.reduce(function (acc, obj) { return acc + obj.totalPrice; }, 0);
  const cartitems = itemsarray.map((item) => {
    

    return (
      <tr key={item.id}
      >
       
        <td>{item.title}</td>
        <td><img src={item.image} alt="red" style={{ width: "100px", heigth: "100px" }}></img></td>
        <td>{item.quantity} </td>
        <td>${item.price}</td>
        <td><button onClick={Additems.bind(null,item.id,item.price)} ><MdAddCircle/></button></td>
        <td><button onClick={cartItemRemoveHandler.bind(null, item.id)}><MdRemoveCircle/></button></td>
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

