import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
// import dummyData from '../../helper/dummydata';
// import axios from "axios";
import note from '../assets/images/note.png'



const Marker = ({ text }) => ( <div className="mapThing" style={{
                color: 'white', 
                padding: '10px 10px',
                display: 'inline-flex',     
                textAlign: 'top',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '100%',
                transform: 'translate(-50%, -50%)',
                text:'live event',
                
        }}>{ text }</div> 

);

class Map extends Component {
        // constructor(props){
        //         super(props);
        //         this.state = {
        //                 center: {
        //                         lat: 33.508914, 
        //                         lng: -86.79786
        //                 },
        //                 zoom: 13
        //         }
        // }
        
//   componentDidMount(){
//           this.getEventsFromDb();
//         }

//   getEventsFromDb(){
//         axios.get("/api/get-data").then(resp =>{
//           this.setState({

//           })
//         });

//         setTimeout(() => {
//                 const currentEvents = dummyDataCopy
//                 this.populateLocation(JSON.parse(JSON.stringify(currentEvents)));
//             }, 100)
//         }

// populateLocation(currentEvents){
//         this.setState({
//                 events: [...this.state.events, ...currentEvents]
//             });
// }

// showMoreEvents(){
//         if(this.state.events[0] == undefined){
//             console.warn('ask the database for more things')
//             return;
//         }
//         this.getEventsFromDb();
//     }


        render() {
                let { lat, lon } = this.props;
                lat = Number(lat);
                lon = Number(lon);

                return (
                        <div className="google-map-container">
                        <GoogleMapReact center={{lat, lng: lon}} zoom={13} bootstrapURLkeys={
                                {key:"AIzaSyCKGIiarpxkIzDG50MYFC87jLuJzP0nzLk"}} >
                                <Marker lat={ lat } lng={ lon } image={ note } />
                        </GoogleMapReact>
                </div>
                )
        }       
}

export default Map;
