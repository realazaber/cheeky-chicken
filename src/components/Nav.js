import React, { Fragment } from 'react'

import { Link } from 'react-router-dom';

import logo from "../imgs/tabicon.png";


function Nav() {

    const openMenu = () => {
        document.getElementById("mobileLinks").style.width = "200px";
    }

    const closeMenu = () => {
        document.getElementById("mobileLinks").style.width = "0px";
    }


    return (
        <Fragment>
                    <nav>
            <Link to="/home">
                <img src={logo} alt="logo" />
            </Link>

            <div id="links">
                <Link to="/home">
                    Home  
                </Link>
                <Link to="/our-story">
                    Our story  
                </Link>
                <Link to="/kids-club">
                    Kids Club  
                </Link>
                <Link to="/menu">
                    Menu  
                </Link>
                <Link to="/catering">
                    Catering  
                </Link>
                <Link to="/contact">
                    Contact
                </Link>
            </div>
        </nav>

        <div id="mobileNav">
            <button id="mobileNavIcon" onClick={openMenu}>
                ☰
            </button>

            <div id="mobileLinks">
                <Link to="/home" onClick={closeMenu}>
                    Home  
                </Link>
                <br />
                <Link to="/our-story" onClick={closeMenu}>
                    Our story  
                </Link>
                <br />
                <Link to="/kids-club" onClick={closeMenu}>
                    Kids Club  
                </Link>
                <br />
                <Link to="/menu" onClick={closeMenu}>
                    Menu  
                </Link>
                <br />
                <Link to="/catering" onClick={closeMenu}>
                    Catering  
                </Link>
                <br />
                <Link to="/contact" onClick={closeMenu}>
                    Contact
                </Link>
            </div>
        </div>
        </Fragment>
    )
}

export default Nav;
