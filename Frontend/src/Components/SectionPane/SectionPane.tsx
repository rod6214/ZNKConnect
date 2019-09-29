import React from 'react';
import WSlideShow from '../SlideShows/WSlideShow';

class SectionPane extends React.Component {
    render(): JSX.Element {
        return (
        // <!-- Page content -->
        <div className="w3-content" style={{maxWidth:'2000px',marginTop:'46px'}}>
            <WSlideShow slideItems={[
                {id: 0, title: "Los Angeles", description: "We had the best time playing at Venice Beach!", imgSrc: "https://www.w3schools.com/w3images/la.jpg"},
                {id: 1, title: "New York", description: "The atmosphere in New York is lorem ipsum.", imgSrc: "https://www.w3schools.com/w3images/ny.jpg"},
                {id: 2, title: "Chicago", description: "Thank you, Chicago - A night we won't forget.", imgSrc: "https://www.w3schools.com/w3images/chicago.jpg"}
            ]} />
        {/* <!-- End Page Content --> */}
        </div>
        );
    }
}

export default SectionPane;