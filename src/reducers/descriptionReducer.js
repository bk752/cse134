import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function descriptionReducer(state = initialState.description, action) {
	switch (action.type) {

	case types.SAVE_DESCRIPTION:
		return {
			text: action.text,
			filledOut: true
		};
	default:
		return state;
	}
}
