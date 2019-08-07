import React, { Component } from 'react'
import ItemImage from './ItemImage'
import PropTypes from 'prop-types';

class Items extends Component {
   
    render() {
    
        return this.props.items.map((item) => (
            <ItemImage 
            key={item.id} 
            item={item} 
            getId={this.props.getId}/>
        )).sort((a, b) => {return 0.5 - Math.random()});
    }
}

Items.propTypes = {
    items: PropTypes.array.isRequired
}
export default Items
