import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import EventTitle from './event_details_title';
import AboutSection from './about_event_section';
import SocialMedia from './event_socialmedia';
import AboutEvent from './about_event_section';
import Youtube from './youtube_artist';
import Event from "./event_item";
import Footer from './footer';
import EventDetailsSecondPage from './event_details_info';
import dummyData from '../../helper/dummydata';
import Corgi from '../assets/images/404corgi.jpg';
import Map from './google_maps';
import SecondPageSliderCarousel from './sliderCarousel';

class Modal extends Component {

    constructor (props){
        super(props);
    

    // this.handleCloseModalClick= this.handleCloseModalClick.bind(this)

    }

    // handleCloseModalClick(){
    //     console.log("I'm supposed to close!")
    //     this.setState({
    //         display: "none"
    //     })
    // }

        render(){
        console.log("This is modal props: ", this.props);
       

        
        return(
            <div className="modal" style={{display: this.props.showOrHide}}>
                <div className="modal-content">
                    <div className="close" onClick={this.props.closemodal}>
                            X
                    </div>
                    <div>
                    <EventTitle title={this.props.event_title}/> 
                    <EventDetailsSecondPage event_date={this.props.event_date} title={this.props.title} venue_address={this.props.venue_address} event_image={this.props.event_image} venue_name={this.props.venue_name} time={this.props.start_time} />
                    </div>
                    <Youtube/>
                    <AboutEvent description ={this.props.description}/>
                    <Map lat={this.props.lat} lon={this.props.lon} />
                    <SecondPageSliderCarousel title={this.props.title} venue_address={this.props.venue_address} image={this.props.event_image} venue_name={this.props.venue_name} time={this.props.start_time}/>
                    
                        <button className="text-center close-button btn" onClick={this.props.closemodal}>CLOSE</button>
                
    
                </div>
            </div>

        )
    }
}

export default Modal;