import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MarkerIcon from '../../Logotypes/MarkerIcon.svg';
import GoogleMapLoader from "react-google-maps-loader";

class Map extends Component {
    constructor() {
        super();
        this.state = {
            map: null,
            markers: [],
            currentPos: {}
        }
        this.getCurrentPos = this.getCurrentPos.bind(this);
    }
    
    // mapMoved() {
    //     console.log('mapMoved: ' + JSON.stringify(this.state.map.getCenter()))
    // }
    // onDragEnd = { this.mapMoved.bind(this) }
    
    componentDidMount() {
        this.getCurrentPos()
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

    getCurrentPos() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                let pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                
                // infoWindow.setPosition(pos);
                // infoWindow.setContent('Location found.');
                // infoWindow.open(map);
                // map.setCenter(pos);
                
                // this.setState({ currentPos: pos })
                console.log(pos);
            }, function() {
            // handleLocationError(true, infoWindow, map.getCenter());
                console.log("Error");
            });

        } else {
            // // Browser doesn't support Geolocation
            // handleLocationError(false, infoWindow, map.getCenter());
            console.log("Error");
        }
    }

    
        
    // Here you render out the Map, and Marker on page
    render() {
        return(
            <GoogleMap 
                ref= { this.mapLoaded.bind(this) }
                defaultZoom = { this.props.zoom }
                defaultCenter = { this.props.position }> 

                <Marker className='marker' position= { this.props.position }               
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