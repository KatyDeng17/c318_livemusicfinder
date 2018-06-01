import React, {Component} from 'react';
import Corgi from '../assets/images/404corgi.jpg';
import jazz404 from '../assets/images/concertImage1.jpg'
import CarouselInfo from './mainCarousel';


// this the carousel for the first page I dont know hwere to pass props between these two
class CarouselSlider extends Component{
    constructor(...props){
        super(...props);
        this.state = {
            // eventImages: [
            //     {event_image: "kjfdglsh"},
            //     {}
            // ]
            // eventImages: this.props.events.map( eventData => eventData.event_image===null ? 'default image' : eventData.event_image)
        };

        this.props.events.map( eventData => {
            if (eventData.event_image === "No Image"){
                eventData.event_image = "https://images.sk-static.com/images/media/profile_images/artists/465252/huge_avatar"
            }
        } )
    }

    componentDidMount() {
        $('#carousel').carousel({interval: 5000});
    }
    
    render(){
        // if (item.event_image !== "No Image") {
        //     return(
        //         <img src={this.props.events[0].event_image}/>
        //     )
        // } else {
        //     return(
        //         <img src={this.props.events[0].event_image}/>
        //     )
        // }
        // makeItems(events){
        //     return events.map( eventData, index) => {
        //         return (
        //             <div className="item" key={index}>
        //                 <img src={eventData.event_image}/>
        //                 <CarouselInfo current_event={eventData} />
        //             </div>
        //         )
        //     }
        // }
        return(
                <div className="row">
                    <div id="carousel" className="carousel slide col-xs-12" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel" data-slide-to="1"></li>
                            <li data-target="#carousel" data-slide-to="2"></li>
                            <li data-target="#carousel" data-slide-to="3"></li>
                            <li data-target="#carousel" data-slide-to="4"></li>
                            <li data-target="#carousel" data-slide-to="5"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                    
                               {/* <img src= {this.props.events.map( eventData => eventData.event_image} === "No Data"} ? {Jazz404} : {Jazz404}) /> */}
                               <img src={this.props.events[0].event_image}/>
                                {/* <CarouselInfo title={dummyData[3].title} venue_name={dummyData[3].venue_name} time={dummyData[3].start_time} /> */}
                                <CarouselInfo current_event={this.props.events[0]} />
                            </div>

                            <div className="item">
                                <img src={this.props.events[1].event_image}/>
                                <CarouselInfo current_event={this.props.events[1]} />
                            </div>
                        
                            <div className="item">
                            <img src={this.props.events[2].event_image}/>
                            <CarouselInfo current_event={this.props.events[2]} />
                                
                            </div>    

                            <div className="item">
                                <img src={this.props.events[3].event_image}/>
                                <CarouselInfo current_event={this.props.events[3]} />
                            </div>

                            <div className="item">
                                {/* <img src={dummyData[3].image.blackborder250.url}/> */}
                                <img src={this.props.events[4].event_image}/>
                                {/* <CarouselInfo title={dummyData[3].title} venue_name={dummyData[3].venue_name} time={dummyData[3].start_time} /> */}
                                <CarouselInfo current_event={this.props.events[4]} />
                            </div>
                        
                     </div>
                    
                           
                        </div>
                </div>
        )
    }
}

export default CarouselSlider;
