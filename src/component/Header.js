import React, { useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import "./Header.css"
import { CustomButton } from './cart/button'




export const Header = () => {
 
 
    useEffect(()=>{
     window.addEventListener("scroll",isSticky);
   
     return ()=>{ window.removeEventListener("scroll",isSticky)}
     })

     const isSticky = (e)=>{
        
         const header=document.querySelector(".header-section")
         const scrollTOP=window.scrollY;
         scrollTOP>0 ? header.classList.add('is_sticky'): header.classList.remove('is_sticky');
     }
  


    return (
        <header className='header-section'>
            <Navbar bg="dark" variant="dark" >
                <Container  >
                    <Navbar.Brand href="#home"><h3>Sharpener Bazar</h3></Navbar.Brand>
                    <Nav >
                        <Nav.Link href="#home"><h4>Home</h4></Nav.Link>
                        <Nav.Link href="#features"><h4>Store</h4></Nav.Link>
                        <Nav.Link href="#pricing"><h4>About</h4></Nav.Link>
                    </Nav>
                  <CustomButton/>
                </Container>
            </Navbar>
            </header>
    )
}
