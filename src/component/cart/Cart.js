import { Button } from "react-bootstrap";
import React from "react";
function Cart(props) {
  
  function removeHandler(id){
   

  }

  var sum = props.item.reduce(function (acc, obj) { return acc + obj.price; }, 0);
  

 const cartitems= props.item.map((item)=>{
  
    return(
     
    <tr key={item.id}>
      <td>{item.quantity} {item.title}</td>
      <td><img src={item.image} alt="red" style={{ width: "100px", heigth: "100px" }}></img></td>
      <td>${item.price}</td>
      <td><Button variant="danger" onClick={removeHandler}>Remove item</Button></td>
    </tr>
  
 
    )
  })


  return (
    <React.Fragment>
   {cartitems}
   <tr>
    <td style={{backgroundColor:"#198754", fontSize:"20px",fontFamily:"Robinson Typeface" , color:"black" }}> Total Amount</td>
    <td style={{backgroundColor:"#198754", fontSize:"20px" ,fontFamily:"Robinson Typeface", textAlign:"center", color:"black"}}>${sum}</td>
   </tr>
   </React.Fragment>
  )
 
}

export default Cart

