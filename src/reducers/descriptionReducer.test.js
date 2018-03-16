import expect from 'expect';
import descriptionReducer from './descriptionReducer';
import * as descriptionActions from '../actions/descriptionActions';

describe('Description Reducer', () => {
	it('should load in new description text when passed LOAD_DESCRIPTION_SUCCESS', () => {
		// arrange
		const initialState = {
			text: "hello",
			filledOut: false
		};

		const action = descriptionActions.loadDescriptionSuccess("new text", true);

		//act
		const newState = descriptionReducer(initialState, action);

		//assert
		expect(newState.text).toEqual("new text");
		expect(newState.filledOut).toBe(true);
	});
    
	it('should load in new text and filledOut after saving a new description', () => {
		// arrange
		const initialState = {
			text: "hello",
			filledOut: true
		};
		const action = descriptionActions.saveDescriptionSuccess("new description", false);
		//act
		const newState = descriptionReducer(initialState, action);
		//assert
		expect(newState.text).toEqual("new description");
		expect(newState.filledOut).toBe(false);
	});
});