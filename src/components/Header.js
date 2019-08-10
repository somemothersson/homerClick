import React, { Component } from 'react'

export class Header extends Component {
    render() {
      
        return (
            <div>
                <header style={headerStyle}>
                    <h1>Homer Simpson Click Game</h1>
                    <h2>Score:<span>{this.props.score}</span> | High Score:<span>{this.props.highScore}</span></h2>
                    { }
                    <p>To Play: Select each Homer, if you select a already chosen homer - The score resets</p>
                </header>
                
            </div>
        )
    }
}
const headerStyle ={
    background: '#333',
    color: '#fff',
    padding: "10px",
    textAlign: "center"
}
export default Header
