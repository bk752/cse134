import * as types from './actionTypes';

export function saveDescription(text) {
	return {type: types.SAVE_DESCRIPTION, text};
}