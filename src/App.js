import React, { Component } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
// import Items from "./components/Items";
import items from "../src/items.json";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = {
    items,
    selected: [],
    score: 0,
    highScore: 0
  };

  //The on click method add the id of the image chosen to a new array for comparison to original
  onClick = id => {
    //push the id to selected Array to add the item to the selected
    this.setState({ selected: [...this.state.selected, id] });
    console.log(this.state.selected);

    //If the Id of the selected item has not been chosen previously, the array done not include the id
    if (this.state.selected.includes(id) === false) {
      //...Update the score in state
      this.setState({ score: this.state.score + 1 });

      //...if the current score "state.score" is greater than the current highScore...
    } else if (this.state.score > this.state.highScore) {
      //...Update the new high score
      this.setState({ highScore: this.state.score });

      //If the id "value" of the item does match a previously selected image
    } else {
      //run resetScore method to set score to 0 when no match
      this.reset();
    }
    //Very cool and easy way to re-render
    this.forceUpdate();
  };
  //method to reset score to 0 and empty selected array
  reset = () => {
    this.setState({ score: 0 });
    this.setState({ selected: [] });
  };

  render() {
    const tiles = items
      .map(it => (
        <button>
          <img
            key={it.name}
            src={it.image}
            alt={it.name}
            //onClick Event we are binding and passing the id to the onClick method in App.js
            onClick={this.onClick}
          />
        </button>
      ))
      .sort((a, b) => {
        return 0.5 - Math.random();
      });

    return (
      <div className='App'>
        <Header
          //We are going to pass state of our scores as props to the header that will update with state changes
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <div className='container'>
          {tiles}
          {/* <Items
            //onclick method that originates from binding of props to the item Id in ItemImage
            onClick={this.onClick}
            //This is how we allow state to traverse into other components with props
            items={this.state.items}
          /> */}
        </div>
      </div>
    );
  }
}

export default App;
