import React, { Fragment } from 'react'
import Nav from './Nav';
import kidsDeal from "../imgs/kidsDeal.webp";

import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';


function KidsClub() {
    return (
        <Fragment>
            <Nav />
            <div id="kidsClub">
                <main>
                
                <h1>
                    <Rotate cascade>
                        Cheeky Kids Club
                    </Rotate>
                </h1>
                    <h2>
                        We offer a special deal for kids meals!
                        <br />
                        With every kids meal you will get a free activity book and crayons.
                    </h2>
                    <Bounce>
                    <img src={kidsDeal} height="550px" alt="Kids Deal" />
                    </Bounce>
                    
                </main>
            </div>
        </Fragment>
    )
}

export default KidsClub
