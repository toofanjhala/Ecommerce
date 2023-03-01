import React, { useState,useContext } from 'react'
import { Button } from 'react-bootstrap'
import Cardcontext from '../../store/context'
import CustomModal from './Custommodal'
import {BsCartDashFill} from   "react-icons/bs";
import { useSelector,useDispatch } from 'react-redux';
import { CartAction } from '../../store/cartslice';
export const CustomButton = () => {

 const newshow=useSelector((state)=>state.Cart.Visible)
  const dispatch=useDispatch()
    const ctx = useContext(Cardcontext)
    
   
   
    const [show, setshow] = useState(false)
    console.log(show ,"not neccesasary")
    function showmodalhandler() {
    //     setshow(true)
     dispatch(CartAction.toggle())
    //  console.log(newshow)

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
                      <BsCartDashFill size="2rem" spacing="5px"/>{ctx.total}</div>
                </Button>
            </div>
            {newshow && <CustomModal hide={hidemodalhandler} order={ordermodalhandler} />}
        </React.Fragment>
    )
}

