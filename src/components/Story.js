import React, { Fragment } from 'react'
import Nav from './Nav';
import logo from "../imgs/tabicon.png";

function Story() {
    return (
        <Fragment>
            <Nav />
            <div id="story">
                <main>
                    <h1>
                        Our Story
                    </h1>
                    <h4>
                        Cheeky Chicken's first store opened in Westfield Shoppingtown, Doncaster in August 1987.
                    <br /><br />
                        The concept was an instant hit with the market and was an immediate success. In the following year, the second Cheeky Chicken store was 
                        opened at Bay City Plaza, Geelong. Our Geelong store has operated locally for more than 30 years. It's the local taste you do not want 
                        to miss out.
                    <br /><br />
                        We are proud to offer a wide range of innovative, high quality and freshly prepared products in a modern and hygienic environment, 
                        served efficiently by our friendly and knowledgeable staff. 
                    <br /><br />
                        Do not forget to try our tasty chips with our unique Cheeky Chicken salt. 
                        The chicken that we use is no ordinary chicken. It is skinless and boneless*, we use pure breast meat, which means its really low in fat, 
                        and has no preservatives or anything artificial, which means it's healthy!!!
                    <br /><br />
                        Our aim is to provide much healthier food with great tastes! So do drop in and visit us!!!
                    <br /><br />
                        *except for flame grilled pieces
                    </h4>
                    <img src={logo} alt="Logo"/>
                    <h2>The best chicken and chips in Geelong</h2>
                </main>
            </div>
        </Fragment>
    )
}

export default Story
