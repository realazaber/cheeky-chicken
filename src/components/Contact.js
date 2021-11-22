import React, { Fragment } from 'react'
import Nav from "./Nav.js";
import Map from './Map.js';

function Contact() {


    return (
        <Fragment>
            <Nav />
            <div id="contact">
                <main>
                    <h1>
                        Contact us
                    </h1>
                    <h3>
                    For questions about any of our products, or help with 
                    placing your order, don't hesitate to contact us.
                    <br />
                    You can either fill in the form or contact us by email
                   (info@cheekychicken.com.au) or call us at 03 5221 8308
                    </h3>

                    <form>
                        <label htmlFor="name">
                            Name: *
                        </label>
                        <input id="name" type="text" required />
                        <br />

                        <label htmlFor="phone">
                            Phone: 
                        </label>
                        <input id="phone" type="number" />
                        <br />

                        <label htmlFor="email">
                            Email *: 
                        </label>
                        <input id="email" type="email" required />
                        <br />

                        <label htmlFor="message">
                            Message: 
                        </label>
                        <br />
                        <textarea cols="30" rows="5" required>

                        </textarea>
                        <br />

                        <button type="submit" id="contactBtn">
                            Submit
                        </button>
                    </form>
                    <Map />
                    
                </main>
            </div>
        </Fragment>
    )
}

export default Contact
