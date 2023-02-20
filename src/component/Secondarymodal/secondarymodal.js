import React from 'react'
import { Card } from 'react-bootstrap'

import "./secondarymodel.css"

export const Secondarycard = (props) => {
  return (
    <Card className='secondary'>
        <h4> <p style={{color:"red" ,fontWeight:"500"}}> {props.item} </p> is addded to the card</h4>
    </Card>
  )
}
