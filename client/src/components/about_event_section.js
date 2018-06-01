import React, { Component } from 'react';



class AboutEvent extends Component {

    constructor(props){
        super(props);

        this.state = {
            description: []
        };
    }

    render() {
        const eventDetails=this.props
        const comingSoon="details coming soon.."
        // console.log("eventDetails:", comingSoon);
    
        if( this.props.description === "No data" || this.props.description === " br "){
            return(
                <div className="comingSoon">
                <p>{comingSoon}</p>
                </div>
            )
        }
            
        
    

        
        
        // console.log("this is the description:",this.props)
    return (
<div>
    <div className="container-fluid">
        <div className="row about-event-display-text">
            <div className="col-xs-12 text-center">
                <p>ABOUT THIS EVENT</p>
            </div>
        </div>
    </div>
    <div className="row">
    <div className="col-xs-12">
        <p>{this.props.description}
        </p>
    </div>
    </div>
</div>

        );
    }
}

export default AboutEvent;