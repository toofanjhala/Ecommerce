import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import "./Header.css"

export const Header = () => {
    return (
       
        <div >
            <Navbar bg="dark" variant="dark" style={ {
  position: "sticky",
  top: "0",
  padding: "5px"}}>
                <Container >
                    <Navbar.Brand href="#home"><h3>Sharpener Bazar</h3></Navbar.Brand>
                    <Nav >
                        <Nav.Link href="#home"><h4>Home</h4></Nav.Link>
                        <Nav.Link href="#features"><h4>Store</h4></Nav.Link>
                        <Nav.Link href="#pricing"><h4>About</h4></Nav.Link>
                    </Nav>
                    <Button variant="info"> YOUR CART</Button>
                </Container>
            </Navbar>
            
            <div className='h1'>
                <h1>The Generics</h1>
            </div>
            <h2 className='heading'>Merch</h2>
            

        </div>
    )
}
