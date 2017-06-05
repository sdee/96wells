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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class App extends Component {
	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(loadData("balanced"));
	}

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Grid gutterWidth={15}>
						<div>
							{this.props.children}
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
			</MuiThemeProvider>
		);
	}
}

const mapStateToProps = state => ({
	app: state.app
});

export default connect(mapStateToProps)(App);
