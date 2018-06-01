import React, { Component } from 'react';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
// this is the carousel for the first page
class CarouselInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateObject = Date.parse(this.props.current_event.event_date);
    const date = new Date(dateObject);
    const dayOfWeek = dayArray[date.getDay()];
    const month = monthsArray[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const monthRender= `${month}`;
    const dayRender= `${day}`;
    const yearRender= `${year}`;
    const dayOfWeekRender=`${dayOfWeek}`
    const eventDate = `${dayOfWeek}, ${month} ${day}`;
    const time = date.toLocaleTimeString();
    const timeString= time.toString();
    const timeStringMinusThreeCharacters= timeString.slice(0,-3);
    const EventTime= parseInt(timeStringMinusThreeCharacters);
        return (       

        
                    <div className="carousel-info carousel-caption">
                        <div className="caption-left">
                            <p className="artist-title">{this.props.current_event.event_title}</p>
                            <p className="time">{EventTime} PM</p>
                            <p className="venue">{this.props.current_event.venue_name}</p>
                        </div>
                        <div className="caption-right">
                            <div className="day-row"><p className="carousel-day">{dayOfWeekRender}</p></div>
                            <div className="month-date">
                            <p className="carousel-month">{monthRender}</p>
                            <p className="carousel-day"> {dayRender}</p>
                          
                        </div>
                            {/* <div className="col-xs-6 text-center carousel-date-info"> */}
                            {/* <div className="day-row"><p className="carousel-day">{dayRender} </p></div> */}
                            {/* <div className="day-row"><p className="carousel-day">{dayRender}</p></div>
                            <div className="month-date"> */}
                            {/* <div className="inter-box"><p className="carousel-month">{monthRender}</p></div> */}
                            {/* <p className="carousel-month">{monthRender}</p> */}
                            {/* <div className="inter-box"><p className="carousel-year">{yearRender}</p></div> */}
                            {/* <p className="carousel-year">{yearRender}</p> */}
                        </div>
                    </div>
              
        )
    }
}



export default CarouselInfo;