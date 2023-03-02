import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import CustomModal from './Custommodal'
import { BsCartDashFill } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { CartAction } from '../../store/cartslice';

let isInitial = true;
export const CustomButton = () => {

    
    const Item = useSelector((state) => state.Item)
    const totalQuantity = useSelector((state) => state.Item.totalQuantity)
   
    const dispatch = useDispatch()

    useEffect(() => {
        const sendCartData = async () => {
          dispatch(
            CartAction.showNotification({
              status: 'pending',
              title: 'Sending...',
              message: 'Sending cart data!',
            })
          );
          const response = await fetch(
            'https://ecommerce-c9032-default-rtdb.firebaseio.com/cart.json',
            {
              method: 'PUT',
              body: JSON.stringify(Item),
            }
          );
    
          if (!response.ok) {
            throw new Error('Sending cart data failed.');
          }
    
          dispatch(
            CartAction.showNotification({
              status: 'success',
              title: 'Success!',
              message: 'Sent cart data successfully!',
            })
          );
        };
    
        if (isInitial) {
          isInitial = false;
          return;
        }
    
        sendCartData().catch((error) => {
          dispatch(
            CartAction.showNotification({
              status: 'error',
              title: 'Error!',
              message: 'Sending cart data failed!',
            })
          );
        });
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

