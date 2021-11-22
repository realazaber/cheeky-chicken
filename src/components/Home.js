import React, { Fragment } from 'react';
import Nav from './Nav';
import logo from "../imgs/tabicon.png";
import Map from './Map';
import MenuOrder from './MenuOrder';

import Fade from 'react-reveal/Fade';

function Home() {
    return (

        <Fragment>
            {<Nav />}
            <div id="home">
                <main>
                    <Fade top>
                        <h1>
                            Welcome to Cheeky Chicken
                        </h1>
                    </Fade>
                    
                    <div className="sideBySide">
                        <Fade><img src={logo} alt="logo" /></Fade>
                        <Map />
                    </div>
                    <h2>
                        The best chicken and chips in Geelong.
                    </h2>
                    <MenuOrder />
                    <h4>
                    <Fade bottom cascade>
                        <br />
                        Located in Westfield Geelong, 
                        <br />
                        Level 1, Food Court 
                        <br />
                        95 Malop St, Geelong VIC 3220
                        <br />
                        Tel: 1300 657 866
                    </Fade>
                    </h4>
                </main>        
            </div>
            
        </Fragment>

        
    )
}

export default Home
