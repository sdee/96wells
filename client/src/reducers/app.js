const layouts = ['listorder', 'random']

const sizes = {
	'96': [8,12],
	'284': [24,16]
}

const initialState = {
	size: '96', //number of wells
	datasource: 'test1', //source of sample list
	layout: 'listorder' //algorithm for placing samples in wells
};

const app = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_LAYOUT: {
			Object.assign({}, state, {

			});
		}
		case LOAD_DATA: {
			Object.assign({}, state, {

			});
		}
		case SHOW_LAYER: {
			Object.assign({}, state, {

			});
		}
	}
};



export default app;
