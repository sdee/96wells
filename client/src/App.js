import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import StepContent from './containers/StepContent';
import VisibilityFilters from './containers/VisibilityFilters';
import Plate from './containers/Plate';
import Stepper from './containers/Stepper';
import Notifier from './containers/Notifier';
import Container from './components/Container';
import { loadData } from './actions';
import {Grid, Row, Column} from 'react-cellblock';

class App extends Component {

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(loadData());
	}

	render() {
		return (
			<div>
				<Container/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	app: state.app
});

export default connect(mapStateToProps)(App);
