import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
//import initialState from '../reducers/initialState';
import {totalParts} from '../api/partsApi';
import * as partsActions from '../actions/partsActions';
import Part from '../objects/Part';

describe('Store', function() {
	it('Should handle creating courses', function() {
		// arrange
		let initialState = {
			parts: {
				list: totalParts,
				active: 0,
				adding: 0
			}
		};
		const store = createStore(rootReducer, initialState);
		const category = totalParts[0];

		// act
		const action = partsActions.addPart("part", "40.00", "img", category);
		store.dispatch(action);

		// assert
		const actual = store.getState().parts.list[0].parts[3];
		const expected = new Part("part", 40.00, "img");

		expect(actual).toEqual(expected);
	});
});
