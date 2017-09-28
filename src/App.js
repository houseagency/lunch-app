import React, { Component } from 'react';
// import { Router, Route } from 'react-router';
// import createHistory from 'history/createBrowserHistory';

import './index.css'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Pages/Home';
import Randomizer from './components/Pages/Randomizer';
import Info from './components/Pages/Info';
import Button from './components/Button/Button';
import Restaurants from './Data/Restaurants.json';
import Categories from './Data/Categories.json';

class App extends Component {
	constructor() {
		super();
		this.state = {
			step: 1,
			selectedCategory: null,
			restaurantsList: [],
			selectedRestaurant: null
		}
		//To be able to re use the methods you bind them to the component they are in
		this.onRestaurantSelected = this.onRestaurantSelected.bind(this);
		this.choosenCat = this.choosenCat.bind(this);
		this.showInfo = this.showInfo.bind(this);
		this.backToStart = this.backToStart.bind(this);
	}

	//Funktion som kallas på när man klickat på en katergori-knapp
	//Filter function går igenom varje item i arrayen
	choosenCat (category) {
		this.setState({
			step: 2,
			restaurantsList: Restaurants.filter( (item) => { 
				return item.cat_id === category 
			})
		});
	}

	backToStart() {
		this.setState({
			step: 1
		});
	}

	showInfo() {
		this.setState({
			step: 3
		});
	}

	onRestaurantSelected( restaurant ) {
		this.setState({ 
			selectedRestaurant : restaurant 
		});
	}

	renderSteps(){
		if( this.state.step === 1 ) {
			return (
				<Home 
					choosenCat={ this.choosenCat }
				/>
			)
		} else if( this.state.step === 2 ) {
			return (
				<Randomizer 
					restaurantList={ this.state.restaurantsList }
					onRestaurantSelected={ this.onRestaurantSelected }
					showInfo={ this.showInfo }
				/>
			)		
		} else if( this.state.step === 3 ) {
			return (
				<Info 
					selectedRestaurant={this.state.selectedRestaurant}
					backToStart={ this.backToStart }
				/>
			)
		}
	}

	render() {
		return (
			<div className='wrapper'>
				<Header />	
				<main>		
					{ this.renderSteps() }
				</main>
				<Footer />
			</div>
		);
	}
}
export default App;
