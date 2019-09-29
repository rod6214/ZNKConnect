import React from 'react';
import WNavbar from '../Components/Navbar/WNavbar';
// import SectionPane from '../Components/SectionPane/SectionPane';
import Routes from '../RouteV1Config';
import WFooter from '../Components/Controls/WFooter/WFooter';
import WModal from '../Components/Controls/WModal/WModal';
import { BrowserRouter as Router } from "react-router-dom";
import './w3.css';
import './lato.css';
import './Content.css';

export class Content extends React.Component {

    render(): JSX.Element {
        return (
            <Router>
                <div className="ntc-main-content">
                    <div className="ntc-navbar">
                        <WNavbar />
                    </div>
                    <div className="ntc-section">
                        <Routes />
                    </div>
                    <div className="ntc-footer">
                        <WFooter />
                    </div>
                    <WModal />
                </div>
            </Router>
        );
    }
}