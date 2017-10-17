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
			currentPos: null,
			// timeStamp: null,
			currentPosTimeStamp: null,
			isLocationBased: false,
			isFiltering: false,
		}

		/* To be able to re-use the methods you bind them to the component 
		   SMART TIPS: MAke a init function for all bind values and yhen just 
		   call the init function value */
		this.onRestaurantSelected = this.onRestaurantSelected.bind(this);
		this.choosenCat = this.choosenCat.bind(this);
		this.showInfo = this.showInfo.bind(this);
		this.backToStart = this.backToStart.bind(this);
		this.getCurrentPos = this.getCurrentPos.bind(this);
		this.onCurrentPos = this.onCurrentPos.bind(this);
		this.filterOnCat = this.filterOnCat.bind(this);
		this.shouldPosBeUpdated = this.shouldPosBeUpdated.bind(this);
		this.filterOnLocation = this.filterOnLocation.bind(this);
		this.handlePosToggle = this.handlePosToggle.bind(this);
	}

	//Function called when user presses a category button
	choosenCat (category) {
		this.setState({
			isFiltering: true,
		});
		if ( this.state.isLocationBased ){
			this.filterOnCat(this.props.data.allRestaurantses, category).then((resturants) => {
				this.filterOnLocation(resturants).then((resturants) => {
					this.setState({
						step: 2,
						selectedCategory: category,
						restaurantsList: resturants,
						isFiltering: false,
						// shouldPosBeUpdated()
					});
					this.shouldPosBeUpdated();
				})
			})
		} else {
			this.filterOnCat(this.props.data.allRestaurantses, category).then((resturants) => {
				this.setState({
					step: 2,
					selectedCategory: category,
					restaurantsList: resturants,
					isFiltering: false,
				})
			})
		}
	}

	/* When this function is called set isLocationBased to false 
	   for it to reload so click button several times */
	backToStart() { this.setState({ step: 1  }); }

	showInfo() { this.setState({ step: 3 }); }

	onRestaurantSelected( restaurant ) {
		this.setState({ selectedRestaurant : restaurant });
	}
	//IF toggle btn is checked then get current position
	handlePosToggle(e) {
		this.setState({ isLocationBased: true });
		if ( e.target.checked ) { 
			this.getCurrentPos() 
		} else { 
			this.setState({ 
				currentPos: null, 
				isLocationBased: false 
			});
		}
	}

	shouldPosBeUpdated() {
		let currentTime = new Date();
		if (Math.floor((currentTime - this.state.currentPosTimeStamp)/60000) >= 1 ) {
			this.getCurrentPos();
			console.log('uppdaterar');
		} else {
			console.log('behåller gamla positionen');
		}
	}

	getCurrentPos() { 
		this.setState({ isLocationBased: true });
		if ( navigator.geolocation)  {
			navigator.geolocation.getCurrentPosition(
				this.onCurrentPos, function () {
			});

		} else {
			// Browser doesn't support Geolocation???!!!!
			this.setState({ currentPos: null, isLocationBased: false });
		}
	}

	onCurrentPos(position) {
		let timeStamp= new Date();
		this.setState({ 
			currentPos: {
				lat: position.coords.latitude,
				lng: position.coords.longitude 
			},
			currentPosTimeStamp: timeStamp
		});
		console.log('current time stamp' + this.state.currentPosTimeStamp);
	} 

	/* Filter function that filter the choosen category */
	filterOnCat(restaurantList, category) {
		return new Promise((resolve, reject) => {
			const newList = restaurantList.filter( (restaurant) => {
				return restaurant.categoryId.some((cat) => {
					return cat.id === category;
				});
			});
			resolve( newList );
		});
	}

	filterOnLocation(restaurantList) {
		return new Promise((resolve, reject) => {
			const geoList = restaurantList.filter( (restaurant) => {
				const restLongLat = new google.maps.LatLng({lat: restaurant.position.lat, lng: restaurant.position.lng});
				const myLongLat = new google.maps.LatLng({lat: this.state.currentPos.lat, lng: this.state.currentPos.lng});
					
				/* computeDistanceBetween = built in function in google maps
					that calculates the distance between two locations*/
				const distance = google.maps.geometry.spherical.computeDistanceBetween(
					restLongLat, 
					myLongLat
				);
				
				/* if distance is more then 500 m return return false 
					restaurant further away will not be added to array */
				if (distance < 500) {
					return restaurant
				}
				console.log(restaurant.name, distance);	
			});
			resolve( geoList );
		});
	}

	renderSteps() { 
		if ( this.state.step === 1 ) {
			return (
				<Home
					// Props sent to Home component 
					choosenCat={ this.choosenCat }
					isLocationBased={ this.state.isLocationBased }
					handlePosToggle= {this.handlePosToggle}
				/>
			)
		} else if ( this.state.step === 2 ) {
			return (
				<Randomizer
					// Props sent to Randomizer component
					restaurantList={ this.state.restaurantsList }
					onRestaurantSelected={ this.onRestaurantSelected }
					showInfo={ this.showInfo }
					currentPos={ this.state.currentPos }
					backToStart={ this.backToStart }
				/>
			)
		} else if ( this.state.step === 3 ) {
			return (
				<Info
					// Props sent to Info page component
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
// Query that fetches the data from the CMS
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
