import React from 'react';
import WNavbar from '../Components/Navbar/WNavbar';
import SectionPane from '../Components/SectionPane/SectionPane';
import './w3.css';
import './lato.css';
import './Content.css';

export class Content extends React.Component {

    render(): JSX.Element {
        return (
            <div>
                {/*navbar*/}
                <div className="ntc-navbar">
                    <WNavbar />
                </div>
                {/*sidebar*/}
                {/* <div className="ntc-sidebar">sidebar</div> */}
                {/*section*/}
                <div className="ntc-main-content">
                    <SectionPane />
                    {/* <!-- Ticket Modal --> */}
                    <div id="ticketModal" className="w3-modal">
                        <div className="w3-modal-content w3-animate-top w3-card-4">
                            <header className="w3-container w3-teal w3-center w3-padding-32"> 
                                <span className="w3-button w3-teal w3-xlarge w3-display-topright">×</span>
                                <h2 className="w3-wide"><i className="fa fa-suitcase w3-margin-right"></i>Tickets</h2>
                            </header>
                            <div className="w3-container">
                                <p><label><i className="fa fa-shopping-cart"></i> Tickets, $15 per person</label></p>
                                <input className="w3-input w3-border" type="text" placeholder="How many?" />
                                <p><label><i className="fa fa-user"></i> Send To</label></p>
                                <input className="w3-input w3-border" type="text" placeholder="Enter email" />
                                <button className="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">PAY <i className="fa fa-check"></i></button>
                                <button className="w3-button w3-red w3-section">Close <i className="fa fa-remove"></i></button>
                                <p className="w3-right">Need <a href="#" className="w3-text-blue">help?</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*footet*/}
                {/* <div className="ntc-footer">footer</div> */}
                {/* <!-- Image of location/map --> */}
                <img src="https://www.w3schools.com/w3images/map.jpg" className="w3-image w3-greyscale-min" style={{width:"100%"}}/>
                {/* <!-- Footer --> */}
                <footer className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
                    <i className="fa fa-facebook-official w3-hover-opacity"></i>
                    <i className="fa fa-instagram w3-hover-opacity"></i>
                    <i className="fa fa-snapchat w3-hover-opacity"></i>
                    <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                    <i className="fa fa-twitter w3-hover-opacity"></i>
                    <i className="fa fa-linkedin w3-hover-opacity"></i>
                    <p className="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
                </footer>
            </div>
            );
    }
}