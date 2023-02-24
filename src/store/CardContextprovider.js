import Cardcontext from "./context";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardProvider = (props) => {

    const navigate=useNavigate()

    const [items, setitems] = useState([])
     const intialtoken = localStorage.getItem("token")
    const [token, settoken] = useState(intialtoken)
    const isloggedinboolean = !!token

    const addItemToCartHandler = (item) => {
        setitems([...items, item])
    };

    const removeItemFromCartHandler = (deleteid) => {
        const result = items.filter((item) => {
            return item.id !== deleteid
        })
        setitems(result)
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
        logout: logouthandler

    };

    return (
        <Cardcontext.Provider value={cartContext}>
            {props.children}
        </Cardcontext.Provider>
    );
};

export default CardProvider;
