import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Column } from 'react-cellblock';
import VisibilityFilters from '../containers/VisibilityFilters';
import Plate from '../containers/Plate';
import Notifier from '../containers/Notifier';

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

Container.propTypes = {
	children: PropTypes.element.isRequired
};

export default Container;
