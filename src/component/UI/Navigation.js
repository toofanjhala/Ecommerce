import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { CustomButton } from '../cart/Custombutton'
import { NavLink } from 'react-router-dom'
import "./navigation.module.css"

export const Navigation = () => {
    return (

        <Navbar bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="#home"><h3>Sharpener Bazar</h3></Navbar.Brand>
                <Nav>
                    <NavLink to="/"><h4 >Home</h4></NavLink>
                    <NavLink to="/Store"><h4>Store</h4></NavLink>
                    <NavLink to="/aboutus"><h4>About</h4></NavLink>
                </Nav>
                <CustomButton />
            </Container>
        </Navbar>

    )
}
