import React from 'react';
import WNavbar from '../Components/Navbar/WNavbar';
import Routes from '../RouteV1Config';
import WFooter from '../Components/Controls/WFooter/WFooter';
import WModal from '../Components/Controls/WModal/WModal';
import { BrowserRouter as Router } from "react-router-dom";
import { SharedControls } from '../Shared/SharedControls';
import './w3.css';
import './lato.css';
import './Content.css';

interface ContentState {
    modal: WModal;
}

export class Content extends React.Component {

    private _modalRef: React.RefObject<WModal>;

    constructor(props: any) {
        super(props);
        this.state = {modal: null};
        this._modalRef = React.createRef();
    }

    componentDidMount(): void {
        if (this._modalRef.current) {
            this.setState({modal: this._modalRef.current});
        }
    }

    render(): JSX.Element {
        const state = this.state as ContentState;
        return (
            <Router>
                <SharedControls.Provider value={{ modal: state.modal }}>
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
                    </div>
                </SharedControls.Provider>
                <WModal ref={this._modalRef}/>
            </Router>
        );
    }
}