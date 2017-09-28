import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
// import GoogleMapLoader from 'react-google-maps-loader';
// import iconMarker from './Logotypes/google_marker.png';
// import PropTypes from 'prop-types';

class Map extends Component {
    constructor() {
        super();
        this.state = {
            map: null,

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

    render() {
        const markers = this.props.markers || [];
        
        return(
            <GoogleMap 
                ref= { this.mapLoaded.bind(this) }
                onDragEnd = { this.mapMoved.bind(this) }
                defaultZoom = { this.props.zoom }
                defaultCenter = { this.props.position }
                markers = { this.props.position }>  

                {/* { markers.map((marker, index) => (
                    <Marker key= {index} { ...marker } />
                )) } */}
            </GoogleMap>
        )
    }
}

export default withGoogleMap(Map);