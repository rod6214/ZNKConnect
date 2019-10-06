import React from 'react';
import WToadProperty from '../../../Interfaces/WToadProperty';

class WPictureCollection extends React.Component {

    constructor(public props: WToadProperty) {
        super(props);
        if (this.props.onclick) {
            this.props.onclick = this.props.onclick.bind(this);
        }
    }

    render(): React.ReactNode {
        return (
            <div className="w3-third w3-margin-bottom">
                <img src={this.props.src} alt={this.props.title} style={{width:"100%"}} className="w3-hover-opacity" />
                <div className="w3-container w3-white">
                    <p><b>{this.props.title}</b></p>
                    <p className="w3-opacity">{this.props.subtitle}</p>
                    <p>{this.props.description}</p>
                    <button className="w3-button w3-black w3-margin-bottom" onClick={this.props.onclick}>{this.props.buttonName}</button>
                </div>
        </div>          
        );
    }
}

export default WPictureCollection;