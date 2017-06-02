import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import StepContent from '../containers/StepContent';
import VisibilityFilters from '../containers/VisibilityFilters';
import Plate from '../containers/Plate';
import Stepper from '../containers/Stepper';
import Notifier from '../containers/Notifier';
import { loadData } from '../actions';
import {Grid, Row, Column} from 'react-cellblock';

function Container(props) {
	return (
		<div>
			<Grid gutterWidth={15}>
				<div>
					{props.children}
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

export default Container;
