import React, { Component } from 'react';
import Items from "./components/Items"
import items from "../src/items.json"
import Header from "./components/Header"
import './App.css';



class App extends Component {
  state = {
    items,
    score: 0,
    highScore: 0,
  }
  getId = (id) => {
    let randomNumber = Math.floor(Math.random() *9 ) +1;
    if(id === randomNumber){
      this.setState( {score: this.state.score + 1})
      console.log(this.state.score)
    } else {
      console.log("loss")
    }
}

  render() {
    console.log(this.state.items)
    return (
      <div className="App">
        
        <Header
        score={this.state.score}
        highScore={this.state.highScore}
        />
        <div className="container">
        <Items 
        getId={this.getId}
        items={this.state.items}/>
        </div>
      </div>
    );
  }


}

export default App;
