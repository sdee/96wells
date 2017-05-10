import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';

class NotificationBar extends Component {

	render() {

		return (
			<div>
			<Snackbar
			 open={this.props.visible}
			 message={this.props.message}
			 autoHideDuration={3000}
			 onRequestClose={this.props.handleCleanUp}
		 />
			</div>
		);
	}
}

export default NotificationBar;
