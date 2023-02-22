import React, { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import Header from '../UI/Header'
import Footer from '../UI/Footer'
import { Container } from 'react-bootstrap'


export const Contactus = () => {

    const nameref = useRef("")
    const emailref = useRef("")
    const phoneref = useRef("")

    async function datahandler(event) {

        event.preventDefault();

        const formdata = {
            name: nameref.current.value,
            email: emailref.current.value,
            phone: phoneref.current.value
        }

        const data = await fetch("https://ecommerce-c9032-default-rtdb.firebaseio.com/formdata.json", {
            method: "POST",
            body: JSON.stringify(formdata),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const converted = await data.json()
        console.log(converted)

    }
    return (
        <div>
            <Header />


            <h2 style={{ padding: "1rem", Color: "olive", fontFamily: "Stencil Std, fantasy", fontSize: "40px", marginTop: "30px", textAlign: "center", justifyContent: "center" }}>
                Contact Us</h2>
            <Container style={{ margin: "5rem" }}>
                <Form style={{ backgroundColor: "#ffffff" }}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameref} placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" ref={emailref} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" ref={phoneref} placeholder="Enter number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button onClick={datahandler} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Container>
            <Footer />
        </div>
    )
}
