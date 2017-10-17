import React, { Component } from 'react';
import Button from '../Button/Button';
import { TweenMax, TweenLite } from 'greensock';
// import CustomEase from '../../vendor/CustomEase';
import { gql, graphql } from 'react-apollo';

class Randomizer extends Component {
    slotHeight = 99;
    selectedRestaurant;

    constructor(props) {
        super(props);
        this.spin = this.spin.bind(this);
        this.moveSpinnerOneStep = this.moveSpinnerOneStep.bind(this);
        this.stopSpinner = this.stopSpinner.bind(this);
        this.fetchLink = this.fetchLink.bind(this);
        this.isSpinning = false;
    }

    /* Spin that randomizes the value and sets the variables and calls the
       moveSpinner method */
    spin() {
        this.isSpinning = true;
        const restList = this.props.restaurantList;
        const randomRestIndex = Math.floor( Math.random() * restList.length );
        this.selectedRestaurant = restList[ randomRestIndex ];
        this.moveSpinnerOneStep( 1, randomRestIndex === 0 ? restList.length : randomRestIndex, 6);
        console.log('Randomizer.spin', randomRestIndex);
    }

    moveSpinnerOneStep( nextStep, selectedRestaurantIndex, fullSpins ) {
        TweenMax.killTweensOf(this.refs.slots);

        /* If next step is equal to the restaurantsLenght +1
           The spinns left decreases with one (starting from 6) */
        if( nextStep === this.props.restaurantList.length + 1 ) {
            nextStep = 1;
            TweenMax.set( this.refs.slots, { y : 0 } );
            fullSpins--;
        }

        /* If it the spins that are left is less or equal to zero, and steps
           to go to equals the selected restaurant index the the stopSpinner
           method is called */
        if( fullSpins <= 0 && nextStep === selectedRestaurantIndex ) {
            this.stopSpinner( nextStep );

        } else {
            if(this.refs.slots) {
                TweenMax.to( this.refs.slots, 0.1, {
                    y: -nextStep * this.slotHeight,
                    ease: Linear.easeNone,
                    onComplete: () => {
                        this.moveSpinnerOneStep(
                            nextStep + 1, selectedRestaurantIndex, fullSpins );
                    }
                });    
            }  
        }
    }

    /* Method that stops the spinner and send the selected restaurant as props??
       to the onRestaurantSelected in App component */
    stopSpinner( nextStep ) {
        this.props.onRestaurantSelected( this.selectedRestaurant );

        TweenMax.to( this.refs.slots, 2.5, {
            y: -nextStep * this.slotHeight,
            ease: Bounce.easeOut,
            onComplete: () => { this.fetchLink(); }
        });
    }

    /* Function that runs after spinner animation is finnished
       TODO: Ease in on link */
    fetchLink = () => {
        this.isSpinning = false;
        document.querySelector('.info-link').style.display = 'block';
    }

    /* From start when this component is called run this lifecycle method
       set the isLocationBase in componentDidMount, instead of currPos that we 
       had before setting the new value isLocationBased */
    componentDidMount() {
        this.spin();
    }

    /* When ...the lifecycle method will end all animations so they do not run
       in the background */
    componentWillUnmount() {
        TweenMax.killTweensOf( this.refs.slots );
    }

    render() {
        const { restaurantList, data, currentPos } = this.props;
        console.log("restList", restaurantList);

        const restaurants = [ ...restaurantList, restaurantList[0] ].map((restaurant, index ) => {
            return (
                <div key={index} className='restaurant-container'>
                    <p className='spinner-txt' >{restaurant.name}</p>
                </div>
            )
        });

        return (
                <div className='randomizer-container'> 
                    <div className='slot-machine'>
                        <div ref='slots' className='slot-container'>
                            {restaurants}
                        </div>
                    </div>
                    <a className="info-link" href='#'ref='link' onClick={ () => this.props.showInfo() } >
                        MORE INFO
                    </a>
                    <a href='#'ref='link' onClick={ () => this.props.backToStart() } >
                        BACK TO START
                    </a>
                </div>
              );
    }
}

export default Randomizer;
