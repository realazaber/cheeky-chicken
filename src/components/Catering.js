import React, { Fragment } from 'react'
import Nav from './Nav';
import MenuOrder from './MenuOrder';

import fries from "../imgs/foods/fries.webp";

import { Link } from 'react-router-dom';

function Catering() {
    return (
        <Fragment>
            <Nav />
            <div id="catering">
                <main>
                    <h1>
                        Cheeky Catering
                    </h1>
                    <h4>
                    <p>
                        Cheeky Chicken has the best food solutions for your party or function, any size any time!
                    </p>                    
                    <p>
                        We can supply your function with anything you choose from our menu, check it out.
                    </p>
                    <p>
                        Take a look at our menu and give us a call, we will offer free advice to get the best 
                        quantities and delivery times that suit you. We can even supply staff if service is required at your venue.
                    </p>
                    <p>
                        We love to cheeky cater so give us a call!
                    </p>

                    
                    </h4>
                    <img src={fries} alt="fries"/>
                    <br />
                    <MenuOrder />
                    <Link to="/contact">
                        <button id="contactBtn">
                            Contact us
                        </button>
                    </Link>
                </main>
            </div>
        </Fragment>
    )
}

export default Catering
