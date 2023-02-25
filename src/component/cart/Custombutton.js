import React, { useState,useContext } from 'react'
import { Button } from 'react-bootstrap'
import Cardcontext from '../../store/context'
import CustomModal from './Custommodal'
import {BsCartDashFill} from   "react-icons/bs";
export const CustomButton = () => {

    const ctx = useContext(Cardcontext)
    
    console.log(ctx.total)
   
    const [show, setshow] = useState(false)
    function showmodalhandler() {
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
                      <BsCartDashFill size="2rem" spacing="5px"/>{ctx.total}</div>
                </Button>
            </div>
            {show && <CustomModal hide={hidemodalhandler} order={ordermodalhandler} />}
        </React.Fragment>
    )
}

