import * as types from './actionTypes';
import PartsApi from '../api/partsApi';
export function selectPart(category, index) {
	return {type: types.SELECT_CATEGORY_PART, category, index};
}

export function completeCategory(category) {
	return {type: types.COMPLETE_CATEGORY, category};
}

export function completeCategorySuccess(list) {
	return {type: types.COMPLETE_CATEGORY_SUCCESS, list};
}

export function completeCategoryFailed() {
	return {type: types.COMPLETE_CATEGORY_FAILED};
}


export function completeCategoryOnServer(category) {
	return function(dispatch) {
		return PartsApi.completeCategory(category).then(
			function(list) {
				dispatch(completeCategorySuccess(list));
			},
			function() {
				dispatch(completeCategoryFailed());
			}
		);
	};
}