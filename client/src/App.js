import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import StepContent from './containers/StepContent';
import VisibilityFilters from './containers/VisibilityFilters';
import Plate from './containers/Plate';
import Stepper from './containers/Stepper';
import Notifier from './containers/Notifier';
import { loadData } from './actions';
import { Grid, Row, Cell } from 'react-inline-grid';

class App extends Component {

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(loadData());
	}

	render() {
		return (
			<div>
				<Stepper />
				<StepContent />
				<VisibilityFilters />
				<Plate />
				<Notifier />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	app: state.app
});

export default connect(mapStateToProps)(App);
