import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import StepContent from './containers/StepContent';
import DatasheetField from './containers/DatasheetField';
import Plate from './containers/Plate';
import Stepper from './containers/Stepper';
import Notifier from './containers/Notifier';
import { loadData } from './actions';

class App extends Component {

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(loadData());
	}

	render() {
		return (
			<div>
				<Stepper />
				<StepContent />
				<Notifier />
				<Plate />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	app: state.app
});

export default connect(mapStateToProps)(App);
