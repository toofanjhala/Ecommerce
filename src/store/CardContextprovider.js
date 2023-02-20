import Cardcontext from "./context";
import React, { useState } from "react";

const CardProvider = (props) => {

    const [items, setitems] = useState([])

    const addItemToCartHandler = (item) => {
        setitems([...items, item])
    };



    const removeItemFromCartHandler = (deleteid) => {
        const result = items.filter((item) => {
            return item.id !== deleteid
        })
        setitems(result)
    };

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <Cardcontext.Provider value={cartContext}>
            {props.children}
        </Cardcontext.Provider>
    );
};

export default CardProvider;
