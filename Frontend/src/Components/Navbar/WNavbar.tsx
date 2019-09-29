import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div className="w3-top">
                <div className="w3-bar w3-black w3-card">
                    {/* <a className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="#" title="Toggle Navigation Menu">
                        <i className="fa fa-bars"></i>
                    </a> */}
                    <Link className="w3-bar-item w3-button w3-padding-large" to="/">HOME</Link>
                    {/* <a href="#" className="w3-bar-item w3-button w3-padding-large">HOME</a> */}
                    <a href="#band" className="w3-bar-item w3-button w3-padding-large w3-hide-small">BAND</a>
                    <a href="#tour" className="w3-bar-item w3-button w3-padding-large w3-hide-small">TOUR</a>
                    <Link className="w3-bar-item w3-button w3-padding-large w3-hide-small" to="/contact">CONTACT</Link>
                    {/* <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a> */}
                    <div className="w3-dropdown-hover w3-hide-small">
                        <button className="w3-padding-large w3-button" title="More">MORE <i className="fa fa-caret-down"></i></button>     
                        <div className="w3-dropdown-content w3-bar-block w3-card-4">
                            <a href="https://es.reactjs.org/docs/context.html" className="w3-bar-item w3-button">Merchandise</a>
                            <a href="https://es.reactjs.org/docs/context.html" className="w3-bar-item w3-button">Extras</a>
                            <a href="https://es.reactjs.org/docs/context.html" className="w3-bar-item w3-button">Media</a>
                        </div>
                    </div>
                    <a href="https://es.reactjs.org/docs/context.html" className="w3-padding-large w3-hover-red w3-hide-small w3-right">
                        <i className="fa fa-search"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar;