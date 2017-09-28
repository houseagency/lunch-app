import React, { Component } from 'react';
import Map from '../Map/Map';

class Info extends Component {
    render() {
        const { selectedRestaurant } = this.props;
        console.log(selectedRestaurant );

        // showMenu = () => {
        //     { selectedRestaurant.menu_link }
        // }
        return (
            <div className="info-container">
                {/* <div className='rest-img' 
                    style='background-image:url({ selectedRestaurant.cuisine })'>
                    { selectedRestaurant.img_url }
                </div> */}
                <img className='rest-img' src={ selectedRestaurant.img_url } />
                <div className='info'>
                    <h1>{ selectedRestaurant.name }</h1>
                    <p>
                        <i class="fa fa-map-marker" aria-hidden="true"></i> 
                        { selectedRestaurant.address }</p>
                    <p>Cuisine: { selectedRestaurant.cuisine } </p>
                    <p>Price range: { selectedRestaurant.price_range }</p>
                    <p>Rating: { selectedRestaurant.rating }</p>
                </div>
                <div className='section-divider'>
                    <div className='header-container'>
                        <h3>DETAILS</h3>
                    </div>
                </div>
                <div className='info'>

                    <p className='details' >
                    { selectedRestaurant.desc }
                    </p>
                    <a target='_blank' 
                        href={ selectedRestaurant.menu_link }>
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
                    zoom = {18}
                    containerElement ={
                        <div style ={{
                            height: 300, 
                            width:`100%`,
                            marginTop: 20
                        }} />
                    }
                    mapElement={<div style={{height:100+'%'}} />} 
                />
            </div>
        );
    }
}

export default Info;
