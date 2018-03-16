import * as types from './actionTypes';
import ChatApi from '../api/chatApi';
import Message from '../objects/Message';


export function loadMessagesSuccess(messages) {
	return {type: types.LOAD_MESSAGES_SUCCESS, messages};
}


export function loadMessages() {
	return function(dispatch) {
		return ChatApi.getAllMessages().then(
			function(messages) {
				dispatch(loadMessagesSuccess(messages));
			}
		);
	};
}

export function addMessage(message) {
	return function(dispatch) {
		return ChatApi.addMessage(message).then(
			function(messages) {
				dispatch(loadMessagesSuccess(messages));
			}
		);
	};
}

export function removeMessage(id) {
	return function(dispatch) {
		return ChatApi.removeMessageByID(id).then(
			function(messages) {
				dispatch(loadMessagesSuccess(messages));
			}
		);
	};
}