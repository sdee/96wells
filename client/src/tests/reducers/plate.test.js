import { CHANGE_LAYOUT } from '../../actions/index.js'
import plate from '../../reducers/plate.js'
import * as types from '../../actions/index.js'


describe('change layout reducer', () => {
  it('should return the initial state', () => {
    expect(
      plate(undefined, {})
    ).toEqual(
        {"datasource": "test1",
				"layout": "listorder",
				"name": "name",
				"plateSize": "96wells",
				"showSample": true,
				"visibleAttribute": ""}
    )
  })
})

it('should handle CHANGE_LAYOUT', () => {
	expect(
		plate([], {
			type: types.CHANGE_LAYOUT,
			layout: "roundrobin"
		})
	).toEqual(
		{"layout": "roundrobin"}
	)
})

it('should handle SHOW_SAMPLE', () => {
	expect(
		plate([], {
			type: types.SHOW_SAMPLE,
			showSample: true
		})
	).toEqual(
		{"showSample": true}
	)
})

it('should handle SHOW_LAYER', () => {
	expect(
		plate([], {
			type: types.SHOW_LAYER,
			layer: "volume",
			value: true
		})
	).toEqual(
		{"visibleAttribute": "volume"}
	)
})
