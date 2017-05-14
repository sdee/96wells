import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Checkbox from 'material-ui/Checkbox';

class SettingsPane extends Component {

	render() {
		const styles = {
			width: '250px'
		};
		let attributes = this.props.attributes;
		let visibleAttribute = this.props.visibleAttribute;
		let handleAttrVisChange = this.props.handleAttrVisChange;
		let handleSampleVisChange = this.props.handleSampleVisChange;
		let showSample = this.props.showSample;
		return (

			<Drawer width={300} openSecondary={true} open={true}>
				<List>
					<Subheader inset={true}>Sample Info</Subheader>
					<ListItem
						leftCheckbox={<Checkbox checked={showSample} onCheck={handleSampleVisChange}/>}
						primaryText="Show sample name"
						/>
				</List>
				<Divider/>
				<List>
					<Subheader inset={true}>Overlay Attributes</Subheader>
					{attributes.map(attribute =>
						<div>
							<ListItem
								leftCheckbox={<Checkbox
									checked={visibleAttribute===attribute}
									onCheck={handleAttrVisChange}
									name={attribute}
									value={attribute}/>}
								primaryText={attribute}
								/>
						</div>
					)}
				</List>
			</Drawer>
		);
	}
}

SettingsPane.propTypes = {

};
//
export default SettingsPane;
