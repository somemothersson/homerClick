import React, { Component } from 'react';
import Items from "./components/Items"
import items from "../src/items.json"
import './App.css';



class App extends Component {
  state = {
    items
  }
  getId = (id) => {
    console.log(id)
}

  render() {
    console.log(this.state.items)
    return (
      <div className="App">
        <Items 
        getId={this.getId}
        items={this.state.items}/>
      </div>
    );
  }


}

export default App;
