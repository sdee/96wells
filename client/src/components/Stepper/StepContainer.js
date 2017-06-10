import React from 'react';
import StepContent from '../../containers/StepContent';
import Stepper from '../../containers/Stepper';
import { Row, Column } from 'react-cellblock';

function StepContainer({ location, params }) {
	return (
		<div>
			<Row>
				<Stepper step={params['stepId']} />
			</Row>
			<Row>
				<Column>
					<StepContent location={location} step={params['stepId']}/>
				</Column>
			</Row>
		</div>
	);
}

export default StepContainer;
