import React, { Component } from 'react'
import ItemImage from './ItemImage'
import PropTypes from 'prop-types';

class Items extends Component {
   
    render() {
        //Map the items as configured in ItemImage Component...
        return this.props.items.map((item) => (

            //...for each of the items
            <ItemImage 

            //in React you must provide a key for list items, we using thename of the item
            key={item.name} 

            item={item} 
            //the onClick method
            onClick={this.props.onClick}/>
            //on render, sort the items randomly
        )).sort((a, b) => {return 0.5 - Math.random()});
    }
}
//Proptypes ensure the data being recieved through props is valid(best practices)
Items.propTypes = {
    items: PropTypes.array.isRequired
}
export default Items
