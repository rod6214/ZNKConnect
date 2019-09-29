import React from 'react';
import { jsxAttribute } from '@babel/types';

export interface WSlideShowProperty {
    slideItems: ToadObject[];
    children?: React.ReactNode[] | React.ReactNode;
}

interface WSlideShowState {
    imageId: number;
}

interface ToadProperty {
    toad?: ToadObject;
}

export interface ToadObject {
    id: number;
    title: string;
    description: string;
    imgSrc: string;
}

// TODO: Add properties to assign images and other type of controls
class WSlideShow extends React.Component {

    private _slideAnimationHandle?: number;
    private _elements: React.ReactNode[] = [];
    private _slideContent?: React.RefObject<HTMLDivElement>

    public constructor(public props: WSlideShowProperty) {
        super(props);
        this.state = {imageId: 0};
        this._slideContent = React.createRef();
    }

    // componentWillMount(): void {
    //     // this._elements = this.props.slideItems.map(item => (<Toad toad = {item}/>));
    // }

    componentDidMount(): void {
        if (!this._slideAnimationHandle) {
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
        }
        // const state = this.state as WSlideShowState;
        // if (state.imageId > this.props.slideItems.length - 2) {
        //     this.setState({imageId: 0});
        // }
        // else {
        //     this.setState({imageId: state.imageId + 1});
        // }
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
        // return (
        //     // <div className="ntc-slides" ref={this._slideContent}>
        //     //     {/* <!-- Automatic Slideshow Images --> */}
        //     //     <div className="mySlides w3-display-container w3-center">
        //     //         <img src="https://www.w3schools.com/w3images/la.jpg" style={{width:'100%'}} />
        //     //         <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
        //     //         <h3>Los Angeles</h3>
        //     //         <p><b>We had the best time playing at Venice Beach!</b></p>   
        //     //         </div>
        //     //     </div>
        //     //     <div className="mySlides w3-display-container w3-center">
        //     //         <img src="https://www.w3schools.com/w3images/ny.jpg" style={{width:'100%'}} />
        //     //         <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
        //     //         <h3>New York</h3>
        //     //         <p><b>The atmosphere in New York is lorem ipsum.</b></p>    
        //     //         </div>
        //     //     </div>
        //     //     <div className="mySlides w3-display-container w3-center">
        //     //         <img src="https://www.w3schools.com/w3images/chicago.jpg" style={{width:'100%'}} />
        //     //         <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
        //     //         <h3>Chicago</h3>
        //     //         <p><b>Thank you, Chicago - A night we won't forget.</b></p>    
        //     //         </div>
        //     //     </div>
        //     // </div>
        // );
    }
}

// function Toad(props: ToadProperty) {
//     const toad = props.toad;
//     if (toad) {
//         return (
//             <div className="mySlides w3-display-container w3-center">
//                 <img src={toad.imgSrc} style={{width:'100%'}}/>
//                 <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
//                     <h3>{toad.title}</h3>
//                     <p><b>{toad.description}</b></p>    
//                 </div>
//             </div>
//         );
//     }
//     else {
//         return (<div></div>);
//     }
// }

export default WSlideShow;