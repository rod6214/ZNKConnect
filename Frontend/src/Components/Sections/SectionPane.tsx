import React from 'react';
import SectionPaneProperty from '../../Interfaces/SectionPaneProperty';
import WSlideShow from '../SlideShows/WSlideShow';
import PictureMosaic from './PictureMosaic';
import ToadsTracker from './ToadsTracker';
import WForm from '../Controls/WForm/WForm';

class SectionPane extends React.Component {

    private _slidehow?: WSlideShow;
    private _pictureMosaic?: PictureMosaic;
    private _toadsTracker?: ToadsTracker;
    private _form?: WForm;

    constructor(public props: SectionPaneProperty) {
        super(props);
    }

    render(): JSX.Element {
        if (this.props.children) {
            if (Array.isArray(this.props.children)) {
                for (const component of this.props.children) {
                    this._setComponent(component);
                }
            }
            else {
                this._setComponent(this.props.children);
            }
        }
        return (
        <div className="w3-content" style={{maxWidth:'2000px',marginTop:'46px'}}>
            {this._slidehow}
            {this._pictureMosaic}
            {this._toadsTracker}
            {this._form}
        </div>
        );
    }

    private _setComponent(element: any): void {
        switch(element.type) {
            case WSlideShow:
                this._slidehow = element as WSlideShow
                break;
            case PictureMosaic:
                this._pictureMosaic = element as PictureMosaic;
                break;
            case ToadsTracker:
                this._toadsTracker = element as ToadsTracker;
                break;
            case WForm:
                this._form = element as WForm;
                break;
        }
    }
}

export default SectionPane;
