import * as types from './actionTypes';
import Part from '../objects/Part';
import PartsApi from '../api/partsApi';

export function loadPartsSuccess(list) {
	return {type: types.LOAD_PARTS_SUCCESS, list};
}


export function addPart(name, disc, image, category) {
	let price = parseFloat(disc);
	if (isNaN(price)) {
		price = 0.0;
	}
	return {type: types.ADD_CATEGORY_PART, part: new Part(name, price, image), category};
}

export function removePart(category) {
	return {type: types.REMOVE_CATEGORY_PART, category};
}

export function nextCategory(category) {
	return {type: types.EDIT_NEXT_CATEGORY, category};
}

export function prevCategory(category) {
	return {type: types.EDIT_PREV_CATEGORY, category};
}

export function loadParts() {
	return function(dispatch) {
		return PartsApi.getAllParts().then(
			function(list) {
				dispatch(loadPartsSuccess(list));
			}
		);
	};
}
export function addPartToServer(name, disc, image, category) {
	return function(dispatch) {
		return PartsApi.addPart(name, disc, image, category).then(
			function(list) {
				dispatch(loadPartsSuccess(list));
			}
		);
	};
}

export function removePartFromServer(category) {
	return function(dispatch) {
		return PartsApi.removePart(category).then(
			function(list) {
				dispatch(loadPartsSuccess(list));
			}
		);
	};
}


