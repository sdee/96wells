import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import LayoutForm from './containers/LayoutForm';
import DatasheetField from './containers/DatasheetField';
import Plate from './containers/Plate';
import AppStepper from './components/AppStepper';
import { loadData } from './actions';

class App extends Component {

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(loadData());
	}

	render() {
		return (
			<div>
				<AppStepper />
				<Plate />
				<LayoutForm />
				<DatasheetField />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	app: state.app
});

export default connect(mapStateToProps)(App);
