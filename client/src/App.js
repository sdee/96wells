import React, { Component } from 'react';
import './App.css';
//import Plate from './components/Plate/index';
import LayoutSelector from './components/LayoutSelector';
import LayoutForm from './containers/LayoutForm';
import Plate from './containers/Plate'

class App extends Component {

  render() {
    return (
			<div>
     <Plate/>
		 <LayoutForm/>
		 </div>

    );
  }
}

export default App;
