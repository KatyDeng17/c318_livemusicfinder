import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
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
