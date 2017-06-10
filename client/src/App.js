import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import VisibilityFilters from './containers/VisibilityFilters';
import Plate from './containers/Plate';
import Notifier from './containers/Notifier';
import { loadData } from './actions';
import { Grid, Row, Column } from 'react-cellblock';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { DragDropContext } from 'react-dnd';
import MouseBackEnd from 'react-dnd-mouse-backend';
import PropTypes from 'prop-types';

export class App extends Component {
	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(loadData('balanced'));
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

App.propTypes = {
	children: PropTypes.element.isRequired,
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	app: state.app
});

export default DragDropContext(MouseBackEnd)(connect(mapStateToProps)(App));
