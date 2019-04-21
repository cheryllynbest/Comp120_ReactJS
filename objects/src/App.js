import React, { Component } from 'react';
import './App.css';
import LogoComponent from './logocomponent';


class App extends Component {
  constructor() {
    super()
    this.state = {}
  }  


  render() {

    return (
      <div className="App">
        <LogoComponent />
      </div>
    )
  }
}  

export default App;
