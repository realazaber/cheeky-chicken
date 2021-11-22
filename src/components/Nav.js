import React from 'react'

import logo from "../imgs/tabicon.png";


function Nav() {
    return (
        <nav>
            <img src={logo} />

            <div id="links">
                <a href="#">
                    Home  
                </a>
                <a href="#">
                    Our story  
                </a>
                <a href="#">
                    Kids Club  
                </a>
                <a href="#">
                    Catering  
                </a>
                <a href="#">
                    Menu  
                </a>
                <a href="#">
                    Contact
                </a>
            </div>
        </nav>
    )
}

export default Nav;
