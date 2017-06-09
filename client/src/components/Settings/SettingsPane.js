import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Checkbox from 'material-ui/Checkbox';

import Paper from 'material-ui/Paper';


class SettingsPane extends Component {

	render() {
		const attributes = this.props.attributes;
		const visibleAttribute = this.props.visibleAttribute;
		const handleAttrVisChange = this.props.handleAttrVisChange;
		const handleSampleVisChange = this.props.handleSampleVisChange;
		const showSample = this.props.showSample;
		const numExperiments = this.props.numExperiments;
		const numSamples = this.props.numSamples;
		return (
			<Paper zDepth={1}>
				<List>
					<ListItem>
						<Subheader inset={Boolean(true)}>Data Summary</Subheader>
						{numExperiments} Experiments<br />
						{numSamples} Samples
					</ListItem>
				</List>
				<Divider />
				<List>
					<Subheader inset={Boolean(true)}>Sample Info</Subheader>
					<ListItem
						leftCheckbox={<Checkbox checked={showSample} onCheck={handleSampleVisChange} />}
						primaryText="Show sample name"
					/>
				</List>
				<Divider />
				<List>
					<Subheader inset={Boolean(true)}>Overlay Attributes</Subheader>
					{attributes.map(attribute =>
						(<div>
							<ListItem
								leftCheckbox={
									<Checkbox
										checked={visibleAttribute === attribute}
										onCheck={handleAttrVisChange}
										name={attribute}
										value={attribute}
									/>}
								primaryText={attribute}
							/>
						</div>)
					)}
				</List>
			</Paper>
		);
	}
}

SettingsPane.propTypes = {
	attributes: PropTypes.array,
	visibleAttribute: PropTypes.String,
	handleAttrVisChange: PropTypes.func.isRequired,
	handleSampleVisChange: PropTypes.func.isRequired,
	showSample: PropTypes.bool,
	numExperiments: PropTypes.number.isRequired,
	numSamples: PropTypes.number.isRequired
};

SettingsPane.defaultProps = {
	attributes: [],
	visibleAttribute: '',
	showSample: true
};

export default SettingsPane;
