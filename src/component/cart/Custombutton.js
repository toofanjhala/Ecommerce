import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import CustomModal from './Custommodal'
import { BsCartDashFill } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { CartAction } from '../../store/cartslice';
import { sendCartData } from '../../store/Cart-Actions';
let isInitial = true;
export const CustomButton = () => {

    
    const Item = useSelector((state) => state.Item)
    const totalQuantity = useSelector((state) => state.Item.totalQuantity)
   
    const dispatch = useDispatch()

    
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(Item));
  }, [Item, dispatch]);


    const [show, setshow] = useState(false)

    function showmodalhandler() {

        dispatch(CartAction.toggle)
        setshow(true)

    }

    function hidemodalhandler() {
        setshow(false)
    }

    function ordermodalhandler() {
        setshow(false)
        alert("Thanks order placed successfully")
    }

    return (
        <React.Fragment>
      
            <div>
           
                <Button onClick={showmodalhandler} variant="info"> YOUR CART
                    <div style={{ color: "black", fontFamily: "inherit", fontSize: "18px", fontStyle: "bold", padding: "1px" }}>
                        <BsCartDashFill size="2rem" spacing="5px" />{totalQuantity}</div>
                </Button>
            </div>
            {/* {newshow && <CustomModal hide={hidemodalhandler} order={ordermodalhandler} />} */}
            {show && <CustomModal hide={hidemodalhandler} order={ordermodalhandler} />}
          
        </React.Fragment>
    )
}

