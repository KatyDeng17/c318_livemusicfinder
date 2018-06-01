import React, { Component } from "react";
import { NavLink } from 'react-router-dom';




class EventDetailsTitle extends Component {
    constructor(props){
        super(props);
    }

    render(){
        // console.log("title?:", this.props);
        return(
            <div className="container-fluid">
                <div className="top-display-text title">
                <p>{this.props.event_title}</p>
                </div>
            <div className="row">
                <div className="col-xs-12 text-center home-icon">
                    {/* <NavLink to="/"><i className="fas fa-home fa-lg"></i></NavLink> */}
                </div>
                </div>
            </div>
        )
    }
}


export default EventDetailsTitle;