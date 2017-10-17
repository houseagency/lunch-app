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
        const { isFiltering } = this.props ? 'block' : 'none';//FUNKAR EJ DISABLA KNAPPARNA SAMTIDIGT
        const allCategorieses = data.allCategorieses;

        if ( !allCategorieses ) {
            return false;
        }
        //TODO; If display load disable buttons..
        return (
            <div className="btn-container">	
                <ToggleButton 
                    onClick={ handlePosToggle }
                    isLocationBased={ isLocationBased }
                />
                {/* VISAS HELA TIDEN hela tiden */}
                {/* <div className='loading-icon' style={ {isFiltering} }></div> */}
                { allCategorieses.map((item, index) => {
                    return (
                        <Button 
                            key = { index } 
                            btnTxt = { item.catName } 
                            onClick={ () => choosenCat(item.id) }
                            catBtn = 'cat-btn'
                            btnIcon = { item.iconImg.url }
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