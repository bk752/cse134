import * as types from './actionTypes';

export function selectPart(category, index) {
	return {type: types.SELECT_CATEGORY_PART, category, index};
}

export function completeCategory(category) {
	return {type: types.COMPLETE_CATEGORY, category};
}
