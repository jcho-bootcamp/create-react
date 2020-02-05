import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
        <navbar dark color="primary">
          <div className="container">
            <navBrand href="/">Ristorante Con Fusion</navBrand>
          </div>
        </navbar>
        </header>
      </div>
    );
  }
}

export default App;
