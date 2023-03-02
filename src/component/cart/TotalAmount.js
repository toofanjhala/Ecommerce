import React from 'react'


export const TotalAmount = (props) => {
  
  return (
    <tr>
        <td
          style={{ backgroundColor: "#198754", fontSize: "20px", fontFamily: "Robinson Typeface", color: "black" }}>
          Total Amount
        </td>
        <td
          style={{ backgroundColor: "#198754", fontSize: "20px", fontFamily: "Robinson Typeface", textAlign: "center", color: "black" }}>
          ${props.sum}
        </td>
      </tr>
  )
}
