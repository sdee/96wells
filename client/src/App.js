import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plate from './components/Plate/index';

class App extends Component {
  render() {
    return (
     <Plate url="data/test.csv"/>
    );
  }
}

export default App;
