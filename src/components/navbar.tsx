import React, { useState, useEffect } from 'react'
import '../styles/navbar.css'

interface NavbarProps {
    items: string[]
}

const Navbar = ({items}: NavbarProps) => {
    const [hovered, setHover] = useState(false);
    const hoverOn = () => { setHover(true); }
    const hoverOff = () => { setHover(false); }

    const [scrolled, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 90 ? setScroll(true) : setScroll(false);
        }

        window.addEventListener('scroll', handleScroll);
    })


    return (
        <nav id="navbar" className={scrolled ? "scroll" : ""}>
            <div id="container">
                <a href={"/"}>
                    <div id="logo" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                        <p id="first-name" className={hovered ? "hover" : "no-hover"}>mark</p>
                        <p id="last-name" className={hovered ? "hover" : "no-hover"}>hagen</p>
                        <p id="period" className={hovered ? "hover" : "no-hover"}>.</p>
                    </div>
                </a>
                <ul id="links">
                    {items.map((item, idx) => 
                        <li key={idx}><a href={'#' + item.toLowerCase()}>{item}</a></li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar
