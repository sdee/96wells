import React, { Component } from 'react';
import './App.css';
import Plate from './components/Plate/index';
import LayoutSelector from './components/LayoutSelector';
import LayoutForm from './containers/LayoutForm'

class App extends Component {

  render() {
    return (
			<div>
     <Plate url="data/test.csv"/>
		 <LayoutForm/>
		 </div>

    );
  }
}

export default App;
