import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import StepContent from './containers/StepContent';
import VisibilityFilters from './containers/VisibilityFilters';
import Plate from './containers/Plate';
import Stepper from './containers/Stepper';
import Notifier from './containers/Notifier';
import { loadData } from './actions';
import {Grid, Row, Column} from 'react-cellblock';


class App extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(loadData());
	}

	render() {
		return (
			<div>
				<Grid gutterWidth={15}>
					<div>
						<Row>
							<Stepper />
						</Row>
						<Row>
							<Column>
								<StepContent />
							</Column>
						</Row>
						<Row>
							<Column width="4/5">
								<Plate />
							</Column>
							<Column width="1/5">
								<VisibilityFilters />
							</Column>
						</Row>
						<Notifier />
					</div>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	app: state.app
});

export default connect(mapStateToProps)(App);
