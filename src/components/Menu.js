import React, { Fragment } from 'react'

import Nav from './Nav';
import MenuOrder from "./MenuOrder";

import burger from "../imgs/foods/burger.jpg";

import Fade from 'react-reveal/Fade';

function Menu() {
    return (
        <Fragment>
            <Nav />
            <div id="menu">
                <main>
                    <Fade top>
                        <h1>
                            Menu
                        </h1>
                    </Fade>
                    <h2>
                        Our menu is filled chicken that is not only
                        delicious but healthy too thanks to us only 
                        using 
                        <br />
                        pure breast meat, and not adding any 
                        preservatives or anything artificial. 
                        <br />
                        Take a look at our menu here.
                    </h2>

                    <MenuOrder />
                    <img src={burger} alt="Burger" width="500px"/>
                    
                </main>
            </div>
        </Fragment>
    )
}

export default Menu
