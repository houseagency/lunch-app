import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import MarkerIcon from '../../Logotypes/MarkerIcon.svg';
import GoogleMapLoader from "react-google-maps-loader";

class Map extends Component {
    constructor() {
        super();
        this.state = {
            map: null,
            markers: [],
        }
    }

    mapLoaded(map) {
        if (this.state.map != null) {
            return 

        } else {
            this.setState ({
                map: map
            })            
        }
    }
 
    // Here you render out the Map, and Marker on page
    render() {
        console.log('current',this.props.currentPos );
        return(
            <GoogleMap 
                ref= { this.mapLoaded.bind(this) }
                defaultZoom = { this.props.zoom }
                defaultCenter = { this.props.currentPos }> 
                <Marker 
                    name= { 'you are here' }
                    position= { this.props.currentPos }
                /> 
                <Marker className='marker' 
                    name = { this.props.name }
                    position= { this.props.position }               
                    icon={{ 
                        url: MarkerIcon,
                        scaledSize: new google.maps.Size(50,70),
                    }}
                />
            </GoogleMap>
        )       
    }
}

export default withGoogleMap(Map);

// TODO: Animation on marker is not working
// animation: google.maps.Animation.BOUNCE 
// TODO: rendrera ut current position från Geo.js
// TODO: lägg till center på currentPos ist defaultCenter = { this.props.currentPos }
// TODO: vid utzoomning hänger inte markören med
// TODO: Lägg till info window 