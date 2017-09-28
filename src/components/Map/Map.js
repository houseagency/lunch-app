import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

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

    render() {
        return(
            <GoogleMap 
                ref= { this.mapLoaded.bind(this) }
                onDragEnd = { this.mapMoved.bind(this) }
                defaultZoom = { this.props.zoom }
                defaultCenter = { this.props.position }> 
                <Marker position= { this.props.position } />
            </GoogleMap>
        )
    }
}

export default withGoogleMap(Map);