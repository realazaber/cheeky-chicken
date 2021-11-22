import React from 'react'
import { Link } from "react-router-dom";

function Disclaimer() {
    return (
        <div>
            <h1>
                This is not the official site for Cheeky Chicken.
                <br />
                This is just a demo of a redone version of the website.
                
            </h1>
            <Link to="/cheeky-chicken">
                Proceed to demo site.
            </Link>
            <br />
            <a href="https://www.cheekychicken.com.au/" target="_blank">Link to real Cheeky Chicken.</a>
        </div>
    )
}

export default Disclaimer
