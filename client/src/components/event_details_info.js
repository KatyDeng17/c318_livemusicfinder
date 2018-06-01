import React, { Component } from 'react';

class EventDetailsSecondPage extends Component {
    constructor(props){
        super(props);
    }

        render(){
            console.log("this is the event image:",this.props);



            return(
                <div className="row main-event-display-container">
                   
                        <div className="col-xs-6 main-event-image-container">
                        <img src={this.props.event_image} />
                        </div>
                        <div className="col-xs-6 text-left main-event-info-container">
                            <div className="inner-info-container">
                                <div className="date">Date: {this.props.event_date}</div>
                                <div className="time">Time: {this.props.event_time} PM</div>
                                <div className="address">Address: {this.props.venue_name}</div>
                                <div className="address-info">{this.props.venue_address}</div>
                            </div>
                        </div>
                    
                </div>
            )
        }
    }

    export default EventDetailsSecondPage;