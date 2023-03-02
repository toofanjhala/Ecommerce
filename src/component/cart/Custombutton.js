import React, { useState,useContext } from 'react'
import { Button } from 'react-bootstrap'
import Cardcontext from '../../store/context'
import CustomModal from './Custommodal'
import {BsCartDashFill} from   "react-icons/bs";
import { useSelector,useDispatch } from 'react-redux';
import { CartAction } from '../../store/cartslice';
export const CustomButton = () => {

 const newshow=useSelector((state)=>state.Cart.Visible)
 const totalQuantity=useSelector((state)=>state.Item.totalQuantity)
  const dispatch=useDispatch()
    const ctx = useContext(Cardcontext)
    
   
   
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
                      <BsCartDashFill size="2rem" spacing="5px"/>{totalQuantity}</div>
                </Button>
            </div>
            {/* {newshow && <CustomModal hide={hidemodalhandler} order={ordermodalhandler} />} */}
            {show && <CustomModal hide={hidemodalhandler} order={ordermodalhandler} />}
        </React.Fragment>
    )
}

