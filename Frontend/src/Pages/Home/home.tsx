import React from 'react';
import SectionPane from '../../Components/Sections/SectionPane';
import WSlideShow from '../../Components/SlideShows/WSlideShow';
import PictureMosaicPane from '../../Components/Sections/PictureMosaic';
import ToadsTracker from '../../Components/Sections/ToadsTracker';
import WForm from '../../Components/Controls/WForm/WForm';
import WModal from '../../Components/Controls/WModal/WModal';
import SharedControls from '../../Shared/SharedControls';

let modal: WModal;

const Home: React.FC = () => {
    return (
        <SharedControls.Consumer>
            {controls => {
                if (controls.modal) modal = controls.modal;
                return (
                    <SectionPane>
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
                                {title: "New York", subtitle:"Fri 27 Nov 2016", src:"https://www.w3schools.com/w3images/newyork.jpg", 
                                onclick:() => {
                                    if (modal) modal.show();
                                }, description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.", buttonName: "Buy Tickets"},
    
                                {title: "Paris", subtitle:"Sat 28 Nov 2016", src:"https://www.w3schools.com/w3images/paris.jpg", 
                                onclick:() => {
                                    if (modal) modal.show();
                                }, description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.", buttonName: "Buy Tickets"},
    
                                {title: "San Francisco", subtitle:"Sun 29 Nov 2016", src:"https://www.w3schools.com/w3images/sanfran.jpg", 
                                onclick:() => {
                                    if (modal) modal.show();
                                }, description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.", buttonName: "Buy Tickets"}
                            ]} />
                            {/* <!-- The Contact Section --> */}
                            <WForm />
                    </SectionPane>
                )
            }}
        </SharedControls.Consumer>
    );
}

export default Home;