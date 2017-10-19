import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import Restaurants from '../../Data/Restaurants.json';
import Categories from '../../Data/Categories.json';
import Button from '../Button/Button';
import ToggleButton from '../Button/ToggleButton';

class Home extends Component {
    render() {
        const { choosenCat, data } = this.props;
        const { getCurrentPos } = this.props;
        const { handlePosToggle } = this.props;
        const { isLoadingPos } = this.props;
        const { isLocationBased } = this.props;
        const { disabled } = this.props;
        const allCategorieses = data.allCategorieses;

        // console.log(this.props.isLoading);
        
        if ( !allCategorieses ) {
            return false;
        }
        return (
            <div className="btn-container">	
                <ToggleButton 
                    onClick={ handlePosToggle }
                    isLocationBased={ isLocationBased }
                />
                {/* && is another a shorter way to make a if statement */}
                { this.props.isLoading &&
                    <div className='loading-container'>
                        <div className='loading-icon' ></div>
                        <p>Loading position...</p>
                    </div>
                }
                {/* FÖR ATT DÖLJA KNAPPARNA HELT WHEN LOADING!this.props.isLoading && */}
                {  allCategorieses.map((item, index) => {
                    return (
                        <Button 
                            key = { index } 
                            btnTxt = { item.catName } 
                            onClick={ () => choosenCat(item.id) }
                            catBtn = 'cat-btn'
                            btnIcon = { item.iconImg.url }
                            disabled={ this.props.isLoading }
                        />
                    )	
                })}	
            </div>
        );
    }
}

// Query to fetch the data you want from the json file
export default graphql(gql`
query {
	allCategorieses {
		id
        catName
        iconImg {
            url
        }
	}
}
`)(Home);