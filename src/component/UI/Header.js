import React, { useEffect } from 'react'
import "./Header.css"
import { Navigation } from './Navigation'
import { Heading } from './heading'





export const Header = () => {


    useEffect(() => {
        window.addEventListener("scroll", isSticky);

        return () => { window.removeEventListener("scroll", isSticky) }
    })

    const isSticky = (e) => {

        const header = document.querySelector(".header-section")
        const scrollTOP = window.scrollY;
        scrollTOP > 0 ? header.classList.add('is_sticky') : header.classList.remove('is_sticky');
    }



    return (
        <React.Fragment>
            <header className='header-section'>
                <Navigation />
            </header>
            <Heading />
        </React.Fragment>
    )
}
