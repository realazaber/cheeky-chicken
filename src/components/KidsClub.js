import React, { Fragment } from 'react'
import Nav from './Nav';
import kidsDeal from "../imgs/kidsDeal.webp";

function KidsClub() {
    return (
        <Fragment>
            <Nav />
            <div id="kidsClub">
                <main>
                <h1>
                    Cool Kids Club
                    </h1>
                    <h2>
                        We offer a special deal for kids meals!
                        <br />
                        With every kids meal you will get a free activity book and crayons.
                    </h2>
                    <img src={kidsDeal} height="550px" alt="Kids Deal" />
                    
                </main>
            </div>
        </Fragment>
    )
}

export default KidsClub
