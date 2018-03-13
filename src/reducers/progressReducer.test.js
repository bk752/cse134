import expect from 'expect';
import progressReducer from './progressReducer';
import * as progressActions from '../actions/progressActions';
import Step from '../objects/Step';

describe('Course Reducer', () => {
	it('finish category with COMPLETE_CATEGORY', () => {
		// arrange
		const initialState = {
			active: 0,
			list: [
				new Step("Description"),
				new Step("Pick Parts"),
				new Step("Order Parts"),
				new Step("Expert Builds Computer"),
				new Step("Shipping Computer"),
				new Step("Set up Computer"),
			]
		};

		const action = progressActions.completeStep(new Date(0));

		// act
		const newState = progressReducer(initialState, action);

		// assert
		expect(newState.active).toEqual(1);
		expect(newState.list[0].date.getTime()).toEqual(0);
	});
});
