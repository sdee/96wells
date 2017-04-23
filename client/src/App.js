import React, { Component } from 'react';
import './App.css';
import Plate from './components/Plate/index';
import LayoutSelector from './components/LayoutSelector'

class App extends Component {

	submit = (values) => {
    // Do something with the form values
    console.log(values);
  }

  render() {
    return (
			<div>
     <Plate url="data/test.csv"/>
		 <LayoutSelector onSubmit={this.submit} />
		 </div>

    );
  }
}

export default App;
