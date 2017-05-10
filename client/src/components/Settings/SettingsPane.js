import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

class SettingsPane extends Component {

	render() {
		const styles = {
    display: 'inline-block',
    width: '250px'
};
		return (
			<div style={styles}>
			<List>
        <Subheader>General</Subheader>
        <ListItem
          primaryText="Profile photo"
          secondaryText="Change your Google+ profile photo"
        />
        <ListItem
          primaryText="Show your status"
          secondaryText="Your status is visible to everyone you use with"
        />
      </List>
      <Divider />
      <List>
        <Subheader>Hangout Notifications</Subheader>
        <ListItem
          primaryText="Notifications"
          secondaryText="Allow notifications"
        />
        <ListItem

          primaryText="Sounds"
          secondaryText="Hangouts message"
        />
        <ListItem
          primaryText="Video sounds"
          secondaryText="Hangouts video call"
        />
      </List>
			</div>
		);
	}
}

SettingsPane.propTypes = {

};
//
export default SettingsPane;
