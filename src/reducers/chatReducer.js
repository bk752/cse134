import * as types from '../actions/actionTypes';
import initialState from './initialState';
import Message from '../objects/Message';

export default function chatReducer(state = initialState.chat, action) {
	switch (action.type) {
	
	case types.LOAD_MESSAGES_SUCCESS:
		return {
			messages: action.messages,
			id: action.id
		};

	case types.GET_ID_SUCCESS:
		return {
			messages: state.messages,
			id: action.id
		};
	case types.REMOVE_MESSAGE_SUCCESS:
		return { 
			messages: state.messages.filter(msg => msg.id !== action.id),
			id: state.id
		};
    
	case types.ADD_MESSAGE_SUCCESS:
		return {
			messages: action.messages,
			id: state.id + 1
		};
        
	default:
		return state;
	}
}
