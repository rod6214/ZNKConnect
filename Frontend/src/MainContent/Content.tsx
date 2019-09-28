import React from 'react';
import './w3.css';
import './lato.css';
import './font-awesome.min.css';
import './Content.css';

export class Content extends React.Component {

    render(): JSX.Element {
        return (
            <div>
                {/*navbar*/}
                <div className="ntc-navbar">navbar</div>
                {/*sidebar*/}
                <div className="ntc-sidebar">sidebar</div>
                {/*section*/}
                <div className="ntc-main-content">section</div>
                {/*footet*/}
                <div className="ntc-footer">footer</div>
            </div>
            );
    }
}