import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Cardbody.css'



export const Cardbody = (props) => {

  return (
 
        <Card className="shadow-lg" style={{ width: "20%" , margin:"3rem auto"}}>
          <h4 className="items">{props.title}</h4>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <h3> PRICE  ${props.price}</h3>
          </Card.Body>
          <Card.Footer>
            <Button variant="success">Add to Cart</Button>
          </Card.Footer>
        </Card>





  )
}
export default Cardbody
