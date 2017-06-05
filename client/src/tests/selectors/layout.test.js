
import {listOrder, roundRobinLayout, randomLayout, spreadSampleLayout } from '../../selectors/layout.js';

const dlist = require('../data/datalist.json');

const numRows = 8;
const numCols = 12;
const numWells = 96;

describe('listorder selector', () => {
  it('should apply listorder layout', () => {
		const listOrderLayout = listOrder.resultFunc(dlist, numRows, numCols, numWells);
    expect(
      listOrderLayout
    ).toEqual(
       [[{idx: 1, sample: 'sample_1'}, {idx: 2, sample: 'sample_2'}, {idx: 3, sample: 'sample_3'}, {idx: 4, sample: 'sample_4'}, {idx: 5, sample: 'sample_5'}, {idx: 6, sample: 'sample_6'}, {idx: 7, sample: 'sample_1'}, {idx: 8, sample: 'sample_2'}, {idx: 9, sample: 'sample_3'}, {idx: 10, sample: 'sample_4'}, {idx: 11, sample: 'sample_5'}, {idx: 12, sample: 'sample_6'}],
			 [{idx: 13, sample: 'sample_1'}, {idx: 14, sample: 'sample_2'}, {idx: 15, sample: 'sample_3'}, {idx: 16, sample: 'sample_4'}, {idx: 17, sample: 'sample_5'}, {idx: 18, sample: 'sample_6'}, {idx: 19, sample: 'sample_1'}, {idx: 20, sample: 'sample_2'}, {idx: 21, sample: 'sample_3'}, {idx: 22, sample: 'sample_4'}, {idx: 23, sample: 'sample_5'}, {idx: 24, sample: 'sample_6'}],
			 [{idx: 25, sample: 'sample_1'}, {idx: 26, sample: 'sample_2'}, {idx: 27, sample: 'sample_3'}, {idx: 28, sample: 'sample_4'}, {idx: 29, sample: 'sample_5'}, {idx: 30, sample: 'sample_6'}, {idx: 31, sample: 'sample_1'}, {idx: 32, sample: 'sample_2'}, {idx: 33, sample: 'sample_3'}, {idx: 34, sample: 'sample_4'}, {idx: 35, sample: 'sample_5'}, {idx: 36, sample: 'sample_6'}],
			 [{idx: 37, sample: 'sample_1'}, {idx: 38, sample: 'sample_2'}, {idx: 39, sample: 'sample_3'}, {idx: 40, sample: 'sample_4'}, {idx: 41, sample: 'sample_5'}, {idx: 42, sample: 'sample_6'}, {idx: 43, sample: 'sample_1'}, {idx: 44, sample: 'sample_2'}, {idx: 45, sample: 'sample_3'}, {idx: 46, sample: 'sample_4'}, {idx: 47, sample: 'sample_5'}, {idx: 48, sample: 'sample_6' }],
			 [{idx: 49, sample: 'sample_1'}, {idx: 50, sample: 'sample_2'}, {idx: 51, sample: 'sample_3'}, {idx: 52, sample: 'sample_4'}, {idx: 53, sample: 'sample_5'}, {idx: 54, sample: 'sample_6'}, {idx: 55, sample: 'sample_1'}, {idx: 56, sample: 'sample_2'}, {idx: 57, sample: 'sample_3'}, {idx: 58, sample: 'sample_4'}, {idx: 59, sample: 'sample_5'}, {idx: 60, sample: 'sample_6'}],
			 [{idx: 61, sample: 'sample_1'}, {idx: 62, sample: 'sample_2'}, {idx: 63, sample: 'sample_3'}, {idx: 64, sample: 'sample_4'}, {idx: 65, sample: 'sample_5'}, {idx: 66, sample: 'sample_6'}, {idx: 67, sample: 'sample_1'}, {idx: 68, sample: 'sample_2'}, {idx: 69, sample: 'sample_3'}, {idx: 70, sample: 'sample_4'}, {idx: 71, sample: 'sample_5'}, {idx: 72, sample: 'sample_6'}],
			 [{idx: 73, sample: 'sample_1'}, {idx: 74, sample: 'sample_2'}, {idx: 75, sample: 'sample_3'}, {idx: 76, sample: 'sample_4'}, {idx: 77, sample: 'sample_5'}, {idx: 78, sample: 'sample_6'}, {idx: 79, sample: 'sample_1'}, {idx: 80, sample: 'sample_2'}, {idx: 81, sample: 'sample_3'}, {idx: 82, sample: 'sample_4'}, {idx: 83, sample: 'sample_5'}, {idx: 84, sample: 'sample_6'}],
			 [{idx: 85, sample: 'sample_1'}, {idx: 86, sample: 'sample_2'}, {idx: 87, sample: 'sample_3'}, {idx: 88, sample: 'sample_4'}, {idx: 89, sample: 'sample_5'}, {idx: 90, sample: 'sample_6'}, {idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6'}]]
    )
		expect(
			listOrderLayout
		).toHaveLength(8)
  })
})

describe('round robin selector', () => {
  it('should apply round robin layout', () => {
		const RRLayout = roundRobinLayout.resultFunc(dlist, ['sample_1', 'sample_2', 'sample_3', 'sample_4', 'sample_5', 'sample_6'], numRows, numCols, numWells);
		expect(
      RRLayout
    ).toEqual(
			 [[{idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6'}, {idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6' }],
			 [{idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6'}, {idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6'}],
			 [{idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6'}, {idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6'}],
			 [{idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6'}, {idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6'}],
			 [{idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6'}, {idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6'}],
			 [{idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6'}, {idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6'}],
			 [{idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6'}, {idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6'}],
			 [{idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6'}, {idx: 91, sample: 'sample_1'}, {idx: 92, sample: 'sample_2'}, {idx: 93, sample: 'sample_3'}, {idx: 94, sample: 'sample_4'}, {idx: 95, sample: 'sample_5'}, {idx: 96, sample: 'sample_6'}]]
		)
		expect(
			RRLayout
		).toHaveLength(8);
	})
});

describe('spread sample selector', () => {
  it('should apply spread sample layout', () => {
		const SSLayout = spreadSampleLayout.resultFunc(dlist, numRows, numCols, numWells);
		expect(
      SSLayout
    ).toEqual(
			 [[{"idx": 1, "sample": "sample_1"}, {"idx": 2, "sample": "sample_2"}, {"idx": 3, "sample": "sample_3"}, {"idx": 4, "sample": "sample_4"}, {"idx": 5, "sample": "sample_5"}, {"idx": 6, "sample": "sample_6"}, {"idx": 7, "sample": "sample_1"}, {"idx": 8, "sample": "sample_2"}, {"idx": 9, "sample": "sample_3"}, {"idx": 10, "sample": "sample_4"}, {"idx": 11, "sample": "sample_5"}, {"idx": 12, "sample": "sample_6"}],
			 [{"idx": 15, "sample": "sample_3"}, {"idx": 16, "sample": "sample_4"}, {"idx": 13, "sample": "sample_1"}, {"idx": 14, "sample": "sample_2"}, {"idx": 19, "sample": "sample_1"}, {"idx": 20, "sample": "sample_2"}, {"idx": 17, "sample": "sample_5"}, {"idx": 18, "sample": "sample_6"}, {"idx": 23, "sample": "sample_5"}, {"idx": 24, "sample": "sample_6"}, {"idx": 21, "sample": "sample_3"}, {"idx": 22, "sample": "sample_4"}],
			 [{"idx": 25, "sample": "sample_1"}, {"idx": 26, "sample": "sample_2"}, {"idx": 27, "sample": "sample_3"}, {"idx": 28, "sample": "sample_4"}, {"idx": 29, "sample": "sample_5"}, {"idx": 30, "sample": "sample_6"}, {"idx": 31, "sample": "sample_1"}, {"idx": 32, "sample": "sample_2"}, {"idx": 33, "sample": "sample_3"}, {"idx": 34, "sample": "sample_4"}, {"idx": 35, "sample": "sample_5"}, {"idx": 36, "sample": "sample_6"}],
			 [{"idx": 39, "sample": "sample_3"}, {"idx": 40, "sample": "sample_4"}, {"idx": 37, "sample": "sample_1"}, {"idx": 38, "sample": "sample_2"}, {"idx": 43, "sample": "sample_1"}, {"idx": 44, "sample": "sample_2"}, {"idx": 41, "sample": "sample_5"}, {"idx": 42, "sample": "sample_6"}, {"idx": 47, "sample": "sample_5"}, {"idx": 48, "sample": "sample_6"}, {"idx": 45, "sample": "sample_3"}, {"idx": 46, "sample": "sample_4"}],
			 [{"idx": 49, "sample": "sample_1"}, {"idx": 50, "sample": "sample_2"}, {"idx": 51, "sample": "sample_3"}, {"idx": 52, "sample": "sample_4"}, {"idx": 53, "sample": "sample_5"}, {"idx": 54, "sample": "sample_6"}, {"idx": 55, "sample": "sample_1"}, {"idx": 56, "sample": "sample_2"}, {"idx": 57, "sample": "sample_3"}, {"idx": 58, "sample": "sample_4"}, {"idx": 59, "sample": "sample_5"}, {"idx": 60, "sample": "sample_6"}],
			 [{"idx": 63, "sample": "sample_3"}, {"idx": 64, "sample": "sample_4"}, {"idx": 61, "sample": "sample_1"}, {"idx": 62, "sample": "sample_2"}, {"idx": 67, "sample": "sample_1"}, {"idx": 68, "sample": "sample_2"}, {"idx": 65, "sample": "sample_5"}, {"idx": 66, "sample": "sample_6"}, {"idx": 71, "sample": "sample_5"}, {"idx": 72, "sample": "sample_6"}, {"idx": 69, "sample": "sample_3"}, {"idx": 70, "sample": "sample_4"}],
			 [{"idx": 73, "sample": "sample_1"}, {"idx": 74, "sample": "sample_2"}, {"idx": 75, "sample": "sample_3"}, {"idx": 76, "sample": "sample_4"}, {"idx": 77, "sample": "sample_5"}, {"idx": 78, "sample": "sample_6"}, {"idx": 79, "sample": "sample_1"}, {"idx": 80, "sample": "sample_2"}, {"idx": 81, "sample": "sample_3"}, {"idx": 82, "sample": "sample_4"}, {"idx": 83, "sample": "sample_5"}, {"idx": 84, "sample": "sample_6"}],
			 [{"idx": 87, "sample": "sample_3"}, {"idx": 88, "sample": "sample_4"}, {"idx": 85, "sample": "sample_1"}, {"idx": 86, "sample": "sample_2"}, {"idx": 91, "sample": "sample_1"}, {"idx": 92, "sample": "sample_2"}, {"idx": 89, "sample": "sample_5"}, {"idx": 90, "sample": "sample_6"}, {"idx": 95, "sample": "sample_5"}, {"idx": 96, "sample": "sample_6"}, {"idx": 93, "sample": "sample_3"}, {"idx": 94, "sample": "sample_4"}]]
		)
		expect(
			SSLayout
		).toHaveLength(8)
  })
})

describe('random layout selector', () => {
	it('should apply random layout', () => {
		const RandLayout = randomLayout.resultFunc(dlist, numRows, numCols);
		expect(
		RandLayout
	).toHaveLength(8);
	});
});
