import React from 'react';
import WNavbar from '../Components/Navbar/WNavbar';
import SectionPane from '../Components/SectionPane/SectionPane';
import WFooter from '../Components/Controls/WFooter/WFooter';
import WModal from '../Components/Controls/WModal/WModal';
import './w3.css';
import './lato.css';
import './Content.css';

export class Content extends React.Component {

    render(): JSX.Element {
        return (
            <div className="ntc-main-content">
                <div className="ntc-navbar">
                    <WNavbar />
                </div>
                <div className="ntc-section">
                    <SectionPane />
                </div>
                <div className="ntc-footer">
                    <WFooter />
                </div>
                <WModal />
            </div>
        );
    }
}