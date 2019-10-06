import React from 'react';
import ButtonProperties  from '../../../Interfaces/ButtonProperties';

class NavButton extends React.Component {

    constructor(public props: ButtonProperties) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="w3-hide-small w3-right w3-padding-small">
                <button className="w3-button w3-green w3-hover-orange w3-round-medium" title="More">LOGIN</button>
            </div>
        );
    }
}

export default NavButton;