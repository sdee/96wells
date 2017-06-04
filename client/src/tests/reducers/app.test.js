import { CHANGE_LAYOUT } from '../../actions/index.js'
import app from '../../reducers/app.js'

describe('app reducer', () => {
	it('should return the initial state', () => {
		expect(
			app(undefined, {})
		).toEqual(
			{
				currentStep: 0,
				dataList: [],
				datasource: 'balanced',
				googlesheet: ''
			}
		);
	});
});
