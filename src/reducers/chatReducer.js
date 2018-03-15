import * as types from '../actions/actionTypes';
import initialState from './initialState';
import Message from '../objects/Message';

export default function chatReducer(state = initialState.chat, action) {
	switch (action.type) {

	case types.REMOVE_MESSAGE:
		return { 
			messages: state.messages.filter(msg => msg.id !== action.id),
			id: state.id
		};
    
	case types.ADD_MESSAGE:
		return {
			messages: [...state.messages, action.message],
			id: state.id + 1
		};
        
	default:
		return state;
	}
}
