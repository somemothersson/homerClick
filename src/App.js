import React, { Component } from 'react';
import Items from "./components/Items"
import items from "../src/items.json"
import Header from "./components/Header"
import './App.css';



class App extends Component {
  state = {
    items,
    selected : [],
    score: 0,
    highScore: 0,
  }

  //The on click method add the id of the image chosen to a new array for comparison to original
  onClick = (id) => {

    //push the id to selected Array to add the item to the selected
    this.setState({ selected: [...this.state.selected, id]})
    console.log(this.state.selected)

    //If the Id of the Item mataches the random number...
    if(this.state.selected.includes(id)=== false){

      //...Update the score in state
      this.setState( {score: this.state.score + 1})

      //...if the current score "state.score" is greater than the current highScore...
    } else if (this.state.score > this.state.highScore) {

      //...Update the new high score
      this.setState( {highScore: this.state.score })

      //If the id "value" of the item does not match the randomNumber...
    } else {
      
      //run resetScore method to set score to 0 when no match
      this.reset()
    }
    //Very cool
    this.forceUpdate();
}
//method to reset score to 0
reset = () => {
  this.setState({score: 0})
  this.setState({selected: []})

}

  render() {
    
    return (
      <div className="App">
        
        <Header
        //We are going to pass state of our scores as props to the header that will update with state changes
        score={this.state.score}
        highScore={this.state.highScore}
        />
        <div className="container">
        <Items 
        //onclick method that originates from binding of props to the item Id in ItemImage
        onClick={this.onClick}
        //This is how we allow state to traverse into other components with props
        items={this.state.items}/>
        </div>
      </div>
    );
  }


}

export default App;
