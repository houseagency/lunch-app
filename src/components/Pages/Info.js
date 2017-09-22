import React, { Component } from 'react';

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
                    <p>Cuisine: { selectedRestaurant.cuisine } </p>
                    <p>Price range: { selectedRestaurant.price_range }</p>
                    <p>Rating: { selectedRestaurant.rating }</p>
                    <p>Location: { selectedRestaurant.address }</p>
                    <a target='_blank'className="menu-link" 
                        href={ selectedRestaurant.menu_link }>
                        To the lunch menu
                    </a>
                </div>
                <div className='menu'>
                    <div className='menu-item-container'>
                        <h3>DETAILS</h3>
                    </div>
                </div>
                <div className='info'>

                    <p className='details' >Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Pretium viverra suspendisse potenti 
                        nullam. Sit amet nisl purus in mollis nunc sed. Viverra 
                        aliquet eget sit amet tellus.
                    </p>

                </div>
            </div>
        );
    }
}

export default Info;
