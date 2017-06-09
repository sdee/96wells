import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import PropTypes from 'prop-types';

class NotificationBar extends Component {

	render() {
		return (
			<div>
				<Snackbar
					open={this.props.visible}
					message={this.props.message}
					autoHideDuration={4000}
					onRequestClose={this.props.handleCleanUp}
				/>
			</div>
		);
	}
}

NotificationBar.propTypes = {
	visible: PropTypes.bool.isRequired,
	message: PropTypes.string.isRequired,
	handleCleanUp: PropTypes.func.isRequired
};

export default NotificationBar;
