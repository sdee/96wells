import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { Grid, Row } from 'react-inline-grid';

class LayoutSelector extends Component {

	render() {
		const handleChange = (event, index, value) => {this.setState({ key: Math.random() }); this.forceUpdate(); this.props.handleLayoutChange(value);}; 
		const style = {
			height: 130,
			width: 650,
			margin: 10,
			textAlign: 'left',
			display: 'inline-block'
		};
		return (
			<div style={{ marginLeft: '20px', topPadding: '0px', topMargin: '0px' }}>
				<Paper zDepth={1} style={style}>
					<Grid>
						<Row>
							<SelectField
								floatingLabelText="Layout"
								value={this.props.layout}
								onChange={handleChange}
								style={{ marginLeft: '20px', topPadding: '0px', topMargin: '0px' }}
							>
								<MenuItem value={'listorder'} primaryText="List Order" />
								<MenuItem value={'roundrobin'} primaryText="Round Robin" />
								<MenuItem value={'random'} primaryText="Random" />
								<MenuItem value={'spreadsample'} primaryText="Spread Sample" />
							</SelectField>
							<p style={{ marginLeft: '10px', verticalAlign: 'middle', topMargin: '30px' }}><i>{this.props.description}</i> </p>
						</Row>
					</Grid>
				</Paper>
			</div>
		);
	}
}

LayoutSelector.propTypes = {
	layout: PropTypes.string.isRequired,
	handleLayoutChange: PropTypes.func.isRequired,
	description: PropTypes.string
};

LayoutSelector.defaultProps = {
	description: ''
};

export default LayoutSelector;
