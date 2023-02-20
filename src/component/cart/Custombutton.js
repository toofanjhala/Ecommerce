import React, { useState, useContext } from 'react'
import { Button } from 'react-bootstrap'
import Cardcontext from '../../store/context'
import CustomModal from './Custommodal'

export const CustomButton = () => {

    const ctx = useContext(Cardcontext)
    const totalnumber = ctx.items.length
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
                    <div style={{ color: "black", fontFamily: "inherit", fontSize: "18px", fontStyle: "bold", padding: "1px" }}>{totalnumber}</div>
                </Button>
            </div>
            {show && <CustomModal hide={hidemodalhandler} order={ordermodalhandler} />}
        </React.Fragment>
    )
}

