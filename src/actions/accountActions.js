import * as types from './actionTypes';

export function login() {
	return {type: types.LOG_IN};
}

export function logout() {
	return {type: types.LOG_OUT};
}