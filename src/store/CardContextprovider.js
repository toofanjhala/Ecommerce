import Cardcontext from "./context";
import React,{useState} from "react";

const CardProvider = (props) => {
  
    const [items,setitems]=useState([])
    const addItemToCartHandler = (item) => {
        
         setitems([...items,item])
         
    };

    

    const removeItemFromCartHandler = (id) => {
       
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
