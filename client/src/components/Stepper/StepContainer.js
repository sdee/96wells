import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import StepContent from '../../containers/StepContent';
import Stepper from '../../containers/Stepper';
import {Grid, Row, Column} from 'react-cellblock';

function StepContainer() {
	return(
		<div>
		<Row>
			<Stepper />
		</Row>
		<Row>
			<Column>
				<StepContent />
			</Column>
		</Row>
		</div>
	);
}

export default StepContainer;
