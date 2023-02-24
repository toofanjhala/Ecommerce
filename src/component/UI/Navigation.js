import React ,{useContext}from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { CustomButton } from '../cart/Custombutton'
import { NavLink } from 'react-router-dom'
import   classes from "./navigation.module.css"
import Cardcontext from '../../store/context'


export const Navigation = () => {

    const ctx=useContext(Cardcontext)


    return (

        <Navbar bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="#home"><h3>Sharpener Bazar</h3></Navbar.Brand>
                <Nav>
                <NavLink className= {classes.active} to={ctx.isLoggein ? "/home" : "/"} >
                <h4 >Home</h4>
                </NavLink>
                    {!ctx.isLoggein && <NavLink to="/Store"><h4>Store</h4></NavLink>}
                    {!ctx.isLoggein && <NavLink to="/aboutus"><h4>About</h4></NavLink>}
                    { !ctx.isLoggein &&<NavLink to="/contactus"><h4>Contact</h4></NavLink>}
                    {!ctx.isLoggein && <NavLink to="/"><h4>Login</h4></NavLink>}
                </Nav>
                { ctx.isLoggein && <CustomButton />}
               
            </Container>
           { ctx.isLoggein && <Button style={{margin:"auto"}}variant="danger" onClick={ctx.logout}>Logout</Button> }
        </Navbar>
    )
}
