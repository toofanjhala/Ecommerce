import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { TotalAmount } from "./TotalAmount";



function Cart(props) {



  const [mydata, setMydata] = useState([])
  useEffect(() => {
    const id = localStorage.getItem("email")
    fetch(`https://crudcrud.com/api/3d28e098705b4d0290be7e2e845a64c7/cart${id}`).then(res => {

      return res.json()
    })
      .then((data) => {
        setMydata(data)


      })
  }, [])


  console.log(mydata)





  function cartItemRemoveHandler(deleteid) {


    const id = localStorage.getItem("email")


    fetch(`https://crudcrud.com/api/3d28e098705b4d0290be7e2e845a64c7/cart${id}/${deleteid}`, {
      method: "DELETE"
    }).then((res) => {
      console.log(res)

      const id = localStorage.getItem("email")
      fetch(`https://crudcrud.com/api/3d28e098705b4d0290be7e2e845a64c7/cart${id}`).then(res => {

        return res.json()
      })
        .then((data) => {
          setMydata(data)

        })

    })

  }

  const sum = mydata.reduce(function (acc, obj) { return acc + obj.price; }, 0);
  const cartitems = mydata.map((item) => {
    console.log(item)

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

