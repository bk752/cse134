import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as partsActions from '../actions/partsActions';
import Part from '../objects/Part';

describe('Store', function() {
	it('Should handle creating courses', function() {
		// arrange
		const store = createStore(rootReducer, initialState);
		const category = initialState.parts.list[0];

		// act
		const action = partsActions.addPart("part", "40.00", "img", category);
		store.dispatch(action);

		// assert
		//const actual = store.getState().parts.list[0].parts[3];
		const expected = new Part("part", 40.00, "img");

		//expect(actual).toEqual(expected);
	});
});
