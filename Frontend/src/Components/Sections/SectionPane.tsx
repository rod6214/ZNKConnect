import React from 'react';
import WSlideShow from '../SlideShows/WSlideShow';
import PictureMosaicPane from './PictureMosaic';
import ToadsTracker from './ToadsTracker';
import WForm from '../Controls/WForm/WForm';

class SectionPane extends React.Component {
    render(): JSX.Element {
        return (
        <div className="w3-content" style={{maxWidth:'2000px',marginTop:'46px'}}>
            {/* <!-- Automatic Slideshow Images --> */}
            <WSlideShow slideItems={[
                {id: 0, title: "Los Angeles", description: "We had the best time playing at Venice Beach!", imgSrc: "https://www.w3schools.com/w3images/la.jpg"},
                {id: 1, title: "New York", description: "The atmosphere in New York is lorem ipsum.", imgSrc: "https://www.w3schools.com/w3images/ny.jpg"},
                {id: 2, title: "Chicago", description: "Thank you, Chicago - A night we won't forget.", imgSrc: "https://www.w3schools.com/w3images/chicago.jpg"}
            ]} />
            {/*<!-- The Band Section -->*/}
            <PictureMosaicPane />
            {/* <!-- The Tour Section --> */}
            <ToadsTracker toads={[
                {title: "New York", subtitle:"Fri 27 Nov 2016", src:"https://www.w3schools.com/w3images/newyork.jpg", onclick:() => {}, description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.", buttonName: "Buy Tickets"},
                {title: "Paris", subtitle:"Sat 28 Nov 2016", src:"https://www.w3schools.com/w3images/paris.jpg", onclick:() => {}, description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.", buttonName: "Buy Tickets"},
                {title: "San Francisco", subtitle:"Sun 29 Nov 2016", src:"https://www.w3schools.com/w3images/sanfran.jpg", onclick:() => {}, description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.", buttonName: "Buy Tickets"}
            ]} />
            {/* <!-- The Contact Section --> */}
            <WForm />
        </div>
        );
    }
}

export default SectionPane;