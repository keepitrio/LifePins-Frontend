import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="map"></div>
        <Form />
      </div>
    );
  }
}

export default App;
