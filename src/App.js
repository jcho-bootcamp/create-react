import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavBrand href="/">Ristorante Con Fusion</NavBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
