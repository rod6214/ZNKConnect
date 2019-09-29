import React from 'react';
import './WSlideShow.css';

export interface WSlideShowProperty {
    slideItems: ToadObject[];
    children?: React.ReactNode[] | React.ReactNode;
}

export interface ToadObject {
    id: number;
    title: string;
    description: string;
    imgSrc: string;
}

class WSlideShow extends React.Component {

    private _slideAnimationHandle?: number;
    private _slideContent?: React.RefObject<HTMLDivElement>;
    private _counter: number;

    public constructor(public props: WSlideShowProperty) {
        super(props);
        this.state = {imageId: 0};
        this._slideContent = React.createRef();
        this._counter = 0;
    }

    componentDidMount(): void {
        if (!this._slideAnimationHandle) {
            this._Changer();
            this._slideAnimationHandle = window.setInterval(() => this._Changer(), 4000);
        }
    }

    componentWillUnmount(): void {
        clearInterval(this._slideAnimationHandle);
    }

    private _Changer(): void {
        const children = this._slideContent && this._slideContent.current && this._slideContent.current.children;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                const element = children.item(i) as HTMLDivElement;
                element.style.display = "none";
            }
            if (this._counter > children.length - 1) {this._counter = 0}
            const element = children.item(this._counter) as HTMLDivElement;
            element.style.display = "block";
            this._counter++;
        }
    }
    
    render(): React.ReactNode {
        const toadObject = this.props.slideItems.map((item, index) => {
            return (
                <div key={index} ref={this._slideContent} className="mySlides w3-display-container w3-center">
                    <img src={item.imgSrc} style={{width:'100%'}}/>
                    <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                        <h3>{item.title}</h3>
                        <p><b>{item.description}</b></p>    
                    </div>
                </div>
            );
        });
        
        return (
            <div className="ntc-slides" ref={this._slideContent}>
                {toadObject}
            </div>
        );
    }
}

export default WSlideShow;