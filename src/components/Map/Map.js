import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MarkerIcon from '../../Logotypes/MarkerIcon.svg';
import GoogleMapLoader from "react-google-maps-loader";

class Map extends Component {
    constructor() {
        super();
        this.state = {
            map: null,
            markers: []
            
        }
    }
    

    mapMoved() {
        console.log('mapMoved: ' + JSON.stringify(this.state.map.getCenter()))
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
        
        
        return(
            
            <GoogleMap 
                ref= { this.mapLoaded.bind(this) }
                onDragEnd = { this.mapMoved.bind(this) }
                defaultZoom = { this.props.zoom }
                defaultCenter = { this.props.position }> 

                <Marker className='marker' position= { this.props.position }               
                    icon={{ 
                        url: MarkerIcon,
                        scaledSize: new google.maps.Size(50,70),
                        animation: google.maps.Animation.BOUNCE
                                               
                    }}
                />
            </GoogleMap>
            

            
        )
        
    }
}

export default withGoogleMap(Map);