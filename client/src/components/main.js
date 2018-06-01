import React, { Component } from 'react';
import Event from './event_item';
import CarouselInfo from './mainCarousel';
import EventDetailsSecondPage from './event_details_info';
import Top from './top';
import Corgi from '../assets/images/404corgi.jpg';
import Jazz404 from '../assets/images/concertImage1.jpg';
import Footer from './footer';
import CarouselSlider from './carouselBootstrap';
import axios from "axios";


class Main extends Component {

    constructor (props){
        super(props);

        this.state = {
            counter: 0,
            events: []
        };

        this.showMoreEvents = this.showMoreEvents.bind(this);
        // this.cleanUpEvents = this.cleanUpEvents.bind(this);
        
    }
    
    componentDidMount(){
        this.getEventsFromDb();
    }
    componentWillReceiveProps(nextProps){
        var numberOfEvents = 5
        if(nextProps.events.length < 5){
            numberOfEvents = nextProps.events.length;
        } 
          
        const firstFiveEvents = nextProps.events.splice(0, numberOfEvents);
        this.populateEvents(JSON.parse(JSON.stringify(firstFiveEvents)));
    }

    async getEventsFromDb(){
        await axios.get("/api/data").then(resp =>{
            // this.populateEvents(resp.data);
            this.props.addEvents(resp.data);
        });

       
    }

 // showing all events
    populateEvents(currentEvents){
        this.setState({
            events: currentEvents
        },()=>console.log(this.state));
    }
        
// click the butten to show more events
    showMoreEvents(){
        const newCounter = this.state.counter++;
        this.setState({
            counter: newCounter
        });
        const eventNumber = 5 * this.state.counter;
        const nextFiveEvents = this.props.events.splice(eventNumber,5);
        this.setState({
            events: [...this.state.events, ...nextFiveEvents]
        });
    }

    render(){
        
        
        const { events, carouselEvents } = this.props;
        if (!events.length || !this.state.events.length) {

            console.log(`-------->>>>${events.length}h<<<------------`);
            // when events.length !=== 0
            return <div>Loading ...</div>
        } else {
            console.log('event in main',this.state.events);
            console.log('event in props', this.props.events);
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
                        <Event city={item.city} start_time={eventTime}  description={item.event_details} event_title={item.event_title} venue_name={item.venue_name} venue_address={item.venue_address} dayOfWeekRender={dayOfWeekRender} monthRender={monthRender} dayRender={dayRender} event_date={eventDate} image={item.event_image} key={index} latitude={item.latitude} longitude={item.longitude}/>
                    )
                } else {
                    return(
                        <Event city={item.city} start_time={eventTime} description={item.event_details} event_title={item.event_title} venue_name={item.venue_name} venue_address={item.venue_address} dayOfWeekRender={dayOfWeekRender} monthRender={monthRender} dayRender={dayRender} event_date={eventDate} image={Jazz404} key={index} latitude={item.latitude} longitude={item.longitude}/>
                    )
                }
                

    
            });

            const carouselMainInfo = carouselEvents.map((item, index) => {
                return (
                    <CarouselInfo start_time={item.event_start_time} event_title={item.title} venue_name={item.venue_name} venue_address={item.venue_address} latitude={item.latitude} longitude={item.longitude} key={index}/>
                )
            })

            // const top = events.map((item, index) => {
            //     return (
            //         // <Top key={index} city_name={item.city_name}  />
            //     )
            // });

            const displayButton = events.length> 5 ? <button className="show-more-button btn" onClick={this.showMoreEvents}>MORE EVENTS</button> : <span> </span>
           
            

            const topDisplay = this.props.searchQuery ? this.props.searchQuery : "Birmingham - Alabama";
            return (
               
                <div>
                  
                    <Top city_name={topDisplay} />
                    
                    <div className="container-fluid">
                        {/* <CarouselSlider events={carouselEvents}/> */}
                    </div>
             
                    {allEvents}
              
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-xs-12 text-center">
                    
                        {displayButton}
                        </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Main;