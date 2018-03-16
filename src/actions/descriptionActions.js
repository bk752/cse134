import * as types from './actionTypes';
import descriptionApi from '../api/descriptionApi';

export function loadDescriptionSuccess(text, fill) {
	return {type: types.LOAD_DESCRIPTION_SUCCESS, text, fill};
}

export function saveDescriptionSuccess(text, fill) {
	return {type: types.SAVE_DESCRIPTION, text, fill};
}

export function loadDescription() {
	return function(dispatch) {
		return descriptionApi.getDescription().then(
			function(desc) {
				dispatch(loadDescriptionSuccess(desc.des, desc.fill));
			}
		);
	};
}

export function saveDescription(text) {
	return function(dispatch) {
		return descriptionApi.setDescription(text).then(
			function(desc) {
				dispatch(saveDescriptionSuccess(desc.des, desc.fill));
			}
		);
	};
}

