import { POST_NOTIFICATION, CLEAR_NOTIFICATION } from '../actions';

const initialState = {
	message: '',
	visible: false
};

const notification = (state = initialState, action) => {
	switch (action.type) {
	case POST_NOTIFICATION: {
		return Object.assign({}, state, {
			message: action.message, visible: true
		});
	}

	case CLEAR_NOTIFICATION: {
		return Object.assign({}, state, {
			message: '', visible: false
		});
	}

	default: {
		return state;
	}
	}
};

export default notification;
