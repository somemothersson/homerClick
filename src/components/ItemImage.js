import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemImage extends Component {
    getId(e) {
        console.log(this.props.item.id)
    }
    
    render() {
        const{id, image, name} = this.props.item;
        return (
            
               <button><img 
               style={styles} 
               src={image} 
               alt={name}
               onClick={this.props.getId.bind(this, id)}
               />
               </button>
            
        )
    }
}
ItemImage.propTypes = {
    item: PropTypes.object.isRequired
}
const styles = {
        position: "relative",
        // padding: "1em",
        transition: "all ease .5s",
        cursor: 'pointer'
    }
 

export default ItemImage
