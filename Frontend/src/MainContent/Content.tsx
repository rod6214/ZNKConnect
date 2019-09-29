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
                <div className="ntc-sidebar">sidebar</div>
                {/*section*/}
                <div className="ntc-main-content">
                    <SectionPane />
                </div>
                {/*footet*/}
                <div className="ntc-footer">footer</div>
            </div>
            );
    }
}