import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { CustomButton } from '../cart/Custombutton'

export const Navigation = () => {
    return (

        <Navbar bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="#home"><h3>Sharpener Bazar</h3></Navbar.Brand>
                <Nav>
                    <Nav.Link href="#about"><h4>Home</h4></Nav.Link>
                    <Nav.Link href="#Store"><h4>Store</h4></Nav.Link>
                    <Nav.Link href="#aboutus"><h4>About</h4></Nav.Link>
                </Nav>
                <CustomButton />
            </Container>
        </Navbar>

    )
}
