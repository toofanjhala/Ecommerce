import React, { useContext, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import './Cardbody.css'
import Cardcontext from '../../store/context'
import { Secondarycard } from '../Secondarymodal/secondarymodal'
import { IoAddCircle } from "react-icons/io5";
import { Link } from 'react-router-dom'



export const Cardbody = (props) => {

  const [popupstatus, setpopupstatus] = useState(false)
  const [dublicate, setdublicate] = useState(false)

  let ctx = useContext(Cardcontext)

  function itemhandler() {

   if (dublicate === false) {

      ctx.addItem({
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
      });

     
    setpopupstatus(true)

      setTimeout(() => {
        setpopupstatus(false)
      }, 1000);
    }

     setdublicate(true)

     if (dublicate === true) {
       alert("Item Already Eist")
     }


    }
  



  return (

    <React.Fragment>
      <Card className="card" ><Link to={`/Home/product/${props.title}`}>Details</Link>
        <div key={props.id}>
          <span className="items">{props.title}</span>
          <Card.Img variant="top" className='zoom' src={props.image} />
          <h3> PRICE  ${props.price}</h3>
          <Card.Footer>

            <Button variant="success" onClick={itemhandler}> <IoAddCircle size="2em" /> Add to Cart</Button>
          </Card.Footer>
        </div>
      </Card>
      {popupstatus && <Secondarycard item={props.title} />}


    </React.Fragment>
  )
}

export default Cardbody
