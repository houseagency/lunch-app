import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import Restaurants from '../../Data/Restaurants.json';
import Categories from '../../Data/Categories.json';
import Button from '../Button/Button';

class Home extends Component {
    render() {
        const { choosenCat, data } = this.props;
        const allCategorieses = data.allCategorieses;

        if ( !allCategorieses ) {
            return false;
        }
        // console.log(data.allCategorieses);
        return (
            <div className="btn-container">	
            
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

// export default Home;
{/* btnIcon = { item.imgIcon } */}
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