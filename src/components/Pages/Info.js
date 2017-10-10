import React, { Component } from 'react';
import Map from '../Map/Map';

class Info extends Component {
    render() {
        const { selectedRestaurant } = this.props;
        return (
            <div className="info-container">
                <img className='rest-img' src={ selectedRestaurant.restImage.url } />
                <div className='info'>
                    <h1>{ selectedRestaurant.name }</h1>
                    <div className='address-container'>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <p> { selectedRestaurant.address }</p>
                    </div>
                    <p>Cuisine: { selectedRestaurant.cuisine } </p>
                    <p>Price range: { selectedRestaurant.priceRange }</p>
                    <p>Rating: { selectedRestaurant.rating }</p>
                </div>
                <div className='section-divider'>
                    <div className='header-container'>
                        <h3>DETAILS</h3>
                    </div>
                </div>
                <div className='info'>

                    <p className='details'> { selectedRestaurant.desc } </p>
                    <a target='_blank' 
                        href={ selectedRestaurant.menuLink }>
                        To the lunch menu
                    </a>
                    
                </div>
                <div className='section-divider'>
                    <div className='header-container'>
                        <h3>LOCATION</h3>
                    </div>
                </div>
                <Map 
                    position = { selectedRestaurant.position }
                    zoom = { 18 }
                    containerElement ={
                        <div style ={{
                            height: 300, 
                            width:`100%`,
                            marginTop: 20
                        }} />
                    }
                    mapElement={<div style={{height:100+'%'}} />} 
                />

                <a className="moreInfo-link" href='#'ref='link' onClick={ () => this.props.backToStart() } >
                    BACK TO START
                </a>
            </div>
        );
    }
}

export default Info;
