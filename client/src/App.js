import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import LayoutSelector from './components/LayoutSelector';
import LayoutForm from './containers/LayoutForm';
import Plate from './containers/Plate';
import { loadData } from './actions';

class App extends Component {

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(loadData());
	}

	render() {
		return (
			<div>
				<Plate/>
				<LayoutForm/>
			</div>

		);
	}
}

const mapStateToProps = state => ({
	app: state.app
});

export default connect(mapStateToProps)(App);
