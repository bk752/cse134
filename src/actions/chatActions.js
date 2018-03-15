import * as types from './actionTypes';

export function addMessage(message) {
	return {type: types.ADD_MESSAGE, message};
}

export function removeMessage(id) {
	return {type: types.REMOVE_MESSAGE, id};
}