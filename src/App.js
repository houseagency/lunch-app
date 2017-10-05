import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import './index.css'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Pages/Home';
import Randomizer from './components/Pages/Randomizer';
import Info from './components/Pages/Info';
import Button from './components/Button/Button';
// import Restaurants from './Data/Restaurants.json';
// import Categories from './Data/Categories.json';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			selectedCategory: null,
			restaurantsList: [],
			selectedRestaurant: null
		}
		//To be able to re-use the methods you bind them to the component they are in
		this.onRestaurantSelected = this.onRestaurantSelected.bind(this);
		this.choosenCat = this.choosenCat.bind(this);
		this.showInfo = this.showInfo.bind(this);
		this.backToStart = this.backToStart.bind(this);
	}

	//Function called when user press a category button
	//Filter function that filter out the item you want from the array
	choosenCat (category) {
		this.setState({
			step: 2,
			restaurantsList: this.props.data.allRestaurantses.filter( (item) => { 
				
				return item.categoryId.some((cat) => { 
					return cat.id === category
				})
			})
		});
	}

	backToStart() { this.setState({ step: 1 }); }

	showInfo() { this.setState({ step: 3 }); }

	onRestaurantSelected( restaurant ) { 
		this.setState({ selectedRestaurant : restaurant });
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
					backToStart={ this.backToStart }
				/>
			)		
		} else if( this.state.step === 3 ) {
			return (
				<Info 
					selectedRestaurant={ this.state.selectedRestaurant }
					backToStart={ this.backToStart }
				/>
			)
		}
	}

		// fetchRestaurants(id) {
		// 	console.log(id);
		// 	const res = graphql(gql`
		// 	query {
		// 		allRestaurantses (
		// 		filter: {
		// 				categoryId_some: {
		// 			id: cat_id
		// 		  }
		// 		}
		// 	  ){
		// 			id
		// 			name
		// 			restImage {
		// 				fileName
		// 				handle
		// 				url
		// 				mimeType
		// 				size
		// 			}
		// 		}
		// 	}`)
		// 	console.log(res);
		// }

	render() {
		// console.log(this.props);
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