import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Pages/Home';
import Randomizer from './components/Pages/Randomizer';
import Info from './components/Pages/Info';
import Button from './components/Button/Button';
import './index.css'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			selectedCategory: null,
			restaurantsList: [],
			selectedRestaurant: null,
			currentPos: null
		}
		//To be able to re-use the methods you bind them to the component they are in
		this.onRestaurantSelected = this.onRestaurantSelected.bind(this);
		this.choosenCat = this.choosenCat.bind(this);
		this.showInfo = this.showInfo.bind(this);
		this.backToStart = this.backToStart.bind(this);
		this.getCurrentPos = this.getCurrentPos.bind(this);
		this.onCurrentPos = this.onCurrentPos.bind(this);
	}

	//Function called when user press a category button
	//Filter function that filter out the item you want from the array
	choosenCat (category) {
		this.setState({
			step: 2,
			selectedCategory: category,
			restaurantsList: this.props.data.allRestaurantses
		});
	}

	backToStart() { this.setState({ step: 1 }); }

	showInfo() { this.setState({ step: 3 }); }

	onRestaurantSelected( restaurant ) {
		this.setState({ selectedRestaurant : restaurant });
	}

	onCurrentPos(position) {
		this.setState({ currentPos: {
			lat: position.coords.latitude,
			lng: position.coords.longitude }
		});
		// console.log(position);
	}

	getCurrentPos(e) { 
		if ( e.target.checked ) {
			if ( navigator.geolocation)  {
				//GLOBAL eller inte varför ytterligare en funktion för att setState?
				navigator.geolocation.getCurrentPosition(
					this.onCurrentPos, function() {
					// handleLocationError(true, infoWindow, map.getCenter());
					// console.log('Error');
				});

			} else {
				// // Browser doesn't support Geolocation
				// handleLocationError(false, infoWindow, map.getCenter());
				this.setState({ currentPos: null });
				// console.log('Error');
			}

		} else {
			this.setState({ currentPos: null });
		}
	}

	filterRestaurants(restaurants) {
		return restaurants
						.filter( (restaurant) => {
							return restaurant.categoryId.some((cat) => {
								return cat.id === this.state.selectedCategory;
							})
						})
						.filter( (restaurant) => {
							if (this.state.currentPos) { 
								const restLongLat = new google.maps.LatLng({lat: restaurant.position.lat, lng: restaurant.position.lng});
								const myLongLat = new google.maps.LatLng({lat: this.state.currentPos.lat, lng: this.state.currentPos.lng});
									
								//computeDistanceBetween = built in function in google maps
								//that calculates the distance between two locations
								const distance = google.maps.geometry.spherical.computeDistanceBetween(
									restLongLat, 
									myLongLat
								);
								
								// Add distance here
								// if restaurant is == to true return true
								// otherwise is it false
								
								// if (distance < 1000) {
								// 	return restaurantList.filter(restaurant);

								// } else { 
								// 	return false;
								// }

								console.log(restaurant.name, distance);

							}	
							return true;
						})
	}

	renderSteps(){ 
		if ( this.state.step === 1 ) {
			return (
				<Home
					choosenCat={ this.choosenCat }
					getCurrentPos={ this.getCurrentPos }
				/>
			)
		} else if ( this.state.step === 2 ) {
			return (
				<Randomizer
					restaurantList={ this.filterRestaurants(this.state.restaurantsList) }
					onRestaurantSelected={ this.onRestaurantSelected }
					showInfo={ this.showInfo }
					backToStart={ this.backToStart }
				/>
			)
		} else if ( this.state.step === 3 ) {
			return (
				<Info
					selectedRestaurant={ this.state.selectedRestaurant }
					backToStart={ this.backToStart }
					currentPos={ this.state.currentPos }
				/>
			)
		}
	}

	render() {
		return (
			<div className='wrapper'>
				<Header backToStart={ this.backToStart }/>
				<main>
					{ this.renderSteps() }
				</main>
				<Footer />
			</div>
		);
	}
}
export default graphql(gql`
query {
	allRestaurantses {
		id
		name
		categoryId { id }
		phoneNumber
		address
		menuLink
		cuisine
		rating
		priceRange
		restImage { url }
		desc
		position
	}
}
`)(App);
