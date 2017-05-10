import { connect } from 'react-redux';
import { clearNotification } from '../actions';
import NotificationBar from '../components/Notification/NotificationBar';

function handleCleanUp(dispatch) {
	dispatch(clearNotification());
}

const mapStateToProps = (state, ownProps) => ({
	visible: state.notification.visible,
	message: state.notification.message
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleCleanUp: () => {
		handleCleanUp(dispatch);
	},
});

const Notifier = connect(
	mapStateToProps,
	mapDispatchToProps
)(NotificationBar);

export default Notifier;
