import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Grid, Row, Cell } from 'react-inline-grid';
import RaisedButton from 'material-ui/RaisedButton';

class LayoutCustomizer extends Component {

	render() {
		const style = {
			height: 130,
			width: 650,
			margin: 10,
			padding: 20,
			textAlign: 'left',
			display: 'inline-block'
		};
		return (
			<div>
				<Grid>
					<Row>
						<Paper zDepth={1} style={style}>
							<p>This step allows you to make manual modifications to the layout. To swap well positions, drag a well to the desired location.   </p>
							<RaisedButton label="Clear All Changes" primary={Boolean(true)} onClick={this.props.handleClear} />
						</Paper>
						<br />
					</Row>
				</Grid>
			</div>
		);
	}
}

LayoutCustomizer.propTypes = {
	handleClear: PropTypes.func.isRequired
};

export default LayoutCustomizer;
