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
                    <h2>
                    For questions about any of our products, or help with 
                    placing your order, don't hesitate to contact us.
                    <br />
                    You can either fill in the form or contact us by email
                   (info@cheekychicken.com.au) or call us at 03 5221 8308
                    </h2>

                    <div className="sideBySide">
                        <form>
                            <div className="inputField">
                                <label htmlFor="name">
                                    Name: *
                                </label>
                                <input id="name" type="text" required />                    
                            </div>

                            <div className="inputField">
                                <label htmlFor="phone">
                                    Phone: 
                                </label>
                                <input id="phone" type="number" />
                                <br />
                            </div>

                            <div className="inputField">
                                <label htmlFor="email">
                                    Email *: 
                                </label>
                                <input id="email" type="email" required />
                                <br />
                            </div>

                            <div className="inputField">
                                <label htmlFor="message">
                                    Message: 
                                </label>
                                <br />
                                <textarea cols="31" rows="10" required>

                                </textarea>
                                <br />
                            </div>

                            <button type="submit" id="contactBtn" onClick={() => { alert("This is a sample form, your message has not been sent")}}>
                                Submit
                            </button>
                        </form>
                        <Map />
                    </div>
                    
                    
                </main>
            </div>
        </Fragment>
    )
}

export default Contact
