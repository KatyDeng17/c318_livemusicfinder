import React, { Component } from 'react';
import Event from './event_item';
import dummyData from '../../helper/dummydata';
// import Test from '../../helper/test';
import CarouselInfo from './mainCarousel';
import EventDetailsSecondPage from './event_details_info';
import Top from './top';
import Corgi from '../assets/images/404corgi.jpg';
import Jazz404 from '../assets/images/concertImage1.jpg';
import Footer from './footer';
import CarouselSlider from './carouselBootstrap';
// import carousel from './carouselSlider';
import axios from "axios";

// const dummyDataCopy = getData.slice();
const dummyDataCopy = dummyData.slice();

class Main extends Component {

    constructor (props){
        super(props);

        this.state = {
            events: []
        };

        this.showMoreEvents = this.showMoreEvents.bind(this)
    }
    
    componentDidMount(){
        this.getEventsFromDb();
    }

    getEventsFromDb(){
        axios.get("/api/data").then(resp =>{
            this.populateEvents(resp.data);
            
        });

        // setTimeout(() => {
        //     const currentEvents = dummyDataCopy.splice(0, 5);
        //     debugger;
        //     this.populateEvents(JSON.parse(JSON.stringify(currentEvents)));
        // }, 100)
    }

    populateEvents(currentEvents){
        this.setState({
            events: [...this.state.events, ...currentEvents]
        });
    }
        

    showMoreEvents(){
        if(this.state.events[0] == undefined){
            console.warn('ask the database for more things')
            return;
        }
        this.getEventsFromDb();
    }

    render(){
        
        
        const { events } = this.state;

        if (!events.length) {
            return <div>Loading ...</div>
        } else {
            const allEvents = this.state.events.map((item, index) => {
                const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
                const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

                const dateObject = Date.parse(item.event_date);
                const date = new Date(dateObject);
                const dayOfWeek = dayArray[date.getDay()];
                const month = monthsArray[date.getMonth()];
                const day = date.getDate();
                const year = date.getFullYear();
                const monthRender= `${month}`;
                const dayRender= `${day}`;
                const yearRender= `${year}`;
                const dayOfWeekRender=`${dayOfWeek}`;
                const eventDate = `${dayOfWeek}, ${month} ${day}`;
                const time = date.toLocaleTimeString();
                const timeString= time.toString();
                const timeStringMinusThreeCharacters= timeString.slice(0,-3);
                const eventTime= parseInt(timeStringMinusThreeCharacters);
                
                
                if (item.event_image !== "No Image") {
                    return(
                        <Event city={item.city} start_time={eventTime}  description={item.event_details} title={item.event_title} venue_name={item.venue_name} venue_address={item.venue_address} dayOfWeekRender={dayOfWeekRender} monthRender={monthRender} dayRender={dayRender} event_date={eventDate} image={item.event_image} key={index} latitude={item.latitude} longitude={item.longitude}/>
                    )
                } else {
                    return(
                        <Event city={item.city} start_time={eventTime} description={item.event_details} title={item.event_title} venue_name={item.venue_name} venue_address={item.venue_address} dayOfWeekRender={dayOfWeekRender} monthRender={monthRender} dayRender={dayRender} event_date={eventDate} image={Jazz404} key={index} latitude={item.latitude} longitude={item.longitude}/>
                    )
                }
                

    
            });

            const carouselMainInfo = this.state.events.map((item, index) => {
                return (
                    <CarouselInfo start_time={item.event_start_time} event_title={item.event_title} venue_name={item.venue_name} venue_address={item.venue_address} latitude={item.latitude} longitude={item.longitude} key={index}/>
                )
            })

            const top = this.state.events.map((item, index) => {
                return (
                    <Top key={index} city_name={item.city} />
                )
            });

            
            return (
               
                <div>
                    {/* <Carousel/> */}
                    <Top city_name={this.props.city_name} />
                    <div className="container-fluid">
                        <CarouselSlider events={events}/>
                    </div>
                    {/* <CarouselInfo title={dummyData[0].title} image={dummyData[1].image.blackborder250.url} venue_name={dummyData[0].venue_name} time={dummyData[0].start_time} /> */}
                    {/* {carouselMainInfo}  << TO POPULATE NON HARD CODED */}
                    {allEvents}
                    {/* <Event title={dummyData[1].title} image={dummyData[1].image.blackborder250.url}/><< HARD CODED EVENT */}
                    {/* <ShowMoreButton/> */}
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-xs-12 text-center">
                            <button className="show-more-button btn" onClick={this.showMoreEvents}>MORE EVENTS</button>
                        </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Main;