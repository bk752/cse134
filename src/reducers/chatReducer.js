import * as types from '../actions/actionTypes';
import initialState from './initialState';
import Message from '../objects/Message';

export default function chatReducer(state = initialState.chat, action) {
	switch (action.type) {
	
	case types.LOAD_MESSAGES_SUCCESS:
		return {
			messages: action.messages,
		};

	default:
		return state;
	}
}
