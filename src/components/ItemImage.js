import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemImage extends Component {
    
    render() {
        //
        const{id, image, name} = this.props.item;
        return (
            
               <button><img 
               //apply inline style
               style={styles} 

               src={image} 
               alt={name}
               //onClick Event we are binding and passing the id to the onClick method in App.js
               onClick={this.props.onClick.bind(this, id)}
               />
               </button>
            
        )
    }
}

//Proptypes ensure the data being recieved through props is valid(best practices)
ItemImage.propTypes = {
    item: PropTypes.object.isRequired
}
//styles in jsx
const styles = {
        //change the cursor to pointer for UI
        height: 190,
        width: 140,
        cursor: 'pointer',
        padding: "5px"
    }
 

export default ItemImage
