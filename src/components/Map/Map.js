import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MarkerIcon from '../../Logotypes/MarkerIcon.svg';

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
                <Marker position= { this.props.position } 
                    icon={{ 
                        url: MarkerIcon,
                        /*anchor: new google.maps.Point(32,32),*/
                        scaledSize: new google.maps.Size(55,63),
                        move: 'bounce'
                        
                    }}
                />
            </GoogleMap>

            
        )
        
    }
}

export default withGoogleMap(Map);