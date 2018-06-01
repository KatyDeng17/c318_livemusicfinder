import React from 'react';
import { NavLink } from 'react-router-dom';
import EventTitle from './event_details_title';
import AboutSection from './about_event_section';
import SocialMedia from './event_socialmedia';
import AboutEvent from './about_event_section';
// import Youtube from './youtube_artist';
import Map from './google_maps';
import Event from "./event_item";
import Footer from './footer';
import EventDetailsSecondPage from './event_details_info';
import Corgi from '../assets/images/404corgi.jpg';
import Carousel from './sliderCarousel';
// import Slider from './slider';
import VideoDetail from './video_detail'

// const API_KEY= 'AIzaSyCKGIiarpxkIzDG50MYFC87jLuJzP0nzLk';  //google maps API

export default props =>{
        return(
            <div>
                <EventTitle title={dummyData[0].title}/> 
                <EventDetailsSecondPage  event_title={this.props.event_details}  image={dummyData[1].image.blackborder250.url} venue_name={dummyData[0].venue_name} start_time={dummyData[0].start_time} />,
                {/* <Youtube/> */}
                <AboutEvent description ={dummyData[3].description}/>
                <Map long={dummyData[0].longitude}/>
                <Carousel title={dummyData[0].title} address={dummyData[1].venue_address} image={dummyData[1].image.blackborder250.url} venue_name={dummyData[0].venue_name} time={dummyData[0].start_time}/>
                {/* <VideoDetail video={ video } /> */}
                {/* <AboutEvent/> */}
            </div>
        )
    }

