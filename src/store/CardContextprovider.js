import Cardcontext from "./context";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CardProvider = (props) => {


  const [items, setitems] = useState([])
  const intialtoken = localStorage.getItem("token")
  const [token, settoken] = useState(intialtoken)
  const [totalnumber, settotalnumber] = useState(0)

  useEffect(() => {
    const id = localStorage.getItem("email")
    fetch(`https://crudcrud.com/api/fe2a3201a5e34b1796caa80fcd989945/cart${id}`).then(res => {

      return res.json()
    })
      .then((data) => {
        setitems(data)
        settotalnumber(data.length)

      })
  }, [])



  const navigate = useNavigate()



  const isloggedinboolean = !!token

  const addItemToCartHandler = (item) => {
    const id = localStorage.getItem("email")

    fetch(`https://crudcrud.com/api/fe2a3201a5e34b1796caa80fcd989945/cart${id}`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.json()
    })
      .then((data) => {
        setitems([...items, data])
        settotalnumber(totalnumber + 1)

      })


    // setitems([...items, data])
  };

  const removeItemFromCartHandler = (deleteid) => {

    const id = localStorage.getItem("email")


    fetch(`https://crudcrud.com/api/fe2a3201a5e34b1796caa80fcd989945/cart${id}/${deleteid}`, {
      method: "DELETE"
    }).then((res) => {


      const id = localStorage.getItem("email")
      fetch(`https://crudcrud.com/api/fe2a3201a5e34b1796caa80fcd989945/cart${id}`).then(res => {

        return res.json()
      })
        .then((data) => {
          setitems(data)
          settotalnumber(data.length)


        })

    })


  };

  function loginhandler(token) {

    settoken(token)


  }
  function logouthandler() {
    settoken(null)
    localStorage.removeItem("token")
    navigate("/")
  }

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    token: token,
    isLoggein: isloggedinboolean,
    login: loginhandler,
    logout: logouthandler,
    total: totalnumber


  };

  return (
    <Cardcontext.Provider value={cartContext}>
      {props.children}
    </Cardcontext.Provider>
  );
};

export default CardProvider;
