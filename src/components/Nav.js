import React from 'react'

import { Link } from 'react-router-dom';

import logo from "../imgs/tabicon.png";


function Nav() {
    return (
        <nav>
            <a href="#logo">
                <img src={logo} alt="logo" />
            </a>

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
                <Link to="/catering">
                    Catering  
                </Link>
                <Link to="/menu">
                    Menu  
                </Link>
                <Link to="/contact">
                    Contact
                </Link>
            </div>
        </nav>
    )
}

export default Nav;
